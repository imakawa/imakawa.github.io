var blogApp = angular.module('blogApp',['ngRoute','blogCtrls']);

blogApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            }).
            when('/articleList/:menuId', {
                templateUrl: 'articleList.html',
                controller: 'articleListCtrl'
            }).
            when('/article/:articleId', {
                templateUrl: 'article.html',
                controller: 'articleCtrl'
            }).
            when('/about', {
                templateUrl: 'about.html',
                controller: 'aboutCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

    /*var menuInfo = function(http){
      http.get("data/menu.json").then(function(data) {
        return data.data
      };
    }
*/
    var blogCtrls = angular.module('blogCtrls', []);
    blogCtrls.controller('homeCtrl', function($scope,$http,$location,$window) {
      //the ctrl for home page
      GetData.menuInfo($http,function(data){
        $scope.menuInfo = data;
      });
    });
    blogCtrls.controller('articleListCtrl', function($scope,$http,$location,$window,$routeParams) {
      //the ctrl for articleList page
      $scope.menuId = $routeParams.menuId;
      GetData.menuInfo($http,function(data){
        $scope.menuInfo = data;
      });
    });
    blogCtrls.controller('articleCtrl', function($scope,$http,$location,$window) {
      GetData.menuInfo($http,function(data){
        $scope.menuInfo = data;
      });
    });
    blogCtrls.controller('aboutCtrl', function($scope,$http,$location,$window) {
      GetData.menuInfo($http,function(data){
        $scope.menuInfo = data;
      });
    });
