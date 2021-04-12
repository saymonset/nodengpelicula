package com.cavanosa.TutorialStripe.model;

/**
 * Created by simon on 4/10/2021.
 */
public class Card {
    private Object installments;
    private Object network;
    private String requestThreeDSecure;

    public Object getInstallments() {
        return installments;
    }

    public void setInstallments(Object installments) {
        this.installments = installments;
    }

    public Object getNetwork() {
        return network;
    }

    public void setNetwork(Object network) {
        this.network = network;
    }

    public String getRequestThreeDSecure() {
        return requestThreeDSecure;
    }

    public void setRequestThreeDSecure(String requestThreeDSecure) {
        this.requestThreeDSecure = requestThreeDSecure;
    }
}
