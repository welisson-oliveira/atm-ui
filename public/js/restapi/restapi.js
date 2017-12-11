angular.module('atm').factory("restFactory", restApi);

function restApi(Restangular) {

    var RESTful = new function () {
        var that = this;

        this.one = function (arg) {
            return Restangular.one(arg);
        };

        this.resources = function (args) {
            var base;
            args.forEach(function (element, index, array) {
                if (base) {
                    base = base.all(element);
                } else {
                    base = Restangular.all(element);
                }
            });
            return base;
        };

        this.resource = function (arg) {
            return that.resources([arg]);
        };

        this.update = function(data){
            return Restangular.copy(data);
        }

    };

    // Return public API.
    return RESTful;

}
