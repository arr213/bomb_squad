app.directive('publicChat', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/public-chat/public-chat.html',
        controller: 'PublicChatCtrl'
    };

});

app.controller('PublicChatCtrl', function($scope, AuthService) {
    var chatRef = firebase.database().ref('/public-chat');

    // window.onload = function() {
    //     $("#messages").animate({ scrollTop: $(document).height() }, "slow");
    // }


    // var chatbox = document.getElementById("messages").onload = function(){ $scope.updateScroll() };
    // chatbox.scrollTop = chatbox.scrollHeight;


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
        $scope.$evalAsync();
    })


    $scope.submit = function(chatMsg) {
        chatMsg = angular.copy(chatMsg);
        chatRef.push({ username: $scope.username, message: chatMsg })
        document.getElementById('msgForm').reset();
    }


})
