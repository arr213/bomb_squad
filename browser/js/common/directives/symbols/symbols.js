app.directive('symbols', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/symbols/symbols.html',
    controller: 'SymbolsCtrl',
    scope: {
      module: '='
    }
  };

});

app.controller('SymbolsCtrl', function ($scope, StrikeFactory, SuccessFactory, $stateParams) {

  let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

  gameRef.on('value', function (snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.currentStage = snap.val().currentStage;
        $scope.$evalAsync();
    });

  $scope.symbols = $scope.module.content;

  $scope.buttonPress = function (symbol) {
    if (!symbol.pressed) {
      if (symbol.pressOrder === $scope.correctPressCount) {
        $scope.correctPressCount++;
        symbol.pressed = true;
        if($scope.correctPressCount===5){
          SuccessFactory.success($scope.currentStage, gameRef);
        }
      } else {
        StrikeFactory.strike($scope.strikes, gameRef);
      }
    }
  };

  $scope.correctPressCount = 1;


});
