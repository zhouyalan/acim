
var catalogMap_cn = {};
var catalogMap_eng = {};

//setDivHeigth(,);

var windowsHeight = window.screen.height; //document.body.clientHeight
var objTop = $("#catalog").offset().top;

 	$(".miracle-context-catalog,miracle-context-chapter").css("height",windowsHeight-objTop-110);

 	
 	
 	/***
 	 * 页面ready加载
 	 */
 	$(document).ready(function(){	
 		
 		var bookName = "";
 		
 		var bookNameId = $('#bookId').val();//$('#bookId', window.parent.document).val();
 		//alert(bookNameId);
 		if(bookNameId != null){ 		
	 		//alert(bookNameId);
			var acim =   getAcim(bookNameId);
			loadMiracles_text(acim);
			acim = null;

		}
 	 	//alert(isAll);
 	 	//		//loadMiracles_text("正文");	 
 	});

//var catalogMap  = new Object ;

/**
 * 后台获取奇迹课程书内容
 * 包含两部分，目录 + 内容
 * @param bookName
 * @returns
 */
function loadMiracles_text(acim){
	 var url =  "showAcim";
	 var data = acim;
	 $.ajax({
			url : url,
			data : data,
			type : "POST",
			dataType : 'json',
			success : function(json) {
				// alert(eval(json));
				miracles(eval(json));
			},
			error : function(er) {
				backErr(er);
			}
		});
	// alert();
}

/***
 * 显示奇迹课程内容+catalog
 * 返回值类型是： List<Map<String,Map<String, String>>>
 * @param josnData
 * @returns
 */
function  miracles(josnData){

	//alert(josnData.length);
	
	var catalog = josnData.目录;
	insertCatalog(catalog);
	insertContex(josnData)
	//alert(josnData.length);
}

/**
 * 插入目录相关正文内容
 * date 2017-11-13
 * @param catalog
 * @returns
 */
function insertContex(josnData){
	//var miraclesText = null;
	var chapterId_temp = null;
	var sectionId_temp = null;
	var isTitle_temp = null;
	var context_cn_temp = null;
	var context_eng_temp = null;
	var mapcontex = null;
	var size =0;
	
	var contextHtml = "";
	
	$.each( josnData, function(k, v){ 
		
		//alert( "Key: " + k + ", Value: " + v ); 
		if(k != '目录'){
			//alert( v);
			//miraclesText = v;
			//alert(miraclesText.length)
			//alert(k);
			if(v!=null){
				size = v.length;
				//alert(size);
				for( var i=0;i<size;i++){
					//alert(v[i]);
					mapcontex = v[i];	
					//alert(" mapcontex.chapterId " + mapcontex.chapterId);
					chapterId_temp = $.trim(mapcontex.chapterId);					
					sectionId_temp = $.trim(mapcontex.sectionId);
					context_cn_temp = $.trim(mapcontex.context_cn);
					context_eng_temp = $.trim(mapcontex.context_eng);
					isTitle_temp = $.trim( mapcontex.isTitle);
					//alert($.trim(sectionId_temp));
					
					if(isTitle_temp=="yes"){
						if(i!=0){
							contextHtml +="</div>";
						}
						 contextHtml +='<div class="miracle-context-chapter-title" id="text'+ chapterId_temp +'">'+
						 catalogMap_cn[chapterId_temp] + '</div>';
						 contextHtml += ' <div class="miracle-context-chapter-context"> ';
						 contextHtml +=' <p >' + context_cn_temp+'['+ sectionId_temp +']  </P>' ;
					}else if(isTitle_temp=="no" && sectionId_temp !="" ){
						contextHtml +=' <p >' + context_cn_temp+'['+ sectionId_temp + chapterId_temp+']  </p>' ;
					}else if(isTitle_temp=="chapter"){
						//alert();
						 contextHtml += ' <div class="miracle-context-chapter-title2" id="text'+ chapterId_temp +'">'+
						 context_cn_temp + '</div>';
					}else if(isTitle_temp=="left" || isTitle_temp=="center" || isTitle_temp=="right") {

						contextHtml +=' <p  style="text-align:'+ isTitle_temp +';">' + context_cn_temp+'  </p>' ;	
					}	
					
				}
			}
		}
		
	}); 
	
	contextHtml +="</div>";
	//alert(contextHtml);
    $("#context").empty();
	$(contextHtml).appendTo("#context");
	
}



/***
 * Map<String,List<Map<String,String>>>
 * @param catalogText
 * @returns
 */
function insertCatalog(catalogText){
	//catalogId  ifMainCatalog  hasSubCatalog  catalogName miraclePages  catalogName_eng
	//alert(catalogText.length);
	var size = catalogText.length;
	
   // var size = catalogText.length;
	
	var catalogI_temp = null;
	var ifMainCatalog_temp =null;
	var hasSubCatalog_temp = null;
	var catalogName_temp = null;
	var miraclePages_temp = null;
	var catalogName_eng_temp = null;
	var catalogId_befor = '';
	
	var  mapCatalog = null;
	//alert(size);
	
	var catalogHtml = " <div class='account-l fl'>"+
	'<a class="list-title">'+ catalogText[0].catalogName +'目录</a>' +
	'<ul id="accordion" class="accordion">';
	
	for(var i=1;i< size;i++){
		//catalogMap.put();
		mapCatalog = catalogText[i];
		catalogId_temp = $.trim(mapCatalog.catalogId);
		ifMainCatalog_temp = $.trim(mapCatalog.ifMainCatalog);
		hasSubCatalog_temp = $.trim(mapCatalog.hasSubCatalog);
		catalogName_temp = $.trim(mapCatalog.catalogName);
		miraclePages_temp =$.trim( mapCatalog.miraclePages);
		catalogName_eng_temp = $.trim(mapCatalog.catalogName_eng);
		miraclePages_temp = miraclePages_temp.toString().substring(0,miraclePages_temp.indexOf('.'));
		//alert(catalogMap_cn);
		catalogMap_cn[catalogId_temp] = catalogName_temp ;  //赋值中文catalog
		catalogMap_eng[catalogId_temp] = catalogName_eng_temp; //赋值英文catalog
		//alert();

		/*
		alert("catalogName_temp " + catalogName_temp);
		alert("catalogId_temp " + catalogId_temp);
		alert("ifMainCatalog_temp " + ifMainCatalog_temp);
		alert("hasSubCatalog_temp " + hasSubCatalog_temp);
		alert("catalogName_temp " + catalogName_temp);
		alert("miraclePages_temp " + miraclePages_temp);
*/
       
				
		if((ifMainCatalog_temp=="yes" &&  hasSubCatalog_temp =="yes") ){
			if(catalogId_befor.length>2){
				/*
				alert((catalogId_befor.length-catalogId_temp.length)/2);
				for( var i =0;i<(catalogId_befor.length-catalogId_temp.length)/2;i++){
					catalogHtml += "</ul></li>";
				} */
				
				if(catalogId_befor.length  - catalogId_temp.length == 6){
		        	catalogHtml +="</ul></li>";
		        	catalogHtml +="</ul></li>";
		        	catalogHtml +="</ul></li>";
		        }else if(catalogId_befor.length  - catalogId_temp.length == 2){
		        	catalogHtml +="</ul></li>";

		        }else if(catalogId_befor.length  - catalogId_temp.length == 4){
		        	catalogHtml +="</ul></li>";
		        	catalogHtml +="</ul></li>";
		        } 
			}			
			catalogHtml +="<li>" +
			 '<div class="link"  href="#text'+ catalogId_temp +'" id="'+  catalogId_temp+'" >'+
			 '<a  href="#text'+ catalogId_temp +'">'+ catalogName_temp  + ' ['+ miraclePages_temp +']' +'</a></div>';
		      if(catalogId_temp.length ==2){
                  catalogHtml += '<ul class="submenu">';
			  }else if(catalogId_temp.length ==4){
                  catalogHtml += '<ul class="submenu_01">';
			  }else if(catalogId_temp.length ==6){
                  catalogHtml += '<ul class="submenu_0101">';
			  }

		}else if(i!=1 && (ifMainCatalog_temp=="yes" &&  hasSubCatalog_temp =="no") ){			
			if(catalogId_befor.length>2){
				catalogHtml +="</ul></li>";
			}
			catalogHtml +="<li>" +
			'<div class="link" href="#text'+ catalogId_temp +'" id="'+ catalogId_temp+'"> <a  href="#text'+ catalogId_temp +'">'+ catalogName_temp + ' ['+ miraclePages_temp +']' +'</a></div>'+
            '</li>';
		}else if (ifMainCatalog_temp=="no"&&  hasSubCatalog_temp =="yes"){			
			if(catalogId_befor.length > catalogId_temp.length ){
				catalogHtml +="</ul></li>";
			}
			catalogHtml +=
			 '<li>'+
             '<div  id="'+ catalogId_temp +'" class="link"> <a  href="#text'+ catalogId_temp +'" >'+ catalogName_temp  + ' ['+ miraclePages_temp +']' +' </a></div>';

            if(catalogId_temp.length ==2){
                catalogHtml += '<ul class="submenu">';
            }else if(catalogId_temp.length ==4){
                catalogHtml += '<ul class="submenu_01">';
            }else if(catalogId_temp.length ==6){
                catalogHtml += '<ul class="submenu_0101">';
            }
		}else if(ifMainCatalog_temp=="no" &&  hasSubCatalog_temp =="no" ){
			//alert(catalogId_befor );
			//if(  catalogId_befor.toString().length == 8 ) { alert(catalogId_befor.length) };

			if(catalogId_befor.length>=4 && catalogId_befor.length > catalogId_temp.length ){
		        if( catalogId_befor.length  - catalogId_temp.length == 2 ){
				   catalogHtml +="</ul></li>";
		        }else if(catalogId_befor.length  - catalogId_temp.length == 6){
		        	catalogHtml +="</ul></li>";
		        	catalogHtml +="</ul></li>";
		        }else if(catalogId_befor.length  - catalogId_temp.length == 10){
				//catalogHtml +="</ul></li>";
				//catalogHtml +="</ul></li>";
				//catalogHtml +="</ul></li>";
		        }
			}
			
			catalogHtml += '<li  id="'+ catalogId_temp +'"><a  href="#text'+ catalogId_temp +'">'+ catalogName_temp  + ' ['+ miraclePages_temp +']' +'</a></li>';
		}
		
		catalogId_befor = catalogId_temp;

	} 
	
	//alert(catalogMap_cn["9901"]);
	
	for( var i =1;i<(catalogId_temp.length/2);i++){
		catalogHtml += "</ul></li>";
	}	
	//alert(catalogId_temp);
	catalogHtml += "</ul></div>";
	//alert(catalogHtml);
    $("#catalog").empty();
	$(catalogHtml).appendTo("#catalog");	
	catalogHtml=null;
	catalogId_befor =null;
	catalogText=null;
	ifMainCatalog_temp =null;
	hasSubCatalog_temp =null;
	catalogName_temp =null;
	miraclePages_temp =null;
	catalogName_eng_temp =null;
	size =null;
	leftNav("accordion");
}


function insertMiraclesText(catalogText){
	
}

