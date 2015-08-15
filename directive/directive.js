//「blogApp」はngIndex.jsと一致する
blogApp.directive('header',function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'directive/header/header.html'
    };
});