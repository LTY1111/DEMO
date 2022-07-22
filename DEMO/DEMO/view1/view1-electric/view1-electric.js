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
    var option;
    let category = [];
    let date = new Date().getHours();
    for (let i = 1; i <= 24; i++) {
      if (i % 6 == 1) {
        let temp = date + 6 * Math.floor(i / 6);
        if (temp > 24) {
          temp -= 24;
        }
        category.push(temp+':00')
      } else {
        category.push("")
      }
    }
    category.push(date + ":00");
    console.log(category);
    option = {
      title: {
        text: "电池电量",
        // textStyle: {
        //   color: black,
        // }
      },
      xAxis: {
        type: "category",
        data: category,
        // axisLabel: {
        //   // offset: 50,
        //   right:15,
        // },
        textStyle: {
          align: "left",
        },
        splitNumber: 5,
      },
      yAxis: {
        min: 0,
        max: 100,
        
        axisLabel: {
          margin: 15,
          formatter: "{value}%",
        },

        splitNumber: 2,
      },
      series: [
        {
          data: [
            100, 100, 100, 80, 70, 10, 20, 30, 40, 100, 80, 100, 50, 60, 70,
            100, 100, 100, 100, 80, 70, 10, 100, 100,
          ],
          type: "bar",
          showBackground: false,
          backgroundStyle: {
            color: "white",
          },
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#43eec6" },
              { offset: 1, color: "#14c8d4" },
            ]),
          },
        },
      ],
    };

    option && myChart.setOption(option);
  });
