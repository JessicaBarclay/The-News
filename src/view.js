(function(exports){

  function view() {
    this._webTitles = [];
    this._webUrls = [];
  }

  view.prototype.displayAPI = function () {
    var self = this;
    headlines._api.forEach(function(object) {
      // console.log(object);
      console.log(object.webTitle);
      console.log(object.webUrl);
      self._webTitles.push(object.webTitle);
      self._webUrls.push(object.webUrl);
    });
  };

  exports.view = view;
})(this);
