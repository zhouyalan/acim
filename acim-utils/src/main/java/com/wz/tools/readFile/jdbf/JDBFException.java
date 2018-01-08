/**
 * <p>Title: java访问DBF文件的接口</p>
 * <p>Description: 这个类用于表示DBF文件中的读写异常</p>
 * <p>Copyright: Copyright (c) 2004</p>
 * <p>Company: ict</p>
 * @author : He Xiong
 * @version 1.0
 */


package com.wz.tools.readFile.jdbf;
import java.io.PrintStream;
import java.io.PrintWriter;

public class JDBFException extends Exception {

	private static final long serialVersionUID = -1135739528523903035L;

	public JDBFException(String s) {
		this(s, null);
	}

	public JDBFException(Throwable throwable) {
		this(throwable.getMessage(), throwable);
	}

	public JDBFException(String s, Throwable throwable) {
		super(s);
		detail = throwable;
	}

	@Override
    public String getMessage() {
		if (detail == null)
			return super.getMessage();
		else
			return super.getMessage();
	}

	@Override
    public void printStackTrace(PrintStream printstream) {
		if (detail == null) {
			super.printStackTrace(printstream);
			return;
		}
		PrintStream printstream1 = printstream;
		printstream1.println(this);
		detail.printStackTrace(printstream);
		return;
	}

	@Override
    public void printStackTrace() {
		printStackTrace(System.err);
	}

	@Override
    public void printStackTrace(PrintWriter printwriter) {
		if (detail == null) {
			super.printStackTrace(printwriter);
			return;
		}
		PrintWriter printwriter1 = printwriter;

		printwriter1.println(this);
		detail.printStackTrace(printwriter);
		return;
	}

	private Throwable detail;
}
