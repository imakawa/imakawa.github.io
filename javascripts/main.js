console.log('This would be the main JS file.');
var blogApp = angular.module('blogApp', []);
blogApp.controller('headerCtrl',function($http,$scope){
  $http.get("data/test.json").then(function(data) {
        $scope.data = data;
    });
});
