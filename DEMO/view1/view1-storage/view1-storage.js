"use strict";

angular
  .module("myApp.view1-storage", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/view1-storage", {
        templateUrl: "view1/view1-storage/view1-storage.html",
        controller: "View1StorageCtrl",
      });
    },
  ])
  .controller("View1StorageCtrl", function ($scope) {
    $scope.m = {
      switch0: true,
    };
    $scope.storageFirstList = [
      {
        icon: "./font/24gl-minimize2.png",
        title: "存储感知",
        describe: "自动释放空间、删除临时文件，并管理本地可用的云内容",
        href: "./font/Chevron-Right.png",
        drop: true,
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "清理建议",
        describe: "超过512MB存储空间可用",
        href: "./font/Chevron-Right.png",
        drop: false,
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "高级存储设置",
        describe: "备份选项、存储空间、其他磁盘和卷",
        href: "./font/Chevron-Right.png",
        drop: false,
      },
    ];
  });
