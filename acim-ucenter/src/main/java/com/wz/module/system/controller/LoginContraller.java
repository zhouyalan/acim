package com.wz.module.system.controller;


import com.wz.framework.pub.Servlet2Utils;
import com.wz.framework.pub.SessionListener;
import com.wz.framework.pub.UserSession;
import com.wz.module.system.pojo.SysUser;

import com.wz.module.system.service.LoginService;
import com.wz.module.system.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import java.util.HashMap;



@Controller
public class LoginContraller {


      @Autowired
    private LoginService loginService;
    @Autowired
    private SysUserService sysUserService;

    /**
     * 进入登录页面
     * @return
     */
    @RequestMapping("login")
    public String login(){
        return  Servlet2Utils.urlPath("framework/loginTemp");
    }

    @RequestMapping(value ="/userLoginGo",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,String>   userLoginGo(@Valid @ModelAttribute("sysUser")SysUser sysUser,
                                            Errors errors, HttpSession session){
        Map<String ,String >  re_result = new HashMap<String,String >();
       if (errors.hasFieldErrors())  re_result.put("result","framework/loginTemp");
        try {
            sysUser = loginService.userLogin(sysUser);
        } catch (Exception e) {
            errors.reject("", e.getMessage());
            re_result.put("result","framework/loginTemp");
            return re_result;
        }
        System.out.println(sysUser.getSysUserLoginName());
        re_result.put("result","success");
        return re_result;
    }


    @RequestMapping( "/success")
    public String successLogin(SysUser sysUser){

        String  result = "show";
        if(sysUser ==null ){
            return  Servlet2Utils.urlPath("framework/main");
        }else if(sysUser.getSysUserLoginName() == null || sysUser.getSysUserLoginName().equals("null")){

            return  Servlet2Utils.urlPath("framework/main");
        }

        // 去数据库获取用户信息

        sysUser = sysUserService.findBySysUserId(sysUser.getSysUserId());

        sysUserService.findBySysUserLoginName(sysUser.getSysUserLoginName());
        if("show".equalsIgnoreCase(result) || "yzm".equalsIgnoreCase("yzm")){
            // 创建用户系统SESSION信息对象 //
            UserSession userSession = new UserSession();
            // 登录用户名称
            userSession.setName(sysUser.getSysUserLoginName());
            // 登录用户ID
            userSession.setIds_user(sysUser.getSysUserId());
            // 登录用户IP地址
            userSession.setIpAddr(Servlet2Utils.getIpAddr());
            // 登录用户主机名称
            // userSession.setHostName(String.valueOf(Servlet2Utils.getRequest().getRemoteHost()));
            // 当前年份
            // userSession.setCurYear(String.valueOf(DateUtil.getYear(DateUtil.getCurDate())));
            // 登录用户所选用的角色
            // userSession.setRoleId(role);
            // 用户登录时间点
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            userSession.setLoginDate(format.format(new Date()));

            // 根据用户ID获取系统在线用户SESSION
            UserSession userOnline = SessionListener.getUsersOnline().get(sysUser.getSysUserId());
            // 如果userOnline不为NULL,说明当前用户已经登录在线
            if(userOnline != null){
					/*
					 * 判断在线用户的IP地址是否与当前登录用户属于同一主机IP
					 * 如果属于同一IP多次登录时：
					 *    IE8 SESSION 同步共享，需要提示用户创建新的会话登录
					 * 否则，说明用户在不同主机IP登录
					 */
                if(userOnline.getIpAddr().equals(userSession.getIpAddr())){
                    if(Servlet2Utils.getRequest().getAttribute("UserSession") != null){
                        result = "occupy"; //被占用
                        //json.put("remark",userOnline.getCurUser());//占用者
                    }else {
                        Servlet2Utils.getSession(true).setAttribute("UserSession", userSession);
                    }
                }else {
                    result = "login";
                    //json.put("remark", "已登录："+userOnline.getIpAddr()+"当前登录："+userSession.getIpAddr());
                }
            }
            // 创建一个新的HttpSession，记录用户登录信息
            else {
                Servlet2Utils.getSession(true).setAttribute("UserSession", userSession);
            }
        }else if("noRights".equalsIgnoreCase(result)){
            Servlet2Utils.getSession(false).invalidate();//销毁session
        }

        return Servlet2Utils.urlPath("framework/main");
    }



}



