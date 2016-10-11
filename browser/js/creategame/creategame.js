app.config(function ($stateProvider) {

    $stateProvider.state('create', {
        url: '/create',
        templateUrl: 'js/creategame/creategame.html',
        controller: 'CreateCtrl'
    });

});

app.controller('CreateCtrl', function($scope){

});
