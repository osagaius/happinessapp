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
    var averageScore = 0

    return {
        getAverageScore: function() {
            return averageScore
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

happinessApp.controller('ScoresController', 
    [
    '$scope',
    'scores',
    function($scope, scores) {
        $scope.averageScore = scores.getAverageScore()
    }
    ]
    );
