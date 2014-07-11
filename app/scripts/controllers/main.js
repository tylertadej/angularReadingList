'use strict';

/**
 * @ngdoc function
 * @name readingListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the readingListApp
 */
angular.module('readingList')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
