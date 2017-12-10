angular.module('atm').config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:8081/');
}]);