app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
            user: function(AuthService){
                return AuthService.getLoggedInUser();
            }
        }
    });
});

app.controller('HomeCtrl', function($scope, user, $state){

    if(!user){
        $state.go('login');
    }

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


