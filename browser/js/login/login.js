app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, $state, $timeout, $log) {

    $scope.formInvalid = false;

    $scope.login = {};

    $scope.sendLogin = function (loginInfo) {
        console.log('login info #######', loginInfo)
        if (loginInfo.email.$invalid) {
          $scope.formInvalid = true;
          $timeout(function(){
            $scope.formInvalid = false;
          }, 1000);
        }

        $scope.email = null;
        $scope.password = null;

        AuthService.login(loginInfo).then(function () {
            $state.go('home');
        }).catch($log.error);

    };

});
