app.directive('wires', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        controller: 'WiresCtrl'
    };

});

app.controller('WiresCtrl', function($scope, StrikeFactory) {

    $scope.currentGame.child('modules').once('value', function(snap) {
        $scope.wires = snap.val()[0].content;
    });

    $scope.submit = function(wire) {
        if (wire.solution === true) {
            console.log('YOU WIN!!');
        } else {
            // console.log('this is a strike in wires & means its working', $scope.strikes[0].active);
            StrikeFactory.strike($scope.strikes, $scope.currentGame);
        }
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});

