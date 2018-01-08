

//alert("loginON");
 $(window).ready(function() {
	 $("#login").on("click",function(e){
		 loginsubmit();
    });
	 
	 $(".login_fogetPassword").on("click",function(){
		 
	 });
	 $(".login_register").on("click",function(){
		 
	 });
});


	


/**
 * 登录信息
 * 
 * @returns
 */
function loginsubmit() {
	// alert();

	var url =  "userLoginGo";
	//alert("login :"+url);
	// 登录参数信息
	var name = $.trim($('#name').val());
	// var password = encode64($.trim($("#password").val()));
	var password = $.trim($('#password').val());
	var sysUser = {
        sysUserLoginName : name,
        sysUserLoginPassword : password
	};

	$.ajax({
		url : url,
		data : sysUser,
		type : "POST",
		dataType : 'json',
		success : function(json) {
			// alert(json.result);
			// alert(eval(json).result);
			result(eval(json).result);
			// window.open("/page/main.html");
		},
		error : function(er) {
			backErr(er);
		}
	});
	// alert();
}

/**
 * 登录以后返回数据：处理响应结果
 * 
 */
function result(resdata){
     //alert(resdata);

	if (resdata == "success") {
		loginSuccess()
	}

	// alert();
	// return null;

}

/**
 * 登录成功,进入主页面
 * 
 * @returns
 */
function loginSuccess() {
	window.location = "success";
}

/**
 * 登录成功，密码到期或者密码强度不够
 */

function loginSuccess2(resdata) {

}

/**
 * 登录失败
 */

function loginFail() {

}
