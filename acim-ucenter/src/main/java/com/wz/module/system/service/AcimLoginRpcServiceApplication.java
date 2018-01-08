package com.wz.module.system.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AcimLoginRpcServiceApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(AcimLoginRpcServiceApplication.class);

    public static void main(String[] args) {
        LOGGER.info(">>>>> zheng-ucenter-rpc-service 正在启动 <<<<<");
        new ClassPathXmlApplicationContext("classpath:/spring/*.xml");
        LOGGER.info(">>>>> zheng-ucenter-rpc-service 启动完成 <<<<<");
    }
}
