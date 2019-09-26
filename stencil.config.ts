import { Config } from '@stencil/core';

export const config: Config = {
    srcDir: './src/',
    excludeSrc: [
        'node_modules',
        'dist',
        'wwww',
        '.stencil'
    ],
    namespace: 'hello-stencil',
    outputTargets: [
    {
        type: 'dist',
    
    }]
};
