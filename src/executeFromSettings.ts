import { readdirSync } from 'fs';
import path from 'path';
import * as R from 'ramda';
import { ns as tsc } from '../typescript/tsc/typescript/ns';
import { createStore } from "./n3-processing/create-store";
import { generateTypeScript } from '.';

export async function executeFromSettings(settingsPath: string): Promise<void> {
  const settings = (await createStore(settingsPath)).store;

  // May need to have better handling of local vs. global
  // file paths
  const toCovertFromFolders = settings.getObjects(tsc.convertToTs, tsc.folder, null)
    .map(
      folder => {
        console.log('folder', folder);
        return readdirSync(folder.value).map(file => {
          return path.join(folder.value, file);
        });
      })
    .flat();

  const toCovertFromFiles = settings.getObjects(tsc.convertToTs, tsc.file, null)
    .map(
      file => path.join(file.value)
    );

  const defaultOutputDirectory = settings.getObjects(tsc.defaults, tsc.outDir, null)[0]
    || settings.getObjects(tsc.defaults, tsc.typescript, null)[0];

  const toConvert = R.union(toCovertFromFolders, toCovertFromFiles);

  console.log(`ont-to-ts will generate typescript files for the following files: ${toConvert.join(' ')}\n`)
  let count = 1
  for (const ontologyPath of toConvert) {
    if (defaultOutputDirectory?.value) {
      console.log(`[${count++}/${toConvert.length}] Generating ontology from ${ontologyPath}...`)
      await generateTypeScript(ontologyPath, settingsPath, defaultOutputDirectory.value);
    }
    else {
      throw new Error(`No output folder specified in the settings`);
    }
  }
}
