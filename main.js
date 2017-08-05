/**
 * Created by lenovo on 2017/7/29 029.
 */
require.config({
    baseUrl:"js",
    paths:{
        jquery:"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap.min",
        text:"lib/text",
        template:"../templates",
        artTemp:"lib/template-web",
        dateTimePicker:"../assets/datetimepicker/js/bootstrap-datetimepicker",
        ueditorAll:"../assets/ueditor/ueditor/ueditor.all",
        ueditorConf:"../assets/ueditor/ueditor/ueditor.config",
    },
    shim:{
        bootstrap:{
            deps:["jquery"],
        },
        ueditorAll:{
            deps:["ueditorConf"],
        }
    }
})
require(["jquery","teacher/teacherList","category/list","course/list","course/add","common/personalCenter","bootstrap","common/checkLogin"],
    function($,teacherList,courseList,classList,courseAdd,personalCenter){
    var userInf = JSON.parse(localStorage.getItem("userInfo"));
    $(".profile img").attr("src",userInf.tc_avatar);
    $(".profile h4").html(userInf.tc_name);
    $(".left .list-group").on("click",".list-group-item",function(){
        if($(this).hasClass("link-teacher")){
            teacherList();
        }else if($(this).hasClass("link-course-manager")){
            classList()
        }else if($(this).hasClass("link-course-category")){
            courseList();
        }else if($(this).hasClass("link-chart")){

        }else if($(this).hasClass("link-course-add")){
            courseAdd();
        }
        $(this).addClass("active").siblings().removeClass("active");

    });
    $(".link-teacher").trigger("click");
        $(".right").on("click",".personal",function(){
            personalCenter();
        })
})