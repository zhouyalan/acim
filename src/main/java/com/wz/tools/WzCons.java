package com.wz.tools;

import java.util.HashMap;
import java.util.Map;

/**
 * 定义一些常量，不变动的值
 * @author wenzixia
 *
 */
public class WzCons {
	
	

	public static final String dataBaseName = "acim";
	public static final String tableName = "sys_user";
	public static final String miracles_text_adrres = "miracles_file/miracles_text.xlsx";

	public static final String sqlScriptUrl = "sql/initialization.sql";
	// 奇迹课程正文地址 /miracles_file/miracles_text.xlsx
	
	public static final String miracles_workbook_adrres = "miracles_file/miracles_workbook.xlsx";   // 奇迹课程正文地址
	
	public static final String miracles_manualForTeachers_adrres = "miracles_file/miracles_manualForTeachers.xlsx";   // 奇迹课程正文地址

	
	public static final  boolean is_fileAdrress_reSources = true;
	
	//public static final int miracles_text_lenght = 31;
	public static final boolean isAllSheet_miracles_text = true;
	
	
	
	/***
	 * 根据参数获取文件路径地址
	 * 
	 */
	public static  String getBookAddress(String bookName){
		
		if(bookName.equals("miracles_text")){
			return miracles_text_adrres;
		}else if(bookName.equals("miracles_bookwork")){
			return miracles_workbook_adrres;
		}else if(bookName.equals("manualForTeachers") ){
			return miracles_manualForTeachers_adrres;
		}
		return "";
		
	}
	
	
	/**
	 * 判断office文件是否是2007或者2003，如果是2007 返回true
	 * @param filePath
	 * @return
	 */
	public static boolean isfile2007(String filePath){
		//boolean isFile2007 = false;
		if(filePath.substring(filePath.length()-1)=="X"){
			return false;
		}
		
		return true;
	}
	

	/**
	 * 罗马数字对应阿拉伯数字
	 */
	public static final Map<String,String> Roman_Numeral = new HashMap<String,String>(){/**
		 * 
		 */
		private static final long serialVersionUID = 1L;

	{
			put("1","I");
			put("2","II");
			put("3","III");
			put("4","IV");
			put("5","V");
			put("6","VI");
			put("7","VII");
			put("8","VIII");
			put("9","XIX");			
			put("10","X");
		}
	};

}
