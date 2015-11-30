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
      templateURL: '../../partials/photos.html'
    })
    .when('/search', {
      templateURL: '../../partials/search.html'
    })
    .otherwise({redirectTo: '/'});
}]);

