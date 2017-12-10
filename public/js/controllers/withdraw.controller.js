angular.module('atm')
.controller('WithdrawController', WithdrawController);

function WithdrawController(WithdrawService, $cookies, RouteAccess) {

    RouteAccess.checkAccess($cookies.get('userId'));
    
    const vm = this;
    vm.title = 'Withdraw';
    vm.warning = false;
    vm.message = '';

    vm.money = '';
    vm.payload = {
        idClient: $cookies.get('userId'),
        value: ''
    }

    vm.userName = $cookies.get('userName');

    vm.withdraw = function(){
        return WithdrawService.withdraw(vm.payload).then(function(money){
            vm.money = money;
        }, function(error){
            vm.warning = true;
            console.log(error.data.message);
            return vm.message = error.data.message;
        });
    }

}