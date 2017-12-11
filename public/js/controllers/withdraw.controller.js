angular.module('atm')
    .controller('WithdrawController', WithdrawController);

function WithdrawController(WithdrawService, $cookies, RouteAccess) {

    RouteAccess.checkAccess($cookies.get('userId'));

    const vm = this;
    vm.title = 'Withdraw';
    vm.warning = false;
    vm.message = '';
    vm.saldo = '';

    vm.money = '';
    vm.payload = {
        idClient: $cookies.get('userId'),
        value: ''
    }

    vm.userName = $cookies.get('userName');

    vm.withdraw = function () {
        if (vm.formWithdraw.$valid) {
            return WithdrawService.withdraw(vm.payload).then(function (money) {
                vm.money = money;
                vm.warning = false;
                vm.payload.value =  '';
            }, function (error) {
                vm.warning = true;
                vm.money = '';
                return vm.message = error.data.message;
            });
        }
    }

}