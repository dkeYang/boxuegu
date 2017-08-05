/**
 * Created by lenovo on 2017/8/4 004.
 */
define(["jquery","text!template/courseTimeEdit.html","artTemp","courseTime/timeEdit"],function($,courseTimeEdit,artTemp,timeEdit){
    return function(cs_id){
        $.ajax({
            url:"/api/course/lesson",
            type:"get",
            data:{cs_id:cs_id},
            success:function(res){
            var $html = $(artTemp.render(courseTimeEdit,res.result));
                $html.on("click",".btn-edit",function(){
                    var ct_id = $(this).parent().attr("ct_id");
                    timeEdit(ct_id);
                });
                $(".content-container").html($html);
        }
        })
    }
})