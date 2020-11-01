import * as ts from "typescript";
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
export const writeFilesFromAST = (writeLocation, AST) => {
    const printer = ts.createPrinter();
    const printedFile = printer.printNode(ts.EmitHint.Unspecified, AST, ts.createSourceFile('outFile', '', ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS));
    ts.sys.writeFile(writeLocation, printedFile);
};
