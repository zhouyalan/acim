    //alert("common.js");

   JSLoader.loadStyleSheet("src='../css/style.default.css' th:src='@{/css/style.default.css}'");
  /*  JSLoader.loadStyleSheet("../css/style.katniss.css");
*/   /* JSLoader.loadStyleSheet("../css/customer.css");*/
    JSLoader.loadStyleSheet("src='../css/jquery-ui-1.10.3'  th:src='/*[[@{/css/jquery-ui-1.10.3}']]*/");
    JSLoader.loadStyleSheet("src='../css/jquery.gritter.css' th:src='@{/css/jquery.gritter.css}' ");
    JSLoader.loadStyleSheet("src='' /js/ymPrompt/skin/qq/ymPrompt.css th:src='@{}'" );
    JSLoader.loadStyleSheet("/css/css_wz/miracles.css");
    
    
    /**
     * 加载js
     */
    JSLoader.loadJavaScript(" src='../js/jquery/jquery-1.11.1.min.js' th:src='@{/js/jquery/jquery-1.11.1.min.js}'");
    
	JSLoader.loadJavaScript(" src='../js/jquery/jquery-migrate-1.2.1.min.js' th:src='@{/js/jquery/jquery-migrate-1.2.1.min.js}'");
	JSLoader.loadJavaScript(" src='../js/jquery/jquery-ui-1.10.3.min.js'  th:src='@{/js/jquery/jquery-ui-1.10.3.min.js}'");
	JSLoader.loadJavaScript(" src ='../js/jquery/bootstrap.min.js'  th:src='@{/js/jquery/bootstrap.min.js}'" );
	JSLoader.loadJavaScript(" src='../js/jquery/jquery-migrate-1.2.1.min.js'  th:src='@{/js/jquery/jquery.datatables.min.js}'");
	
	JSLoader.loadJavaScript(" src='../js/jquery/jquery.gritter.min.js' th:src='@{/js/jquery/jquery.gritter.min.js}'");
	/*JSLoader.loadJavaScript("../js/custom.js"); */
	JSLoader.loadJavaScript("src='../js/js_pub/wz_util.js' th:src='@{/js/js_pub/wz_util.js}'");
	JSLoader.loadJavaScript(" src ='/js/ymPrompt/ymPrompt.js' th:src='@{/js/ymPrompt/ymPrompt.js}'");
	 
	//alert(${webRoot});

    //alert("jsloader");



