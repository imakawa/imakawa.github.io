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
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
      });
    });
    blogCtrls.controller('articleListCtrl', function($scope,$http,$location,$window,$routeParams) {
      //the ctrl for articleList page
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
      });

      //選択したサブメニュー
      $scope.menuId = $routeParams.menuId;
      Data.GetJson($http,'data/article.json',function(data){
        $scope.articleInfo = data.articles;
      });
    });
    blogCtrls.controller('articleCtrl', function($scope,$http,$location,$window) {
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
      });
    });
    blogCtrls.controller('aboutCtrl', function($scope,$http,$location,$window) {
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
      });
    });
