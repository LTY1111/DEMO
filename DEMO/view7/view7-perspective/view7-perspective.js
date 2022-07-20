angular
  .module("myApp.view7-perspective", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view7/view7-perspective", {
        templateUrl: "view7/view7-perspective/view7-perspective.html",
        controller: "View7Perspective",
      });
    },
  ])
  
  .controller("View7Perspective", function($scope,$http){
    $scope.m = {
      switch0: true,
    };
  });
