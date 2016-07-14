import cameraService from 'es6!services/cameraService';

export default {
  props: ['cameraSource'],
  template: '<img id="camera" />',
  ready(){
    cameraService.startReloadTask(this.$el, this.cameraSource);    
  }
};
