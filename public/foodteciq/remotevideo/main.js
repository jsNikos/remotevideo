// config. require.js
require.config({
  paths: {
    vue: '/webapps/commons/libs/vue.min',
		es6: 'libs/requirejs-babel/es6',
    babel: 'libs/requirejs-babel/babel-5.8.34.min',
    jquery: '/webapps/commons/libs/jquery',
    parsequery: '/webapps/commons/libs/jquery.parsequery'
  },
  map: {
  '*': {
    'less': 'libs/require-less/less'
  },
  shim: {
    'parsequery': {
      deps: ['jquery']
    }
  }
}
});
