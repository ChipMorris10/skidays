myApp.directive("weather", function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl:"partials/weather/weather.html",
    controller: WeatherController
  };

  WeatherController.$inject = ['$scope', 'skiFactory'];
  function WeatherController($scope, skiFactory) {
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
}
});
