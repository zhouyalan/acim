package com.wz.module.system.service.impl;

import com.wz.exception.LoginException;
import com.wz.module.system.dao.SysUserDao;

import com.wz.module.system.pojo.SysUser;
import com.wz.module.system.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
@Service
public class LoginServiceImpl implements LoginService {
    private static final Logger logger = LoggerFactory
            .getLogger(LoginServiceImpl.class);
    @Autowired
    private SysUserDao sysUserDao;

    @Transactional(propagation= Propagation.NOT_SUPPORTED)
    public  SysUser userLogin(SysUser sysUser)  throws LoginException {
        System.out.println("登录用户："+sysUser.getSysUserLoginName());
        logger.info("开始验证登录信息");
        sysUser = sysUserDao.findBySysUserLoginName(
                sysUser.getSysUserLoginName());

        if (sysUser == null){

            throw new LoginException("未找到指定用户");}

        System.out.println("登录成功");
        return sysUser;


    }
    public static void main(String[] args) throws LoginException {
        LoginServiceImpl loginsev = new LoginServiceImpl();
        SysUser sysUse = new SysUser();
        sysUse.setSysUserLoginName("YouMeek1");

        loginsev.userLogin(sysUse);

    }

}
