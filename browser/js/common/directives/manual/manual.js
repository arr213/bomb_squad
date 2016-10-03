app.directive('manual', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/manual/manual.html',
        controller: 'ManualController'
    };

});

app.controller('ManualController', function($scope) {

    $scope.sections = [{header: 'wires', body: 'cut the blue wire, gurl.', show: false}, {header: 'morse code', body: 'blink blink blink morse code.', show: false}, {header: 'maze', body: 'walk down and make a right and then a left, etc.', show: false}];

    $scope.showBody = function(section) {
        section.show = !section.show;
    };

});
