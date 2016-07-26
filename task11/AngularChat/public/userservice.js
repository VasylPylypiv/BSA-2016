(function(){
    'use strict';

    var module = angular.module('app');
    module.factory('userservice', userservice);
    
    function userservice() {
       return {
            addname: addname
       }

       function addname(name, vm){
            if(name){
                vm.author = name;
                console.log(name);
                vm.nameValid = true;
            } else {
                vm.nameValid = false;
            }
       }
    }
})();