angular.module('atm')
.service('ManageClientService', ManageClientService);

function ManageClientService(restFactory){
    const vm = this;
    vm.persist = function(data) {
        if(data.id){
            return data.put();
        }else{
            return restFactory.resource(['atm/client']).post(data);
        }
    }

    vm.delete = function(data){
        return restFactory.resources(['atm/client',data]).remove();
    }

    vm.list = function(){
        return restFactory.resource(['atm/client']).getList();
    }

    return {
        persist: vm.persist,
        list: vm.list,
        delete: vm.delete
    };
}