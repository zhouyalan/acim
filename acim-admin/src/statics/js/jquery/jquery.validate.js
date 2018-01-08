function Validator(errClass){
	this.errorClass = errClass || 'errorTip';
	var self = this;
	
	function execReg(value, reg){
		return reg.test(removeDotInNumber(value));		//test方法用于检测一个字符串是否匹配某个模式
	};
	function getLength(value, element){
		if($(element).is('select')){
			return $("option:selected", element).length;
		}else if($(element).attr('type').toLowerCase()=='checkbox' || $(element).attr('type').toLowerCase()=='radio'){
			return $("[name='"+$(element).attr('name')+"']").filter(':checked').length;
		}
		return value.replace(/[^\x00-\xff]/g, "**").length;
	};

	//检验方法，可以通过addMethod添加自定义方法
	var methods = {
		required : function(value,element) {
			return getLength($.trim(value), element) > 0;
		},
		clearUnlawCode : function(value,element) {//清除非法字符
			return getLength(value,element)==0 || execReg(value,/^[\u0391-\uFFE5\w\d\r\n\s-]*$/);//wuliufu 2012-3-20 去掉中文 '-'
		},
		clearUnlawCode2: function(value,element) {//清除非法字符(空格在内的非法字符)
			return getLength(value,element)==0 || execReg(value,/^[\u0391-\uFFE5\w\d\r\n]*$/);
		},
		positiveInteger : function(value,element) {//自然数
			return getLength(value,element)==0 || execReg(value,/^0$|^([1-9]+[0-9]*)$/);
		},
		SpecialPositiveNumber : function(value,element) {//只能为自然数或者-1
		    return getLength(value,element)==0 || execReg(value,/^-1$|^-1(\.)0*$$|^0$|^0(\.[0-9]+)?$|(^[1-9]+)0*([0-9]+)?(\.[0-9]+)?$/);
		},
		positiveNumber : function(value,element) {//非负数
		    return getLength(value,element)==0 || execReg(value,/^0$|^0(\.[0-9]+)?$|(^[1-9]+)0*([0-9]+)?(\.[0-9]+)?$/);
		},
		gtzInteger : function(value,element) {//大于0的整数
		    return getLength(value,element)==0 || execReg(value,/^([1-9]+[0-9]*)$/);
		},
		positive : function(value,element){
			return getLength(value,element)==0 || execReg(value,/^\d+$/);
		},
        charADight : function(value,element){//A-Za-z0-9\
            return getLength(value,element)==0 || execReg(value, /^[\w\d\r\n\s]*$/);//\w\d\r\n\s-
        },
        dight: function(value,element){//只能输入数字
            return getLength(value,element)==0 || execReg(value, /^[0-9\-]*$/);
        },
		email : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		},
		phone : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/);
		},
		fax : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/);
		},
		mobile : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}?$|15[0-9]\d{8}?$|18[0-9]\d{8}?$/);
		},
		mobileAndPhone : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}?$|15[0-9]\d{8}?$|18[0-9]\d{8}?$/)||
			     execReg(value, /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/);
		},
		url : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
		},
		zip : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[1-9]\d{5}$/);
		},
		ip : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[\d\.]{7,15}$/);
		},
		qq : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[1-9]\d{4,8}$/);
		},
		digits : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[-\+]?\d+$/);
		},
		number : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[-\+]?\d+(\.\d+)?$/);
		},
		money : function(value,element){
			return getLength(value,element)==0 || execReg(value, /^(\d{1,3}(,\d\d\d)*(\.\d{1,3}(,\d\d\d)*)?|\d+(\.\d+)?)$/);
		},
		english : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[A-Za-z]+$/);
		},
		chinese : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[\u0391-\uFFE5]+$/);
		},
		name : function(value,element) {
			return getLength(value,element)==0 || execReg(value, /^[A-Za-z0-9_\-\u0391-\uFFE5]+$/);
		},
		date : function(value,element) {
//			return getLength(value,element)==0 || execReg(value, /^[0-9]{4}[\/-]((0[1-9])|1[0-2])[\/-]((0[1-9])|([1-2][0-9])|30|31)$/);
			var reg = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
			return getLength(value,element)==0 || execReg(value, reg);
		},
		fzqmc : function(value,element) {
		   if(value.indexOf("！")<0 &&value.indexOf("？")<0&&value.indexOf("@")<0&&value.indexOf("￥")<0
		   &&value.indexOf("%")<0&&value.indexOf("……")<0&&value.indexOf("&")<0&&value.indexOf("*")<0
		   &&value.indexOf("——")<0&&value.indexOf("》")<0&&value.indexOf("《")<0){
		      return getLength(value,element)==0 ||execReg(value, /^[A-Za-z0-9\(\)\u0391-\uFFE5]+$/);
		   }
		},
		custom : function(value, element) {
			var param = $(element).attr("regexp");
			return execReg(value, new RegExp(param,"gi"));
		},
		
		minlength : function(value, element) {
			var param = $(element).attr("minlength");
			return getLength($.trim(value), element) >= param;
		},
		
		maxlength : function(value, element) {
			var param = $(element).attr("maxlength");
			return getLength($.trim(value), element) <= param;
		},
		rangelength : function(value, element) {
			var length = getLength($.trim(value), element);
			
			var param = new Array();
			param[0] = $(element).attr("minlength");
			param[1] = $(element).attr("maxlength");
			
			return ( length >= param[0] && length <= param[1] );
		},
		noneq: function( value,element){
			var param=$(element).attr("noneq");
			return value!=param;
		},
		min : function( value, element) {
			var param = $(element).attr("min");
			value = parseFloat(removeDotInNumber(value));
			param = parseFloat(removeDotInNumber(param));
			return value>=param;
		},
		max : function( value, element) {
			var param = $(element).attr("max");
			return eval(value) <= eval(param);
		},
		range : function( value, element ) {
			value = removeDotInNumber(value);
			var param = new Array();
			param[0] = parseFloat($(element).attr("min"));
			param[1] = parseFloat($(element).attr("max"));
			return getLength(value,element)==0 || ( value >= param[0] && value <= param[1] );
		},
		rangeSize : function( value, element ) {
			var param = new Array();
			param[0] = parseFloat($(element).attr("min"));
			param[1] = parseFloat($(element).attr("max"));
			return getLength(value,element)==0 || ( value > param[0] && value < param[1] );
		},
		equalTo : function( value, element ) {
			var to = $(element).attr('to');
			return value == jQuery('input[name="' + to + '"]').eq(0).val();
		},
		sEqualTo : function( value, element ) {
			var to = $(element).attr('to');
			return  ($(element).parent().find(to).val() == value);
		},
		frac : function( value, element ) {
			value = removeDotInNumber(value);
			if(isNaN( value)){
				return false;
			}
			var fraNum = 0;
			var ss = value.split(".");
			if(ss.length == 1)
			{
				fraNum = 0;
			}
			else
			{
				fraNum = ss[1].length;
			}
			var f = $(element).attr('frac');
			
			return  getLength(value,element)==0 || fraNum == f ;
		},
		percent : function( value, element){
			return getLength(value,element)==0 || execReg(value,/^[-\+]?\d+(\.\d+)?%{1}$/);
		},
		forbid : function( value, element){
			var pass = true;
			if($(element).is("select"))
			{
				$(element).find("option").each(function(){
					if($(this).attr("forbid")=="forbid" && $(element).val()==$(this).val())
					{
						pass = false;
					}
				});
			}
			return pass;
		},
		selected : function( value, element){
			return $("option:selected",element).val() != "--" && $("option:selected",element).val() != "" && $("option:selected",element).val() != null;
		},
		fsetcodeCheckboxTree : function( value, element){
			var i = 0;
			if(value==""){
				return true;
			}
			var str = value.split(",");
			var array = new Array();
			$("#"+element.attr("fsetcodeData")+" input[name='assetTree']").each(function() {
				if ($(this).attr("regulationValue")==undefined) {
					array[i] = $(this).attr("value");
					i++;
				}
			});
			for(var n=0;n<str.length;n++){
				 if(str[n].indexOf("-")!=-1){
			    	value = str[n].split("-")[0];
			    } else{
			    	value = str[n];
			    }
				if($.inArray(value,array)==-1){
					return false;
				}
			}
			return true;
			
		},
		fsetcodeRadioTree : function( value, element){
			if(value==""){
				return true;
			}
			var i = 0;
			var array = new Array();
			$("#"+element.attr("fsetcodeData")+" input[name='assetTree']").each(function() {
                
				if ($(this).attr("regulationValue")==undefined) {
					array[i] = $(this).attr("value");
					i++;
				}
			});
			    if(value.indexOf("-")!=-1){
			    	value = value.split("-")[0];
			    } 
				if($.inArray(value,array)==-1){
					return false;
				}
			return true;
		},
		compareDate : function ( value, element ) {
		    var compare = $(element).attr("compare");
		    var compareMark = $(element).attr("compareMark");
		    if ( compareMark === "true" ) {
		        return DateDiff($("#"+compare).val(),value) >= 0 ;
		    }else if(compareMark === "false" ){//加入后面的日期和前面的日期对比  小于的情况
		         return DateDiff($("#"+compare).val(),value) <= 0 ;
		    }else{
		        return DateDiff($("#"+compare).val(),value) > 0 ;
		    }   
		}
	};
	
	var errorList = [];//保存错误信息
	
	var messages = {
		required     : "不能为空",
		clearUnlawCode : "只能输入数字、英文字母、中文、'_'",
		clearUnlawCode2 : "只能输入数字、英文字母、中文、'_'",//空格在内的非法字符
		SpecialPositiveNumber : "只能输入-1和非负数",
		positiveInteger : "只能输入自然数",
		positiveNumber :  "只能输入非负数",
		gtzInteger : "只能输入大于0的整数",
		positive	 : "请输入正确的数字",
        charADight   : "只能输入数字、英文字母", 
		email        : "请输入正确格式的电子邮件",
		phone        : "请输入合法的电话号码",
		fax			 : "请输入合法的传真号码",
		mobile       : "请输入合法的手机号",
		url          : "请输入合法的网址",
		zip          : "请输入合法的邮政编码",
		ip           : "请输入合法的ip",
		qq           : "请输入合法的qq号码",
		digits       : "只能输入整数",
		dight       :  "只能输入数字",
		number       : "请输入合法的数字",
		english      : "只能输入英文字母",
		chinese      : "只能输入中文",
		name         : "只能输入数字、英文字母、中文及中文标点",
		date         : "请输入合法的日期",
		fzqmc         : "只能输入数字、英文字母、中文、及小括号",
		custom       : "输入的字符串不符合表达式",
		money		 : "请输入正确的金额",
		noneq        : "输入数量有误，数量不能为0",
		forbid       : "不能选择已经禁用的选项",
		percent      : "请输入正确的百分比",
		selected     : "请至少选择一项",
		mobileAndPhone : "请输入合法的联系方式",
		fsetcodeRadioTree : "请输入合法套账号",
		fsetcodeCheckboxTree : "请输入合法套账号",
		minlength    : function(value, element) {
			var param = $(element).attr("minlength");
			return "请输入一个长度最少是" + param + "的字符串";
		},
		maxlength    : function(value, element) {
			var param = $(element).attr("maxlength");
			return "请输入一个长度最多是" + param + "的字符串";
		},
		rangelength    : function(value, element) {
			var param0 = $(element).attr("minlength");
			alert(param0);
			var param1 = $(element).attr("maxlength");
			return "请输入一个长度介于 " + param0 + " 和" + param1 + " 之间的字符串";
		},
		min    : function(value, element) {
			var param = $(element).attr("min");
			return "请输入一个最小是" + param + "的值";
		},
		max    : function(value, element) {
			var param = $(element).attr("max");
			return "请输入一个最大是" + param + "的值";
		},
		range    : function(value, element) {
			var param0 = $(element).attr("min");
			var param1 = $(element).attr("max");
			return "请输入一个介于" + param0 + "和" + param1 + "之间的值";
		},
		rangeSize    : function(value, element) {
			var param0 = $(element).attr("min");
			var param1 = $(element).attr("max");
			return "请输入一个大于" + param0 + "和小于" + param1 + "的值";
		},
		frac    : function(value, element) {
			var f = $(element).attr('frac');
			if(f == 0)
			{
				return "只能输入整数";
			}else{
				return "只能输入有 " + f + " 位小数的数字";
			}
			
		},
		compareDate : function ( value, element ) {
		    return $(element).attr("comparetext");
		}
	};
	
	//清空状态
	function clearState(element){
		var errMsg = $("body").find("span[class='"+self.errorClass+"']");
		if(errMsg.html() != null){
			errMsg.remove();
		}
	}
	
	/**
	 * 以<input type="text" id="fgddm" datatype="required" msg="不能为空"/>为列
	 * @param element
	 * @returns {Boolean} true  不需要验证 false	需要验证
	 */
	function check(element){
		var datatype = $.trim($(element).attr('datatype'));			//获得required	
		var value = $.trim(element.val());							//获得输入的值
		clearState(element);
		var isValid = true;		
		var datatypes = datatype.split(/\s/);
		$.each(datatypes, function(i){
			try {
				//result = true 验证成功，false验证失败
				var result = methods[this].call(this, $(element).val() ? $(element).val().replace(/\r/g, "") : "", element);
				if(! result ){	
					isValid = false;
					var message = $(element).attr("msg");
					if(typeof(message) == "undefined"){
						message = messages[this];
						if(typeof message == "function") 
							message = message.call(this, $(element).val().replace(/\r/g, ""), element);
					}
					addError(element, message);		//添加错误提示信息
					return false;
				}
			}catch(e) {
				throw e;
			}
		});
		return isValid;
	};
	
	function addError(element, message){
		errorList.push({
			message: message,
			element: element
		});
	};
	
	//复用统一的验证规则，用于单一验证或光标类型的验证---by周继昆
	this.singleValid = function(element){
		errorList = [];
		check(element);
		if(errorList[0]!=null){
			jQuery('<span class="' + self.errorClass + '" style="width:auto;height:auto;">&nbsp;</span>').html(errorList[0].message).insertAfter(errorList[0].element);
		}
	};
	
	this.vaild = function(element , message){
		jQuery('<span class="' + self.errorClass + '" style="width:auto;height:auto;">&nbsp;</span>')
		.html(message.replace(/\d+:/,""))
		.insertAfter(element);
	};
	
	this.addMethod = function(name, method, message){
		methods[name] = method;
		messages[name] = message || self.messages[name];
	};

	this.checkForm = function(form,mode){
		var isValid = true;		//true不需要验证     false需要验证
		errorList = [];
//		var elements = $(form).find(':input[datatype]');
		var elements = $(form).find(':[datatype]');//不再针对input做验证，使其对多行多列文本框也可以验证
		elements.each(function(i){
			if(check(jQuery(this)) == false){
				isValid = false;
			};
		});
		if(mode == 2){
			$("body").find('.'+self.errorClass).remove();
		}
		
		if(errorList.length >= 1){//如果错误列表errorList大于0
			mode = mode || 1;
			var errCount = errorList.length;
			switch(mode){
				case 1 :
					var errorMessage = new Array();
					for(var i = 0; i < errCount; i++){
						var error = errorList[i];
						errorMessage[errorMessage.length] = error.message.replace(/\d+:/,"");				
					}
					alert(errorMessage.join("\n"));
					break;
				case 2 :
					for(var i = 0; i < errCount; i++){
						try{
							var error = errorList[i];
							var element = error.element;
							var tableID = $(element).parents("table").attr("id") === "" ? "table" : $(element).parents("table").attr("id");
							var spanID = "error_"+tableID+"_"+$(element).attr("id");
							var str= "<span id='"+spanID+"' class='"+self.errorClass+"' onmouseover=javascript:$(this).remove();return false;></span>";
							$(str).appendTo("body");
							$('#'+spanID).html(error.message.replace(/\d+:/,""));	
							$('#'+spanID).css({position : "absolute",left :$(element).offset().left+$(element).outerWidth(),
								              top :$(element).offset().top, zIndex : $(element).zIndex() + 100 });
							$('#'+spanID).show();
						}catch(e){
							alert(e.description);
						}
					}
					break;
				case 3 :
					for(var i = 0; i < errCount; i++){
						try{
							var error = errorList[i];
							var element = error.element;
							if(i == 0){
								$(element).focus();
							}
							$(element).addClass(self.errorClass);
							$(element).attr("title" , error.message.replace(/\d+:/,""));
						}catch(e){
							alert(e.description);
						}
					}
					return isValid;
			}
		}
		if($('span[class=' + self.errorClass + ']').text().length > 0)
            isValid = false;
        else 
            isValid = true;
		return isValid;
	};
	
};