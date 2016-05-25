var utils = angular.module("utils", []);

utils.filter("trimText", function(appDefaults){
	return function(text, trimLength){
		trimLength = trimLength || appDefaults.trimLength;
		return text.length < trimLength ? text : text.substr(0,trimLength) + '...';
	};
});
utils.value("momentApi", window.moment);

utils.filter('elapsed', function(momentApi){
	return function(data){
		return momentApi(data).fromNow();
	};
});