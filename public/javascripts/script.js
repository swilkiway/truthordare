angular.module('myApp', ['firebase']).
  controller('dareController', ['$scope', '$http', '$firebaseArray', 
                              function($scope, $http, $firebaseArray) {
var ref = firebase.database().ref().child("messages");
   $scope.chats = $firebaseArray(ref);
   $scope.update = function(user) {
       var newmessage = {from:user.username || "anonymous",body:user.chat};
       console.log(newmessage);
       $scope.chats.$add(newmessage);
       user.chat = "";   
 $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
   }
  }
 ]);
