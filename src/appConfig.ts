/**
 * 默认配置
 */
export interface DefaultConfig {
  appName: string;
  appPrimary: string;
  axiosTimeout: number;
  axiosCookie: boolean;
  axiosBaseUrl: string;
  authorityKey: string;
}

const appConfig: DefaultConfig = {
  appName: 'umi-cli', // 项目title
  appPrimary: '#5B98FF',
  axiosTimeout: 10000,
  axiosCookie: true,
  axiosBaseUrl: '/api',
  authorityKey: 'umi-cli-authority',
};

export default appConfig;
