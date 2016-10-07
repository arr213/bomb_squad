app.directive('module', function() {

    return {
        restrict: 'E',
        scope: {
            module: '='
        },
        templateUrl: 'js/common/directives/module/module.html',
        controller: 'GameCtrl'
    };

});
