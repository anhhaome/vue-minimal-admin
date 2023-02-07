import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue(), peerDepsExternal(),
      copy({
        targets: [
          { src: 'src/index.css', dest: 'dist/' },
          { src: 'src/index.html', dest: 'dist/' },
          { src: 'src/assets', dest: 'dist/' }
        ]
      })
    ]
  },
  {
    input: 'src/plugin.cjs',
    output: [
      {
        format: 'cjs',
        file: 'dist/plugin.js'
      },
      {
        format: 'cjs',
        file: 'dist/plugin.cjs'
      }
    ]
  },
  {
    input: 'src/components/RIcon/icons.js',
    output: [
      {
        format: 'esm',
        file: 'dist/icon-names.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/icon-names.js'
      }
    ]
  },
]
