var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../../partials/main_page.html'
    })
    .when('/newtrax', {
      templateUrl: '../../partials/newtrax.html'
    })
    .when('/photos', {
      templateUrl: '../../partials/photos.html'
    })
    .when('/search', {
      templateUrl: '../../partials/search.html',
      controller: 'skiController'
    })
    .otherwise({redirectTo: '/'});
}]);

