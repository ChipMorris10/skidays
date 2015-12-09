// myApp.controller refers to app.js file and var app = angular.module('myApp', [])
// $scope binds values and variables to the view
// Variable skiFactory is also in the services.js file


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
    console.log('inside of newTraxController');
    // START
    // I put this in for Hiring Day purposes
    $scope.newTrax={
      date:"12/7/2015",
      temperature:32,
      newSnow:5,
      conditions:"Powder",
      mountain:"Copper",
      numRuns:28,
      firstChair:"9:00",
      lastChair:"4:30",
      ranking:4,
      skiedWith:"Alane",
      notes:"Sunny"
    }
    // END

    $scope.createNewTrax = function(){

      skiFactory.postSkiday($scope.newTrax).then(function(){
        $scope.newTrax = {};
      }).then(function(){
        $location.path("/search");
      })
    }
}]);



