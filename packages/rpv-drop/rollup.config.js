import less from 'rollup-plugin-less-modules';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const pkg = require('./package.json');

const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
];

const input = './src/index.ts';

export default [
    // CJS
    {
        input,
        output: {
            file: './npm/cjs/rpv-drop.js',
            format: 'cjs',
        },
        external,
        plugins: [
            less({
                output: './npm/cjs/rpv-drop.css',
                sourcemap: false,
            }),
            typescript(),
        ],
    },

    // Minified CJS
    {
        input,
        output: {
            file: './npm/cjs/rpv-drop.min.js',
            format: 'cjs',
        },
        external,
        plugins: [
            less({
                output: './npm/cjs/rpv-drop.css',
                sourcemap: false,
            }),
            typescript(),
            terser(),
        ],
    }
];
