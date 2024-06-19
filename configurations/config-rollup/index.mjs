import { defineConfig } from 'rollup' ;
import path from 'path' ;
import { get } from 'lodash-es' ;
import pluginTs from '@rollup/plugin-typescript' ;
import { dts } from 'rollup-plugin-dts' ;
import nodeExternals from 'rollup-plugin-node-externals' ;
import replace from './plugin-replace.mjs' ; 
import assetResolver from './plugin-asset-resolver.mjs' ;

const defaultInput = path.join(process.cwd(), 'src/index.ts');

export default function buildConfig(opt = {}) {
    const input = get(opt, 'input', defaultInput);

    let replaceDef = null;

    if (input !== defaultInput) {
        replaceDef = replace([
            { 
                src: 'dist/src',
                dest: 'dist',
            }
        ])
    }

    return defineConfig([
        {
            input,
            output: [
                {
                    dir: 'dist',
                    format: 'es',
                    entryFileNames: '[name].mjs',
                    preserveModules: true,
                },
            ],
            // external,
            plugins: [
                nodeExternals(),
                assetResolver({ include: ['.png$'] }),
                pluginTs(),
            ],
        },
        {
            input,
            output: [
                {
                    dir: 'dist',
                    format: 'es',
                },
            ],
            // external,
            plugins: [
                nodeExternals(),
                dts(),
                replaceDef,
            ],
        },
    ]);
}
