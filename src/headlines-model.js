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

  headlines.prototype.getAPIwebTitle = function(object) {
    return object.webTitle;
  };

  headlines.prototype.displayAPI = function () {
    return this._api.forEach(getAPIwebTitle(object));
  };

  exports.headlines = headlines;
})(this);
