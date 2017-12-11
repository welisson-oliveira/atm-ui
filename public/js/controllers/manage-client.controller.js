angular.module('atm')
.controller('ManageClientController', ManageClientController);

function ManageClientController($cookies, ManageClientService, RouteAccess) {

    RouteAccess.checkAccess($cookies.get('userId'));

    const vm = this;
    vm.title = 'Manage Client';
    vm.warning = false;
    vm.enableAccount = false;
    
    vm.account = '';

    vm.client = {
        id:'',
        name:'',
        balance:'',
        login:{
            id:'',
            account:'',
            password:''
        }
    };
    
    vm.passwordConfirm = '';

    vm.clients = [];
    vm.disableButton = true;
    
    vm.isValid = function(){
        vm.disableButton = !(vm.formClient.$valid && vm.client.login.password == vm.passwordConfirm);
    }

    vm.confPassword = function(){
        var temp = vm.message;
        if(vm.client.login.password != vm.passwordConfirm && vm.client.login.password && vm.passwordConfirm){
            vm.message = "wrong confirm password";
            vm.warning = true;
        }else{
            if(temp == "wrong confirm password"){
                vm.message = "";
                vm.warning = false;
            }
        }
    }

    vm.persist = function(){
        if (vm.formClient.$valid) {
            vm.disableButton = true;
            return ManageClientService.persist(vm.client).then(function(client){
                vm.warning = true;
                clearAll();
                vm.list();
                vm.enableAccount = false;
                return vm.message = "Cliente salvo com sucesso!";
            }, function(error){
                vm.isValid();
                vm.warning = true;
                return vm.message = error.data.message;
            });
        }
    }

    vm.edit = function(client){
        client.login.password = '';
        vm.client = client;
        vm.enableAccount = true;
    }

    vm.cancel = function(){
        clearAll();
        vm.enableAccount = false;
    }

    vm.delete = function(id){
        return ManageClientService.delete(id).then(function(){
            
            vm.list();
        }, function(error){
            console.log(error);
        });
    }

    vm.list = function(){
        return ManageClientService.list().then(function(data){
            vm.clients = data;
        }, function(error){
            console.log(error);
        });
    }
    vm.list();

    function clearAll(){
        vm.client = {
            id:'',
            name:'',
            balance:'',
            login:{
                id:'',
                account:'',
                password:''
            }
        }
        vm.passwordConfirm = '';
    }

}