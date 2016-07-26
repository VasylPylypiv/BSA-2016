(function(){
    'use strict';

    var module = angular.module('app');
    module.factory('userservice', userservice);

    userservice.$inject = ['$http'];
    
    function userservice($http) {
        return {
            getMessages: getMessages,
            putMessages: putMessages
        };
        
        function getMessages() {

             return $http.get('/messages')
             .then(showMessages)
        }
        function showMessages(response) {
            
            return response.data;
        }

        function putMessages(message, vm){

            $http.post('/messages', {author: message.author, text: message.text})
                    .success(function (data, status, headers, config) {

                        vm.messages.push({author: message.author, text: message.text});
                        vm.messageText = "";
                })
                    .error(function (data, status, header, config) {
                        console.log('error');
                });
        }

    }
})();