package com.smartparking.security.utils;

import com.smartparking.security.exception.*;
import com.smartparking.repository.ClientRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ValidatorImpl implements Validator {
    private static final Logger LOGGER = LoggerFactory.getLogger(ValidatorImpl.class);
    @Autowired
    private ClientRepository clientRepository;

    @Value("${validation.email.regex}")
    private String regex;
    @Value("${validation.email.min}")
    private int emailMin;
    @Value("${validation.email.max}")
    private int emailMax;

    @Value("${validation.password.min}")
    private int passwordMin;
    @Value("${validation.password.max}")
    private int passwordMax;

    @Value("${validation.firstname.min}")
    private int firstnameMin;
    @Value("${validation.firstname.max}")
    private int firstnameMax;

    @Value("${validation.lastname.min}")
    private int lastnameMin;
    @Value("${validation.lastname.max}")
    private int lastnameMax;

    @Override
    public String validateEmailOnRegistration(String email) throws EmailValidationEx, DuplicateEmailEx {
        if(email == null || !email.matches(regex) || email.length() < emailMin || email.length() > emailMax) {
            LOGGER.warn("Invalid email " + email);
            throw new EmailValidationEx("Entered e-mail adress is not valid");
        }
        if(clientRepository.findClientByEmail(email) != null) {
            throw new DuplicateEmailEx("User with this e-mail alredy exists");
        }
        return email;
    }

    @Override
    public String validateEmailOnLogin(String email) throws EmailValidationEx, NonExistantEmailEx {
        if(email == null || !email.matches(regex) || email.length() < emailMin || email.length() > emailMax) {
            LOGGER.warn("Invalid email " + email);
            throw new EmailValidationEx("Entered e-mail adress is not valid");
        }
        if(clientRepository.findClientByEmail(email) == null) {
            throw new NonExistantEmailEx("User with this e-mail doesn`t exists");
        }
        return email;
    }

    @Override
    public String validatePassword(String password) throws PasswordValidationEx {
        if(password == null || password.length() < passwordMin || password.length() > passwordMax){
            LOGGER.warn("Invalid password");
            throw new PasswordValidationEx("Password is invalid");
        }
        return password;
    }

    @Override
    public String validateFirstname(String firstname) throws FirstnameValidationEx {
        if(firstname == null || firstname.length() < firstnameMin || firstname.length() > firstnameMax){
            LOGGER.warn("Invalid firstname " + firstname);
            throw new FirstnameValidationEx("Firstname is invalid");
        }
        return firstname;
    }

    @Override
    public String validateLastname(String lastname) throws LastnameValidationEx {
        if(lastname == null || lastname.length() < lastnameMin || lastname.length() > lastnameMax){
            LOGGER.warn("Invalid lastname " + lastname);
            throw new LastnameValidationEx("Lastname is invlaid");
        }
        return lastname;
    }

    @Override
    public String checkPasswords(String password, String confirmPassword) throws NonMatchingPasswordsEx, PasswordValidationEx {
        if(!validatePassword(password).equals(validatePassword(confirmPassword))) {
            LOGGER.warn("Passwords doesnt match " + password + " " + confirmPassword);
            throw new NonMatchingPasswordsEx("Passwords doesn`t match");
        }
        return password;
    }


}
