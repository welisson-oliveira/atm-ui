angular.module('atm').service('RouteAccess',RouteAccess);

function RouteAccess($location){
    const vm = this;
    vm.checkAccess = function(access){
        //console.log(access);
        if(!access){
            $location.path('/login');
        }
    }

    
    
}