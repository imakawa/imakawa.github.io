var Data = (function(){
  return {
    GetJson:function(arg_http,path,fn){
      arg_http({method:'GET',url:path}).
      success(function(data,status,headers,config){
        fn(data);
      }).
      error(function(data,status,headers,config){
        fn(data);
      })
    }
  };
})();
