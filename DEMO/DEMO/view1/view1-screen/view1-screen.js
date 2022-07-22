"use strict";

angular
  .module("myApp.view1-screen", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/view1-screen", {
        templateUrl: "view1/view1-screen/view1-screen.html",
        controller: "View1ScreenCtrl",
      });
    },
  ])
  .controller("View1ScreenCtrl", function ($scope) { 
      $scope.drop = ["2"];
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
        
    })
    ;
