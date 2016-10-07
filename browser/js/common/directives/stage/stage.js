app.directive('stage', function() {

    return {
        restrict: 'E',
        scope: {
            stage: '='
        },
        templateUrl: 'js/common/directives/stage/stage.html',
        controller: 'StageCtrl'
    };

});

app.controller('StageCtrl', function($scope) {

});
