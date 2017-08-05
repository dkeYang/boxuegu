/**
 * Created by lenovo on 2017/8/4 004.
 */
define(["jquery","text!template/courseAdd.html"],function($,courseAdd){
    return function(){
        $("#courseAdd").remove();
        var $html = $(courseAdd);
        $html.appendTo("body").modal();
        $html.on("submit","form",function(){
            var formData = $(this).serialize();
            console.log(formData);
            $.ajax({
                url:"/api/course/create",
                type:"post",
                data:formData,
                success:function(res){
                     if(res.code!=200) console.log(res.msg);
                     $html.modal("hide");
                    $(".link-course-manager").trigger("click");
                }
            })
            return false;
        })

    }
})