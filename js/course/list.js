/**
 * Created by lenovo on 2017/8/2 002.
 */
define(["jquery","artTemp","text!template/classList.html","course/editTime","courseTime/editMsg"],
    function($,artTemp,classList,editTime,editMsg){
       return function(){
           $.ajax({
               url:"/api/course",
               type:"get",
               success:function(res){
                   var $html = $(artTemp.render(classList,res));

                   $html.on("click",".btn-edit-time",function(){
                       var cs_id = $(this).parent().attr("cs_id");
                       editTime(cs_id);
                   }).on("click",".btn-edit-msg",function(){
                       var cs_id = $(this).parent().attr("cs_id");
                       editMsg(cs_id);
                   })
                   $(".content-container").html($html);
               }
           })
       }
})