// define test source
var ipv4 = 'https://ipv4-test.app.popoway.cloud/';
var ipv6 = 'https://ipv6-test.app.popoway.cloud/';

// function to fetch user IP
function fetchIP(elemId, url) {
  $( "#" + elemId ).load( url, function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Not supported";
      $( "#" + elemId ).text( msg );
    }
  });
}

// fetch both IP versions
fetchIP('ipv4', ipv4);
fetchIP('ipv6', ipv6);
