'use strict';

/**
 * @ngdoc function
 * @name readingListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the readingListApp
 */
angular.module('readingList')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
