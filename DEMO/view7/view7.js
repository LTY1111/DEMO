'use strict';

angular.module('myApp.view7', ['ngRoute',"myApp.view7-input","myApp.view7-language","myApp.view7-perspective","myApp.view7-time"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'View7Ctrl'
  });
}])

.controller('View7Ctrl', [function() {

}]);