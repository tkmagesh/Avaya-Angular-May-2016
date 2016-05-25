var greetApp = angular.module("myApp.greet", ["ngRoute"]);

greetApp.config(function($routeProvider){
	$routeProvider
		.when("/greet", {
			templateUrl : 'greet/greet.html',
			controller : 'greetController'
		});
});

greetApp.controller("greetController", function($scope){
	$scope.name = '';
	$scope.message = '';
	$scope.greet = function(){
		$scope.message = 'Hi ' + $scope.name + ', Have a nice day!';
	};
});

greetApp.filter('trimText', function(){
	return function(data){
		return data.length < 20 ? data : data.substr(0,20) + '...';
	};
});