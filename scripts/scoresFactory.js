happinessApp.factory('scores', [function() {
    var scores = [];
    var max;
    var min;
    var overallScore;

    return {
        getMinScore: function() {
            return Math.min.apply(null, scores);
        },
        getMaxScore: function() {
            return Math.max.apply(null, scores);
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