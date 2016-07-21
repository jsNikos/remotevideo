class CameraService {

  startReloadTask(image, cameraSource) {
    let preload = new Image();
    this.reloadImage(image, preload, cameraSource);
  }

  reloadImage(image, preload, cameraSource, lastFetched) {
    this.ensureRate(cameraSource, lastFetched)
      .then(() => this.fetchImage(preload, cameraSource))
      .then(() => {
        image.src = preload.src;
        return this.reloadImage(image, preload, cameraSource, new Date());
      })
      .catch(handleError);
  }

  fetchImage(preload, cameraSource) {
    return new Promise(resolve => {
      preload.src = this.findCameraUrl(cameraSource);
      preload.onload = resolve;
    });
  }

  findCameraUrl(cameraSource) {
    let fetchid = Date.now();
    return `/reports/CamImage?height=${cameraSource.height}&width=${cameraSource.width}&cam=${cameraSource.name}&live=&uniq=${fetchid}&storeEmpToken=${cameraSource.store.authid}`;
  }

  ensureRate(cameraSource, lastFetched) {
    return new Promise(resolve => {
      if (!lastFetched) {
        resolve();
        return;
      }
      let sleep = cameraSource.msPerLiveFrame - ((new Date()).getTime() - lastFetched.getTime());
      setTimeout(resolve, Math.max(0, sleep));
    });
  }
}
export default new CameraService();
