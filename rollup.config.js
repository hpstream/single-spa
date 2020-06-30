import { rollupGenerator } from '@nosaid/rollup';
import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'
export default rollupGenerator([{
  input: './spa-source/src/my-single-spa.ts',
  output: {
    file: './spa-source/lib/my-single-spa.js',
    format: 'umd',
    name: 'mySingleSpa',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    process.env.SERVE ? serve({
      open: true,
      contentBase: './',
      openPage: '/',
      host: 'localhost',
      port: 10001
    }) : null
  ]
}])
