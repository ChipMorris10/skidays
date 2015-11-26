// app.controller refers to app.js file and var app = angular.module('myApp', [])
// skiFactory is also in the services.js file. It's just a variable name and could be anything
// I believe I need to define skiController in index.html, but I'm not sure
// $scope binds values and variables to the view

app.controller('skiController', ['$scope', 'skiFactory', function($scope, skiFactory) {



}])
