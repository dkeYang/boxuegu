/**
 * Created by lenovo on 2017/7/29 029.
 */
define([],function(){
    //��¼��֤�����userInfo����û�����ݾ���ת����¼ҳ��
   if(!localStorage.getItem("userInfo")){
           location.href = "login.html";
   }
})