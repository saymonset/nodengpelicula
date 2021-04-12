package com.cavanosa.TutorialStripe.controller;

import com.cavanosa.TutorialStripe.http.PaymentIntentDto;
import com.cavanosa.TutorialStripe.model.PaymentIntentLocal;
import com.cavanosa.TutorialStripe.service.PaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.BeanUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/stripe")
@CrossOrigin(origins = "*")
public class StripeController {

    @Autowired
    PaymentService paymentService;

    @PostMapping(
            value = "/test",
            consumes = {APPLICATION_JSON_VALUE, APPLICATION_JSON_VALUE},
            produces = {APPLICATION_JSON_VALUE, APPLICATION_JSON_VALUE}
    )
    public ResponseEntity<PaymentIntent> test(@RequestBody PaymentIntentDto paymentIntentDto) throws StripeException {
       PaymentIntent paymentIntent = paymentService.paymentIntent(paymentIntentDto);
        String paymentStr = paymentIntentDto.getDescription(); //"{'resp':"+ paymentIntentDto.getDescription() + "}";
        return new ResponseEntity<PaymentIntent>(paymentIntent, HttpStatus.OK);
    }



    @PostMapping("/paymentintent")
    public ResponseEntity<PaymentIntentLocal> payment(@RequestBody PaymentIntentDto paymentIntentDto) throws StripeException {
        PaymentIntent paymentIntent = paymentService.paymentIntent(paymentIntentDto);
        String paymentStr = paymentIntent.toJson();
        PaymentIntentLocal  resp = new PaymentIntentLocal();
        BeanUtils.copyProperties(paymentIntent, resp);

        return new ResponseEntity<PaymentIntentLocal>(resp, HttpStatus.OK);
    }

    @PostMapping("/confirm/{id}")
    public ResponseEntity<PaymentIntentLocal> confirm(@PathVariable("id") String id) throws StripeException {
        PaymentIntent paymentIntent = paymentService.confirm(id);
        String paymentStr = paymentIntent.toJson();
        PaymentIntentLocal  resp = new PaymentIntentLocal();
        BeanUtils.copyProperties(paymentIntent, resp);
        return new ResponseEntity<PaymentIntentLocal>(resp, HttpStatus.OK);
    }

    @PostMapping("/cancel/{id}")
    public ResponseEntity<PaymentIntentLocal> cancel(@PathVariable("id") String id) throws StripeException {
        PaymentIntent paymentIntent = paymentService.cancel(id);
        String paymentStr = paymentIntent.toJson();
        PaymentIntentLocal  resp = new PaymentIntentLocal();
        BeanUtils.copyProperties(paymentIntent, resp);
        return new ResponseEntity<PaymentIntentLocal>(resp, HttpStatus.OK);
    }
}
