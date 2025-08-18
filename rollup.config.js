import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { resolve } from 'path';

export default defineConfig([
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'clsx', 'lucide-react'],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      esbuild({
        target: 'es2020',
        jsx: 'automatic',
        tsconfig: resolve('./tsconfig.json'),
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
]);
