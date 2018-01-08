function JSLoaderEnvironment(){  
	
	 /**
	   * Loads a JavaScript file into the page 
	   * @param {String} url the url of the javascript file
	   */
//th:src="@{/js/pub_js/jsloader.js}"
	  this.loadJavaScript=function (url){
	    //url = this.stripExternalRef(url);
		 // alert(url)
	    document.writeln("<scri"+"pt "+ url +" type='text/javascript'></sc"+"ript>");
	    //alert(url);

	    //alert("<scri"+"pt th:src='@{"+url+"}' type='text/javascript'></sc"+"ript>");
	  };
	  
	  /**
	   * Loads a JavaScript file into the page 
	   * @param {String} url the url of the javascript file
	   */
	  this.loadStyleSheet=function(url){
	    //url = this.stripExternalRef(url);
		  //alert("<li"+"nk rel='stylesheet' th:href='@{"+url+"}' type='text/css'></li"+"nk>");
	    document.writeln("<li"+"nk rel='stylesheet' "+ url+" type='text/css'></li"+"nk>");
	  };


};

var JSLoader = new JSLoaderEnvironment();
//alert("jsloader")
//alert(${webRoot});