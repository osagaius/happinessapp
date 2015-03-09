happinessApp.factory('scores', [function() {
    var scores = [];
    var overall = 0;

    return {
        setOverallScore: function(score) {
            overall = score;
        },
        getOverallScore: function() {
            return overall;
        },
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
        getTemperament: function() {
            var temper = this.getMaxScore() - this.getMinScore();
            if (temper <= 2) {
                return "even-tempered";
            }
            else if (temper >= 6) {
                return "moody";
            }
            else {
                return "neither even-tempered or moody";
            }
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