// export default ({TargetsContext : [targets,dispatch], ActiveraulContext : [{properties, propertyList},], TriplestoreContext : [{advanced_features},]}) => {
//     const {use_type_constraints,
//         always_apply_range_constraints,
//         use_object_types_if_no_type_specified,
//         always_use_object_types
//     } = advanced_features
//     const {propertyTypes, typeConstraints} = targets
//     const tContext = targets
//     const makeValidator = prop => {
//         const getAllConstraints = constraints => {
//             const minimizedConstraints = removeDuplicates(constraints)
//             const newConstraints = minimizedConstraints.map(x => typeConstraints[x]?.datatype).filter(x => x!=undefined)
//             return setMinus(newConstraints, minimizedConstraints).length > 0 ?
//                 getAllConstraints([...newConstraints, ...minimizedConstraints]) : [...minimizedConstraints]
//         }

//         const property = propertyList[prop.property]
//         const predicate = getPredicate(prop, property)
//         const {fromRange, fromOptions} = (predicate !== true && propertyTypes[predicate] !== undefined && use_type_constraints) ? propertyTypes[predicate] : {}
//         const rangeConstraints = (always_apply_range_constraints && fromRange !== undefined) ? fromRange : []
//         const useObjects = (((fromRange === undefined || fromRange.length === 0) && use_object_types_if_no_type_specified) || always_use_object_types) && use_type_constraints
//         const objectConstraints = (useObjects && fromOptions !== undefined) ? fromOptions : []
//         // Last term in brackets below ensures IRI constraint on inverse path
//         const typesToConstrain = getAllConstraints([...rangeConstraints, ...objectConstraints, ...(predicate === true ? ['http://www.w3.org/2001/XMLSchema#anyURI'] : [])])
//         const typeConstriantList = typesToConstrain.map(type => ({...typeConstraints[type], type}))
//         const allConstraints = [property, ...typeConstriantList]
//         const merged = mergeConstraints(allConstraints)
//         const [validator, details] = constraintsToValidator(merged)
//         return [validator, {...details, path : property.path, pathType : property.pathType}]
//     }
//     const validatorDict = dictMap(properties, ([k, v]) => ([k, makeValidator(v)]))
//     const makeField = (id, [validators, details], targets, options) => validatedFields(makeProp(id, details, targets, options, properties, validators, tContext))
//     dispatch({type : 'SET_VALIDATORS', validators : ({targets, options}) => dictMap(validatorDict, ([k, v]) => ([k, makeField(k, v, targets, options)]))})
// }

// const toStable = f => x => {const y = f(x); return _.isEqual(x, y) ? x : toStable(f)(y)}

// export default ({TargetsContext : [tContext,dispatch], ActiveraulContext : [{properties},], TriplestoreContext : [{advanced_features},]}) => {
//     const {use_type_constraints : tC, always_apply_range_constraints : rC, use_object_types_if_no_type_specified : nC, always_use_object_types : oC} = advanced_features
//     const {propertyTypes, typeConstraints : cn} = tContext
//     dispatch({type : 'UPDATE', validators : ({targets, options}) => dictMap(properties, ([id, {property : {path, ...p}, ...prop}]) => {
//         const {fromRange, fromOptions} = tC && propertyTypes[getPredicate(prop, p)] || {}
//         const [validator, details] = constraintsToValidator(mergeConstraints([p, 
//             ...toStable(c => _.union(c, c.map(x => cn[x]?.datatype).filter(_.isUndefined)))(extA([
//                 rC && fromRange || [], fromRange?.length > 0 && nC || oC && tC && fromOptions])
//         ).map(d => ({...cn[d], datatype:d}))]))
//         return validatedFields(makeProp(id, {...details, path}, targets, options, properties, validator, tContext))
//     }))
// }