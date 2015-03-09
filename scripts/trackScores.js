var trackScores = function ($scope, statistics) {   
    $scope.scores = scores.getScores();
    $scope.scoresTotal = scores.getScoresTotal();
    $scope.averageScore = scores.getAverageScore();


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

};