package com.jrmj.TestServiceTwo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestServiceTwoController {

    private String testTwo = "Test Service TWO working thru Feign Edge Service";

    @GetMapping("/testtwo")
    public String getTestServiceTwo() {

        return testTwo;
    }
}
