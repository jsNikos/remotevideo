// config. require.js
require.config({
  paths: {
    vue: '/webapps/commons/libs/vue.min',
    es6: '/webapps/commons/libs/requirejs-babel/es6',
    babel: '/webapps/commons/libs/requirejs-babel/babel-5.8.34.min',
    jquery: '/webapps/commons/libs/jquery',
    parsequery: '/webapps/commons/libs/jquery.parsequery',
    text: '/webapps/commons/libs/text'
  },
  map: {
    '*': {
      'css': '/webapps/commons/libs/css.js'
    }
  },
  shim: {
    'parsequery': {
      deps: ['jquery']
    }
  }
});
