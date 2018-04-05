package com.smartparking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StartController {

    @RequestMapping({"/angular/**"})
    public String redirect() {
        return "forward:/index.html";
    }
}
