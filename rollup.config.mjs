import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bundle.js',
        format: 'cjs',
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        compilerOptions: {
          module: 'ES2020',
        },
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/bundle.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
