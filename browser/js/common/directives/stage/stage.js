app.directive('stage', function() {

    return {
        restrict: 'E',
        scope: {
            stage: '='
        },
        controller: 'StageCtrl',
        templateUrl: 'js/common/directives/stage/stage.html'
    };

});

app.controller('StageCtrl', function($rootScope, $scope){
    $scope.userId = $rootScope.userId;
});
