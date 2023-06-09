package com.gradproject.yourspace.APIs;


import com.sendgrid.SendGrid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SendEmailConfig {

    @Value("${spring.sendgrid.api-key}")
    private String sendGridApiKey;


    @Bean
    public SendGrid sendGrid() {
        return new SendGrid(sendGridApiKey);
    }

}
