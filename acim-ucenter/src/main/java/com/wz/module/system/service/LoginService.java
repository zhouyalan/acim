package com.wz.module.system.service;


import com.wz.exception.LoginException;
import com.wz.module.system.pojo.SysUser;

public interface LoginService {
    public SysUser userLogin(SysUser sysUser)throws LoginException;
}
