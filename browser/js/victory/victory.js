app.config(function ($stateProvider) {

    $stateProvider.state('victory', {
        url: '/victory/:gameKey',
        templateUrl: 'js/victory/victory.html',
        controller: 'VictoryCtrl',
    });

});

app.controller('VictoryCtrl', function($scope){
})