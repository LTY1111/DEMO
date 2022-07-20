"use strict";

angular
  .module("myApp.view1", [
    "ngRoute",
    "myApp.view1-screen",
    "myApp.view1-voice",
    "myApp.view1-notice",
    "myApp.view1-assistant",
    "myApp.view1-electric",
    "myApp.view1-storage",
  ])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "view1/view1.html",
        controller: "View1Ctrl",
      });
    },
  ])

  .controller("View1Ctrl", function ($scope) {
    $scope.list = [
      {
        icon: "./font/24gl-minimize2.png",
        title: "屏幕",
        describe: "显示器、亮度、夜间模式、显示器配置文件",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/50_xitongxinxi.png",
        title: "声音",
        describe: "音量级别、输出、输入、声音设备",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-voice",
      },
      {
        icon: "./font/bijibendiannao.png",
        title: "通知",
        describe: "来自应用和系统的警报",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-notice",
      },
      {
        icon: "./font/chanyeyingyongxitong.png",
        title: "专注助手",
        describe: "通知、自动规则",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-assistant",
      },
      {
        icon: "./font/yinsibaohu.png",
        title: "电源和电池",
        describe: "睡眠、电池使用情况、节电模式",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-electric",
      },
      {
        icon: "./font/zhanghuffffffpx.png",
        title: "存储",
        describe: "存储空间、驱动器、配置规则",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-storage",
      },
      {
        icon: "./font/zhanghuziliao-hover.png",
        title: "就近共享",
        describe: "可发现性、收到文件的位置",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/wenhao.png",
        title: "多任务处理",
        describe: "贴靠窗口、桌面、任务切换",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/update.png",
        title: "激活",
        describe: "激活状态、订阅、产品密钥",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/shijian.png",
        title: "疑难解答",
        describe: "建议的疑难解答、首选项和历史记录",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/wangluo.png",
        title: "恢复",
        describe: "重置、高级启动、返回",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/plan.png",
        title: "投影到电脑",
        describe: "权限、配对PIN、可发现性",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/history.png",
        title: "远程桌面",
        describe: "远程桌面用户、连接权限",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/choise.png",
        title: "剪贴板",
        describe: "剪贴和复制历史记录、同步、清除",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
      {
        icon: "./font/fankui.png",
        title: "系统信息",
        describe: "设备规格、重命名电脑、windows规格",
        href: "./font/Chevron-Right.png",
        drop: false,
        jump: "#!/view1/view1-screen",
      },
    ];
  });