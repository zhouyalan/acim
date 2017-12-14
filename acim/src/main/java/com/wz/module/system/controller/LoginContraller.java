package com.wz.module.system.controller;


import com.wz.module.system.pojo.SysUser;
import com.wz.module.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

import java.util.HashMap;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
//@RequestMapping("/userLoginContraller")
public class LoginContraller {

    @RequestMapping("/login")
    public String  login(){
        return "framework/login";
    }

    @Autowired
    private SysUserService sysUserService;




    @RequestMapping(value ="/userLoginGo",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,String>   userLoginGo(SysUser sysUser){

          System.out.println(sysUser.getSysUserLoginName());
          String userName;

          Map<String ,String >  re_result = new HashMap<String,String >();

          re_result.put("result","success");

          return re_result;
    }

    /**
     * 返回到登录页面
     * @return
     */
    @RequestMapping("logout")
    public String logout(){

        return "framework/login";
    }

    @RequestMapping( "/success")
    public String successLogin(){

        return "framework/main";
    }
}



