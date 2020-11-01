"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupProject = void 0;
const path_1 = __importDefault(require("path"));
const ts_morph_1 = require("ts-morph");
exports.setupProject = (outDir, prefix) => {
    console.log(outDir, prefix);
    const project = new ts_morph_1.Project({
        compilerOptions: {
            outDir: path_1.default.join(outDir, prefix, 'build'),
            declaration: true
        }
    });
    const createFile = (name) => project.createSourceFile(path_1.default.join(outDir, prefix, 'src', `/${name}.ts`), '', { overwrite: true });
    return {
        project,
        file: {
            enums: createFile('enum').addEnum({ name: 'ns', isExported: true }),
            interfaces: createFile('interfaces'),
            classes: createFile('classes'),
            validators: createFile('validators'),
            index: createFile('index')
        }
    };
};
