package com.cavanosa.TutorialStripe.model;

import java.io.Serializable;

/**
 * Created by simon on 4/10/2021.
 */
public class PaymentIntentLocal implements Serializable{
    private String id;
    private String object;
    private long amount;
    private long amountCapturable;
    private long amountReceived;
    private Object application;
    private Object applicationFeeAmount;
    private Object canceledAt;
    private Object cancellationReason;
    private String captureMethod;
    private Charges charges;
    private String clientSecret;
    private String confirmationMethod;
    private long created;
    private String currency;
    private Object customer;
    private String description;
    private Object invoice;
    private Object lastPaymentError;
    private boolean livemode;
    private Metadata metadata;
    private Object nextAction;
    private Object onBehalfOf;
    private Object paymentMethod;
    private PaymentMethodOptions paymentMethodOptions;
    private String[] paymentMethodTypes;
    private Object receiptEmail;
    private Object review;
    private Object setupFutureUsage;
    private Object shipping;
    private Object statementDescriptor;
    private Object statementDescriptorSuffix;
    private String status;
    private Object transferData;
    private Object transferGroup;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getObject() {
        return object;
    }

    public void setObject(String object) {
        this.object = object;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public long getAmountCapturable() {
        return amountCapturable;
    }

    public void setAmountCapturable(long amountCapturable) {
        this.amountCapturable = amountCapturable;
    }

    public long getAmountReceived() {
        return amountReceived;
    }

    public void setAmountReceived(long amountReceived) {
        this.amountReceived = amountReceived;
    }

    public Object getApplication() {
        return application;
    }

    public void setApplication(Object application) {
        this.application = application;
    }

    public Object getApplicationFeeAmount() {
        return applicationFeeAmount;
    }

    public void setApplicationFeeAmount(Object applicationFeeAmount) {
        this.applicationFeeAmount = applicationFeeAmount;
    }

    public Object getCanceledAt() {
        return canceledAt;
    }

    public void setCanceledAt(Object canceledAt) {
        this.canceledAt = canceledAt;
    }

    public Object getCancellationReason() {
        return cancellationReason;
    }

    public void setCancellationReason(Object cancellationReason) {
        this.cancellationReason = cancellationReason;
    }

    public String getCaptureMethod() {
        return captureMethod;
    }

    public void setCaptureMethod(String captureMethod) {
        this.captureMethod = captureMethod;
    }

    public Charges getCharges() {
        return charges;
    }

    public void setCharges(Charges charges) {
        this.charges = charges;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public String getConfirmationMethod() {
        return confirmationMethod;
    }

    public void setConfirmationMethod(String confirmationMethod) {
        this.confirmationMethod = confirmationMethod;
    }

    public long getCreated() {
        return created;
    }

    public void setCreated(long created) {
        this.created = created;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Object getCustomer() {
        return customer;
    }

    public void setCustomer(Object customer) {
        this.customer = customer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Object getInvoice() {
        return invoice;
    }

    public void setInvoice(Object invoice) {
        this.invoice = invoice;
    }

    public Object getLastPaymentError() {
        return lastPaymentError;
    }

    public void setLastPaymentError(Object lastPaymentError) {
        this.lastPaymentError = lastPaymentError;
    }

    public boolean isLivemode() {
        return livemode;
    }

    public void setLivemode(boolean livemode) {
        this.livemode = livemode;
    }

    public Metadata getMetadata() {
        return metadata;
    }

    public void setMetadata(Metadata metadata) {
        this.metadata = metadata;
    }

    public Object getNextAction() {
        return nextAction;
    }

    public void setNextAction(Object nextAction) {
        this.nextAction = nextAction;
    }

    public Object getOnBehalfOf() {
        return onBehalfOf;
    }

    public void setOnBehalfOf(Object onBehalfOf) {
        this.onBehalfOf = onBehalfOf;
    }

    public Object getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(Object paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public PaymentMethodOptions getPaymentMethodOptions() {
        return paymentMethodOptions;
    }

    public void setPaymentMethodOptions(PaymentMethodOptions paymentMethodOptions) {
        this.paymentMethodOptions = paymentMethodOptions;
    }

    public String[] getPaymentMethodTypes() {
        return paymentMethodTypes;
    }

    public void setPaymentMethodTypes(String[] paymentMethodTypes) {
        this.paymentMethodTypes = paymentMethodTypes;
    }

    public Object getReceiptEmail() {
        return receiptEmail;
    }

    public void setReceiptEmail(Object receiptEmail) {
        this.receiptEmail = receiptEmail;
    }

    public Object getReview() {
        return review;
    }

    public void setReview(Object review) {
        this.review = review;
    }

    public Object getSetupFutureUsage() {
        return setupFutureUsage;
    }

    public void setSetupFutureUsage(Object setupFutureUsage) {
        this.setupFutureUsage = setupFutureUsage;
    }

    public Object getShipping() {
        return shipping;
    }

    public void setShipping(Object shipping) {
        this.shipping = shipping;
    }

    public Object getStatementDescriptor() {
        return statementDescriptor;
    }

    public void setStatementDescriptor(Object statementDescriptor) {
        this.statementDescriptor = statementDescriptor;
    }

    public Object getStatementDescriptorSuffix() {
        return statementDescriptorSuffix;
    }

    public void setStatementDescriptorSuffix(Object statementDescriptorSuffix) {
        this.statementDescriptorSuffix = statementDescriptorSuffix;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Object getTransferData() {
        return transferData;
    }

    public void setTransferData(Object transferData) {
        this.transferData = transferData;
    }

    public Object getTransferGroup() {
        return transferGroup;
    }

    public void setTransferGroup(Object transferGroup) {
        this.transferGroup = transferGroup;
    }
}
