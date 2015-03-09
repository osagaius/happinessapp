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