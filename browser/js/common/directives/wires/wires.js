app.directive('wires', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        controller: 'WiresController'
    };

});

app.controller('WiresController', function($scope) {

    // inject $firebaseArray;

    // var ref = new Firebase('#');

    // $scope.wires = firebaseArray(ref);

    $scope.wires = [{color: 'red'}, {color: 'blue'}, {color:'yellow'}, {color: 'red'}];

    $scope.submit = function() {
        console.log('Hey you clicked this! You win.');
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});
