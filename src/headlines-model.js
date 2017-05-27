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

  headlines.prototype.displayAPI = function () {
    this._api.forEach(function(object) {
      console.log(object.webTitle);
      return object.webTitle;
    });
  };

  exports.headlines = headlines;
})(this);
