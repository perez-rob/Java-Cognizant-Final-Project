package com.jrmj.JRMJEdgeService.util.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "test-service-one")
public interface TestOneClient {

    @RequestMapping(value = "/testone", method = RequestMethod.GET)
    public String useTestServiceOne();
}
