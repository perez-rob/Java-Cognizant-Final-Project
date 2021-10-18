package com.jrmj.JRMJEdgeService.controller;

import com.jrmj.JRMJEdgeService.util.feign.CustomerServiceClient;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(JrmjEdgeController.class)
public class JrmjEdgeControllerTest {

    ////
    // @InjectMocks

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CustomerServiceClient customerClient;

    @Test
    public void shouldReturnCustomers() throws Exception {
        String inputJson = "{'email':'test@customer.net','password':'12345678','firstName':'Test','lastName':'Customer','addressShipping':{'id':null,'street1':'33 Happy Drive','street2':null,'city':'Atlanta','stateAbv':'GA','zipCode':'30350'},'addressBilling':{'id':null,'street1':'255 Test Street','street2':'Apt 5B','city':'Dunwoody','stateAbv':'GA','zipCode':'30333'},'phoneNumber':'404-444-4040'}";
                mockMvc.perform(
                        post("/customers")
                                .content(inputJson)
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

//    @Test
//    public void shouldReturnStatus201OnCustomerPostRequest() throws Exception {
//        String inputJson = "{'email':'test@customer.net','password':'12345678','firstName':'Test','lastName':'Customer','addressShipping':{'id':null,'street1':'33 Happy Drive','street2':null,'city':'Atlanta','stateAbv':'GA','zipCode':'30350'},'addressBilling':{'id':null,'street1':'255 Test Street','street2':'Apt 5B','city':'Dunwoody','stateAbv':'GA','zipCode':'30333'},'phoneNumber':'404-444-4040'}";
//
//        mockMvc.perform(
//                        post("/customers")
//                                .content(inputJson)
//                                .contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isCreated());
//    }
}