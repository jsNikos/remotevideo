import jquery from 'jquery';
import ordertreeService from 'es6!services/ordertreeService';
import template from 'text!components/ordertree.html';

export default {
  props: ['cameraSource', 'isAndroid'],
  template: template,
  ready() {
    this.startReloadOrdertree();
  },

  data() {
    return {
      ordertreehtml: undefined,
      style: undefined
    };
  },

  methods: {
    startReloadOrdertree() {
      ordertreeService.startReloadTask(this.cameraSource, this.processOrdertree.bind(this));
      return this;
    },

    processOrdertree(ordertree) {
      return new Promise(resolve => {
        let html = ordertree && ordertree.orderTree || '';
        this.positionOrdertree();
        this.$data.ordertreehtml = html;
        resolve();
      });
    },

    positionOrdertree() {
      let style;
      if (this.isAndroid) {
        style = {
          position: 'absolute',
          top: `${jquery(window).scrollTop()}px`,
          left: `${jquery(window).scrollLeft()}px`
        };
      } else {
        style = {
          position: 'fixed',
          bottom: 0,
          right: 0
        }
      }
      this.$data.style = style;
    }
  }
};
