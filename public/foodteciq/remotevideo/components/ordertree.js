import jquery from 'jquery';
import ordertreeService from 'es6!services/ordertreeService';
import template from 'text!components/ordertree.html';

export default {
  props: ['cameraSource'],
  template: template,
  ready() {
    (new OrderTree())
      .startReloadOrdertree(this);
  },
  data() {
    return {
      ordertreehtml: undefined
    };
  }
};

class OrderTree {

  startReloadOrdertree(comp){
    ordertreeService.startReloadTask(comp.cameraSource, this.processOrdertree.bind(comp));
  }

  processOrdertree(ordertree){
    return new Promise(resolve => {
      let html = ordertree && ordertree.orderTree || '';
      this.$data.ordertreehtml = html;
      resolve();
    });
  }

}
