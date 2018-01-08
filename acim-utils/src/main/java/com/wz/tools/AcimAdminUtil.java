package com.wz.tools;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.ServletContext;

/**
 * 启动解压zhengAdmin-x.x.x.jar到resources目录
 * Created by shuzheng on 2016/12/18.
 */
public class AcimAdminUtil implements InitializingBean, ServletContextAware {

    private static final Logger LOGGER = LoggerFactory.getLogger(AcimAdminUtil.class);

    @Override
    public void afterPropertiesSet() throws Exception {

    }

    @Override
    public void setServletContext(ServletContext servletContext) {
        /*LOGGER.info("===== 开始解压acim-admin =====");
       String version = PropertiesFileUtil.getInstance("acim-admin-client").get("acim.admin.version");
        LOGGER.info("zheng-admin.jar 版本: {}", version);*/
        String jarPath = servletContext.getRealPath("/WEB-INF/lib/acim-admin" + ".jar");
        LOGGER.info("acim-admin.jar 包路径: {}", jarPath);
        String resources = servletContext.getRealPath("/") + "WEB-INF/";
        LOGGER.info("acim-admin.jar 解压到: {}", resources);
        JarUtil.decompress(jarPath, resources);
        LOGGER.info("===== 解压acim-admin完成 =====");
    }

}

