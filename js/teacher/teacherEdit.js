/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/teacherEdit.html","artTemp","dateTimePicker"],function($,teacherEdit,artTemp){
    return function(tc_id){
        $("#teacherEdit").remove();
        var tc_id=tc_id;
        //先获取该讲师的当前数据
        $.ajax({
            url:"/api/teacher/edit",
            data:{tc_id:tc_id},
            type:"get",
            success:function(res){
                if(res.code!=200){
                    return;
                }
                //将数据添加到模板中
                var html=artTemp.render(teacherEdit,res.result);
                //添加到页面，并进行修改，发送到服务器
                $(html).appendTo("body").on("submit","form",function(){
                    var data=$(this).serialize();
                    data+="&tc_id="+tc_id;
                    $.ajax({
                        url:"/api/teacher/update",
                        type:"post",
                        data:data,
                        success:function(res){
                            if(res.code!=200){
                                return;
                            }
                            //location.reload();可用于重载整个页面，但是会重复加载数据，造成资源浪费
                            $("#teacherEdit").modal("hide");//请求成功之后关闭模态框
                            $(".link-teacher").trigger("click");//重载讲师列表部分的内容
                        }
                    });
                    return false;
                }).modal().find(".join-date").datetimepicker({//日期控件
                    format: 'yyyy-mm-dd',
                    language:'zh-CN',
                    autoclose:true,
                    startDate:1,
                    todayHighlight:true,
                    todayBtn:true,
                    minView:2,
                });
            }
        })

    }
})