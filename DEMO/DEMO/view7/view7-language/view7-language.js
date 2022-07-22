'use strict';

angular
  .module("myApp.view7-language", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view7/view7-language", {
        templateUrl: "view7/view7-language/view7-language.html",
        controller: "View7Language",
      });
    },
  ])

  .controller("View7Language", function ($scope ) {
    // $scope.getlanguageList = [];
    // $scope.getcountryList = [];
    // $scope.getregionList = [];
    $scope.drop = ["2"];
    // $scope.region = "1";
    $scope.getList=[];
    $scope.info = [
      // { key: "区域格式", value: $scope.drop },
      {key:"区域格式",value:''},
      { key: "日历", value: "公历" },
      { key: "一周的第一天", value: "星期一" },
      { key: "短日期", value: "22/7/11" },
      { key: "长日期", value: "2022年7月11日" },
      { key: "短时间", value: "9:57" },
      { key: "长时间", value: "9:57:29" },
    ];
    $scope.regionChange = function () {
      // this.info[0].value = this.d;
       this.info[0].value = this.getList[$scope.drop].key;
    };
    $scope.toggle = function () {
      $scope.myVar2 = !$scope.myVar2;
      console.log($scope.myVar2);
    };

    // $http({
    //   method: "GET",
    //   url: "http://127.0.0.1:5500/API/language.json",
    // }).then((res) => {
    //   $scope.getlanguageList = res.data;
    //   console.log(res.data);
    // });
    // $http({
    //   method: "GET",
    //   url: "http://127.0.0.1:5500/API/country.json",
    // }).then((res) => {
    //   $scope.getcountryList = res.data;
    //   console.log(res.data);
    // });
    // $http({
    //   method: "GET",
    //   url: "http://127.0.0.1:5500/API/region.json",
    // }).then((res) => {
    //   $scope.getregionList = res.data;
    //   console.log(res.data);
    // });
  })