"use strict";

angular
  .module("myApp.view1-electric", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1/view1-electric", {
        templateUrl: "view1/view1-electric/view1-electric.html",
        controller: "View1ElectricCtrl",
      });
    },
  ])
  .controller("View1ElectricCtrl", function ($scope) {
    $scope.electricFirstList = [
      {
        icon: "./font/24gl-minimize2.png",
        title: "屏幕和睡眠",
        describe: "",
        href: "./font/Chevron-Right.png",
        drop: false,
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "电源模式",
        describe: "根据电源使用情况和性能来优化你的设备",
        href: "./font/Chevron-Right.png",
        drop: true,
      },
    ];
    $scope.electricSecondList = [
      {
        icon: "./font/24gl-minimize2.png",
        title: "节电模式",
        describe: "通过限制一些通知和后台活动延长电池寿命",
        href: "./font/Chevron-Right.png",
        drop: true,
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "电池使用情况",
        describe: "",
        href: "./font/Chevron-Right.png",
        drop: false,
      },
    ];

    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option = {
      baseOption: {
        timeline: {
          data: ["14:00", "20:00", "2:00", "8:00", "14:00"],
        },
      },
    };

    option = {
      dataset: {
        source: [
          ["time", "14:00", "20:00", "2:00", "8:00", "14:00"],
          ["14:00", 100, 100, 100, 100, 100, 100],
        ],
      },
      xAxis: {
        type: "category",
        data: ["14:00", "20:00", "2:00", "8:00", "14:00"],
      },
      yAxis: {
        type: "value",
        data: ["50%", "100%"],
      },
      series: [
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
        { type: "bar" },
      ],
    };

    option && myChart.setOption(option);
  });
