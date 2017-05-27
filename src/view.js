(function(exports){

  function view() {
    this._webTitles = [];
    this._webUrls = [];
  }

  view.prototype.receiveData = function () {
    var self = this;
    headlines._api.forEach(function(object) {
      console.log(object.webTitle);
      console.log(object.webUrl);
      self._webTitles.push(object.webTitle);
      self._webUrls.push(object.webUrl);
    });
  };

  view.prototype.displayData = function () {
    var htmlTitle = "<ul>";
    this._webTitles.forEach(function(title) {
      htmlTitle += ("<li>" + title + "</li>");
    });
    return htmlTitle + "</ul>";
  };

  exports.view = view;
  
})(this);
