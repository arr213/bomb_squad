app.directive('stage', function() {

    return {
        restrict: 'E',
        scope: {
            stage: '='
        },
        templateUrl: 'js/common/directives/stage/stage.html',
        // link: function(scope, elements, attr) {
        //     // console.log('!!!!', scope.stage)
        //     // scope.modules = scope.stage.modules;
        // }
    };

});

