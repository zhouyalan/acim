package com.wz.framework.pub;

import javax.servlet.http.*;
import java.util.Hashtable;


/**
 * 
 * @title 当在session中添加、移除或更改属性值时会触发相应的事件。
 * @desc  具体方法含义见个方法注释说明
 * 		  该监听器的使用主要结合SystemSession工具类及UserSession状态对象
 * @author marrisa
 * @date 2017-12-08
 */
public class SessionListener implements HttpSessionAttributeListener,HttpSessionListener {   
	
	
	// 集合对象，保存session对象的引用
	static Hashtable<String, UserSession> usersOnline = new Hashtable<String, UserSession>();
	
	/**
	 * 1.0 <添加属性事件>
	 * 	   当系统监听到某一session中添加属性时，将会触发HttpSessionBindingEvent事件
	 * 	   本系统中判断该事件的名称是否为"UserSession",如果是则获取该事件的值（Value）并
	 * 	   将该对象绑定到当前线程当中。
	 */
    public void attributeAdded(HttpSessionBindingEvent event) {   
        if ("UserSession".equals(event.getName())) {   //只有在登录成功时,才set UserSession
        	UserSession userSession = (UserSession)event.getValue();
        	usersOnline.put(userSession.getIds_user().toString(), userSession);//保存在线用户
            SystemSession.setUserSession(userSession);   
        }   
    }   
  
	/**
	 * 2.0 <修改属性事件>
	 * 	   当系统监听到某一session中修改属性时，将会触发HttpSessionBindingEvent事件
	 * 	   本系统中判断该事件的名称是否为"UserSession",如果是则获取该事件的值（Value）并
	 * 	   将该对象绑定到当前线程当中。
	 */
    public void attributeReplaced(HttpSessionBindingEvent event) {   
        if ("UserSession".equals(event.getName())) {   
        	UserSession userSession = (UserSession)event.getValue();
        	usersOnline.put(userSession.getIds_user().toString(), userSession);//保存在线用户
            SystemSession.setUserSession(userSession);   
        }   
    }

	/**
	 * 3.0 <销毁属性事件>
	 * 	   当系统监听到某一session中移除属性时，将会触发HttpSessionBindingEvent事件
	 * 	   本系统中判断该事件的名称是否为"UserSession",如果是则获取该事件的值（Value）并
	 * 	   将该对象从当前线程当中移除。
	 */
	public void attributeRemoved(HttpSessionBindingEvent event) {
		if ("UserSession".equals(event.getName())) {   
            SystemSession.clear();   
        } 
	}
	
	/**
	 * 实现HttpSessionListener接口，完成session创建事件控制
	 * 说明：此时的Session状态为无效会话，只有用户成功登录系统后才将此Session写入htUsersOnline来管理
	 */
	public void sessionCreated(HttpSessionEvent event) {
		
	}
	/**
	 * 实现HttpSessionListener接口，完成session销毁事件控制
	 */
	public void sessionDestroyed(HttpSessionEvent event) {
		HttpSession session = event.getSession();
		UserSession userSession = (UserSession)session.getAttribute("UserSession");
		if(userSession != null){
			usersOnline.remove(userSession.getIds_user()); //从在线列表中移除用户
			//WsMsgService wsMsgService=(WsMsgService)SpringContextHolder.context.getBean("wsMsgService");
			//wsMsgService.removeOnLineWxtx(userSession.getCurUser());
		}
		
	}
	
	/**
	 * 获取在线用户列表
	 * @return
	 */
	public static Hashtable<String, UserSession> getUsersOnline() {
		return usersOnline;
	}   
} 
