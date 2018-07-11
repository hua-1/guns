package com.stylefeng.guns;

import com.stylefeng.guns.core.listener.StartApplicationListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * SpringBoot方式启动类
 *
 * @author stylefeng
 * @Date 2017/5/21 12:06
 */
@SpringBootApplication
public class GunsApplication {

    private final static Logger logger = LoggerFactory.getLogger(GunsApplication.class);

    public static void main(String[] args) {
        SpringApplication app=new SpringApplication(GunsApplication.class);
        app.addListeners(new StartApplicationListener());
        app.run(args);
        logger.info("GunsApplication is success!");
    }
}
