

//alert("book.js");

/***
 * 创建首页奇迹课程列表
 */
function createMiraclesList(){
   // alert("dddd");
   var mediaList =  medialList();
   var mediaList_length = mediaList.length;

   // alert(mediaList_length);
   var divStr = " <script type=\"text/html\" th:inline=\"javascript\" id = 'miracles_book_sr'> ";
   var  aa  = " <div class=\"miracles_book\">";
    for(var i =0; i<mediaList_length;i++){
          divStr +=" <table id='"+ mediaList[i].mediaId+"'>\n" +
              "        <tr>\n" +
              "            <td class=\"book_image\" > <img class=\"book_image2\" src='" + mediaList[i].mediaImgUrl+"' ></td>\n" +
              "            <td class=\"book_mid\">\n" +
              "                <p class=\"book_name\" > "+ mediaList[i].mediaName_ch+"</p>\n" +
              "                <p class=\"book_recommend\">"+mediaList[i].mediaDiscrip+" </p>\n" +
              "                <p class=\"book_jdt\"> <div class=\"progressBar\" w='"+ mediaList[i].mediaPercent+"' >\n" +
              "\n" +
              "            </div></p>\n" +
              "            </td>\n" +
              "            <td class=\"book_function\">\n" +
              "                <ul>\n" +
              "                    <li id='"+ mediaList[i].mediaId+"_sq'><a>书签</a></li>\n" +
              "                    <li id='"+ mediaList[i].mediaId+"_bj'><a>笔记</a></li>\n" +
              "                </ul>\n" +
              "            </td>\n" +
              "        </tr>\n" +
              "    </table>";
    }
    divStr += "</script>";

    $(".main_context_iphone").empty();
   // alert(divStr);
    $(divStr).appendTo('.main_context_iphone');
    $('.main_context_iphone').html(aa + $("#miracles_book_sr").html() +"</div>")
}

/**
 *  meidaType :1 book ,2 ridio, 3,vidio
 */

function  medialList(){

    var mediaList= new Array();
    mediaList[0] = {
        mediaId:"01" ,  //多媒体ID
        mediaType:"b",  //多媒体类型，b book r radio v vido
        mediaName:"miracles_text",   //多媒体名称
        mediaName_ch:"正文",   //多媒体名称
        mediaSource:"s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip:"海伦舒曼 若水译",// 多媒体描述
        mediaPercent: 70, //完成%比
        mediaImgUrl:"./images_mobile/miracles2.jpg", // 图片路径
        mediaUrl:"" // 媒体路径
    };
    mediaList[1]={
        mediaId:"01" ,  //多媒体ID
        mediaType:"b",  //多媒体类型，b book r radio v vido
        mediaName:"miracles_workbook",   //多媒体名称
        mediaName_ch:"练习手册",   //多媒体名称
        mediaSource:"s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip:"海伦舒曼 若水译",// 多媒体描述
        mediaPercent: 60, //完成%比
        mediaImgUrl:"./images_mobile/miracles2.jpg", // 图片路径
        mediaUrl:"" // 媒体路径

    };
    mediaList[2] = {
         mediaId: "01",  //多媒体ID
         mediaType: "b",  //多媒体类型，b book r radio v vido
         mediaName: "miracles_manualForTeachers",   //多媒体名称
         mediaName_ch: "教师指南",   //多媒体名称
         mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
         mediaDiscrip: "海伦舒曼 若水译",// 多媒体描述
         mediaPercent: 10, //完成%比
         mediaImgUrl:"./images_mobile/miracles2.jpg", // 图片路径
         mediaUrl: ""// 媒体路径
     };
    mediaList[3] =
    {
        mediaId: "01",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_dou",   //多媒体名称
        mediaName_ch: "告别娑婆",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 25, //完成%比
        mediaImgUrl:"./images_mobile/gbsp2.jpg", // 图片路径
        mediaUrl: ""// 媒体路径
    };
    mediaList[4] =
     {
        mediaId: "01",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_howToBreakTheCycleOfBirthAndDeath",   //多媒体名称
        mediaName_ch: "断轮回",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 ",// 多媒体描述
        mediaPercent: 30, //完成%比
        mediaImgUrl:"./images_mobile/dlh.jpg", // 图片路径
        mediaUrl: ""// 媒体路径
    };
    mediaList[5] = {
        mediaId: "01",  //多媒体ID
        mediaType: "b",  //多媒体类型，b book r radio v vido
        mediaName: "gary_loveHasForgottenNoOne",   //多媒体名称
        mediaName_ch: "爱未曾忘记一个人",   //多媒体名称
        mediaSource: "s",  //多媒体来源，m 自己，s 系统， o 其他用户
        mediaDiscrip: "葛瑞·雷纳 若水译",// 多媒体描述
        mediaPercent: 20, //完成%比
        mediaImgUrl:"./images_mobile/book.jpeg", // 图片路径
        mediaUrl: ""// 媒体路径
    };

    return mediaList;
}






