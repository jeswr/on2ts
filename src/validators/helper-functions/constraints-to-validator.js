





export default constraints => {
    const numericRequirement = req => v => _.isNumber(v) ? req(v) : `entry should be a number`
    const vFuncMapping = requirement => ({
        in : () => v => requirement.includes(v) || `entry should be one of the following values: ${arrayToSentence(requirement)}`,
        isNumeric : () => numericRequirement(v => true),
        maxExclusive : () => numericRequirement(v => v < requirement || `should be less than than ${requirement}`),
        minExclusive : () => numericRequirement(v => v > requirement ||  `should be greater than ${requirement}`),//Object({value : v => parseInt(v) > parseInt(requirement), message : `should be greater than ${requirement}`}),
        additionalPattern : () =>  v => testDictRegexp(requrement, v) || `should match pattern ${stringDictRegexp(requirement)}`, // change to own custom description function
        languageIn : () => v => true || `this entry should be in one of the following languages: ${arrayToSentence(requirement)}`, // get api etc // also add details as this can be sued to edit the form field
        lessThan : () => numericRequirement(v => true || `this entry should be less than the value of: ${arrayToSentence(requirement)}`), // get api etc
        lessThanOrEquals : () => numericRequirement(v => true || `this entry should be less than or equal to the value of: ${arrayToSentence(requirement)}`), // get api etc
        equals : () => v => true || `this entry should be equal to the value of: ${arrayToSentence(requirement)}`, // get api etc // also add details as this can be sued to edit the form field
        disjoint : () => v => true || `this entry should not have the same values as: ${arrayToSentence(requirement)}`, // get api etc
        uniqueLang : () => v => true || `this entry should not be in the same language as: ${arrayToSentence(requirement)}` // get api etc
    })
    const numDisplay = (word, number) => number + ' ' + word + (number != 1 ?'s':'')

    const hFormMapping = requirement => x => {
        const [a,b] = x.includes('min') ? ['less', 'least'] : ['greater', 'most']
        return {
            name : x.replace('Inclusive',''),
            message : 'should '+x.includes('Length') ? `be ${a} than or equal to ${requirement}` : `${b} at most ${numDisplay('character', requirement)}`
        }}

    const [vMap, hMap] = [vFuncMapping, hFormMapping].map(f => (n, r) => f(n)[r])

    const specialCases = (name, constraint, validators, details) => {
        const is = type => () => [validators, {...details, inferredTypes : extendArray(details.inferredTypes, [type])}]
        return ({
            pattern : () => {
                const [pattern, ...fPatterns] = constraint
                const newValidators = extendDict(validators, {pattern : { value : makeDictRegexp(pattern), message : `should match pattern ${stringDictRegexp(pattern)}`}})
                return [fPatterns.reduce((total, p, i) => ({...total, validate : extendDict(total.validate, { ['pattern'+i] : vMap('additionalPattern', pattern : p)()})}), newValidators), {...details, pattern}]
            },
            type : () => {
                const types = getPrimitives(constraint)
                return [extD(validators, _.intersection(types, require('numeric-types')).length > 0 && {validate : extD(validators.validate, { 'isNumeric' : vMap('isNumeric', true)()})}), {...details, types}]
            },
            isString : is('string'),
            isNumeric : is('number')
        })[name]()
    }

    const hookVal = _.keys(hFormMapping()), functionVal = _.keys(vFuncMapping()), specialVal = ['pattern', 'type']
    return dictReduce({...constraints, ['is'+_.findKey(require('type-constraints'), _.flow([_.some, x => _.hasIn(constraints, x)]))] : true},
    ([validators, det], [n, constraint]) => {
        const details = dictSwitch({'defaultValue' : {...det, default : constraint},
            'in' : {...det, values : constraint}, 'default' : details})(n)
        return [
            [functionVal, () => [{...validators, validate : extendDict(validators.validate, {[n] : vMap(n, constraint)})}, details]],
            [hookVal, () => {
                const {name, message} = hMap(n, constraint)
                return [extendDict(validators, {[name] : { value : constraint, message}}), details]
            }]
            [specialVal, () => specialCases(n, constraint, validators)]
            [true, () => [validators, details]]
        ].find(x => x === true || x.includes(n))()
    }, [{required : {value : true, message : 'Required'}}, {}])
}