import { formatFileText } from '@dprint/core';
import path from 'path';
import { Project as TsProject, SourceFile } from 'ts-morph';
import * as fs from 'fs';
import { TypeScriptPlugin } from 'dprint-plugin-typescript'

function cleanFile(file: SourceFile) {
    file.fixMissingImports();
    for (let val; val != (val = file.print());) {
        file.fixUnusedIdentifiers();
        file.organizeImports();
    }
    file.formatText();
    console.log('cleaned', file.getText())
    // TODO: MAKE THIS WORK    
    // file.replaceWithText(formatFileText({
    //     filePath: file.getFilePath(),
    //     fileText: file.getText(),
    //     plugins: [ new TypeScriptPlugin() ]
    // }) || '');
}

export class Project extends TsProject {
    generateIndexes() {
        this.getDirectories().forEach(directory => {
            const index = this.createSourceFile(path.join(directory.getPath(), 'index.ts'), '', { overwrite: true });
            const children = [...directory.getDescendantDirectories(), ...directory.getDescendantSourceFiles()];
            index.addExportDeclarations(children.map(child => ({ moduleSpecifier: './' + child.getBaseName() })));
        });
    }
    clean() {
        for (let val; val != (val = this.getSourceFiles().map(node => node.print()).toString());) {
            this.getSourceFiles().forEach(cleanFile);
        }
        return this;
    }
    finalize(keepOldDir: boolean = false) {
        if (!keepOldDir) {
            [...this.getRootDirectories().map(p => p.getPath(), this.compilerOptions.get().outDir)]
                .forEach(path => { fs.rmdirSync(path, { recursive: true }); });
        }
        this.clean().saveSync();
        console.log('soruce files', this.getSourceFiles())
        return this;
    }
}
