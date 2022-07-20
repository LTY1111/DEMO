'use strict';

angular
  .module("myApp.view7-input", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view7/view7-input", {
        templateUrl: "view7/view7-input/view7-input.html",
        controller: "View7Input",
      });
    },
  ])

  .controller("View7Input", function ($scope, $http) {
    // $scope.switch0 = [false];
    // $scope.switch1 = [false];
    //   var app=angular.module('myAppinput',[]);
    // app.controller('personCtrl',function($scope){
    //   $scope.myVar=false;
    //   $scope.toggle=function(){
    //     console.log('sdfa')
    //     $scope.myVar=!$scope.myVar
    //   }
    // })
    $scope.m = {
      switch0: true,
      switch1:false
    };
  })
  .controller("personCtrl", function ($scope) {
    $scope.myVar = false;
    $scope.toggle = function () {
      // console.log("sdfa");
      $scope.myVar = !$scope.myVar;
    };
  });
