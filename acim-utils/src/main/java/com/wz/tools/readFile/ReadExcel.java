package com.wz.tools.readFile;

import com.wz.tools.WzCons;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;


/**
 * 读excel文件
 * 
 * @author wenzixia
 *
 */
public class ReadExcel {

	private static final boolean BOOLEAN  = WzCons.is_fileAdrress_reSources;
	//private  String  filePath =  this.getClass().getClassLoader().getResource("/").getPath();

	/**
	 * 导出 excel
	 * 
	 * @param filePath
	 *            文件全路径
	 * @param sheetName
	 *            sheet页名称
	 * @param sheetIndex
	 *            当前sheet下表 从0开始
	 * @param fileHeader
	 *            头部
	 * @param datas
	 *            内容
	 */
	/*
	 * public static void writeExcel(String filePath,String sheetName, int
	 * sheetIndex, String[] fileHeader, List<String[]> datas){ // 创建工作簿 Workbook
	 * wb = new HSSFWorkbook(); // 创建工作表 sheet Sheet s = wb.createSheet();
	 * wb.setSheetName(sheetIndex, sheetName); Row r = s.createRow(0); Cell c =
	 * null; Font font = null; CellStyle styleHeader = null; CellStyle
	 * styleContent = null; //粗体 font = wb.createFont();
	 * //font.setBoldweight(HSSFFont.); //BOLDWEIGHT_BOLD font.setBold(true); //
	 * 设置头样式 styleHeader = wb.createCellStyle(); styleHeader.setFont(font);
	 * styleHeader.setBorderBottom(HSSFCellStyle.BORDER_THIN); //下边框
	 * styleHeader.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框
	 * styleHeader.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框
	 * styleHeader.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框 // 设置内容样式
	 * styleContent = wb.createCellStyle();
	 * styleContent.setBorderBottom(HSSFCellStyle.BORDER_THIN); //下边框
	 * styleContent.setBorderLeft(HSSFCellStyle.BORDER_THIN);//左边框
	 * styleContent.setBorderTop(HSSFCellStyle.BORDER_THIN);//上边框
	 * styleContent.setBorderRight(HSSFCellStyle.BORDER_THIN);//右边框 //设置头
	 * for(int i=0;i<fileHeader.length;){ c = r.createCell(i);
	 * c.setCellStyle(styleHeader); c.setCellValue(fileHeader[i]); i++; } //设置内容
	 * for(int rownum=0;rownum<datas.size();){ // 行 row datas.size() r =
	 * s.createRow(rownum+1); //创建行 for(int
	 * cellnum=0;cellnum<fileHeader.length;){ c = r.createCell(cellnum);
	 * c.setCellValue(datas.get(rownum)[cellnum]); c.setCellStyle(styleContent);
	 * cellnum++; } rownum++; } FileOutputStream out = null; try { //
	 * 创建文件或者文件夹,将内容写进去 if(FileUtil.createFile(new File(filePath))){ out = new
	 * FileOutputStream(filePath); wb.write(out); }
	 * 
	 * } catch (Exception e) { e.printStackTrace(); }finally { try { // 关闭流
	 * if(out != null){ out.flush(); out.close(); } } catch (IOException e) {
	 * e.printStackTrace(); } } }
	 */
	/**
	 * 读取 excel 文件内容
	 * 
	 * @param filePath
	 * //@param sheetIndex
	 */
	@SuppressWarnings({ "resource" })
	public static  Map<String,List<Map<String,String>>> readExcel(String filePath, int [] sheetIndexs,boolean isAll) {
		
		System.out.println("isAll" + isAll );

		if(filePath =="" || filePath ==null){
			return null;
		}
		//String s = null;
		
		if(sheetIndexs==null || sheetIndexs.length==0){
			//return null; 
		}
		int sheetIndexs_size=  1;//sheetIndexs.length;
		Map<String,List<Map<String,String>>> sheetMap  = new HashMap<String,List<Map<String,String>>>();
				//List<String> list = new ArrayList<String>();
		//
		int cnt = 0;
		int idx = 0;
		try {
			InputStream input = null;
			boolean b = BOOLEAN;
			if (b) {
				//String url = ReadExcel.class.getClassLoader().getResource(filePath).toString();
			    //　File file = new File(url.getFile());
				//input =new FileInputStream(Class.class.getResourceAsStream(filePath))  ;
				//input  = new FileInputStream("/Users/wenzixia/java/account2/target/classes/miracles_file/miracles_text.xlsx");
				// input = .getResourceAsStream(filePath);
				
				//filePath = this.getClass().getClassLoader().getResource("/").getPath();
				//System.out.println(ReadExcel.class.getClassLoader().getResourceAsStream(filePath));  
				 input = ReadExcel.class.getClassLoader().getResourceAsStream(filePath);


			} else {
				input = new FileInputStream(filePath); // 建立输入流

			}
			Workbook wb = null;
			if(WzCons.isfile2007(filePath)){
				wb = new XSSFWorkbook(input);

			}else{
				wb = new HSSFWorkbook(input);			
			}


						// 获取sheet页
			int sheet_number = wb.getNumberOfSheets();// 获取Sheet的长度
			if(isAll ==true){
				sheetIndexs_size = sheet_number;
			}
			
	        System.out.println("sheetIndexs_size :" +sheetIndexs_size );
			for(int i =0;i<sheetIndexs_size;i++ ){	
				Sheet sheet  = null;
				if(isAll ==true){
					sheet = (Sheet) wb.getSheetAt(i);
				}else{
					sheet = (Sheet) wb.getSheetAt(sheetIndexs[i]);
				}
				Iterator<Row> rows = sheet.iterator();// sheet.rowIterator();
				String sheetName= sheet.getSheetName();
				List<Map<String, String>> mapList = new ArrayList<Map<String, String>>();
				// 头
				List<String> list = new ArrayList<String>();
				cnt =0;
				while (rows.hasNext()) {
					Row row = rows.next();
					Iterator<Cell> cells = row.cellIterator();
					Map<String, String> map = new HashMap<String, String>();
					if (cnt == 0) { // 将头放进list中
						System.out.print("cnt " + cnt);
						while (cells.hasNext()) {
							Cell cell = cells.next();
							if (isContainMergeCell(sheet)) {
								cancelMergeCell(sheet);
							}
							list.add(getStringCellValue(cell));
						}
						cnt++;
						continue;
					} else {
						while (cells.hasNext()) {
							Cell cell = cells.next();
							if (isContainMergeCell(sheet)) {
								cancelMergeCell(sheet);
							}
							// 区别相同的头
							// list = ListUtil.changeSameVal(list);
							map.put(list.get(idx), getStringCellValue(cell));
							
							//System.out.println(list.get(idx) +": "+ getStringCellValue(cell));
							idx++;
    
						}
					}
					idx = 0;
					//sheetMap.put(sheetName, map);
					mapList.add(map);
			   }
				
				sheetMap.put(sheetName, mapList);
				System.out.print("" + sheetMap.size());
			}
			return sheetMap;
		} catch (IOException ex) {
			ex.printStackTrace();
		}
		return null;
	}

	/**
	 * 判断指定单元格是否是合并单元格
	 * 
	 * @param sheet
	 *            当前sheet页
	 * @param //firstRow
	 *            开始行
	 * @param //lastRow
	 *            结束行
	 * @param //firstCol
	 *            开始列
	 * @param //lastCol
	 *            结束列
	 * @return
	 */
	public static boolean isMergeCell(Sheet sheet, int row, int column) {
		int sheetMergeCount = sheet.getNumMergedRegions();
		for (int i = 0; i < sheetMergeCount;) {
			CellRangeAddress range = sheet.getMergedRegion(i);
			int firstColumn = range.getFirstColumn();
			int lastColumn = range.getLastColumn();
			int firstRow = range.getFirstRow();
			int lastRow = range.getLastRow();
			if (row >= firstRow && row <= lastRow) {
				if (column >= firstColumn && column <= lastColumn) {
					return true;
				}
			}
			i++;
		}
		return false;
	}

	/**
	 * 取消合并单元格
	 * 
	 * @param sheet
	 * @param //idx
	 */
	public static void cancelMergeCell(Sheet sheet) {
		int sheetMergeCount = sheet.getNumMergedRegions();
		for (int idx = 0; idx < sheetMergeCount;) {
			CellRangeAddress range = sheet.getMergedRegion(idx);
			String val = getMergeCellValue(sheet, range.getFirstRow(), range.getLastRow());
			// 取消合并单元格
			sheet.removeMergedRegion(idx);
			for (int rownum = range.getFirstRow(); rownum < range.getLastRow() + 1;) {
				for (int cellnum = range.getFirstColumn(); cellnum < range.getLastColumn() + 1;) {
					sheet.getRow(rownum).getCell(cellnum).setCellValue(val);
					cellnum++;
				}
				rownum++;
			}
			idx++;
		}
	}

	/**
	 * 获取指定合并单元的值
	 * 
	 * @param sheet
	 * @param row
	 * @param column
	 * @return
	 */
	public static String getMergeCellValue(Sheet sheet, int row, int column) {
		int sheetMergeCount = sheet.getNumMergedRegions();
		for (int i = 0; i < sheetMergeCount;) {
			CellRangeAddress range = sheet.getMergedRegion(i);
			int firstColumn = range.getFirstColumn();
			int lastColumn = range.getLastColumn();
			int firstRow = range.getFirstRow();
			int lastRow = range.getLastRow();
			if (row >= firstRow && row <= lastRow) {
				if (column >= firstColumn && column <= lastColumn) {
					Row fRow = sheet.getRow(firstRow);
					Cell fCell = fRow.getCell(firstColumn);
					return getStringCellValue(fCell);
				}
			}
			i++;
		}
		return null;
	}

	/**
	 * 合并单元格
	 * 
	 * @param sheet
	 *            当前sheet页
	 * @param firstRow
	 *            开始行
	 * @param lastRow
	 *            结束行
	 * @param firstCol
	 *            开始列
	 * @param lastCol
	 *            结束列
	 */
	public static int mergeCell(Sheet sheet, int firstRow, int lastRow, int firstCol, int lastCol) {
		if (sheet == null) {
			return -1;
		}
		return sheet.addMergedRegion(new CellRangeAddress(firstRow, lastRow, firstCol, lastCol));
	}

	/**
	 * 判断sheet页中是否含有合并单元格
	 * 
	 * @param sheet
	 * @return
	 */
	public static boolean isContainMergeCell(Sheet sheet) {
		if (sheet == null) {
			return false;
		}
		return sheet.getNumMergedRegions() > 0 ? true : false;
	}

	/**
	 * 获取单元格的值
	 * 
	 * @param cell
	 * @return
	 */
	@SuppressWarnings({ "deprecation",  })
	public static String getStringCellValue(Cell cell) {
		String strCell = "";
		if (cell == null)
			return strCell;
		int cellType = cell.getCellType();
		if (cellType == Cell.CELL_TYPE_STRING) {
			strCell = cell.getRichStringCellValue().getString().trim();
		} else if (cellType == Cell.CELL_TYPE_NUMERIC) {
			strCell = String.valueOf(cell.getNumericCellValue());
		} else if (cellType == Cell.CELL_TYPE_BOOLEAN) {
			strCell = String.valueOf(cell.getBooleanCellValue());
		} else if (cellType == Cell.CELL_TYPE_FORMULA) {
			FormulaEvaluator evaluator = cell.getSheet().getWorkbook().getCreationHelper().createFormulaEvaluator();
			evaluator.evaluateFormulaCell(cell);
			CellValue cellValue = evaluator.evaluate(cell);
			strCell = String.valueOf(cellValue.getNumberValue());
		} else {
			strCell = "";
		}
		//System.out.println(strCell);
		return strCell;
	}
}