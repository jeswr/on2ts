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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeFromSettings = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const R = __importStar(require("ramda"));
const ns_1 = require("../typescript/tsc/typescript/ns");
const create_store_1 = require("./n3-processing/create-store");
const _1 = require(".");
async function executeFromSettings(settingsPath) {
    const settings = (await create_store_1.createStore(settingsPath)).store;
    // May need to have better handling of local vs. global
    // file paths
    const toCovertFromFolders = settings.getObjects(ns_1.ns.convertToTs, ns_1.ns.folder, null)
        .map(folder => {
        console.log('folder', folder);
        return fs_1.readdirSync(folder.value).map(file => {
            return path_1.default.join(folder.value, file);
        });
    })
        .flat();
    const toCovertFromFiles = settings.getObjects(ns_1.ns.convertToTs, ns_1.ns.file, null)
        .map(file => path_1.default.join(file.value));
    const defaultOutputDirectory = settings.getObjects(ns_1.ns.defaults, ns_1.ns.outDir, null)[0]
        || settings.getObjects(ns_1.ns.defaults, ns_1.ns.typescript, null)[0];
    const toConvert = R.union(toCovertFromFolders, toCovertFromFiles);
    console.log(`ont-to-ts will generate typescript files for the following files: ${toConvert.join(' ')}\n`);
    let count = 1;
    for (const ontologyPath of toConvert) {
        if (defaultOutputDirectory?.value) {
            console.log(`[${count++}/${toConvert.length}] Generating ontology from ${ontologyPath}...`);
            await _1.generateTypeScript(ontologyPath, settingsPath, defaultOutputDirectory.value);
        }
        else {
            throw new Error(`No output folder specified in the settings`);
        }
    }
}
exports.executeFromSettings = executeFromSettings;
