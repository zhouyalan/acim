package com.wz.practices.miracles.controller;



import com.wz.tools.readFile.ReadExcel;
import org.springframework.beans.factory.annotation.Autowired;

import com.wz.practices.miracles.pojo.Acim;
import com.wz.practices.miracles.service.AcimService;
import com.wz.tools.WzCons;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;


@Controller
//@RequestMapping("/acimController")
public class AcimController {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private  int   []  sheet_indexs ; //正文excelsheet个数
	private boolean isAll ;
	
	@Autowired
	private AcimService acimService;
	
   @RequestMapping("/showAcim")
   @ResponseBody
   public Map<String,List<Map<String,String>>>  showAcimData(Acim acim){
	   //ReadExcel readExcel = new ReadExcel();
		/*
		var bookNameId = $('#bookId', window.parent.document).val();
 	 	var bookName = $("#"+bookNameId).attr("bookName");
 	 	var bookType = $("#"+bookNameId).attr("bookType");
 	 	var isAll = $("#"+bookNameId).attr("isAll");
 	 	var sheet_indexs = (0,1); */

	   //if(acim!=null){

	    String bookName  = acim.getBookName();
	    String bookType = acim.getBookType();
	    boolean isAll =  true; //acim.isAll();
	    int [] sheet_inexs  = acim.getSheet_indexs();
	    String fileAddress = WzCons.getBookAddress(bookName);

	   Map<String,List<Map<String,String>>> mapList = ReadExcel.readExcel(fileAddress, sheet_inexs,isAll);
	   //int [] sheet_inexs =[0,1];
	   //Map<String,List<Map<String,String>>> mapList = ReadExcel.readExcel(WzCons.miracles_text_adrres, null,true);

	   return mapList;
   }


	public int [] getSheet_indexs() {
		return sheet_indexs;
	}


	public void setSheet_indexs(int [] sheet_indexs) {
		this.sheet_indexs = sheet_indexs;
	}


	public boolean isAll() {
		return isAll;
	}


	public void setAll(boolean isAll) {
		this.isAll = isAll;
	}
      
      

}
