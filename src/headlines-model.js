(function(exports) {
  function headlines() {
    this._api = '';
  }

  headlines.prototype.recieveAPIrequest = function(data) {
    this._api = data;
  };

  headlines.prototype.getAPI = function() {
    return this._api.response.results;
  };

  exports.headlines = headlines;
})(this);
