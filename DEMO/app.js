"use strict";

// Declare app level module which depends on views, and core components
angular
  .module("myApp", [
    "ngRoute",
    "myApp.view1",
    "myApp.view2",
    "myApp.view7",
    "myApp.version",
    "DemoComponents",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/view1" });
    },
  ])
  .controller("myCtrl", function ($scope,$rootScope) {
    $rootScope.onJumpPage=function(url){
      // onJumpPage.url=""
      window.location.href=url
    }


  });
