'use strict';

angular.module('broserverApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


