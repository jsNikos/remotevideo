import Vue from 'vue';
import * as appstyle from 'less!app.less';
import livecamera from 'es6!components/livecamera';
import ordertree from 'es6!components/ordertree';

class App {
  init(cameraSource){
    console.log('showing camera '+cameraSource.name);
    new Vue({
      el: 'body',
      data: {
        cameraSource
      },
      components: {
        livecamera,
        ordertree
      }
    });
  }
}
export default new App();
