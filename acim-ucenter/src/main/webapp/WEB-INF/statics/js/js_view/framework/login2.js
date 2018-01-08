
var _wx_server_qr_code_count = 0;
var _wx_server_qr_code_loaded = false;
var _qr_code_limited = '';
var _qr_code_wait_time = 20;
var flashQrCodeWaitingTimer = null;
var getQrCodeStatusTimer = null;
var getQrCodeTimer = null;
alert("iphonelogin");
function nameLoginCheck(){
    var loginName = $("#nameLoginForm").find("#normalUser").eq(0).val();
    var password = $("#nameLoginForm").find("#normalPassword").eq(0).val();
    if($(".tips ").is(":visible")){
        return false;
    }
    if(loginName == null  || loginName == ""){
        showError("请输入用户名");
        return false;
    }
    if(password == null  || password == ""){
        showError("请输入密码");
        return false;
    }
    if($("#normalYzm")  && $("#nameLoginForm").find("#normalYzm").length > 0 ){
        if($("#normalYzm").val() == "" || $("#normalYzm").val() == null){
            showError("请输入验证码");
            return false;
        }
    }
    return true;
}

//手机登陆验证
function mobileLoginCheck(){
    var mobile = $("#mobileLoginForm").find("#partnerPhone").eq(0).val();
    var captch = $("#mobileLoginForm").find("#partnerYzm").eq(0).val();
    var code = $("#mobileLoginForm").find("#partnerJym").eq(0).val();
    if(mobile == null || mobile == '' || !(_mobile_reg).test(mobile)){
        showError("请填写正确的手机号");
        return false;
    }
    if(captch == null || captch == "" || captch == undefined){
        showError("请填写验证码");
        return false;
    }
    if(code == null || code == ""){
        showError("请填写校验码");
        return false;
    }
    return true;
}

function mobileCheck(obj){
    if(!(_mobile_reg).test($("#partnerPhone").val())){
        showError("请填写正确的手机号");
        return;
    }else{
        closeError();
    }
}

//发送短信
function sendSms(obj){
    alert("信息已发送  www.17sucai.com - ");
}

function captchCheck(obj){
    if(!(_mobile_reg).test($("#partnerPhone").val())){
        showError("请填写正确的手机号");
        return;
    }
    var captch = $(obj).val();
    if(captch == '' || captch == null){
        showError("请填写验证码");
    }else{
        checkCaptch(captch,
            function(){
                if(!$("#smsSendButton").hasClass("sending")){
                    $("#smsSendButton").removeClass("disabled");
                }
                closeError();
            },function(){
                showError("验证码错误");
                $("#smsSendButton").addClass("disabled");
            }
        );
    }
}
$(function(){
    $(".form-tab li").on("click",function(){
        var index = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".form-con>div").hide().eq(index).show();
        if(index == 0){
            $(".form-foot").hide();
        }else{
            $(".form-foot").show();
        }
        $(".form-error").hide();
    });
    $(".weixin-login .help-a").hover(
        function(){
            $(".wx-img-box,.wx-image").stop();
            $(this).parents(".weixin-login").find(".wx-img-box").animate({"marginLeft":"15px"},300,function(){
                $(this).parents(".weixin-login").find(".wx-image").animate({"opacity":1},300);
            });
        },
        function(){
            $(".wx-img-box,.wx-image").stop();
            $(this).parents(".weixin-login").find(".wx-image").stop().animate({"opacity":0},300,function(){
                $(this).parents(".weixin-login").find(".wx-img-box").animate({"marginLeft":"110px"},300);
            });
        }
    );


});

$('.jia_foot_open').click(function(){
    $('.footnone').slideToggle();
    $(this).find('i').toggleClass('footnow');
});
$('.phoneLogin').click(function(){
    $('.loginV2').hide();
    $('.shortLogin').show();
    $('.form-error').hide();
});
$('.backLogin').click(function(){
    $('.login-normal').show();
    $('.loginV2').show();
    $('.shortLogin').hide();
    $('.form-error').hide();
});
//开启错误提示
function showError(error){
    $(".form-error").find("label").html(error);
    $(".form-error").show();
}