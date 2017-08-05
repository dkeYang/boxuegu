/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/teacherList.html","artTemp","teacher/teacherShow","teacher/teacherEdit","teacher/teacherAdd","teacher/teacherHandle"],function($,teacherList,artTemp,teacherShow,teacherEdit,teacherAdd,teacherHandle){
    return function(){
        $.ajax({
            url:"/api/teacher",
            type:"get",
            success:function(res){
                //如果请求不成功，直接返回
                if(res.code!=200){
                    return;
                }
                //使用模板引擎渲染数据
                var html=artTemp.render(teacherList,res);
                //将数据添加到数据容器中
                var $html = $(html);
                //展示讲师
                $html.on("click",".btn-show",function(){
                     var tc_id = $(this).parent().attr("tc_id");
                     teacherShow(tc_id);
                });
                //编辑讲师
                $html.on("click",".btn-edit",function(){
                    var tc_id = $(this).parent().attr("tc_id");
                    teacherEdit(tc_id);
                })
                //添加讲师
                $html.on("click",".btn-add-teacher",function(){
                    teacherAdd();
                }) ;
                $html.on("click",".btn-disable",function(){
                    var tc_id = $(this).parent().attr("tc_id");
                    var tc_status = $(this).attr("tc_status");
                    teacherHandle(tc_id,tc_status);
                })
                $(".content-container").html($html);
            }
        })

    }
})