app.directive('manualPasswords', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/manual/manual-sections/manual-passwords/manual-passwords.html',
        controller: 'ManualPasswordsCtrl'
    };

});

app.controller('ManualPasswordsCtrl', function($scope) {

    $scope.passwords = [
        'every',
        'large',
        'plant',
        'these',
        'where',
        'about',
        'spell',
        'again',
        'found',
        'never',
        'right',
        'study',
        'think',
        'world',
        'below',
        'great',
        'other',
        'small',
        'their',
        'three',
        'would',
        'could',
        'house',
        'place',
        'sound',
        'there',
        'water',
        'write'
    ].sort();

       console.log('passssswords: ', $scope.passwords);
});
