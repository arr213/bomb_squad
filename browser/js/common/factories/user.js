app.factory('UserFactory', function($http) {
    return {
        add: function(reqUser) {
            return $http.post('/api/members', reqUser)
            .then(function(response) {
                return response.data;
            });
        }
    };
});
