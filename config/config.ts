/*
 * umi配置
 * @Author: ahwgs
 * @Date: 2020-05-23 01:15:06
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-06-02 00:21:56
 */

import { defineConfig } from 'umi';
import pageRoutes from './router.config';
import pluginConfig from './plugin.config';
import babelConfig from './babel.config';
import proxyConfig from './proxy.config';
import themeConfig from './theme.config';

// eslint-disable-next-line @typescript-eslint/camelcase
const { PRO_VAR, NODE_ENV, npm_package_version } = process.env;

const NODE_IS_DEV = NODE_ENV === 'development'; // node环境

export default defineConfig({
  plugins: pluginConfig,
  hd: {
    theme: themeConfig,
    px2rem: {
      rootValue: 144, // 开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为375，所以375*100/750=50
      propBlackList: [
        'border-top-width',
        'border-left-width',
        'border-right-width',
        'border-bottom-width',
      ], // 这些属性不需要转换
      selectorBlackList: ['no_hd'], // 以包含no_hd的class不需要转换
    },
  },
  dva: {
    immer: true,
  },
  antd: {},
  dynamicImport: {},
  favicon: '/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: pageRoutes,
  targets: {
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  hash: true,
  extraBabelPlugins: babelConfig,
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
  define: {
    PRO_VAR, // 注册到全局
    NODE_IS_DEV,
    RELEASE_VERSION: npm_package_version,
  },
  proxy: proxyConfig,
  theme: themeConfig,
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "~@/styles/index.less";',
    },
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  // 依赖提取
  // chunks: ['vendors', 'umi'],
  // chainWebpack(config) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         cacheGroups: {
  //           vendors: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     },
  //   });
  // },
});
