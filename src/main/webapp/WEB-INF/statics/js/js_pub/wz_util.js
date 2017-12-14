

/**
 * @auther marrisa
 * 系统退出
 */

 function systemLogOut(){
	 
	$.ajax({
		url: "/" + getURL() + "/logout",
		success:function(){
			window.location = "/" + getURL() ;
		}
			
	});
 }
 
 /**
  * 设置div当前屏幕的高度
  * @returns
  */
 
function setDivHeigth(obj,objTo){
	
	//alert(document.body.clientWidth);
	//alert("setDivHeigth");
	var windowsHeight = window.screen.height; //document.body.clientHeight
	var objTop = obj.offset().top;
	objTo.css("height",windowsHeight-objTop);
	//alert(" div height" + windowsHeight);
	
}


/**
 * @auther marrisa
 * 返回应用名称：如http://localhost:8080/web/index.html 返回web
 */
function getURL() {
	var resultURL;
	var urlStr = document.location.pathname;
	urlStr = urlStr.substring(1);
	resultURL = urlStr.substring(0, urlStr.indexOf('/'));
	return resultURL;
}

/**
 * 生产验证码
 * @param code_id 验证码form id
 * @returns
 */
function createCode(code_id) {  
    code = "";  
    var codeLength = 5; //验证码的长度     
   // var checkCode = $("#code_id");//document.getElementById("checkCode");  
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'); //随机数     
    for(var i = 0; i < codeLength; i++) { //循环操作     
        var charIndex = Math.floor(Math.random() * 62); //取得随机数的索引     
        code += random[charIndex]; //根据索引取得随机数加到code上     
    }  
    $("#" +code_id).val(code); //把code值赋给验证码     
}  

//校验验证码     
function validate(code_input) {  
    var inputCode = document.getElementById("code_input").value.toUpperCase(); //取得输入的验证码并转化为大写           
    if(inputCode.length <= 0) { //若输入的验证码长度为0     
        alert("请输入验证码！"); //则弹出请输入验证码     
    } else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时     
        alert("验证码输入错误！"); //则弹出验证码输入错误     
        createCode(); //刷新验证码     
    } else { //输入正确时     
        alert("^-^"); //弹出^-^     
    }  
}  



/**
 * @auther marrisa
 * 返回应用名称：如http://localhost:8080/web/index.html 返回web
 */
function getURL() {
	var resultURL;
	var urlStr = document.location.pathname;
	urlStr = urlStr.substring(1);
	resultURL = urlStr.substring(0, urlStr.indexOf('/'));
	return resultURL;
}

/**
 * 生产验证码
 * @param code_id 验证码form id
 * @returns
 */
function createCode(code_id) {  
    code = "";  
    var codeLength = 5; //验证码的长度     
   // var checkCode = $("#code_id");//document.getElementById("checkCode");  
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'); //随机数     
    for(var i = 0; i < codeLength; i++) { //循环操作     
        var charIndex = Math.floor(Math.random() * 62); //取得随机数的索引     
        code += random[charIndex]; //根据索引取得随机数加到code上     
    }  
    $("#" +code_id).val(code); //把code值赋给验证码     
}  

//校验验证码     
function validate(code_input) {  
    var inputCode = document.getElementById("code_input").value.toUpperCase(); //取得输入的验证码并转化为大写           
    if(inputCode.length <= 0) { //若输入的验证码长度为0     
        alert("请输入验证码！"); //则弹出请输入验证码     
    } else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时     
        alert("验证码输入错误！"); //则弹出验证码输入错误     
        createCode(); //刷新验证码     
    } else { //输入正确时     
        alert("^-^"); //弹出^-^     
    }  
}  

function leftNav(accordion){
	$('#'+accordion).find('.link').click(function(){
		//alert("link click");
		if($(this).parent('li').find('ul').length>0){
	          if($(this).siblings('ul').is(':hidden')){
	            $(this).parent('li').addClass('open').children('ul').show();
	            $(this).parent('li').siblings().removeClass('open').children('ul').hide();
	          }else{
	            $(this).parent('li').removeClass('open').children('ul').hide();
	          }
		}else{
			$(this).parent('li').siblings().removeClass('open');
		}



        $(this).parent('li').siblings().children('ul').hide();
        $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');


        if($(this).attr("class")=='link'){
			$(this).removeClass("current")
		}

		//alert("link");


	});
	 // alert(accordion);

	 $('.submenu').find('li').click(function(){
         $('.accordion').find('li').removeClass('current');

        // alert($(this).find("ul").length==0);

         if( $(this).find("ul").length==0){
             $(this).addClass('current');
         }
         event.stopPropagation();

	 });
    /*$('.submenu li').click(function () {

    	$('.accordion').find('li').removeClass('current');

        alert($(this).find("ul").length==0);

        if( $(this).find("ul").length==0){
        	$(this).addClass('current');
        }

		//alert("submenu li");
		
	});*/
}

function head_menu(){
	$('.nav-list>li').hover(function(){
		var $ul=$(this).find('ul');
		var oW=$(this).width();//li
		var otrigW=$(this).find('.trig').width();
		var oNavListL=$('.nav-list').offset().left;
		var oTL=$(this).offset().left-oNavListL;//距离最左边的距离
		var oTR=$('.nav-list').width()-oTL-oW;//距离最右边的距离
		console.log(oNavListL+":"+oTL);
		
		if($ul.find('li').length>0){
			$('.second-bg').show();
			$(this).find('.trig').show();
			$ul.css('left',-oLeft+'px');
			$(".wz_context").css('top','129px'); /// 设置主页面的高度

			$ul.show();
			var sum=0;
			var oLeft=0;
			for(var i=0;i<$ul.find('li').length;i++){
				sum+=$ul.find('li').eq(i).width()+4;
			}
			$ul.width(sum);
			oLeft=(sum-oW)/2;
			if(oLeft>oTL){//到达左侧边界
				oLeft=oTL;
				$ul.css('left',-oLeft+'px');
				return ;
			}
			if(oLeft>oTR){
				$ul.css('right',-oTR+'px');
				return ;
			}						
		}
	},function(){
		$('.second-bg').hide();
		$(this).find('ul').hide();
		$(this).find('.trig').hide();
		$(".wz_context").css('top','85px'); /// 设置主页面的高度

	});
}

function  animateMenu(){

    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;
    $('#ss_toggle').on('click', function (ev) {
        rot = parseInt($(this).data('rot')) - 180;
        menu.css('transform', 'rotate(' + rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
        if (rot / 180 % 2 == 0) {
            toggle.parent().addClass('ss_active');
            toggle.addClass('close');
        } else {
            toggle.parent().removeClass('ss_active');
            toggle.removeClass('close');
        }
        $(this).data('rot', rot);
    });
    menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (rot / 180 % 2 == 0) {
            $('#ss_menu div i').addClass('ss_animate');
        } else {
            $('#ss_menu div i').removeClass('ss_animate');
        }
    });

    /**
	 *  退出当前登录
     */
    function logout(){
    	window.location = "logout";
	}

}

//alert("wz_util");
