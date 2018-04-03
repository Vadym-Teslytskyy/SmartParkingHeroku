package com.smartparking.security.utils;

import com.smartparking.security.exception.*;
import org.springframework.stereotype.Component;

@Component
public interface Validator {
    String validateEmailOnRegistration(String email) throws EmailValidationEx, DuplicateEmailEx;
    String validateEmailOnLogin(String email) throws EmailValidationEx, NonExistantEmailEx;
    String validatePassword(String password) throws PasswordValidationEx;
    String validateFirstname(String firstname) throws FirstnameValidationEx;
    String validateLastname(String lastname) throws LastnameValidationEx;
}
