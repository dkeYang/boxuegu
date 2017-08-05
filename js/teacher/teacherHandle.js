/**
 * Created by lenovo on 2017/8/1 001.
 */
define(["jquery"],function($){
    return function(tc_id,tc_status){
        $.ajax({
            url:"/api/teacher/handle",
            type:"post",
            data:{
                tc_id:tc_id,
                tc_status:tc_status
            },
            success:function(res){
                if(res.code!=200) console.log(res.msg);
                $(".link-teacher").trigger("click");//重载讲师列表部分的内容
            }
        })
    }

})