myApp.factory('skiFactory', ['$http', function($http) {
  var object={};

// get all request
  object.getSkidays = function() {
    return $http.get('api/skidays');
  };

  // get one request
  object.getSkiday = function() {
    return $http.get('api/skidays');
  };

  // post request
  object.postSkiday = function(payload) {
    console.log('http', payload);
    return $http.post('api/skidays', payload);
  };

  // delete request
  object.deleteSkiday = function(id) {
    return $http.delete('api/skidays/'+id);
  };

  // put request
  object.putSkiday = function(id, payload) {
    return $http.put('api/skidays/'+id, payload);
  };

  return object;


}]);
