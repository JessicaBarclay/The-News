(function(exports) {
  function headlines() {
    this._api = '';
  }

  headlines.prototype.recieveAPIrequest = function(data) {
    this._api = data.response.results;
  };

  headlines.prototype.getAPI = function() {
    return this._api;
  };

  // headlines.prototype.displayAPI = function () {
  //   var objects = this.getAPI();
  // }

  exports.headlines = headlines;
})(this);
