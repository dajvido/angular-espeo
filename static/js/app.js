(function () {
    angular.module('avengers', [
        'ngRoute',
        'avengers.service'
    ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/avengers', {
                    templateUrl: 'tpl-avengers',
                    controller: 'AvengersListCtrl',
                    controllerAs: 'list'
                })
                .when('/avenger/:avenger', {
                    templateUrl: 'tpl-avenger',
                    controller: 'AvengerCtrl',
                    controllerAs: 'details'
                })
                .otherwise({
                    redirectTo: '/avengers'
                })
        })
        .controller('AvengersListCtrl', AvengersListCtrl)
        .controller('AvengerCtrl', AvengerCtrl)
        .filter('checkmark', CheckMarkFilter);

    function AvengersListCtrl(AvengersRepository) {
        var ths = this;
        ths.ultimateAnswer = 42;
        ths.avengers = AvengersRepository.fetchAll();
        ths.newAvenger = {
            hasOwnSuperPowers: false
        };
        ths.add = function (newAvenger) {
            ths.avengers.push(newAvenger);
            ths.newAvenger = {
                hasOwnSuperPowers: false
            };
        }
    }

    function AvengerCtrl($routeParams, AvengersRepository) {
        var ths = this;
        ths.avenger = AvengersRepository.fetchOne([$routeParams.avenger]);
    }

    function CheckMarkFilter () {
        function filter(input) {
            return input ? '\u2714' : '\u2718';
        }
        return filter;
    }
}());