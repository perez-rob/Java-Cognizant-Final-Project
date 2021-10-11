package com.jrmj.JRMJEdgeService.controller;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@WebMvcTest(JrmjEdgeController.class)
public class JrmjEdgeControllerTest {

    @Autowired
    private MockMvc mockMvc;



}