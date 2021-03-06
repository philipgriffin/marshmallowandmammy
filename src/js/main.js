angular.module('marshmallowAndMammy',['ngRoute'])
.controller('mmController', ['$scope', '$http', '$location', MmController])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.
    when("/", {templateUrl:"/partials/homepage.html"}).
    when("/weeks5-8", {templateUrl:"/partials/week5-8.html"});

    $locationProvider.html5Mode(true);

}]);

function MmController ($scope, $http, $location){
  $http.get('trimester-info.json').then(function(trimesterData){
    $scope.weekPanels = trimesterData.data;
    $scope.weekTotal = $scope.weekPanels.length;
  }, function(e){console.log(e.data);});

  $scope.go = function(path) {
    if(path !== 'inactive'){
      $location.path(path);
    }
  };

  $scope.toggleNav = function(){
    $('.main-nav').slideToggle('fast');
    $('.hamburger').toggleClass('menu-is-showing');
  };

}//MmControler Close

$(document).ready(function(){
  $('.img-swap').on('click', function(){
    console.log('hello');
  });
console.log('ready');

});
