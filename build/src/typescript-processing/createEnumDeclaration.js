"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEnumDeclaration = void 0;
function createEnumDeclaration(subjects, namepsace) {
    return subjects
        .filter(subject => subject.id.includes(namepsace))
        .map(subject => {
        return {
            name: `'${subject.id.slice(namepsace.length)}'`,
            value: subject.id
        };
    });
}
exports.createEnumDeclaration = createEnumDeclaration;
