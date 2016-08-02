import cameraService from 'es6!services/cameraService';
import jquery from 'jquery';

export default {
  props: ['cameraSource'],
  template: `<div class="camera-container">
              <img id="camera" />
            </div>`,
  ready(){
    (new LiveCamera())
      .computeImageSize(this)
      .layoutContainer(this)
      .scrollToCenter(this)
      .startReloadImage(this);
  }
};

class LiveCamera {
  
  constructor(){
    this.$cameraContainer = jquery('.camera-container');
    this.$image = this.$cameraContainer.find('#camera');
    this.imageWidth = undefined;
    this.imageHeight = undefined;
  }

  scrollToCenter(comp){
    let scrollbuffer = 5;
    let scrollleft = (this.imageWidth - window.innerWidth) / 2;
    if(scrollleft > scrollbuffer){
      jquery(window).scrollLeft(scrollleft);
    }

    let scrolltop = (this.imageHeight - window.innerHeight) / 2;
    if(scrolltop > scrollbuffer){
      jquery(window).scrollTop(scrolltop);
    }
    return this;
  }

  // compute height, width for fullscreen
  computeImageSize(comp){
    this.imageHeight = comp.cameraSource.height;
    this.imageWidth = comp.cameraSource.width;

    let windowHeight = window.innerHeight;
    if(windowHeight > comp.cameraSource.height){
      let stretch = windowHeight / comp.cameraSource.height;
      this.imageHeight = windowHeight;
      this.imageWidth = comp.cameraSource.width * stretch;
    }

    let windowWidth = window.innerWidth;
    if(windowWidth > comp.cameraSource.width){
      let stretch = windowWidth / comp.cameraSource.width;
      this.imageWidth = windowWidth;
      this.imageHeight = comp.cameraSource.height * stretch;
    }
    return this;
  }

  startReloadImage(comp){
    cameraService.startReloadTask(this.$image.get(0), comp.cameraSource);
    return this;
  }

  layoutContainer(comp){
    this.$cameraContainer.css({
      height: this.imageHeight,
      width: this.imageWidth
    });

    this.$image.css({
      height: this.imageHeight,
      width: this.imageWidth
    });
    return this;
  }

}
