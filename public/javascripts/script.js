angular.module('myApp', ["firebase"]).
  controller('dareController', ['$scope', '$http', '$firebaseArray',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  },function($scope, $firebaseArray) {
   var ref = firebase.database().ref().child("dares")
   $scope.dare = $firebaseArray(ref);
   $scope.update = function(user) {
       var newmessage = {from:user.name || "anonymous",body:user.dare};
       console.log(newmessage);
       $scope.dare.$add(newmessage);
       $scope.currentDare.setInnerHTML(newmessage);
       user.dare = "";
   }
 }]);
