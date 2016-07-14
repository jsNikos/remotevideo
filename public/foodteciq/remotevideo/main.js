// config. require.js
require.config({
  paths: {
    vue: '/webapps/commons/libs/vue.min',
		es6: 'libs/requirejs-babel/es6',
    babel: 'libs/requirejs-babel/babel-5.8.34.min'
  },
  map: {
  '*': {
    'less': 'libs/require-less/less'
  }
}
});
