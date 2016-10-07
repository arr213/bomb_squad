app.config(function ($stateProvider) {

    $stateProvider.state('gameover', {
        url: '/gameover',
        templateUrl: 'js/gameover/gameover.html',
        controller: 'GameoverCtrl'
    });

});

app.controller('GameoverCtrl', function ($scope){

});