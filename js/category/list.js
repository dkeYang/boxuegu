/**
 * Created by lenovo on 2017/8/2 002.
 */
define(["jquery","text!template/courseList.html","artTemp","category/edit","category/add"],function($,courseList,artTemp,categoryEdit,categoryAdd){
    return function(){
        $.ajax({
            url:"/api/category",
            type:"get",
            success:function(res){
                if(res.code!=200){
                    return;
                }
                var html=artTemp.render(courseList,res);
                //将数据添加到数据容器中
                var $html = $(html);
                $html.on("click",".category-edit",function(){
                    var cg_id = $(this).parent().attr("cg_id");
                    categoryEdit(cg_id);
                }).on("click",".btn-add-category",function(){
                    categoryAdd();
                })
                $(".content-container").html($html);
            }
        })
    }
})