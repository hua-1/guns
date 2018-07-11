package com.stylefeng.guns.core.listener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

public class StartApplicationListener implements ApplicationListener<ContextRefreshedEvent>
{
    protected Logger log = LoggerFactory.getLogger(StartApplicationListener.class);

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        log.info("系统启动了");
    }
}
