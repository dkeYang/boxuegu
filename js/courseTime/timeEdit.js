/**
 * Created by lenovo on 2017/8/4 004.
 */
define(["jquery","text!template/editTime.html","artTemp",],function($,editTime,artTemp){
       return function(id){
           var fn = arguments.callee;
          $("#timeEdit").remove();
           $.ajax({
               url:"/api/course/chapter/edit",
               data:{ct_id:id},
               type:"get",
               success:function(res){
                   var cs_id = res.result.ct_cs_id;
                   var $html = $(artTemp.render(editTime,res.result));
                   $html.appendTo("body").on("submit","form",function(){
                       var formData = $(this).serialize();
                       $.ajax({
                           url:"/api/course/chapter/modify",
                           type:"post",
                           data:formData,
                           success:function(res){
                               if(res.code!=200) console.log(res.msg);
                               $html.modal("hide");
                               var editTime = require("course/editTime");
                               editTime(cs_id);
                           }
                       })
                       return false;
                   }).modal();
               }
           })
       }
})