app.directive('gameHeader', function(){
  return {
    restrict: 'E',
    templateUrl: '/js/common/directives/game-header/game-header.html',
    controller: 'GameHeaderCtrl'
  }
})

app.controller('GameHeaderCtrl', function($scope){

  $scope.loggedInUserId = 1;

  $scope.time = '09:59';

  $scope.components = [{ userAssigned: 1, type: 'battery', content: null }, { userAssigned: 2, type: 'serial number', content: '1238548'}, { userAssigned: 3, type: 'battery', content: null }];


  $scope.squadName = 'the squad';

  $scope.strikes = [ true, false, false ];


})
