import jquery from 'jquery';

class OrdertreeService {

  startReloadTask(cameraSource, processOrdertree) {
    this.reloadOrdertree(cameraSource, processOrdertree);
  }

  reloadOrdertree(cameraSource, processOrdertree, lastFetched) {
    this.ensureRate(cameraSource, lastFetched)
      .then(() => this.fetchOrdertree(cameraSource))
      .then(processOrdertree)
      .then(() => this.reloadOrdertree(cameraSource, processOrdertree, new Date()))
      .catch(handleError);
  }

  fetchOrdertree(cameraSource) {
    return new Promise(resolve => {
      window.__processOrderTreeResponse = data => resolve(data);

      jquery.ajax({
        url: this.findOrdertreeUrl(cameraSource),
        dataType: 'jsonp',
        jsonpCallback: '__processOrderTreeResponse'
      });
    });
  }

  findOrdertreeUrl(cameraSource) {
    let fetchid = Date.now();
    return `/reports/CameraOrderTree?station=${cameraSource.pointingStationName}&uniq=${fetchid}&storeEmpToken=${cameraSource.store.authid}`;
  }

  ensureRate(cameraSource, lastFetched) {
    return new Promise(resolve => {
      if (!lastFetched) {
        resolve();
        return;
      }
      let sleep = 1000 / cameraSource.orderTreeRefreshRate - ((new Date()).getTime() - lastFetched.getTime());
      setTimeout(resolve, Math.max(0, sleep));
    });
  }
}
export default new OrdertreeService();
