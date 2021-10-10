package com.jrmj.TestServiceTwo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestServiceOneController {

    private String testOne = "Test Service ONE working thru Feign Edge Service";

    @RequestMapping(value = "/testone", method = RequestMethod.GET)
    public String testServiceOne() {

        return testOne;
    }
}
