"use strict";

angular
    .module("myApp.view1-share", ["ngRoute"])

.config([
        "$routeProvider",
        function($routeProvider) {
            $routeProvider.when("/view1/view1-share", {
                templateUrl: "view1/view1-share/view1-share.html",
                controller: "View1ShareCtrl",
            });
        },
    ])
    .controller("View1ShareCtrl", function($scope) {
        $scope.shareList = [{
                icon: "./font/24gl-minimize2.png",
                title: "就近共享",
                describe: "与附近的Windows设备共享文件、照片和链接 如何提高附近的共享速度",
                href: "./font/Chevron-Right.png",
                drop2: false,
                drop3: false,
                drop4: true,
            },
            {
                icon: "./font/50_xitongxinxi.png",
                title: "将接收到的文件保存到",
                describe: "C:\Users\Lty\Downloads",
                href: "",
                drop2: true,
                drop3: false,
                drop4: false,
            },
            {
                icon: "./font/24gl-minimize2.png",
                title: "设备可发现为Lty",
                describe: "",
                href: "",
                drop2: false,
                drop3: true,
                drop4: false,

            },
            {
                icon: "./font/50_xitongxinxi.png",
                title: "隐私声明",
                describe: "了解Microsoft如何处理你的就近共享数据及其用途",
                href: "./font/Chevron-Right.png",
                drop2: false,
                drop3: false,
                drop4: true,
            },
        ];
    });