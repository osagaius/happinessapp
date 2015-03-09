var happinessApp = angular.module('HappinessApp', ['ui.router']);

happinessApp.factory('reasons', [function() {
    var value = [
    {
        id: 'Reason 1',
        description: "Increase happiness"
    },
    {
        id: 'Reason 2',
        description: "Decrease unhappiness"
    },
    {
        id: 'Reason 3',
        description: "Because we care"
    }
    ];
    return value;
}]);

happinessApp.factory('scores', [function() {
    var scores = [];
    var max;
    var min;

    return {
        getMinScore: function() {
            return Math.min.apply(null, scores);
        }
        getMaxScore: function() {
            return Math.max.apply(null, scores);
        }
        getAverageScore: function() {
            var sum = 0;
            for( var i = 0; i < scores.length; i++ ){
                sum += scores[i];
            }

            var average = sum/scores.length;
            return !!average ? average : 0;
        },
        getScores: function() {
            return scores;
        },
        getScoresTotal: function() {
            var sum = 0;
            for( var i = 0; i < scores.length; i++ ){
                sum += scores[i];
            }
            return sum;
        }
    }
}]);

happinessApp.controller('ReasonsController',
    [
    '$scope',
    'reasons',
    listReasons
    ]
    );

happinessApp.controller('ScoresController', function($scope, scores) {
    $scope.scores = scores.getScores();
    $scope.scoresTotal = scores.getScoresTotal();
    $scope.averageScore = scores.getAverageScore();

    $scope.addOverallScore = function() {
        if(!$scope.score || $scope.score === '') { return; }

        var currentScore = parseInt($scope.score, 10);
        if (!((currentScore !== currentScore) || (currentScore < 1)
            || currentScore > 10)) {
            $scope.overallScore = currentScore;
    } else {
        alert("Please enter a number between 1 and 10");
        return;
    }

    $scope.score = '';
};

$scope.addScore = function() {
    if(!$scope.score || $scope.score === '') { return; }

    var currentScore = parseInt($scope.score, 10);
    if (!((currentScore !== currentScore) || (currentScore < 1)
        || currentScore > 10)) {
        $scope.scores.push(currentScore);
} else {
    alert("Please enter a number between 1 and 10");
    return;
}

$scope.score = '';
};
});
