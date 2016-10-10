app.directive('stage', function() {

    return {
        restrict: 'E',
        scope: {
            stage: '='
        },
        controller: 'StageCtrl',
        templateUrl: 'js/common/directives/stage/stage.html'
        // link: function(scope, elements, attr) {
        //     // console.log('!!!!', scope.stage)
        //     // scope.modules = scope.stage.modules;
        // }
    };

});

app.controller('StageCtrl', function($rootScope, $scope){
    $scope.userId = $rootScope.userId;
});
