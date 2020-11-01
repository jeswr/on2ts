"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFilesFromAST = void 0;
const ts = __importStar(require("typescript"));
// // THE AST DEFINITION HERE IS SUBJECT TO CHANGE
// export const writeFilesFromAST = (writeLocation: string, AST: ts.ModuleDeclaration): void => {
//     // ts.createArrayBindingPattern
//     // ts.OutputFileType.Declaration
//     const printer = ts.createPrinter()
//     // ts.sourceFile
//     const printedFile = printer.printNode(
//         ts.EmitHint.EmbeddedStatement,
//         AST,
//         ts.createSourceFile(
//             'outFile',
//             '',
//             ts.ScriptTarget.ESNext
//         )
//     )
//     // ts.writeFile
//     // ts.writeFile
//     // ts.functionwriteBundle()
//     // const x: ts.Node = ts.createNode(ts.SyntaxKind.ModuleDeclaration)
//     // ts.print
//     ts.sys.writeFile(
//         writeLocation,
//         printedFile
//     )
//     // printer.printNode
// };
// THE AST DEFINITION HERE IS SUBJECT TO CHANGE
exports.writeFilesFromAST = (writeLocation, AST) => {
    const printer = ts.createPrinter();
    const printedFile = printer.printNode(ts.EmitHint.Unspecified, AST, ts.createSourceFile('outFile', '', ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS));
    ts.sys.writeFile(writeLocation, printedFile);
};
