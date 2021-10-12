package com.jrmj.CustomerService.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jrmj.CustomerService.model.Address;
import com.jrmj.CustomerService.model.Customer;
import com.jrmj.CustomerService.repository.CustomerRepository;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@WebMvcTest(CustomerServiceController.class)
public class CustomerServiceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CustomerRepository customerRepo;

    private ObjectMapper mapper = new ObjectMapper();

    private Customer customer1;
    private String customerJson;
    private List<Customer> allCustomers = new ArrayList<>();
    private String allCustomersJson;

    @Before
    public void setUp() throws Exception {
        Address addressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address addressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        customer1 = new Customer();
        customer1.setEmail("test@customer.net");
        customer1.setFirstName("Test");
        customer1.setLastName("Customer");
        customer1.setAddressShipping(addressShipping);
        customer1.setAddressBilling(addressBilling);
        customer1.setPhoneNumber("404-444-4040");
    }
}