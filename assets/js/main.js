(function () {
	$(document).ready( function() {

		new WOW().init();

		if (getParameterByName('scrollTo')) {
			var scrollTo = '#' + getParameterByName('scrollTo');
			$('html, body').animate({
				scrollTop: $(scrollTo).offset().top
			}, 2000);

			cleanUrl();
		}

		function getParameterByName(name) {
		    var url = window.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}

		function cleanUrl () {
			var uri = window.location.toString();
			
			if (uri.indexOf("?") > 0) {
			    var clean_uri = uri.substring(0, uri.indexOf("?"));
			    window.history.replaceState({}, document.title, clean_uri);
			}
		}
		
		
	});
})();