"use strict";

angular
    .module("myApp.view1-assistant", ["ngRoute"])

.config([
        "$routeProvider",
        function($routeProvider) {
            $routeProvider.when("/view1/view1-assistant", {
                templateUrl: "view1/view1-assistant/view1-assistant.html",
                controller: "View1AssistantCtrl",
            });
        },
    ])
    .controller("View1AssistantCtrl", function($scope) {
        $scope.drop = ["2"];
        $scope.m = {
          switch0: true,
          switch1: true,
          switch2: true,
          switch3: true,
          switch4: true,
        };
        // $scope.voice = '';
        $scope.assistantList = [{
                icon: "./font/24gl-minimize2.png",
                title: "在这些时间段内",
                describe: "23：00-7：00；仅优先通知",
                href: "./font/Chevron-Right.png",
                drop: true,
            },
            {
                icon: "./font/50_xitongxinxi.png",
                title: "当我投影屏幕时",
                describe: "仅限闹钟",
                href: "./font/Chevron-Right.png",
                drop: true,
            },
            {
                icon: "./font/50_xitongxinxi.png",
                title: "当我玩游戏时",
                describe: "仅优先通知",
                href: "./font/Chevron-Right.png",
                drop: true,
            },
            {
                icon: "./font/50_xitongxinxi.png",
                title: "在全屏模式下仅使用应用时",
                describe: "仅限闹钟",
                href: "./font/Chevron-Right.png",
                drop: true,
            },
            {
                icon: "./font/50_xitongxinxi.png",
                title: "Windows功能更新后的第一小时",
                describe: "仅优先通知",
                href: "./font/Chevron-Right.png",
                drop: false,
            },
        ];
        $scope.toggle = function() {
            $scope.myVar5 = !$scope.myVar5;
        };

    });