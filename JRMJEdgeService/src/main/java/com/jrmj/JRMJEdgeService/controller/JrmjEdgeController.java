package com.jrmj.JRMJEdgeService.controller;

import com.jrmj.JRMJEdgeService.util.feign.TestOneClient;
import com.jrmj.JRMJEdgeService.util.feign.TestServiceTwoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class JrmjEdgeController {

//    @Autowired
//    private final TestOneClient testOneClient;

    @Autowired
    private final TestServiceTwoClient testServiceTwoClient;

    JrmjEdgeController(TestServiceTwoClient testServiceTwoClient) {
        this.testServiceTwoClient = testServiceTwoClient;
    }

//    @GetMapping("/one")
//    public String testOne() {
//        return testOneClient.useTestServiceOne();
//    }

    @GetMapping("/testtwo")
    public String testTwo() {
        return testServiceTwoClient.getTestServiceTwo();
    }

    @GetMapping("/trial")
    public String getTrial() {
        return "Trail";
    }
}
