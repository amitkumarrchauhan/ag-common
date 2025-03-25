import dts from 'rollup-plugin-dts';

import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default [
  {
    input: Object.fromEntries(
      globSync('dist/**/*.js').map(file => [
        // This removes `src/` as well as the file extension from each
        // file, so e.g. src/nested/foo.js becomes nested/foo
        path.relative(
          'dist',
          file.slice(0, file.length - path.extname(file).length)
        ),
        // This expands the relative paths to absolute paths, so e.g.
        // src/nested/foo becomes /project/src/nested/foo.js
        fileURLToPath(new URL(file, import.meta.url))
      ])
    ),
    output: {
      format: 'es',
      dir: 'dist'
    }
  },
  {
    input: 'dist/index.d.ts',
    output: {
        file: 'index.d.ts'
    },
    plugins: [dts()]
  }
];

/* 
export default [
  {
    input: 'dist/index.js',
    output: {
        file: 'index.js'
    },
  },
  {
      input: 'dist/index.d.ts',
      output: {
          file: 'index.d.ts'
      },
      plugins: [dts()]
  }
] */