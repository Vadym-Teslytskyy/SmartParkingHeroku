package com.smartparking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AngularController {

    @RequestMapping("/angular/**")
    public String getRedirect(){
        return "forward:/index.html";
    }
}
