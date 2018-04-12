package com.smartparking.service.email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private EmailContentBuilder emailContentBuilder;

    @Value("${spring.mail.username}")
    private String emailFrom;

    public void prepareAndSendWelcomeEmail(String recipient, String message) throws MailException{
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(emailFrom);
            messageHelper.setTo(recipient);
            messageHelper.setSubject("Welcome!");
            String content = emailContentBuilder.buildWelcomeHtml(message);
            messageHelper.setText(content, true);
        };
        try {
            mailSender.send(messagePreparator);
        }catch (MailException e){
            LOGGER.error("Could not send email to : {} Error = {}",recipient,e.getMessage());
        }
    }

    public void prepareAndSendConfirmPassEmail(String recipient, String userName, String message){
        MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
            messageHelper.setFrom(emailFrom);
            messageHelper.setTo(recipient);
            messageHelper.setSubject("Change password confirmation.");
            String content = emailContentBuilder.buildConfirmPassHtml(userName, message);
            messageHelper.setText(content, true);
        };
        mailSender.send(messagePreparator);
    }
}
