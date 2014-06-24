var $=jQuery;
var myApp = angular.module('myApp',['ngRoute','ngTable']);

var produtos=[];

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{templateUrl: '/app/views/home.html', controller: 'homeController'})
	.when('/produto/:id',{templateUrl: '/app/views/editar.html', controller: 'editarProdutoController'})
});

function paginacao($scope,ngTableParams,arrayPaginacao,porPagina){
	$scope.tableParams = new ngTableParams({
		   page: 1,     
		   count: porPagina  
		    }, {
		    getData: function($defer, params) {
		    $defer.resolve(arrayPaginacao.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		}
	});	
}