package com.wz.practices.miracles.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wz.practices.miracles.pojo.Acim;

import com.wz.tools.WzCons;
import com.wz.tools.readFile.ReadExcel;

/**
 * 奇迹课程
 * @author wenzixia
 *
 */
@Service
public class AcimService {
	
	public void pringttt(){
		System.out.println("acimService");
		
		
	}
	
	//@Autowired
	//private Acim acim;
		
	public void readACIM_text(Acim acim){	
		//ReadExcel readExcel = new ReadExcel();
		/*
		var bookNameId = $('#bookId', window.parent.document).val();
 	 	var bookName = $("#"+bookNameId).attr("bookName");
 	 	var bookType = $("#"+bookNameId).attr("bookType");
 	 	var isAll = $("#"+bookNameId).attr("isAll");
 	 	var sheet_indexs = (0,1); */
		
		//if(acim!=null){
		
			//String bookName  = acim.getBookName();
			//String bookType = acim.getBookType();
			//boolean isAll =  acim.isAll();
			//int [] sheet_inexs  = acim.getSheet_indexs();
			//String fileAddress = WzCons.getBookAddress(bookName);
			
			//Map<String,List<Map<String,String>>> mapList = ReadExcel.readExcel(fileAddress, sheet_inexs,isAll);
		   //int [] sheet_inexs =[0,1];
			Map<String,List<Map<String,String>>> mapList = ReadExcel.readExcel(WzCons.miracles_text_adrres, null,true);

			//List<Map<String, String>> text = ReadExcel.readExcel(ACIMText_filePath, 1);		
			//Struts2Utils.putJson("showData", mapList);
		 //}
	}	
}
