app.config(function ($stateProvider) {

    $stateProvider.state('game', {
        url: '/game',
        templateUrl: 'js/game/game.html',
        controller: 'GameCtrl'
    });

});

app.controller('GameCtrl', function($scope){

  var rootRef = firebase.database().ref('/game');

  var currentGame = rootRef.child('-KTLBzOuPzVqm_kp_nhT');

  currentGame.on('value', function(snapshot) {

    $scope.strikes = snapshot.val().strikes;
    console.log($scope.strikes);
    $scope.$digest();

  });

  $scope.clicked = function() {
    console.log('clicked');
    rootRef.once('value', function(snap) {
      console.log(snap.val());
    });
  };

  $scope.loggedInUserId = 1;

  // $scope.time = '09:59';

  $scope.components = [{ userAssigned: 1, type: 'battery', content: null }, { userAssigned: 2, type: 'serial number', content: '1238548'}, { userAssigned: 3, type: 'battery', content: null }];


  $scope.squadName = 'the squad';


  $scope.gamePlaying = null;

  $scope.startTime = null;

  $scope.startGame = function() {

      $scope.gamePlaying = true;
      $scope.timerNum = '5:00';

      currentGame.on('value', function(snapshot) {
          $scope.timeLimit = snapshot.val().timeLimit;
      });

      $scope.startTime = Date.now();

      currentGame.set({ startTime: $scope.startTime })

      setInterval(function() {

          var ms = $scope.timeLimit - (Date.now() - $scope.startTime);
          var seconds = function() {
              var s = (ms / 1000) % 60;
              if (s < 10) {
                  return '0' + s.toString().slice(0, 1);
              } else {
                  return s.toString().slice(0, 2);
              }

          }

          $scope.timerNum = (((ms / 1000 / 60) << 0) + ':' + seconds());



          $scope.$digest();

          console.log($scope.timerNum);
      }, 500);


  }



})


