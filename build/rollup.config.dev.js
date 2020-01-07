import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {

    input: 'src/CesiumNavigation.js',
    output:{
        name:"CesiumNavigation.umd",
        file:"dist/CesiumNavigation.umd.js",
        format: 'umd',
        sourcemap: true,
    },
    plugins: [
        resolve({
            browser: true,
        }),
        json(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
    ]
};
