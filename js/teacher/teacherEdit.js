/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/teacherEdit.html","artTemp","dateTimePicker"],function($,teacherEdit,artTemp){
    return function(tc_id){
        $("#teacherEdit").remove();
        var tc_id=tc_id;
        //�Ȼ�ȡ�ý�ʦ�ĵ�ǰ����
        $.ajax({
            url:"/api/teacher/edit",
            data:{tc_id:tc_id},
            type:"get",
            success:function(res){
                if(res.code!=200){
                    return;
                }
                //��������ӵ�ģ����
                var html=artTemp.render(teacherEdit,res.result);
                //��ӵ�ҳ�棬�������޸ģ����͵�������
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
                            //location.reload();��������������ҳ�棬���ǻ��ظ��������ݣ������Դ�˷�
                            $("#teacherEdit").modal("hide");//����ɹ�֮��ر�ģ̬��
                            $(".link-teacher").trigger("click");//���ؽ�ʦ�б��ֵ�����
                        }
                    });
                    return false;
                }).modal().find(".join-date").datetimepicker({//���ڿؼ�
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