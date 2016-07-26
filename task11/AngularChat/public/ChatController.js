(function () {	
    var module = angular.module('app');

	module.controller('ChatController', ChatController);

    ChatController.$inject = [
        '$scope',
        'messageservice',
        'userservice'
    ];

    function ChatController($scope, messageservice, userservice){
        var vm = this;
        vm.author = '';
        vm.usernameValid = false;
        vm.messages = [];
        vm.input = "Hello";
        getMessages();

        function getMessages() {
            return messageservice.getMessages()
                .then(function(data) {
                    data.forEach(function(m){
                        vm.messages.push({author: m.author, text: m.text});
                    });

                });
        }

        vm.addUsername = function(author){
            userservice.addname(author, vm);

        }

        vm.addMessage = function(author){
            messageservice.putMessages({author: vm.author, text: vm.messageText} ,vm);
        }
    }
})();