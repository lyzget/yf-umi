const path = require('path');
export default {
  alias: {
    components: path.resolve(__dirname, 'src/components'),
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
    themes: path.resolve(__dirname, 'src/themes'),
    images: path.resolve(__dirname, 'src/assets')
  },
  proxy: {
    '/api': {
      target: 'http://211.97.2.198:7001/',
      changeOrigin: true
      // "pathRewrite": { "^/api" : "" }
    }
  },
  define: {
    'process.env.IS_PROD': true,
    USE_COMMA: 2
  },
  env: {
    development: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:7001/',
          changeOrigin: true
          // "pathRewrite": { "^/api" : "" }
        }
      },
      define: {
        'process.env.IS_PROD': false,
        USE_COMMA: 2
      }
    }
  }
};
