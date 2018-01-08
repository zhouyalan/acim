
var mainContextMenuIndex = "mainContextMenu_1";  // 主页内容菜单状态
var footerMenuIndex = "shouye_footer";

$(document).ready(function(){

    startSwiper(); //启动滑动条
    footerDiv();// 添加footer;
    searchDiv(); //头部搜菜单
    //添加中间内容ddd
    mainContextMenuBar();
    setMainContextHeight();
    footerMenuClick();
    progressBar();//进度条方法
    addEvent();// 添加事件
    //alert("main");
});






/**
 * 启动滑动条
 */
function startSwiper(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


/**
 * 设置屏幕的高度
 */
function  setMainContextHeight(){

   var footerTop =  $(".footer").offset().top;
   //var main_context_menuBarHeigth = $(".main_context_menuBar").offsetHeight;
   var main_context_menuBarTop = $(".main_context_iphone").offset().top;
   var bodyHeigth = window.screen.height;
   // alert(bodyHeigth);
  // alert(main_context_menuBarTop);
    $('.main_context_iphone').height(bodyHeigth-main_context_menuBarTop-180);
   // alert($('.main_context_iphone').height());
}

/**
 *
 */
function addEvent(){

     //alert($(".main_context_menuBar li").length);
    $(".main_context_menuBar li").on("click", function(){
     //   alert("tap");
        $(this).addClasses("hover");
      //  $(this).siblings().removeClass('main_context_menuBar_over');

    });

    $('.main_context_menuBar').find("li").on("click",function(){
        var idName = $(this).attr("id");
        alert("main_context_menuBar");
        if(idName == null){
            return;
        }
        mainContextMenuIndex = idName;
      //  alert("dd");
        mainContextMenuClick();
    });

    $(".footer").find("li").on('click',function(){

        var idName = $(this).attr("id");
        if(idName == null){
            return;
        }
        footerMenuIndex = idName;
        footerMenuClick();

    });
}


function footerMenuClick(){
   // alert();
    if(footerMenuIndex == "shouye_footer"){
        mainContextMenuClick(); //首页菜单初始化
    }else if(footerMenuIndex == "mutiMedia_footer"){

    }else if(footerMenuIndex == "add_footer"){

    }else if(footerMenuIndex == "information_footer"){

    }else if(footerMenuIndex == "my_footer"){

    }

}


/**
 * 首页内容菜单切换内容显示
 */
function mainContextMenuClick(){
    if(mainContextMenuIndex == "mainContextMenu_1"){
        createMiraclesList();
    }else if(mainContextMenuIndex == "mainContextMenu_2"){
        alert("mainContextMenu_2");
        $(".main_context_iphone").empty();
    }else if(mainContextMenuIndex == "mainContextMenu_3"){
    }else if(mainContextMenuIndex == "mainContextMenu_4"){
    }
}

/**
 * mainContextMenuBar
 */
function mainContextMenuBar(){

    var mainContextMenuBar ="<div class=\"main_context_menuBar\">\n" +
        "    <ul>\n" +
        "        <li id='mainContextMenu_1'><a>奇迹课程</a></li>\n" +
        "        <li id='mainContextMenu_2'><a>最新</a></li>\n" +
        "        <li id='mainContextMenu_3'><a>分类</a></li>\n" +
        "        <li id='mainContextMenu_4'><a>收藏</a></li>\n" +
        "    </ul>\n" +
        "</div>";
    $(mainContextMenuBar).appendTo("body");
}


/**
 * 设置头部菜单
 */
function searchDiv(){
    var searchDiv = " <form >\n" +
        "        <input type=\"search\" id=\"search\">\n" +
        "        <i class=\"iconfont icon-search\"></i>\n" +
        "    </form>";
    $(searchDiv).appendTo(".searchBar");
}

/**
 * 添加footerDiv
 */
function footerDiv(){
    var footerDiv =" <ul>\n" +
        "       <li id='shouye_footer'>\n" +
        "           <table>\n" +
        "               <tr><td><i class=\"icon iconfont icon-icon-58\"></i></td></tr>\n" +
        "               <tr><td><a>首页</a></td></tr>\n" +
        "           </table>\n" +
        "           </li>\n" +
        "       <li id='mutiMedia_footer'>\n" +
        "           <table>\n" +
        "               <tr><td><i class=\"icon iconfont icon-duomeiti2\"></i></td></tr>\n" +
        "               <tr><td><a>多媒体</a></td></tr>\n" +
        "           </table>\n" +
        "       </li>\n" +
        "       <li id='add_footer'>\n" +
        "           <table>\n" +
        "               <tr th:cowspan=\"2\"><td> " +
        "                     <a><i style=\"font-size:35px; \" class=\"icon iconfont icon-meitikuwubiaoqianbanv1105\"></i></a>" +
        "                  </td></tr>\n"+
        "           </table>\n" +
        "       </li>\n" +
        "       <li id='information_footer'>\n" +
        "       <table>\n" +
        "           <tr><td><i class=\"icon iconfont icon-xiaoxi3-copy\"></i></td></tr>\n" +
        "           <tr><td><a>消息</a></td></tr>\n" +
        "       </table>\n" +
        "   </li>\n" +
        "       <li id='my_footer'>\n" +
        "           <table>\n" +
        "               <tr><td><i class=\"icon iconfont icon-icon-56\"></i></td></tr>\n" +
        "               <tr><td><a>我的</a></td></tr>\n" +
        "           </table>\n" +
        "       </li>\n" +
        "   </ul>";
    $(footerDiv).appendTo(".footer");
    //alert(footerDiv);

}