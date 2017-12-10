angular.module('atm').config(routesConfig);


function routesConfig($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/login');

    $httpProvider.defaults.withCredentials = true;

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'

    }).state('logout', {
            url: '/logout',
            controller: 'LogoutController',
            controllerAs: 'vm'

        }).state('edit', {
            url: '/client',
            templateUrl: 'partials/manage-client.html',
            controller: 'ManageClientController',
            controllerAs: 'vm'

        }).state('withdraw', {
            url: '/withdraw',
            templateUrl: 'partials/withdraw.html',
            controller: 'WithdrawController',
            controllerAs: 'vm',

        });

}

