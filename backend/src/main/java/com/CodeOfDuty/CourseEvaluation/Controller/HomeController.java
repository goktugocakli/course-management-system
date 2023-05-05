package com.CodeOfDuty.CourseEvaluation.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping("/{type}/{username}")
    public String showHomePage(@PathVariable String type, @PathVariable String username){
        return String.format("hoşgeldin  %s %s Home Page ", type, username);
    }











}
