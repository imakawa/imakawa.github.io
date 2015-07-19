blogApp.directive('header',function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'directive/header/header.html'
    };
});
