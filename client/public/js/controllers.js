// myApp.controller refers to app.js file and var app = angular.module('myApp', [])
// $scope binds values and variables to the view
// Variable skiFactory is also in the services.js file


// skiController is used for the Search
myApp.controller('skiController', ['$scope', 'skiFactory',
  function($scope, skiFactory) {
    $scope.daysArray;
    $scope.sortType = "date";
    $scope.sortReverse = false;
    // .then promise calls back success or error, asynchronously
    skiFactory.getSkidays().then(function(days){
      $scope.daysArray = days.data;
      console.log($scope.daysArray);
    });

      // used for the weather API
      var findTemp = function(){
      skiFactory.getCopper().then(function(response){
      $scope.copper_temp = response.data;
   }).catch(function(error){
      console.log(error);
   });
    skiFactory.getSteamboat().then(function(response){
      $scope.steamboat_temp = response.data;
    });
 };
    findTemp();
}]);

// homeController is used for both the Main Page and the weather API
myApp.controller('homeController', ['$scope', '$rootScope', 'skiFactory',
  function($scope, $rootScope, skiFactory) {
      var findTemp = function(){
      skiFactory.getCopper().then(function(response){
      $scope.copper_temp = response.data;
   }).catch(function(error){
      console.log(error);
   });
    skiFactory.getSteamboat().then(function(response){
      $scope.steamboat_temp = response.data;
    });
 };
    findTemp();
  }]);

// newTraxController is used for the NewTrax
myApp.controller('newTraxController', ['$scope', 'skiFactory', '$location',
  function($scope, skiFactory, $location) {
    console.log('inside of newTraxController');
    // This is here just to hardcode data for Hiring Day
    // START
    // I put this in for Hiring Day purposes
    // $scope.newTrax={
    //   date:"12/9/2015",
    //   temperature:39,
    //   newSnow:4,
    //   conditions:"Soft new snow",
    //   mountain:"Breckenridge",
    //   numRuns:32,
    //   firstChair:"9:00",
    //   lastChair:"4:30",
    //   rating:5,
    //   skiedWith:"Willy",
    //   notes:"Gonna get HIRED tomorrow!"
    // }
    // END
    $scope.createNewTrax = function(){
      skiFactory.postSkiday($scope.newTrax).then(function(){
        $scope.newTrax = {};
      }).then(function(){
        $location.path("/search");
      });
    };
       // used for the weather API
      var findTemp = function(){
      skiFactory.getCopper().then(function(response){
      $scope.copper_temp = response.data;
   }).catch(function(error){
      console.log(error);
   });
    skiFactory.getSteamboat().then(function(response){
      $scope.steamboat_temp = response.data;
    });
 };
    findTemp();
}]);



