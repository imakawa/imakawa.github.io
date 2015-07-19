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


    var blogCtrls = angular.module('blogCtrls', []);
    blogCtrls.controller('homeCtrl', function($scope,$http,$location,$window) {
      //the ctrl for home page

    });
    blogCtrls.controller('articleListCtrl', function($scope,$http,$location,$window) {
      //the ctrl for articleList page

    });
    blogCtrls.controller('articleCtrl', function($scope,$http,$location,$window) {

    });
    blogCtrls.controller('aboutCtrl', function($scope,$http,$location,$window) {

    });
