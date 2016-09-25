var app= angular.module('app',[]);

//creamos un filto para saber el numero de páginas
app.filter('pagination',[function(){
	return function(source,itemsPerPage){
		var length=source.length
		var maxPages=Math.ceil(length/itemsPerPage);
		var pages=[];
		for(var i=0;i<maxPages;i++){
			pages.push(i);
		}
		return pages;
	};
}]);


app.factory('animalFactory',[funtion(){

	var animals= [
	{
		name:'Linux',
		type:'Dog',
		age:4
	},
	{
		name:'Beltza',
		type:'Dog',
		age:1
	},
	{
		name:'Sanson',
		type:'Cat',
		age:6
	},
		{
		name:'Unix',
		type:'Dog',
		age:4
	},
	{
		name:'Handia',
		type:'Dog',
		age:1
	},
	{
		name:'WhiteSnake',
		type:'Snake',
		age:6
	}
	];
	var getAnimals = function(){return animals};
	return { getAnimals:getAnimals}



}]);


app.controller('ListCtrl', [function(){
	this.orderBy='type';
	//hacer factorya que traiga esto
	this.types=['Cat','Dog','Snake'];

	this.animals = animalFactory,getAnimals();

	// this.animals=[
	// {
	// 	name:'Linux',
	// 	type:'Dog',
	// 	age:4
	// },
	// {
	// 	name:'Beltza',
	// 	type:'Dog',
	// 	age:1
	// },
	// {
	// 	name:'Sanson',
	// 	type:'Cat',
	// 	age:6
	// },
	// 	{
	// 	name:'Unix',
	// 	type:'Dog',
	// 	age:4
	// },
	// {
	// 	name:'Handia',
	// 	type:'Dog',
	// 	age:1
	// },
	// {
	// 	name:'WhiteSnake',
	// 	type:'Snake',
	// 	age:6
	// }
	// ];
}]);