/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/teacherDetail.html","artTemp"],function($,teacherDetail,artTemp){
    return function(tc_id){
        $.ajax({
            url:"/api/teacher/view",
            data:{tc_id:tc_id},
            type:"get",
            success:function(res){
                if(res.code!=200){
                    return;
                }
                $("#teacherDetail").remove();
                var html=artTemp.render(teacherDetail,res.result);
                $(html).appendTo("body").modal();
            }
        })

    }
})