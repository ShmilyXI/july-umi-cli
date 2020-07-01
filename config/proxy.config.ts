const { PRO_VAR } = process.env;

/**
 * 接口前缀 用于代理
 */
const ProConfig = {
  mock: 'http://www.ahwgs.cn',
  dev: 'http://www.ahwgs.cn',
  test: 'http://www.ahwgs.cn',
  pro: 'http://www.ahwgs.cn',
};

export default {
  '/api': {
    target: ProConfig[PRO_VAR],
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
};
