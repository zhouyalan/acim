/**
 *
 */

function isLogin(){

}

//alert("ddddd");
/**
 * 登录信息头设置
 * @param isLogin
 * @returns {string}
 */
function setGlobalLink(isLogin){
    //alert("ddd");
    var globalLink_login = '  <ul class="menu">\n' +
        '            <li><a href="#"> </a></li>\n' +
        '            <li><a id="system_set">消息</a></li>\n' +
        '            <li>\n' +
        '                <a> 获取VIP</a>\n' +
        '            </li>\n' +
        '            <Li><a id="login_user"> 仙子</a>\n' +
        '                <ul>\n' +
        '                    <li id="logout"><a>充值</a></li>\n' +
        '                    <li><a>个人主页设置</a></li>\n' +
        '                    <li><a>退出</a></li>\n' +
        '                </ul>\n' +
        '            </Li>\n' +
        '        </ul>';

    var globalLink_unLogin = '  <ul class="menu">\n' +
        '            <li><a href="#"> </a></li>\n' +
        '            <Li><a id="login_user"> 注册</a> </Li>\n'
    '            <li><a id="system_set">登录</a></li>\n' +
    '            <li><a id="system_set">微信登录</a></li>\n' +
    '            <li><a id="system_set">QQ登录</a></li>\n' +
    '            <li><a id="system_set">微博</a></li>\n' +
    '        </ul>';

    if(isLogin){
       // alert(globalLink_login);
        $(globalLink_login).appendTo('.global_linker');
        return globalLink_login;
    }else{
        $(globalLink_unLogin).appendTo('.global_linker');
        return globalLink_unLogin;
    }
}


/**
 * 菜单头设置
 * @param idName
 */
function setHeadMenu(className) {
    /*var strMenu = '\t<div class="container">\n' +
        '\t\t\t<div class="row">\n' +
        '\t\t\t\t<div class="col-md-12">\n' +
        '\t\t\t\t\t<nav class="navbar navbar-default navbar-mobile bootsnav">\n' +
        '\t\t\t\t\t\t<div class="navbar-header">\n' +
        '\t\t\t\t\t\t\t<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">\n' +
        '\t\t\t\t\t\t\t\t<i class="fa fa-bars"></i>\n' +
        '\t\t\t\t\t\t\t</button>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t\t<div class="collapse navbar-collapse" id="navbar-menu">\n' +
        '\t\t\t\t\t\t\t<ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t<li><a href="#">首页</a></li>\n' +
        '\t\t\t\t\t\t\t\t<li class="dropdown">\n' +
        '\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">奇迹课程</a>\n' +
        '\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu">\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t\t<li class="dropdown">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" >课程内容</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<ul id="miracles"  class="dropdown-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a  id=\'miracles_text\' isAll="true" bookName =\'miracles_text\' bookType=\'excel\'>正文</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a  id="miracles_bookwork" isAll ="true" bookName=\'miracles_bookwork\' bookType=\'excel\'>练习</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a  id=\'miracles_manualForTeachers\' isAll = "true" bookName="manualForTeachers" bookType=\'excel\'>教师指南</a></li>\t\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li class="dropdown">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" >课程相关</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">葛瑞</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">肯恩</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">小飞虫</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">了了</a></li>\t\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t<li class="dropdown">\n' +
        '\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">佛学</a>\n' +
        '\t\t\t\t\t\t\t\t\t<ul  id="practices" class="dropdown-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t<li><a href="#">一涅槃</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">三大经</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">华严经</a></li> \n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">法华经</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">楞严经</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t\t\t\t<li class="dropdown">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">三大咒</a>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">楞严咒</a></li>  \n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">大悲咒</a></li>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="#">尊胜咒</a></li>\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t\n' +
        '\t\t\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t\t\t</li>\n' +
        '\t\t\t\t\t\t\t<li><a href="#">周易</a></li>\n' +
        '\t\t\t\t\t\t\t<li><a href="#">心理学</a></li>\n' +
        '\t\t\t\t\t\t\t<li><a href="#">视频音频</a></li>\n' +
        '\t\t\t\t\t\t\t<li><a href="#">上传</a></li>\n' +
        '\t\t\t\t\t\t\t</ul>\n' +
        '\t\t\t\t\t\t</div>\n' +
        '\t\t\t\t\t</nav>\n' +
        '\t\t\t\t</div>\n' +
        '\t\t\t</div>\n' +
        '\t\t</div>';
*/
    var strMenu = "<ul class=\"nav-list\">\n" +
        "\t\t\t<li><a href=\"#\">奇迹课程<span class=\"trig\"></span></a>\n" +
        "\t\t\t\t<ul id=\"miracles\">\n" +
        "\t\t\t\t\t<li><a id='miracles_text' isAll=\"true\" bookName='miracles_text' bookType='excel'>正文</a></li>\n" +
        "\t\t\t\t\t<li><a id=\"miracles_bookwork\" isAll=\"true\" bookName='miracles_bookwork' bookType='excel'>练习</a></li>\n" +
        "\t\t\t\t\t<li><a id='miracles_manualForTeachers' isAll=\"true\" bookName=\"manualForTeachers\" bookType='excel'>教师指南</a>\n" +
        "\t\t\t\t\t</li>\n" +
        "\n" +
        "\t\t\t\t</ul>\n" +
        "\t\t\t</li>\n" +
        "\t\t\t<li><a href=\"#\">佛教<span class=\"trig\"></span></a>\n" +
        "\t\t\t\t<ul id=\"practices\">\n" +
        "\t\t\t\t\t<li><a href=\"#\">出境首页</a></li>\n" +
        "\t\t\t\t\t<li><a href=\"#\">当地玩乐</a></li>\n" +
        "\n" +
        "\t\t\t\t</ul>\n" +
        "\t\t\t</li>\n" +
        "\t\t\t<li><a href=\"#\">心理学<span class=\"trig\"></span></a>\n" +
        "\t\t\t\t<ul id=\"physical\">\n" +
        "\t\t\t\t\t<li><a href=\"#\">国内长途</a></li>\n" +
        "\t\t\t\t\t<li><a href=\"#\">周边跟团</a></li>\n" +
        "\t\t\t\t\t<li><a href=\"#\">周边跟团</a></li>\n" +
        "\n" +
        "\t\t\t\t</ul>\n" +
        "\t\t\t</li>\n" +
        "\t\t\t<li><a href=\"#\">视频<span class=\"trig\"></span></a>\n" +
        "\t\t\t\t<ul id=\"tv\">\n" +
        "\t\t\t\t\t<li><a href=\"#\">出境首页1</a></li>\n" +
        "\t\t\t\t\t<li><a href=\"#\">游轮111</a></li>\n" +
        "\t\t\t\t\t<li><a href=\"#\">出境首页</a></li>\n" +
        "\t\t\t\t</ul>\n" +
        "\t\t\t</li>\n" +
        "\t\t\t<li><a href=\"#\">音频<span class=\"trig\"></span></a>\n" +
        "\t\t\t\t<ul id=\"radio\">\n" +
        "\t\t\t\t\t<li><a href=\"#\">出境首页</a></li>\n" +
        "\t\t\t\t\t<li><a href=\"#\">当地玩乐</a></li>\n" +
        "\t\t\t\t</ul>\n" +
        "\t\t\t</li>\n" +
        "\n" +
        "\n" +
        "\t\t</ul>\n" +
        "\n";

    //alert("strMenu");
   // alert(className);
    $(strMenu).appendTo(className);


}


/**
 *  退出当前登录
 */
function login() {
    window.location = "login";
}


/**
 * 菜单menu
 */
function  animateMenu() {

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


function circleMenu(){

    var or = 150;
    var ir = 50;
    var mWidth = 30;
    var mDLen = Math.sqrt(2 * Math.pow(mWidth,2));
    //第1菜单块中心点与以o(150,150)为圆心的的X轴的夹角为-90(-PI/2), 求菜单块中心点坐标
    var m1X = parseInt( (Math.cos( -1 * Math.PI / 2 ) * (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m1Y = parseInt( (Math.sin( -1 * Math.PI / 2 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m1").width(mWidth);
    $("#m1").height(mWidth);
    $("#m1").offset( {top:m1Y,left:m1X} );

    //第2菜单块中心点与以o(150,150)为圆心的的X轴的夹角为-45(-PI/4), 求菜单块中心点坐标
    var m2X = parseInt( (Math.cos( -1 * Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m2Y = parseInt( (Math.sin( -1 * Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m2").width(mWidth);
    $("#m2").height(mWidth);
    $("#m2").offset( {top:m2Y,left:m2X} );

    //第3菜单块中心点与以o(150,150)为圆心的的X轴的夹角为0(0), 求菜单块中心点坐标
    var m3X = parseInt( (Math.cos( 0 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m3Y = parseInt( (Math.sin( 0 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m3").width(mWidth);
    $("#m3").height(mWidth);
    $("#m3").offset( {top:m3Y,left:m3X} );

    //第4菜单块中心点与以o(150,150)为圆心的的X轴的夹角为45(PI/4), 求菜单块中心点坐标
    var m4X = parseInt( (Math.cos( Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m4Y = parseInt( (Math.sin( Math.PI / 4 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m4").width(mWidth);
    $("#m4").height(mWidth);
    $("#m4").offset( {top:m4Y,left:m4X} );

    //第5菜单块中心点与以o(150,150)为圆心的的X轴的夹角为90(PI/2), 求菜单块中心点坐标
    var m5X = parseInt( (Math.cos( Math.PI / 2 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m5Y = parseInt( (Math.sin( Math.PI / 2 ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m5").width(mWidth);
    $("#m5").height(mWidth);
    $("#m5").offset( {top:m5Y,left:m5X} );

    //第6菜单块中心点与以o(150,150)为圆心的的X轴的夹角为135(0.75PI), 求菜单块中心点坐标
    var m6X = parseInt( (Math.cos( 0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m6Y = parseInt( (Math.sin( 0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m6").width(mWidth);
    $("#m6").height(mWidth);
    $("#m6").offset( {top:m6Y,left:m6X} );

    //第7菜单块中心点与以o(150,150)为圆心的的X轴的夹角为180(PI), 求菜单块中心点坐标
    var m7X = parseInt( (Math.cos( Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m7Y = parseInt( (Math.sin( Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m7").width(mWidth);
    $("#m7").height(mWidth);
    $("#m7").offset( {top:m7Y,left:m7X} );

    //第8菜单块中心点与以o(150,150)为圆心的的X轴的夹角为-135(PI), 求菜单块中心点坐标
    var m8X = parseInt( (Math.cos( -0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    var m8Y = parseInt( (Math.sin( -0.75 * Math.PI ) *  (ir + ((or - ir - mDLen)/2) + mDLen/2) ) + 150 - mWidth/2 );
    $("#m8").width(mWidth);
    $("#m8").height(mWidth);
    $("#m8").offset( {top:m8Y,left:m8X} );

    //===============================================

    var preX,preY;//上一次鼠标点的坐标
    var curX,curY;//本次鼠标点的坐标
    var preAngle;//上一次鼠标点与圆心(150,150)的X轴形成的角度(弧度单位)
    var transferAngle;//当前鼠标点与上一次preAngle之间变化的角度

    var a = 0;

    for(var i = 0 ; i < 15 ; i++){
        $("body").append("<br>");
    }

    //点击事件
    $("#outerDiv").mousedown(function(event){
        preX = event.clientX;
        preY = event.clientY;
        //计算当前点击的点与圆心(150,150)的X轴的夹角(弧度) --> 上半圆为负(0 ~ -180), 下半圆未正[0 ~ 180]
        preAngle = Math.atan2(preY - 150, preX - 150);
        //移动事件
        $("html").mousemove(function(event){
            curX = event.clientX;
            curY = event.clientY;
            //计算当前点击的点与圆心(150,150)的X轴的夹角(弧度) --> 上半圆为负(0 ~ -180), 下半圆未正[0 ~ 180]
            var curAngle = Math.atan2(curY - 150, curX - 150);
            transferAngle = curAngle - preAngle;
            a += (transferAngle * 180 / Math.PI);
            $('#outerDiv').rotate(a);

            for( var i = 1 ; i <= 8 ; i++ ){
                $("#m"+i).rotate(-a);
            }
            preX = curX;
            preY = curY;
            preAngle = curAngle;
        });
        //释放事件
        $("html").mouseup(function(event){
            $("html").unbind("mousemove");
        });
    });

}


/**
 * 进度条方法
 */
function progressBar(){
   // alert("进度条");
    //a 底色，b 加载色 , w 展示宽度，h 展示高度
    var a="#21da9a";
    var b="#dfdfdf";
    var w="150px";
    var h="16px";
    var div=$(".progressBar");//进度条要插入的地方
    var barb=function(){
        div.each(function(){
            var width=$(this).attr('w');
            var barbox='<dl class="barbox"><dd class="barline"><div w="'+width+'" class="charts" style="width:0px;height:16px;"><d></d></div></dd></dl>';
            $(this).append(barbox);
            //alert(barbox);
        })
    }

    var amimeat=function(){
        $(".charts").each(function(i,item){
            var wi=parseInt($(this).attr("w"));
            $(item).animate({width: wi+"%"},1000,function(){//一天内走完
                $(this).children('d').html(wi+"%");
            });
        });
    }
    var barbCss=function(a,b){
        $(".barbox").css({
            "height":h,
            "line-height":h,
            "text-align":"center",
            // "border":"1px solid red",
            "margin":"0px auto 0px auto",

            "color":"#fff"
        })
        $(".barbox>dd").css({
            "float":"left",
            "margin-left":"-4px"
        })
        $(".barline").css({
            "width":w,
            "background":b,
            "height":h,
            "overflow":"hidden",
            "display":"inline",
            "position":"relative",
            "left":"0px",
            // "border":"1px solid red",
            "border-radius":"8px"

        })
        $(".barline>d").css({
            "position":"absolute",
            "top":"0px"
        })
        $(".charts").css({
            "background":a,
            "height":h,
            "width":"0px",
            "overflow":"hidden",
            // "border":"1px solid red",
            "border-radius":"8px"
        })
    }
    barb();
    amimeat();
    barbCss(a,b);
}



//alert("wz_util");
