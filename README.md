# ip-test
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/popoway/ip-test.svg)](https://github.com/popoway/ip-test/releases)
[![GitHub language count](https://img.shields.io/github/languages/count/popoway/ip-test.svg)](https://github.com/popoway/ip-test/search?l=JSON&type=Code)
[![license](https://img.shields.io/github/license/popoway/ip-test.svg)](https://github.com/popoway/ip-test/blob/master/LICENSE)  
Get your public IPv4 and IPv6 addresses.

# Quick Links

Live version: https://ip-test.app.popoway.cloud/

# Status
Basic features should work, since it is rather stable.

# Self-hosting

## Server part

The server part uses a simple `index.php` file to print the current IP used by the user.

## Client part

The client part is intended to retrieve the requests from both servers to get the IPv4 and IPv6
addresses of the user.

## DNS part

Three subdomains should be set as follows:  
ipv4-test.app.popoway.cloud.	86400	IN	A	(ipv4 address)  
ipv6-test.app.popoway.cloud.	86400	IN	AAAA	(ipv6 address)  
ip-test.app.popoway.cloud.	86400	IN	CNAME	(point to your server)

## How it works?

The user loads the `ip-test` page. The page will make two requests using
JavaScript to the two other subdomains: `ipv4-test` and `ipv6-test`. If a
request fails, it would say that the IP version isn't supported by the client.
In the other way, the request will directly give the good version of the user
IP.

## If you use SSL...

Make sure CORS is correctly configured on your server, otherwise XHR request will break.

Sample configuration: [nginx](https://github.com/popoway/ip-test/blob/master/ip-test.conf)

# License
[MIT](https://popoway.mit-license.org/)
