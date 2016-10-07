app.directive('symbols', function () {

  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/symbols/symbols.html',
    controller: 'SymbolsCtrl'
  };

});

app.controller('SymbolsCtrl', function ($scope, $firebaseObject) {

  $scope.symbols = [{
    id: 10,
    name: 'outline-star',
    unicode: '☆',
    pressOrder: 4,
    pressed: false
  }, {
    id: 12,
    name: 'copyright',
    unicode: '©',
    pressOrder: 1,
    pressed: false
  }, {
    id: 3,
    name: 'lambda',
    unicode: 'ƛ',
    pressOrder: 3,
    pressed: false
  }, {
    id: 14,
    name: 'mirrored-K',
    unicode: 'Ж',
    pressOrder: 2,
    pressed: false
  }];

  $scope.active = true;

  $scope.buttonPress = function (symbol) {
    if (!symbol.pressed && $scope.active) {
      if (symbol.pressOrder === $scope.correctPressCount) {
        $scope.correctPressCount++;
        symbol.pressed = true;
      } else {
        alert('you messed up');
      }
    }
  }

  $scope.correctPressCount = 1;

});