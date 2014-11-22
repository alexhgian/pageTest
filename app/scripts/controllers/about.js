'use strict';

/**
 * @ngdoc function
 * @name myPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPageApp
 */
angular.module('myPageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
