var trackStatistics = function ($scope, scores) {
    $scope.scores = scores;
    $scope.overall = scores.getOverallScore();
    $scope.temper = scores.getTemperament();
    $scope.minScore = scores.getMinScore();
    $scope.maxScore = scores.getMaxScore();
    $scope.difference = $scope.overall - scores.getAverageScore();


    $scope.addOverallScore = function() {
        if(!$scope.score || $scope.score === '') { return; }

        var currentScore = parseInt($scope.score, 10);
        if (!((currentScore !== currentScore) || (currentScore < 1)
            || currentScore > 10)) {
            $scope.scores.setOverallScore(currentScore);
        } else {
            alert("Please enter a number between 1 and 10");
            return;
        }

        $scope.score = '';
    };

};