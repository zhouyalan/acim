/**
 * Copyright (c) 2005-2009 springside.org.cn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * 
 * $Id: SpringContextHolder.java 1000 2010-03-23 17:50:12Z calvinxiu $
 */
package com.wz.tools;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * 以静态变量保存Spring ApplicationContext, 可在任何代码任何地方任何时候中取出ApplicaitonContext.
 * 
 * @author calvin
 */

public class SpringContextHolder implements ApplicationContextAware {

	public static  ApplicationContext context = null;

	/**
	 * 实现ApplicationContextAware接口的context注入函数, 将其存入静态变量.
	 */

	public void setApplicationContext(ApplicationContext arg0)
	throws BeansException {
		context = arg0;
	}

	/**
	 *取得存储在静态变量中的ApplicationContext.
	 */
	public static ApplicationContext getApplicationContext() {
		checkApplicationContext();
		return context;
	}

	/**
	 * 从静态变量ApplicationContext中取得Bean, 自动转型为所赋值对象的类型.
	 */
	@SuppressWarnings("unchecked")
	public  static <T> T getBean(String name) {
		checkApplicationContext();
		return (T) context.getBean(name);
	}

	/**
	 * 从静态变量ApplicationContext中取得Bean, 自动转型为所赋值对象的类型.
	 * 如果有多个Bean符合Class, 取出第一个.
	 */
	@SuppressWarnings("unchecked")
	public static <T> T getBean(Class<T> requiredType) {
		checkApplicationContext();
		return (T) context.getBeansOfType(requiredType);
	}

	

	private static void checkApplicationContext() {
		if (context == null) {
			throw new IllegalStateException("applicaitonContext未注入,请在applicationContext.xml中定义SpringContextHolder");
		}
	}

	
}
