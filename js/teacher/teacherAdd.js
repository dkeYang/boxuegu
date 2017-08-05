/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/teacherAdd.html","dateTimePicker"],function($,teacherAdd){
    return function(){
        var html = teacherAdd;
        $("#teacherAdd").remove();
        $(html).on("submit","form",function(){
            var formData = $(this).serialize();
            $("#teacherAdd").hide();
            $.ajax({
                url:"/api/teacher/add",
                type:"post",
                data:formData,
                success:function(res){
                    if(res.code!=200){
                        return;
                    }
                    //location.reload();可用于重载整个页面，但是会重复加载数据，造成资源浪费
                    $("#teacherAdd").modal("hide");//请求成功之后关闭模态框
                    $(".link-teacher").trigger("click");//重载讲师列表部分的内容
                }
            });
            return false;
        }).appendTo("body").modal().find("#datetimepicker").datetimepicker({
            format: 'yyyy-mm-dd hh:ii',
            language:'zh-CN',
            autoclose:true,
            startDate:1,
            todayHighlight:true,
            todayBtn:true,
            minView:2,
        });


    }
})