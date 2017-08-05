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
                    //location.reload();��������������ҳ�棬���ǻ��ظ��������ݣ������Դ�˷�
                    $("#teacherAdd").modal("hide");//����ɹ�֮��ر�ģ̬��
                    $(".link-teacher").trigger("click");//���ؽ�ʦ�б��ֵ�����
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