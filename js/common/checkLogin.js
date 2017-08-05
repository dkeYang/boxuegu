/**
 * Created by lenovo on 2017/7/29 029.
 */
define([],function(){
    //登录验证，如果userInfo里面没有数据就跳转到登录页面
   if(!localStorage.getItem("userInfo")){
           location.href = "login.html";
   }
})