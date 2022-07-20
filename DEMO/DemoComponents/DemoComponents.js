angular
    .module("DemoComponents", [])
    .component("demoswitch", {
        templateUrl: "DemoComponents/demoswitch.html",
        transclude: true,
        bindings: {
            closed: "=?",
        },
        require: {
            model: 'ngModel'
        },
        controller: function ($scope) {
            this.innerModel = false
            this.$onInit = () => {
                this.innerModel = this.model.$modelValue;
                  // 从外到内
                  this.model.$render = () => {
                    this.innerModel = this.model.$modelValue;
                  };
            }
            $scope.$watch('$ctrl.opened', function (value) {
            })
            $scope.toggle = (e) => {
                e.stopPropagation();
                if (this.closed) return;
                this.innerModel = !this.innerModel;
                // 从内到外
                this.model.$setViewValue(this.innerModel)
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
    controller: function($http) {
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
        mb: '@'
    },
    controller: function ($scope) {
        $scope.onJumpPage = function(jump) {
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
        $scope.slidechange = function() {
            if ($scope.voice == "0") {
                $scope.pic = "./font/volumeCross.png";
            } else {
                $scope.pic = "./font/volumeLow.png";
            }
        }
    },
});