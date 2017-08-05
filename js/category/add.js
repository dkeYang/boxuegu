/**
 * Created by lenovo on 2017/8/2 002.
 */
define(["jquery","text!template/categoryAdd.html","artTemp"],function($,categoryAdd,artTemp){
       return function(){
           $.ajax({
               url:"/api/category/top",
               type:"get",
               success:function(res){
                   if(res.code!=200) console.log(res.msg);
                   var $html = $(artTemp.render(categoryAdd,res));
                   $html.on("submit","form",function(){
                       var formData = $(this).serialize();
                       console.log(formData);
                       $.ajax({
                           url:"/api/category/add",
                           type:"post",
                           data:formData,
                           success:function(res){
                               if(res.code!=200) console.log(res.msg);
                               $html.modal("hide");
                               $(".link-course-category").trigger("click");
                           }
                       });
                       return false;
                   }).appendTo("body").modal();
               }
           })
       }
})