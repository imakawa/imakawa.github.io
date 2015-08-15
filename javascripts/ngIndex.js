var blogApp = angular.module('blogApp',['ngRoute','blogCtrls']);

//Route
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
            when('/article/:menuId/:articleId', {
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

//Ctrls for route
    var blogCtrls = angular.module('blogCtrls', []);

//HomePage
    blogCtrls.controller('homeCtrl', function($scope,$http,$location,$window) {
      //the ctrl for home page
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
      });
    });

//ArticalListPage
    blogCtrls.controller('articleListCtrl', function($scope,$http,$location,$window,$routeParams) {
      //the ctrl for articleList page
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
        
        var path1 = "";
        var path2 = "";
        for(var i=0; i<data.submenu.length; i++) {
          if($routeParams.menuId == data.submenu[i].id){
            path2 = data.submenu[i].text;
          
            var mainMenuId = data.submenu[i].mainmenuid;
            for(var j=0; j<data.mainmenu.length; j++) {
              if(mainMenuId == data.mainmenu[j].id){
                path1 = data.mainmenu[j].text;
                break;
              }
            }
            break;
          }
        }
        
        $scope.currentPath1 = path1;
        $scope.currentPath2 = path2;
        
      });

      //選択したサブメニュー
      $scope.articleInfo = []
      Data.GetJson($http,'data/article.json',function(data){
        for(var i=0; i < data.articles.length; i++){
          if($routeParams.menuId == data.articles[i].menu){
           $scope.articleInfo.push(data.articles[i]); 
          }
        }
      });
      
      $scope.menuId = $routeParams.menuId;
      
    });

//ArticalPage
    blogCtrls.controller('articleCtrl', function($scope,$http,$location,$window,$routeParams,$sce) {
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
        
        var path1 = "";
        var path2 = "";
        for(var i=0; i<data.submenu.length; i++) {
          if($routeParams.menuId == data.submenu[i].id){
            path2 = data.submenu[i].text;
          
            var mainMenuId = data.submenu[i].mainmenuid;
            for(var j=0; j<data.mainmenu.length; j++) {
              if(mainMenuId == data.mainmenu[j].id){
                path1 = data.mainmenu[j].text;
                break;
              }
            }
            break;
          }
        }
        
        $scope.currentPath1 = path1;
        $scope.currentPath2 = path2;
      });
      
      Data.GetJson($http,'data/article.json',function(data){
        for(var i=0; i < data.articles.length; i++){
          if($routeParams.articleId == data.articles[i].id){
            $scope.articleName = data.articles[i].title;
            $scope.articleSrc = $sce.trustAsResourceUrl(data.articles[i].src);
          }
        }
      });
      
      $scope.menuId = $routeParams.menuId;
      
    });

//AboutPage(deleted)
    blogCtrls.controller('aboutCtrl', function($scope,$http,$location,$window) {
      Data.GetJson($http,'data/menu.json',function(data){
        $scope.menuInfo = data;
      });
    });
