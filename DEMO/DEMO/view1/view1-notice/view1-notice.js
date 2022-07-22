"use strict";

angular
  .module("myApp.view1-notice", ["ngRoute", "myApp.view1-assistant"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/view1-notice", {
        templateUrl: "view1/view1-notice/view1-notice.html",
        controller: "View1NoticeCtrl",
      });
    },
  ])
  .controller("View1NoticeCtrl", function ($scope,$timeout) {
    $scope.m = {
      switch0: true,
      switch1: true,
      switch2: true,
      switch3: false,
      switch4: true,
      switch5: true,
      switch6: true,
      switch7: false,
      switch8: true,
      switch9: true,
      switch10: true,
      switch11: false,
    };
    $scope.list = [
      {
        icon: "./font/50_xitongxinxi.png",
        title: "节电模式",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "设置",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "Windows Hello",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "联想语音助手",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "音频",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "反馈中心",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "自动播放",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "输入切换通知",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "推荐",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "启动应用通知",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "OneDrive",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "Microsoft Store",
        describe: "横幅、声音",
        href: "./font/Chevron-Right.png",
        jump: "",
      },
    ];
    $scope.toggle = function () {
      $scope.myVar6 = !$scope.myVar6;
    };
    $scope.opened = '';
  });
