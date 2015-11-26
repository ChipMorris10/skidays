var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../../partials/main_page.html'
    })
    .when('/newtrax', {
      templateUrl: '../../partials/newtrax.html'
    })
    .otherwise({redirectTo: '/'});
}]);

