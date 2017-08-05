/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/teacherList.html","artTemp","teacher/teacherShow","teacher/teacherEdit","teacher/teacherAdd","teacher/teacherHandle"],function($,teacherList,artTemp,teacherShow,teacherEdit,teacherAdd,teacherHandle){
    return function(){
        $.ajax({
            url:"/api/teacher",
            type:"get",
            success:function(res){
                //������󲻳ɹ���ֱ�ӷ���
                if(res.code!=200){
                    return;
                }
                //ʹ��ģ��������Ⱦ����
                var html=artTemp.render(teacherList,res);
                //��������ӵ�����������
                var $html = $(html);
                //չʾ��ʦ
                $html.on("click",".btn-show",function(){
                     var tc_id = $(this).parent().attr("tc_id");
                     teacherShow(tc_id);
                });
                //�༭��ʦ
                $html.on("click",".btn-edit",function(){
                    var tc_id = $(this).parent().attr("tc_id");
                    teacherEdit(tc_id);
                })
                //��ӽ�ʦ
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