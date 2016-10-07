app.config(function ($stateProvider) {

    $stateProvider.state('game', {
        url: '/game/:gameKey',
        templateUrl: '/js/game/game.html',
        controller: 'GameCtrl'
    });

});

app.controller('GameCtrl', function($scope, $stateParams){
  $scope.currentStage = 0;
  var rootRef = firebase.database().ref('/game');
  $scope.currentGame = rootRef.child($stateParams.gameKey);

  $scope.currentGame.child('stages').once('value', function(snap) {
      $scope.stages = snap.val();
      $scope.currentModule = $scope.stages[$scope.currentStage].modules;
      $scope.$evalAsync();
        console.log('stageeeeeeeeees',$scope.stages);
  });


  $scope.currentGame.child('currentStage').on('value', function(snap){
    $scope.currentStage = snap.val();
  });

  console.log($scope.currentModule);

  $scope.loggedInUserId = 1;

  $scope.components = [{ userAssigned: 1, type: 'battery', content: null }, { userAssigned: 2, type: 'serial number', content: '1238548'}, { userAssigned: 3, type: 'battery', content: null }];


  $scope.squadName = 'the squad';

  // console.log('plz work', $scope.error)
  $scope.currentGame.on('value', function(snapshot) {
    $scope.strikes = snapshot.val().strikes;
    if($scope.strikes[2]['active']){
        $state.go('gameover');
    }
    $scope.$evalAsync();
  });

  $scope.gamePlaying = null;

  $scope.currentGame.child('gameStarted').on('value', function(snap){
    if(snap.val()){
      if (!$scope.gamePlaying) {
        $scope.gamePlaying = true;
        $scope.startGame();
        $scope.$evalAsync();
      } else {
        return;
      }
    }
  });

  $scope.startGame = function() {

      if(!$scope.gamePlaying){
        $scope.gamePlaying = true;
        $scope.currentGame.update({ gameStarted: true });
        $scope.currentGame.update({ startTime: Date.now() });
      }

      $scope.timerNum = '';

      $scope.currentGame.on('value', function(snapshot) {
          $scope.startTime = snapshot.val().startTime;
          $scope.timeLimit = snapshot.val().timeLimit;
      });

      setInterval(function() {
        if ($scope.timerNum === '0:00') {
            console.log('YOU EXPLODED!!!!');
            $state.go('gameover');
            return;
        }

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
          $scope.$evalAsync();
      }, 500);

  }


});


