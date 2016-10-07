app.directive('wires', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        controller: 'WiresCtrl'
    };

});

app.controller('WiresCtrl', function($scope) {


    // HELPER FUNCTION: CHANGES WIRE STRIKES IN FIREBASE
    function wireStrikes(obj) {
        if (obj[obj.length - 2]['active']) {
            console.log('YOU LOST BY STRIKE');
            return;
        }
        for (var i = 0; i < obj.length; i++) {
            if (!obj[i]['active']) {
                //set that value in firebase to true
                obj[i]['active'] = true;
                console.log('this is the object we r getting', obj);
                $scope.currentGame.update({ strikes: obj });

                console.log(obj)
                return;
            }

        }
    }


    $scope.currentGame.child('modules').once('value', function(snap) {
        $scope.wires = snap.val()[0].content;
    });

    $scope.submit = function(wire) {
        if (wire.solution === true) {
            console.log('YOU WIN!!');
        } else {
            console.log('it is a strike!');

            $scope.currentGame.on('value', function(snapshot) {
                $scope.strikes = snapshot.val().strikes;
                $scope.$digest();
            });

            // console.log('this is a strike in wires & means its working', $scope.strikes[0].active);
            wireStrikes($scope.strikes);

        }
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});
