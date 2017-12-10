angular.module('atm')
.service('LoginService', LoginService);

function LoginService(restFactory){
    const vm = this;
    vm.login = function(data) {
        return restFactory.resource(['atm/login']).post(data);
    }
    return {
        login: vm.login
    };
}