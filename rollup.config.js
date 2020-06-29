import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve'

export default {
  input: './single-spa/src/my-single-spa.js',
  output: {
    file: './single-spa/lib/my-single-spa.js',
    format: 'umd',
    name: 'mySingleSpa',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.SERVE ? serve({
      open: true,
      contentBase: '',
      openPage: './single-spa/test/quick/index.html',
      host: 'localhost',
      port: 10001
    }) : null
  ]
}
