export function createEnumDeclaration(subjects, namepsace) {
    return subjects
        .filter(subject => subject.id.includes(namepsace))
        .map(subject => {
        return {
            name: `'${subject.id.slice(namepsace.length)}'`,
            value: subject.id
        };
    });
}
