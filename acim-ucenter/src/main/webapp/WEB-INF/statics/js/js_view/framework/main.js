

$(document).ready(function(){
   // alert("main");

    setGlobalLink(true);
    setHeadMenu('.global_header');
    globaLinkerRightFunction(); // 菜单头右边点击方法按钮
    animateMenu(); // 圆形菜单按钮功能方法
    globalClickFunction();// 横条菜单按钮方法
    setDivHeigth($(".wz_context"),$("#wz_context"));//设置菜单内容高度
    head_menu();// head_menu 触发方法

	 
});


function getAcim(bookNameId){
    var bookName = $("#"+bookNameId, window.parent.document).attr("bookName");
    //alert(bookName);
    var bookType = $("#"+bookNameId, window.parent.document).attr("bookType");
    var isAll_temp = $("#"+bookNameId, window.parent.document).attr("isAll");
    var isAll = true;
    if(isAll_temp=='false'){
        isAll= false;
    }
   // alert(isAll);
    var sheet_indexs = (0,1);
    //alert(isAll);
    var acim = {bookNameId:bookNameId,bookName:bookName,bookType:bookType,isAll:isAll,sheet_indexs:sheet_indexs};

   // alert(acim);
    return acim;

}

/**
 * 横条菜单点击功能触发
 */
function globalClickFunction(){
    $(".global_header").find("li").on('click',function(){
        var  li_id_name = $(this).find("a").attr("id");
        var  ul_id_name = $(this).parent("ul").attr("id");

        // alert(li_id_name);
        if(ul_id_name != null && ul_id_name != undefined  ){
            if(ul_id_name == 'miracles'){

                var acim = getAcim(li_id_name);
                loadMiracles_text(acim);

            }else if(ul_id_name == 'practices'){

            }else if(ul_id_name == 'physical'){

            }else if(ul_id_name == 'tv'){

            }else if(ul_id_name == 'radio'){

            }
        }

    });
}

/**
 * 菜单右边点击触发功能
 */
function globaLinkerRightFunction(){

    $(".global_linker").find("li").on('click',function(){

       // login_user  system_set   logout
        var  li_id_name = $(this).find("a").attr("id");
        if(li_id_name == 'login_user'){

        }else if(li_id_name == 'system_set'){

        }else if(li_id_name == 'logout'){
            logout();

        }

    });

}

//alert("main");






