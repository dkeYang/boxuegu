/**
 * Created by lenovo on 2017/8/5 005.
 */
define(["jquery","text!template/personalCenter.html","artTemp","ueditorAll","ueditorConf"],function($,personalCenter,artTemp){
            return function(){
                $.ajax({
                    url:"/api/teacher/profile",
                    type:"get",
                    success:function(res){
                        var $html = $(artTemp.render(personalCenter,res.result));
                        $html.appendTo("body").on("submit","form",function(){
                             var formData = $(this).serialize();
                            $.ajax({
                                url:"/api/teacher/modify",
                                type:"post",
                                data:formData,
                                success:function(res){
                                    if(res.code!=200) console.log(res.msg);
                                    $html.modal("hide").on('hidden.bs.modal',function(){
                                        location.reload();
                                    });
                                }
                            })
                            return false;
                        }).modal();
                        var ue = UE.getEditor('introduce');
                        ue.ready(function() {
                            //设置编辑器的内容
                            ue.setContent(res.result.tc_introduce);
                        });
                    }

                })

            }
})