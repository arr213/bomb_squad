app.directive('wires', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        controller: 'WiresCtrl'
    };

});

app.controller('WiresCtrl', function($scope) {

    $scope.currentGame.child('modules').once('value', function(snap) {
        $scope.wires = snap.val()[0].content;
    });

    $scope.submit = function(wire) {
        if (wire.solution === true) {
            console.log('YOU WIN!!');
        } else {
            console.log('it is a strike!');
        }
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});
