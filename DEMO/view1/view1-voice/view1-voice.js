"use strict";

angular
  .module("myApp.view1-voice", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/view1-voice", {
        templateUrl: "view1/view1-voice/view1-voice.html",
        controller: "View1VoiceCtrl",
      });
    },
  ])
  .controller("View1VoiceCtrl", function ($scope) { 
    $scope.m = {
      switch0: true,
    };
    $scope.drop = ["2"];
    // $scope.voice = '';
        $scope.screenFirstList = [
          {
            icon: "./font/24gl-minimize2.png",
            title: "夜间模式",
            describe: "使用较暖的颜色帮助屏蔽蓝光",
            href: "./font/Chevron-Right.png",
            drop: true,
          },
          {
            icon: "./font/50_xitongxinxi.png",
            title: "HDR",
            describe: "有关HDR的详细信息",
            href: "./font/Chevron-Right.png",
            drop: false,
          },
    ];
    $scope.toggle = function () {
      $scope.myVar3 = !$scope.myVar3;

    };
    $scope.toggle2 = function () {
      $scope.myVar4 = !$scope.myVar4;
    };
        
    })
    ;
