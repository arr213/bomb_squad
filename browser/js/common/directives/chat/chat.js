app.directive('chat', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/chat/chat.html',
        controller: 'ChatCtrl'
        // link: function(scope){
        //   scope.username = user.username;
        //   console.log('username in link func', scope.username)
        // }
    };
});

app.controller('ChatCtrl', function($scope, AuthService){
  var chatRef = firebase.database().ref('/chat');

  // var username = user.username;
  // console.log('user name', username)

      AuthService.getLoggedInUser()
            .then(function(user){
              $scope.username = user.username;
      })


  console.log('username in controller', $scope.username)

   $scope.messages = [];

  chatRef.on('child_added', function(snap){
    $scope.messages.push(snap.val())
  })



  $scope.submit = function(chatMsg){
    chatMsg = angular.copy(chatMsg);
    console.log('chat message', chatMsg);
    chatRef.push({username: $scope.username, 'message': chatMsg })
  }


})
