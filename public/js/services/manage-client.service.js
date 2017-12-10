angular.module('atm')
.service('ManageClientService', ManageClientService);

function ManageClientService(restFactory){
    const vm = this;
    vm.persist = function(data) {
        return restFactory.resource(['atm/client/create']).post(data);
    }

    vm.delete = function(data){
        return restFactory.resources(['atm/client/delete',data]).remove();
    }

    vm.list = function(){
        return restFactory.resource(['atm/client/list']).getList();
    }

    return {
        persist: vm.persist,
        list: vm.list,
        delete: vm.delete
    };
}