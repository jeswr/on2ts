"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_morph_1 = require("ts-morph");
function example() {
    const project = new ts_morph_1.Project({});
    const sourceFile = project.createSourceFile('./example', '', { overwrite: true }).addNamespace({ name: 'exampleNamespace' });
    //  const namespace = sourceFile.addNamespace({ name: 'exampleNamespace' })
    const myIterface = sourceFile.addInterface({ name: 'nameOfInterface' });
}
example();
