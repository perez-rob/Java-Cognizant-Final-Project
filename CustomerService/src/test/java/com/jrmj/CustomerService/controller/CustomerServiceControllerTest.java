package com.jrmj.CustomerService.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jrmj.CustomerService.model.Address;
import com.jrmj.CustomerService.model.Customer;
import com.jrmj.CustomerService.repository.CustomerRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
        customer1.setId(99);
        customer1.setEmail("test@customer.net");
        customer1.setFirstName("Test");
        customer1.setLastName("Customer");
        customer1.setPassword("12345678");
        customer1.setAddressShipping(addressShipping);
        customer1.setAddressBilling(addressBilling);
        customer1.setPhoneNumber("404-444-4040");

        customerJson = mapper.writeValueAsString(customer1);

        Address addressShipping2 = new Address("2 Ship St", "Nowhere", "GA", "66666");
        Address addressBilling2 = new Address("2 Bill St", "Nowhere", "GA", "66666");

        Customer testCustomer2 = new Customer();
        testCustomer2.setEmail("customer@test.net");
        testCustomer2.setFirstName("Silly");
        testCustomer2.setLastName("Person");
        testCustomer2.setPassword("12345678");
        testCustomer2.setAddressShipping(addressShipping2);
        testCustomer2.setAddressBilling(addressBilling2);
        testCustomer2.setPhoneNumber("678-768-8768");

        allCustomers.add(customer1);
        allCustomers.add(testCustomer2);

        allCustomersJson = mapper.writeValueAsString(allCustomers);

    }

    @Test
    public void shouldCreateNewCustomerOnPostRequest() throws Exception {
        Address testAddressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address teatAddressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        Customer testCustomer = new Customer();
        testCustomer.setEmail("test@customer.net");
        testCustomer.setFirstName("Test");
        testCustomer.setLastName("Customer");
        testCustomer.setPassword("12345678");
        testCustomer.setAddressShipping(testAddressShipping);
        testCustomer.setAddressBilling(teatAddressBilling);
        testCustomer.setPhoneNumber("404-444-4040");

        String inputJson = mapper.writeValueAsString(testCustomer);

        // NOT SURE IF WE NEED THIS?
        // given(customerRepo.save(testCustomer)).willReturn(customer1);

        mockMvc.perform(
                post("/customers")
                        .content(inputJson)
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(status().isCreated())
                        .andExpect(content().json(inputJson));

    }

    @Test
    public void shouldReturnAllCustomerOnGet() throws Exception {

        //need this??
        // given(customerRepo.findAll()).willReturn(allCustomers);

        mockMvc.perform(
                get("/customrers"))
                .andExpect(status().isOk())
                .andExpect(content().json(allCustomersJson));

    }

    @Test
    public void shouldReturnCustomerOnGetById() throws Exception {
        //need this??
        // given(customerRepo.findById(99)).willReturn(customer1);

        mockMvc.perform(
                get("/customers/99"))
                .andExpect(status().isOk())
                .andExpect(content().json(customerJson));
    }


    // THIS TEST NEEDS ATTENTION AND FIXING
    @Test
    public void shouldUpdateCustomerOnPut() throws Exception {
        Address testAddressShipping = new Address("33 Happy Drive", "Atlanta", "GA", "30350");
        Address teatAddressBilling = new Address("255 Test Street", "Apt 5B", "Dunwoody", "GA", "30333");

        Customer testCustomer = new Customer();
        testCustomer.setEmail("test@customer.net");
        testCustomer.setFirstName("Test");
        testCustomer.setLastName("Customer");
        testCustomer.setPassword("12345678");
        testCustomer.setAddressShipping(testAddressShipping);
        testCustomer.setAddressBilling(teatAddressBilling);
        testCustomer.setPhoneNumber("404-444-4040");

        String inputJson = mapper.writeValueAsString(testCustomer);

        mockMvc.perform(
                put("/customers/99")
                        .content(inputJson)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    // THIS TEST NEEDS ATTENTION AND FIXING
    @Test
    public void shouldDeleteCustomerByIdOnDelete() throws Exception {
        mockMvc.perform(
                delete("/customers/99"))
                .andExpect(status().isOk());
    }
}