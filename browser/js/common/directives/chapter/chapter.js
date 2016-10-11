// chapter.js
app.directive('chapter', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/chapter/chapter.html',
        controller: 'ChapterController'
    };

});
