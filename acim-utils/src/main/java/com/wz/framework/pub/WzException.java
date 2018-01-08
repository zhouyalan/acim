package com.wz.framework.pub;

/**
 *  异常类处理
 */
public class WzException extends Exception {
    private static final long serialVersionUID = 3781970461207316896L;

    public WzException() {
        super();
    }

    public WzException(String message) {
        super(message);
    }

    public WzException(String message, Throwable cause) {
        super(message, cause);
    }

    public WzException(Throwable cause) {
        super(cause);
    }
}
