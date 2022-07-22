'use strict';
angular
    .module("myApp.view7-time", ["ngRoute", "myApp.view7-language"])

.config([
    "$routeProvider",
    function($routeProvider) {
        $routeProvider.when("/view7/view7-time", {
            templateUrl: "view7/view7-time/view7-time.html",
            controller: "View7Time",
        });
    },
])

.controller("View7Time", function($scope, $http, $interval) {
    $scope.gettimeZoneList = [];
    $scope.getcalendarList = [];
    // $scope.selected = '0';
    $scope.drop = ["1"];
    $scope.time = new Date().toLocaleString();
    $interval(function() {
        $scope.date = new Date().toLocaleString()
    }, 1000);
   
    // $http({
    //     method: "GET",
    //     url: "http://127.0.0.1:5500/API/timeZone.json",
    // }).then((res) => {
    //     $scope.gettimeZoneList = res.data;
    //     console.log(res.data);
    // });
    // $http({
    //     method: "GET",
    //     url: "http://127.0.0.1:5500/API/calendar.json",
    // }).then((res) => {
    //     $scope.getcalendarList = res.data;
    //     console.log(res.data);
    // });
    // $scope.getRegion = function () {
    //   console.log(1);
    //   if ($scope.gettimeZoneList.length >= 1) return;
    //   $http({
    //     method: "GET",
    //     url: "http://127.0.0.1:5500/API/timeZone.json",
    //   }).then((res) => {
    //     this.gettimeZoneList = res.data;
    //     console.log(res.data);
    //   });
    // };
});