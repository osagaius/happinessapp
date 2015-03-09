happinessApp.factory('scores', [function() {
    var scores = [];

    return {
        getMinScore: function() {
            var min = scores[0];

            for( var i = 0; i < scores.length; i++ ){
                if (scores[i] < min) {
                    min = scores[i];
                }
            }
            return min;
        },
        getMaxScore: function() {
            var max = scores[0];

            for( var i = 0; i < scores.length; i++ ){
                if (scores[i] > max) {
                    max = scores[i];
                }
            }
            return max;
        },
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