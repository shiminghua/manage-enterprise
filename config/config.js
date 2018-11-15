import routesConfig from './routes.config.js';


// ref: https://umijs.org/config/
export default {

  hash: true,

  theme: './themes/default.js',

  targets: {
    ie: 11,
  },

  routes: routesConfig,

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true,
      },
      dynamicImport: true,
      title: 'manage-enterprise',
      dll: true,
      routes: {
        exclude: [
          /utils/,
          /util/,
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
          /api\//
        ],
      },
      hardSource: true,
    }],
  ],
}
