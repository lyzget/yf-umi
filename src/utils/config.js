const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://211.97.2.198:7001/api'
    : '/api';

const api = {
  sublease: `${BASE_URL}/client/sublease`,
  info: `${BASE_URL}/client/info`
};

const config = {
  name: '白云世界皮具贸易中心',
  prefix: 'yf-umi',
  openPages: ['/login', '/404'],
  wxPages: ['/wx'],
  apiPrefix: '/api/v1',
  serverUrl: 'http://211.97.2.198:7001/api',
  api
};

export { api };
export default { config };
