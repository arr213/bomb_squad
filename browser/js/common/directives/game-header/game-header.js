app.directive('gameHeader', function(){
  return {
    restrict: 'E',
    templateUrl: '/js/common/directives/game-header/game-header.html',
    controller: 'GameCtrl'
  }
})

// app.controller('GameHeaderCtrl', function($scope, $firebaseObject){

  // var rootRef = firebase.database().ref('/game');

  // var currentGame = rootRef.child('-KTLBzOuPzVqm_kp_nhT');


  // currentGame.on('value', function(snapshot) {

  //   $scope.strikes = snapshot.val().strikes;
  //   console.log($scope.strikes);
  //   $scope.$digest();

  // });

  // $scope.clicked = function() {
  //   console.log('clicked');
  //   rootRef.once('value', function(snap) {
  //     console.log(snap.val());
  //   });
  // };

  // $scope.loggedInUserId = 1;

  // $scope.time = '09:59';

  // $scope.components = [{ userAssigned: 1, type: 'battery', content: null }, { userAssigned: 2, type: 'serial number', content: '1238548'}, { userAssigned: 3, type: 'battery', content: null }];


  // $scope.squadName = 'the squad';




// });
