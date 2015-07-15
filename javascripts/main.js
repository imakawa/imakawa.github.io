var blogApp = angular.module('blogApp', []);
blogApp.controller('headerCtrl',function($http,$scope){
  $http.get("data/test.json").then(function(data) {
        $scope.data = data.data.employees[0].firstName;
    });
});
