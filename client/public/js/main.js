// controls how the pages are manipulated
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../../partials/main_page.html',
      controller: 'homeController'
    })
    .when('/newtrax', {
      templateUrl: '../../partials/newtrax.html',
      controller: 'newTraxController'
    })
    .when('/photos', {
      templateUrl: '../../partials/photos.html',
      controller: 'homeController'
    })
    .when('/search', {
      templateUrl: '../../partials/search.html',
      controller: 'skiController'
    })
    .otherwise({redirectTo: '/'});
}]);

