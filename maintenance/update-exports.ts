/**
 * This file is used to generate the index file for
 * all packages.
 */
import { Project } from 'ts-morph'
import * as fs from 'fs'
import * as path from 'path'

const source = new Project({
    compilerOptions: {
        outFile: 'packages'
    }
})

fs.unlinkSync('packages/index.ts')
const folders = fs.readdirSync('packages')
const file = source.createSourceFile('packages/index.ts', '', { overwrite : true })

file.addImportDeclarations(folders.map(f => ({
    moduleSpecifier: './' + path.join(f,'src'), 
    defaultImport: f,
})))

file.addExportDeclaration({ namedExports: folders })

source.saveSync()