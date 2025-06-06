const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    },
    configure: (webpackConfig, { env, paths }) => {
      // 只在生产环境构建时添加时间统计
      if (env === 'production') {
        // 记录开始时间
        const startTime = Date.now()
        console.log('开始构建时间:', new Date(startTime).toLocaleString())

        // 在构建完成后记录结束时间
        webpackConfig.plugins.push({
          apply: (compiler) => {
            compiler.hooks.done.tap('BuildTimePlugin', () => {
              const endTime = Date.now()
              const buildTime = (endTime - startTime) / 1000
              console.log('结束构建时间:', new Date(endTime).toLocaleString())
              console.log(`构建总耗时: ${buildTime} 秒`)
            })
          }
        })
      }

      // 替换 babel-loader 为 swc-loader
      const jsRule = webpackConfig.module.rules.find(rule => rule.oneOf)
      if (jsRule) {
        const babelLoader = jsRule.oneOf.find(rule => 
          rule.loader && rule.loader.includes('babel-loader')
        )
        if (babelLoader) {
          babelLoader.loader = 'swc-loader'
          babelLoader.options = {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
                decorators: true,
                dynamicImport: true
              },
              transform: {
                react: {
                  runtime: 'automatic'
                }
              },
              target: 'es2020'
            },
            module: {
              type: 'es6'
            }
          }
        }
      }

      return webpackConfig
    }
  }
}
