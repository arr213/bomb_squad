app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope){

    

    $scope.swiped = false;

    $scope.onSwipeRight = function(ev){
        console.log('swiped right!')
        if(!$scope.swiped){
            $scope.swiped = true;
        }
    };

    $scope.onSwipeLeft = function(ev){
        console.log('swiped left!');
        if($scope.swiped){
            $scope.swiped = false;
        }
    };

})


