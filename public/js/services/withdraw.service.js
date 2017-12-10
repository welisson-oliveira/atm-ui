angular.module('atm')
.service('WithdrawService', WithdrawService);

function WithdrawService(restFactory){
    const vm = this;
    vm.withdraw = function(data) {
        return restFactory.resource(['atm/withdraw']).post(data);
    }
    return {
        withdraw: vm.withdraw
    };
}