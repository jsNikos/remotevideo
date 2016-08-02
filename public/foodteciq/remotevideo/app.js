import Vue from 'vue';
import * as appstyle from 'css!app.css';
import livecamera from 'es6!components/livecamera';
import ordertree from 'es6!components/ordertree';

class App {
  init(cameraSource, isAndroid){
    console.log('showing camera '+cameraSource.name);
    new Vue({
      el: 'body',
      data: {
        cameraSource,
        isAndroid
      },
      components: {
        livecamera,
        ordertree
      }
    });
  }
}
export default new App();
