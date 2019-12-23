import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],

  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts', '.tsx']
    }),
    postcss({
      plugins: []
    }),
    svg(),
  ]
}
