(function () {
  'use strict';
  angular.module('myApp.UserService', []).
    factory('UserService', function($http) {
      var UserService = {};
      UserService.data = {
        name: 'Tew',
      }
      return UserService;
  });
})();