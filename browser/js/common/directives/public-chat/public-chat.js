app.directive('publicChat', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/public-chat/public-chat.html',
        controller: 'PublicChatCtrl'
    };

});

app.controller('PublicChatCtrl', function($scope, AuthService){
  var chatRef =  firebase.database().ref('/public-chat');

  // var username = user.username;
  // console.log('user name', username)

      AuthService.getLoggedInUser()
            .then(function(user){
              $scope.username = user.username;
      })

   $scope.messages = [];

  chatRef.on('child_added', function(snap){
    $scope.messages.push(snap.val())
  })



  $scope.submit = function(chatMsg){
    chatMsg = angular.copy(chatMsg);
    // console.log('chat message', chatMsg);
    chatRef.push({username: $scope.username, 'message': chatMsg })
  }


})
