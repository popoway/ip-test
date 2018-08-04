// define test source
var ipv4 = 'https://ipv4-test.app.popoway.cloud/';
var ipv6 = 'https://ipv6-test.app.popoway.cloud/';

// function to fetch user IP
function fetchIP(elemId, url) {
  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      var elem = document.getElementById(elemId);
      if (elem) elem.textContent = text;
    })
}

// fetch both IP versions
fetchIP('ipv4', ipv4);
fetchIP('ipv6', ipv6);
