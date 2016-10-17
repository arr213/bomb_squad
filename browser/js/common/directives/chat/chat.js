app.directive('chat', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/chat/chat.html',
        controller: 'ChatCtrl'
    };
});

app.controller('ChatCtrl', function($scope, AuthService, GameFactory, $stateParams) {
    var chatRef = $scope.currentGame.child('chat');

    AuthService.getLoggedInUser()
        .then(function(user) {
            $scope.username = user.username;
        })

 $scope.messages = [];

    $scope.updateScroll = function() {
        var chatbox = document.getElementById('messages');
        chatbox.scrollTop = chatbox.scrollHeight;
    }


    chatRef.on('child_added', function(snap) {
        $scope.updateScroll();
        $scope.messages.push(snap.val())
        $scope.evalAsync();
    })


    $scope.submit = function(chatMsg) {
        chatMsg = angular.copy(chatMsg);
        chatRef.push({ username: $scope.username, message: chatMsg })
        document.getElementById('msgForm').reset();
    }


})
