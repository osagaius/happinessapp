var trackStatistics = function ($scope, statistics) {
	$scope.overallScore = statistics.overallScore;
	$scope.minScore = statistics.minScore;
	$scope.maxScore = statistics.maxScore;

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
};	