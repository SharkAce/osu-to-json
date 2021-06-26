/*
 * Make http requests & use the output in a callback.
 * @method request
 * @param {String} url The url to request. 
 * @param {Function} callback  The function to call when response is recieved
 */
const request = function(url, callback) {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        callback(data);
    }
  };
  http.open("GET", url, true);
  http.send();
};
