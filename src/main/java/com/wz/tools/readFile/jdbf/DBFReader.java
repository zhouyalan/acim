

package com.wz.tools.readFile.jdbf;

import java.io.DataInputStream;
import java.io.EOFException;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;



//import jcifs.smb.SmbFileInputStream;


/**
 * <p>Title: java访问DBF文件的接口</p>
 * <p>Description: 这个类用于表示DBF文件中的读操作</p>
 * <p>Copyright: Copyright (c) 2004</p>
 * <p>Company: ict</p>
 * @author : He Xiong; jzx
 * @version 1.1
 */
public class DBFReader {
	private DataInputStream stream = null;//数据流

	private JDBField fields[] = null;//dbf字段

	private byte nextRecord[]= null;//记录

	private String absolutePath= null;//文件路径

	private int recordLen = 0;//记录长度

	private int recordBegin= 0;//记录开始

	private int lp = 0;//流的当前位置


	/**
	 * 初始DBF读取流
	 * @param file 文件详细路径
	 * （支持远程smb协议 如smb://administrator:0@192.168.1.13/share/test.dbf）
	 * @throws JDBFException
	 * @throws IOException 
	 */
	public DBFReader(String file) throws JDBFException, IOException {
		absolutePath = file;
		try {
			if(file.toLowerCase().indexOf("smb")>-1){
				//init(new SmbFileInputStream(file));
			}else{
				init(new FileInputStream(file));
			}
		} catch (FileNotFoundException filenotfoundexception) {
			throw new JDBFException(filenotfoundexception);
		}
	}

	/*	public DBFReader(InputStream inputstream) throws JDBFException, IOException {
		stream = null;
		fields = null;
		nextRecord = null;
		absolutePath = null;
		init(inputstream);
	}
	 */



	public int getFieldCount() {
		for (int j = 0; j < fields.length; j++) {
			if(fields[j]==null){
				return j;
			}
		}
		return fields.length;
	}

	public JDBField getField(int i) {
		return fields[i];
	}

	/**
	 * 返回是否有下一条记录
	 * @return
	 */
	public boolean hasNextRecord() {
		return nextRecord != null;
	}

	/**
	 * 返回下一条记录
	 * @return
	 * @throws JDBFException
	 */
	public Object[] nextRecord() throws JDBFException {
		if (!hasNextRecord())
			throw new JDBFException("No more records available.");
		int end = getFieldCount() ;
		Object aobj[] = new Object[end];
		int i = 1;
		for (int j = 0; j < aobj.length; j++) {
			int k = fields[j].getLength();
			StringBuffer stringbuffer = new StringBuffer(k);
			stringbuffer.append(new String(nextRecord, i, k));
			aobj[j] = fields[j].parse(stringbuffer.toString());
			i += fields[j].getLength();
		}

		try {
			stream.readFully(nextRecord);
			if(nextRecord[0] == 42){
				nextRecord();
			}
		} catch (EOFException eofexception) {
			nextRecord = null;
		} catch (IOException ioexception) {
			throw new JDBFException(ioexception);
		}
		return aobj;
	}

	public void close() throws JDBFException {
		nextRecord = null;
		fields = null;
		nextRecord = null;
		try {
			if(stream !=null){
				stream.close();
				stream = null;
			}
		} catch (IOException ioexception) {
			throw new JDBFException(ioexception);
		}
	}

	/**
	 * 重置DBFReader,作用是使游标回到第一条记录
	 * @throws JDBFException
	 * @throws IOException 
	 */
	public void resetDBFReader() throws JDBFException, IOException {
		try {
			close();
			if(this.absolutePath.indexOf("@")>-1){
				//init(new SmbFileInputStream (this.absolutePath));
			}else{
				init(new FileInputStream(this.absolutePath));
			}
		} catch (FileNotFoundException filenotfoundexception) {
			throw new JDBFException(filenotfoundexception);
		}
	}


	/**
	 * 根据字段名取得字段的位置号
	 * @param dbfReader DBF文件读取对象
	 * @param fieldName 字段名
	 * @return 字段位置
	 * @throws Exception
	 */
	public int getFieldIndex(String fieldName) throws Exception {
		int fieldIndex = -1;
		if (fieldName == null) {
			fieldName = "";
		}
		int end  = getFieldCount();
		for (int i = 0; i < end; i++) {
			if (getField(i).toString().equalsIgnoreCase(fieldName)) {
				fieldIndex = i;
				break;
			}
		}
		if (fieldIndex == -1) {
			throw new Exception("文件中没有要检查的字段【" + fieldName + "】。");
		}
		return fieldIndex;
	}

	/**
	 * 读取dbf文件的所有字段名，组成字符串以","分隔
	 * @param dbfReader   DBF文件读取对象
	 * @return 包含所有字段名的字符串
	 * @throws Exception
	 */
	public String getAllField() throws Exception {
		StringBuffer bufferReturn = new StringBuffer();
		try {
			int end  = getFieldCount();
			for (int i = 0; i < end; i++) {
				bufferReturn.append(getField(i).toString());
				if (i != (end - 1)) {
					bufferReturn.append(",");
				}
			}
		} catch (Exception e) {
			throw new Exception("读取dbf数据时出错！");
		}
		return bufferReturn.toString();
	}

	private void init(InputStream inputstream) throws JDBFException, IOException {
		try {
			stream = new DataInputStream(inputstream);
			recordLen = 0;//记录长度
			recordBegin= 0;//记录开始
			lp= 0;//流的当前位置
			int i = readHeader();
			fields = new JDBField[i];
			//int j = 1;
			//boolean isJump = false;
			for (int k = 0; k < i; k++) {
				fields[k] = readFieldHeader();
				if(fields[k]==null){
					//isJump = true;
					//j += 3;
					break;
				}
				//j += fields[k].getLength();
			}

			if (stream.read() < 1)
				throw new JDBFException("Unexpected end of file reached.");
			nextRecord = new byte[recordLen];
			try {
				//if(isJump)
				int size = recordBegin - lp -1;
				if(size>0)
					stream.read(new byte[size]);
				stream.readFully(nextRecord);
			} catch (EOFException eofexception) {
				nextRecord = null;
				stream.close();
			}
		} catch (IOException ioexception) {
			if (stream!=null) stream.close();
			throw new JDBFException(ioexception);
		}
	}

	private int readHeader() throws IOException, JDBFException {
		byte abyte0[] = new byte[16];
		try {
			stream.readFully(abyte0);
			lp+=16;
		} catch (EOFException eofexception) {
			throw new JDBFException("Unexpected end of file reached.");
		}
		int i = abyte0[8];
		if (i < 0)
			i += 256;
		i += 256 * abyte0[9];
		if(abyte0[0]==48){
			i -= 264;
		}		
		i = --i / 32;
		if(abyte0[0]!=48){
			i--;
		}			
		recordBegin = abyte0[8];
		if(recordBegin < 0)
			recordBegin += 256;
		recordBegin = recordBegin + 256 * abyte0[9];
		recordLen = abyte0[10];
		if(recordLen < 0)
			recordLen += 256;
		recordLen = recordLen + 256 * abyte0[11];
		/*int i = abyte0[8];
		if(i < 0)
			i += 256;
		i += 256 * abyte0[9];
		i -= 264;
		i = --i / 32;
		i--;*/
		try {
			stream.readFully(abyte0);
			lp+=16;
		} catch (EOFException eofexception1) {
			throw new JDBFException("Unexpected end of file reached.");
		}
		return i;
	}



	private JDBField readFieldHeader() throws IOException, JDBFException {
		byte abyte0[] = new byte[16];
		try {
			stream.readFully(abyte0);
			lp+=16;
		} catch (EOFException eofexception) {
			throw new JDBFException("Unexpected end of file reached.");
		}
		StringBuffer stringbuffer = new StringBuffer(10);
		for (int i = 0; i < 10; i++) {
			if (abyte0[i] == 0)
				break;
			stringbuffer.append((char) abyte0[i]);
		}

		char c = (char) abyte0[11];
		try {
			stream.readFully(abyte0);
			lp+=16;
		} catch (EOFException eofexception1) {
			throw new JDBFException("Unexpected end of file reached.");
		}
		int j = abyte0[0];
		int k = abyte0[1];
		if (j < 0)
			j += 256;
		if (k < 0)
			k += 256;
		if(c == '0' && stringbuffer.toString().equalsIgnoreCase("_NullFlags"))
			return null;
		return new JDBField(stringbuffer.toString(), c, j, k);
	}

}
