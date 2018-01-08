package com.wz.framework.interceptor;

import com.wz.framework.pub.Servlet2Utils;
import com.wz.framework.pub.SessionListener;
import com.wz.framework.pub.SystemSession;
import com.wz.framework.pub.UserSession;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Hashtable;
import java.util.List;
import java.util.Set;

/**
 * 拦截器资料：
 * http://blog.csdn.net/code_du/article/details/24304955
 */
@Component
public class SystemInitInterceptor implements HandlerInterceptor {
	
	//自己定义一个变量，用来存储忽略地址
	private List<String> ignoreUrl;
	
	public void setIgnoreUrl(List<String> ignoreUrl) {
		this.ignoreUrl = ignoreUrl;
	}
	
	
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object object, Exception exception) throws Exception {
		//如果该请求地址是不会被拦截器拦截的话，则在该请求执行完后，最后来执行这里
		System.out.println("--------------------------------afterCompletion");
	}
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object object, ModelAndView exception) throws Exception {
		//如果该请求地址是不会被拦截器拦截的话，则在该请求执行完后会来执行这里
		System.out.println("--------------------------------postHandle");



	}
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object object) throws Exception {
		
		String requestUrl = request.getRequestURL().toString();
		if (request.getQueryString() != null) {
			requestUrl += "?" + request.getQueryString();
		}
		
		boolean flag = false;

		if(ignoreUrl.size() ==0){

			flag = Boolean.TRUE;
		}
		
		for (String ignoreUrlSub : ignoreUrl) {
			if (requestUrl.indexOf(ignoreUrlSub) != -1) { // 长度是-1 就是没有定义拦截器
				flag = Boolean.TRUE;
				break;
			}
			
			//如果忽略的 URL 配置中含有以 /** 为结尾的，则表示其下所有请求都是忽略的
			if (StringUtils.endsWith(ignoreUrlSub, "/**")) {
				ignoreUrlSub = StringUtils.remove(ignoreUrlSub, "/**");
				if (StringUtils.contains(requestUrl, ignoreUrlSub)) {
					flag = Boolean.TRUE;
					break;
				}
			}
			
		}
		
		if (!flag) {
			//拦截成功，请求地址不符合要求，这里进行不符合操作，比如跳转到某个错误页面
			System.out.println("--------------------------------该请求地址：" + requestUrl + ",被拦截器拦截.");

			UserSession userSession = (UserSession) request.getSession().getAttribute("UserSession");
			Hashtable<String, UserSession> online = SessionListener.getUsersOnline();//获得用户在线列表


			//当前session,在线用户列表不为null,并且当前在线用户没有当前session时，要注销当前session
			if(userSession!=null&&online!=null){
				flag=true;
				//获得所有在线用户的key
				Set<String> keys = online.keySet();
				for (String key : keys) {
					UserSession user = online.get(key);
					if(user!=null&&user.getIds_user().equals(userSession.getIds_user())){
						flag=false;
						break;
					}
				}
				//flag为true是，则要把当前seesion注销
				if(flag){
					Servlet2Utils.getSession().invalidate();

				}
				SystemSession.setUserSession(userSession);

			}


		}


		
		// 返回 true 则直接符合当前拦截器要求，无需拦截
		return flag;
		
		
	}
	
}
