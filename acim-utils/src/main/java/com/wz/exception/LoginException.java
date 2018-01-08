package com.wz.exception;

public class LoginException extends Exception {
    public LoginException(Exception e) {
        super(e);
    }
    public LoginException(String msg) {
        super(msg);
    }
}
