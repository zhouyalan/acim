package com.wz.practices.miracles.pojo;

import java.io.Serializable;

import org.springframework.stereotype.Component;

/**
 * @desc 用户信息表
 * @author wzx
 * @date		2017-11-14
 */
@Component
public class Acim  implements Serializable {
	
	
	
	//private List<Map<Map<String,String>>> acimList;
    
    
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String bookName;   // 书的名字
    private String bookType;   // 书的类型，excels word pdf txt
    private int [] sheet_indexs;  // excels特有的特性
    private boolean isAll;   // excels 特有的特性，读取哪些sheet
    
    
    
	public int[] getSheet_indexs() {
		return sheet_indexs;
	}
	public void setSheet_indexs(int[] sheet_indexs) {
		this.sheet_indexs = sheet_indexs;
	}
	public boolean isAll() {
		return isAll;
	}
	public void setAll(boolean isAll) {
		this.isAll = isAll;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookType() {
		return bookType;
	}
	public void setBookType(String bookType) {
		this.bookType = bookType;
	}
	
	
    
    
    
	

}
