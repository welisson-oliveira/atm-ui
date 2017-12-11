angular.module('atm')
.controller('LoginController', LoginController);

function LoginController(LoginService, $cookies, $location) {
    const vm = this;
    vm.warning = false;
    vm.message = '';
    vm.title = 'Login';
    vm.login = {
        account:'',
        password:''
    }

    vm.verify = function(){
        if (vm.formLogin.$valid) {
            return LoginService.login(vm.login).then(function(login){
               
                $cookies.put('userId', login.id);
                $cookies.put('userName', login.name);

                $location.path('/withdraw');
            },function(error){
                vm.warning = true;
                $cookies.remove('userId');
                $cookies.remove('userName');
                return vm.message = error.data.message;
            });
        }
    }

}