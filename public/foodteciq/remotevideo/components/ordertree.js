import jquery from 'jquery';
import ordertreeService from 'es6!services/ordertreeService';

export default {
  props: ['cameraSource'],
  template: '<div class="ordertree-container"></div>',
  ready() {
    (new OrderTree())
      .startReloadOrdertree(this);
  }
};

class OrderTree {
  constructor() {
    this.$ordertreeContainer = jquery('.ordertree-container');
  }

  startReloadOrdertree(comp){
    ordertreeService.startReloadTask(comp.cameraSource, this.processOrdertree.bind(this));
  }

  processOrdertree(ordertree){
    return new Promise(resolve => {
      let html = ordertree && ordertree.orderTree || '';
      this.$ordertreeContainer.html(html);
      resolve();
    });
  }

}
