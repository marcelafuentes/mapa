var clima = angular.module("clima",[]);
clima.controller("GetDataClima",function($scope,$rootScope,$http){
	$scope.DataClima = [];
	$scope.link="";
	 $scope.GetClima = function(lat,lng) {
	 	$scope.DataClima = [];
		$scope.link="";
		$http({
			method : "GET",
			url : "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&units=metric&lang=es&APPID=fea8dffa83876ae01c2092d060c4e4ad"
		}).then(function(response){
			$scope.DataClima.push(response.data);
			$scope.link="http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
			console.log(response.data);
		})		
		console.log($scope.DataClima);
		
	}
})
















