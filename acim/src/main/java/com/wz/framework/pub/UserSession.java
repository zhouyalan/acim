package com.wz.framework.pub;

public class UserSession {
    private String ids_user;
    private String name;
    private String data;
    private String time;
    private String ipAddr;
    private String loginSorce;
    private int logCount;
    private String curYear;
    public String getIds_user() {
        return ids_user;
    }
    public void setIds_user(String ids_user) {
        this.ids_user = ids_user;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public String getIpAddr() {
        return ipAddr;
    }
    public void setIpAddr(String ipAddr) {
        this.ipAddr = ipAddr;
    }
    public String getLoginSorce() {
        return loginSorce;
    }
    public void setLoginSorce(String loginSorce) {
        this.loginSorce = loginSorce;
    }
    public int getLogCount() {
        return logCount;
    }
    public void setLogCount(int logCount) {
        this.logCount = logCount;
    }
    public String getCurYear() {
        return curYear;
    }
    public void setCurYear(String curYear) {
        this.curYear = curYear;
    }

}
