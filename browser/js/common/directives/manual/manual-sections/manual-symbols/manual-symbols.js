// manual-intro.js
app.directive('manualSymbols', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/manual/manual-sections/manual-symbols/manual-symbols.html',
        controller: 'ManualSymbolsController'
    };

});


app.controller('ManualSymbolsController', function($scope) {

	$scope.symbolList = [{
    id: 1,
    name: 'lollipop',
    unicode: 'Ϙ'
}, {
    id: 2,
    name: 'A',
    unicode: 'Ѧ'
}, {
    id: 3,
    name: 'lambda',
    unicode: 'ƛ'
}, {
    id: 4,
    name: 'zig-zag',
    unicode: 'ϟ'
}, {
    id: 5,
    name: 'kitty-cat',
    unicode: 'ѭ'
}, {
    id: 6,
    name: 'curly-H',
    unicode: 'ϗ'
}, {
    id: 7,
    name: 'backwards-C-dot',
    unicode: 'Ͽ'
}, {
    id: 8,
    name: 'backwards-E',
    unicode: 'Ӭ'
}, {
    id: 9,
    name: 'lowercase-phi',
    unicode: 'Ҩ'
}, {
    id: 10,
    name: 'outline-star',
    unicode: '☆'
}, {
    id: 11,
    name: 'upside-down-question-mark',
    unicode: '¿'
}, {
    id: 12,
    name: 'copyright',
    unicode: '©'
}, {
    id: 13,
    name: 'cyclops',
    unicode: 'Ѽ'
}, {
    id: 14,
    name: 'mirrored-K',
    unicode: 'Ж'
}, {
    id: 15,
    name: 'right-half-R',
    unicode: 'Ꝛ'
}, {
    id: 16,
    name: 'lowercase-delta',
    unicode: 'Ϭ'
}, {
    id: 17,
    name: 'pilcrow',
    unicode: '¶'
}, {
    id: 18,
    name: 'T-b',
    unicode: 'Ѣ'
}, {
    id: 19,
    name: 'smiley',
    unicode: '☺'
}, {
    id: 20,
    name: 'capital-psi',
    unicode: 'ψ'
}, {
    id: 21,
    name: 'C-dot',
    unicode: 'Ͼ'
}, {
    id: 22,
    name: 'snake',
    unicode: 'Ѯ'
}, {
    id: 23,
    name: 'filled-in-star',
    unicode: '★'
}, {
    id: 24,
    name: 'unequal',
    unicode: '҂'
}, {
    id: 25,
    name: 'a-e',
    unicode: 'æ'
}, {
    id: 26,
    name: 'backwards-N',
    unicode: 'Ҋ'
}, {
    id: 27,
    name: 'capital-omega',
    unicode: 'Ω'
}];

$scope.columns = [
    [
        $scope.symbolList[0],
        $scope.symbolList[1],
        $scope.symbolList[2],
        $scope.symbolList[3],
        $scope.symbolList[4],
        $scope.symbolList[5],
        $scope.symbolList[6],
    ],
    [
        $scope.symbolList[7],
        $scope.symbolList[0],
        $scope.symbolList[6],
        $scope.symbolList[8],
        $scope.symbolList[9],
        $scope.symbolList[5],
        $scope.symbolList[10],
    ],
    [
        $scope.symbolList[11],
        $scope.symbolList[12],
        $scope.symbolList[8],
        $scope.symbolList[13],
        $scope.symbolList[14],
        $scope.symbolList[2],
        $scope.symbolList[9],
    ],
    [
        $scope.symbolList[15],
        $scope.symbolList[16],
        $scope.symbolList[17],
        $scope.symbolList[5],
        $scope.symbolList[13],
        $scope.symbolList[10],
        $scope.symbolList[18],
    ],
    [
        $scope.symbolList[19],
        $scope.symbolList[18],
        $scope.symbolList[17],
        $scope.symbolList[20],
        $scope.symbolList[16],
        $scope.symbolList[21],
        $scope.symbolList[22],
    ],
    [
        $scope.symbolList[15],
        $scope.symbolList[7],
        $scope.symbolList[23],
        $scope.symbolList[24],
        $scope.symbolList[19],
        $scope.symbolList[25],
        $scope.symbolList[26],
    ]
]

});
