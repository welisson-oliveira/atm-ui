angular.module('atm')
    .controller('LogoutController', LogoutController);

function LogoutController($cookies, $location) {
    const vm = this;

    vm.sair = function () {
        $cookies.remove('userId');
        $cookies.remove('userName');
        $cookies.remove('userBalance');
        $location.path('/login');
    }

    vm.sair();

}