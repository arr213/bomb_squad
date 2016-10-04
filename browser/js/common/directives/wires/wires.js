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

    // var ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com/1/wires');

    // $scope.wires = [];

    // ref.on('value', function (snapshot) { // information changed
    //     console.log('Change from Firebase');
    //     $scope.wires = snapshot.val();
    //     $scope.$digest();
    // });

    $scope.wires = [
        {color: 'red'},
        {color: 'blue'},
        {color: 'yellow'}
    ];

    $scope.submit = function() {
        console.log('Hey you clicked this! You win.');
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});
