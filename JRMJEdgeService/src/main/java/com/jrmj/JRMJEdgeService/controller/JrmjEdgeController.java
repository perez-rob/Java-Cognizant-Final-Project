package com.jrmj.JRMJEdgeService.controller;

import com.jrmj.JRMJEdgeService.util.feign.TestOneClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class JrmjEdgeController {

    @Autowired
    private final TestOneClient testOneClient;

    JrmjEdgeController(TestOneClient testOneClient) {
        this.testOneClient = testOneClient;
    }

    @GetMapping("/one")
    public String testOne() {
        return testOneClient.useTestServiceOne();
    }
}
