'use strict';

angular.module('broserverApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
