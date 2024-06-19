import fs from 'fs';
import path from 'path';
import { forEach } from 'lodash-es';
import fsExtra from 'fs-extra';

const { moveSync, removeSync } = fsExtra;

export default (
    files
  ) => {
    const targets = Array.isArray(files) ? files : [files];
  
    return {
      name: "replace",
      writeBundle: async () => {
        forEach(targets, (target) => {
            const files = fs.readdirSync(target.src, {
                recursive: true,
                withFileTypes: true
            });
            
            for (const file of files) {
                const dirSrc = path.join(file.path, file.name);
                const dirDest = dirSrc.replace(target.src, target.dest);
        
                if (!file.isDirectory()) {
                    moveSync(dirSrc, dirDest);
                }
            } 

            removeSync(target.src);
        });
      },
    };
  };