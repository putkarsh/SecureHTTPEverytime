var secureHTTPEverytime = {

	includedHostnames: [
		"www.youtube.com",
		"www.google.com",
		"www.facebook.com",
		"www.linkedin.com"
	],
	
	url: location.href,
	hostname: location.hostname,
	protocol: location.protocol,
	
	isHostnameIncluded: function(){
	
		for (var i=0; i < secureHTTPEverytime.includedHostnames.length; i++) {
			if (secureHTTPEverytime.includedHostnames[i].match(secureHTTPEverytime.hostname)) return true;
		}
		return false;
	},
	
	redirectToHttps: function(){
		if(secureHTTPEverytime.isHostnameIncluded()){
			if((secureHTTPEverytime.protocol.indexOf("http") > -1) && (secureHTTPEverytime.protocol.indexOf("https") == -1)){
				urlToRedirect = "https:" + window.location.href.substring(window.location.protocol.length);
				location.href = urlToRedirect;
			}
		}
	}
}

secureHTTPEverytime.redirectToHttps();
