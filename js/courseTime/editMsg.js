/**
 * Created by lenovo on 2017/8/4 004.
 */
define(["jquery","artTemp","text!template/editMsg.html"],function($,artTemp,editMsg){
  return function(id){
      $.ajax({
          url:"/api/course/basic",
          type:"get",
          data:{cs_id:id},
          success:function(res){
              res.result.category.top.unshift({
                  cg_id: 0,
                  cg_name: "顶级分类"
              })
              var $html = $(artTemp.render(editMsg,res.result));
              $html.on("change",".cg-top",function(){
                 var cg_id=$(this).val();
                  $.ajax({
                      url:"/api/category/child",
                      type:"get",
                      data:{cg_id:cg_id},
                      success:function(res){
                          var str = "";
                          res.result.forEach(function(v){
                              str += "<option value='"+ v.cg_id+"'>"+ v.cg_name+"</option>"
                          });
                         $html.find("#cg-child").html(str);
                      }
                  })
              }).on("submit","form",function(){
                  var formData = $(this).serialize();
                  console.log(formData);
                  $.ajax({
                      url:"/api/course/update/basic",
                      type:"post",
                      data:formData,
                      success:function(res){
                          if(res.code!=200) console.log(res.msg);
                          $(".link-course-manager").trigger("click");
                      }
                  });
                  return false;

              })
              $(".content-container").html($html);
          }
      })
}
})