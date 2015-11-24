app.factory("skiFactory", ['$http', function($http) {
  var object{};

// get all request
object.getSkiday = function() {
  return $http.get('api/skiday');
};

// get one request
object.getSkiday = function() {
  return $http.get('api/skiday');
};

// post request
object.postSkiday = function(payload) {
  console.log('http', payload);
  return $http.post('api/skiday', payload);
};

// delete request
object.deleteSkiday = function(id) {
  return $http.delete('api/skiday/'+id);
};

// put request
object.putSkiday = function(id, payload) {
  return $http.put('api/skiday/'+id, payload);
};




}]);
