import { rollupGenerator } from '@nosaid/rollup';
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
      contentBase: '',
      openPage: './single-spa/test/quick/index.html',
      host: 'localhost',
      port: 10001
    }) : null
  ]
}])
