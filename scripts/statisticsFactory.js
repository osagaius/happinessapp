happinessApp.factory('statistics', [function() {
	var value = {
					overallScore: 0,
					minScore: 0,
					maxScore:0,
					happinessDifference: 0
	};
	
	return value;
}]);