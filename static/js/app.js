(function () {
    angular.module('avengers', [])
        .controller('AvengersListCtrl', AvengersListCtrl);

    function AvengersListCtrl() {
        this.ultimateAnswer = 42;
        this.avengers = listOfAvengers;
    }

    var listOfAvengers = [
        {
            'name': 'Iron Man'
        },
        {
            'name': 'Hulk'
        },
        {
            'name': 'Thor'
        }
    ];

}());