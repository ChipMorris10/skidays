// myApp.controller refers to app.js file and var app = angular.module('myApp', [])
// $scope binds values and variables to the view
// skiFactory is also in the services.js file. It's a variable name and could be anything


myApp.controller('skiController', ['$scope', 'skiFactory',
  function($scope, skiFactory) {
    $scope.daysArray;
    // .then promise calls back success or error, asynchronously
    skiFactory.getSkidays().then(function(days){
      $scope.daysArray = days.data;
      console.log($scope.daysArray);
    })
}]);

myApp.controller('newTraxController', ['$scope', 'skiFactory', '$location',
  function($scope, skiFactory, $location) {
    $scope.createNewTrax = function(newTrax){
      skiFactory.postSkiday(newTrax).then(function(){
        $scope.newTrax = {};
      }).then(function(){
        $location.path("/");
      })
    }
}]);


