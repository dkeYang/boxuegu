/**
 * Created by lenovo on 2017/8/2 002.
 */
/**
 * Created by lenovo on 2017/7/30 030.
 */
define(["jquery","text!template/categoryEdit.html","artTemp"],function($,categoryEdit,artTemp){
    return function(cg_id){
        $("#categoryEdit").remove();
        var cg_id=cg_id;
        //先获取该讲师的当前数据
        $.ajax({
            url:"/api/category/edit",
            data:{cg_id:cg_id},
            type:"get",
            success:function(res){
                if(res.code!=200){
                    return;
                }
                //将数据添加到模板中
                res.result.top.unshift( {
                    "cg_id": 0,
                    "cg_name": "顶级分类"
                });
                var html=artTemp.render(categoryEdit,res.result);
                //添加到页面，并进行修改，发送到服务器
                $(html).appendTo("body").modal()
                    .on("submit","form",function(){
                    var data=$(this).serialize();
                    data+="&cg_id="+cg_id;
                    $.ajax({
                        url:"/api/category/modify",
                        type:"post",
                        data:data,
                        success:function(res){
                            if(res.code!=200){
                                return;
                            }
                            //location.reload();可用于重载整个页面，但是会重复加载数据，造成资源浪费
                            $("#categoryEdit").modal("hide");//请求成功之后关闭模态框
                            $(".link-course-category").trigger("click");//重载讲师列表部分的内容
                        }
                    });
                    return false;
                })
            }
        })

    }
})