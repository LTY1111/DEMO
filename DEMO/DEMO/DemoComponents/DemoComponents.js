angular
  .module("DemoComponents", [])
  .component("demoswitch", {
    templateUrl: "DemoComponents/demoswitch.html",
    transclude: true,
    bindings: {
      closed: "=?",
      opend: "=",
    },
    require: {
      model: "ngModel",
    },
    controller: function ($scope) {
      // console.log(this);
      this.innerModel = false;
      this.$onInit = () => {
        // 每次外面的值改变后调用该函数,第一次也会触发该函数
        this.model.$render = () => {
          // console.log(1);
          //$modelValue为组件外ng-model传进来的值
          this.innerModel = this.model.$modelValue;
        };
      };
      // $scope.$watch("$ctrl.innerModel", (value) => {
      //   this.model.$setViewValue(this.innerModel);
      // });
      $scope.toggle = (e) => {
        e.stopPropagation();
        if (this.closed) return;
        this.innerModel = !this.innerModel;
        // 从内到外
        this.model.$setViewValue(this.innerModel);
      };
    },
  })

  .component("selectdrop", {
    templateUrl: "DemoComponents/selectdrop.html",
    transclude: true,
    bindings: {
      url: "@",
      drop: "=",
      getList: "=?",
    },
    controller: function ($http) {
      const fetchData = () => {
        $http.get(this.url).then((res) => {
          this.list = res.data;
          console.log(this);
          this.getList = res.data;
        });
      };
      this.$onInit = fetchData;
    },
  })

  .component("card", {
    templateUrl: "DemoComponents/card.html",
    transclude: true,
    bindings: {
      jump: "@",
      icon: "@",
      title: "@",
      describe: "@",
      mb: "@",
    },
    controller: function ($scope) {
      $scope.onJumpPage = function (jump) {
        console.log(jump);
        if (jump) {
          window.location.href = jump;
        }
        // jump && (window.location.href=jump)//等同于上面的写法，jump不为空才执行后面的操作
      };
    },
  })

  .component("slide", {
    templateUrl: "DemoComponents/slide.html",
    transclude: true,
    bindings: {
      voice: "=",
    },
    controller: function ($scope) {
      $scope.slidechange = function () {
        if ($scope.voice == "0") {
          $scope.pic = "./font/volumeCross.png";
        } else {
          $scope.pic = "./font/volumeLow.png";
        }
      };
    },
  });
