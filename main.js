var app= angular.module("app",[])
//app.controller('AppController',function($scope){ //inyeccion de dependencias
	//$scope.name='Pepe';
app.controller('AppController',[function(){
	this.name='Pepe';
}]);

//app.controller('ChildController',function($scope){ //inyeccion de dependencias

app.controller('ChildController',[function(){
	this.name='Pepe';
}]);