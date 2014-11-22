'use strict';

/**
 * @ngdoc function
 * @name myPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPageApp
 */
angular.module('myPageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
