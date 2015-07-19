var GetData = (function(){
  return {
    menuInfo:function(arg_http,fn){
      arg_http({method:'GET',url:'data/menu.json'}).
      success(function(data,status,headers,config){
        fn(data);
      }).
      error(function(data,status,headers,config){
        fn(data);
      })
    }
  };
})();
