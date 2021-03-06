import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


function CheckoutReact(){ 
    
    function ButtonClick(){
        axios
        .get("http://127.0.0.1:8000/checkout?email=hello@dbs.com")
        .then((response) => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response.data.error)
        })
    
    }
   


    return(
        <>
        <div class="container">
            <div class="mb-4 d-block mx-auto">
                <h2>Checkout Form</h2>
                <p class="lead">Please check your items and pay online</p>
            </div>
        </div>

        <div class="container">
            <h4 class="mb-3">Billing Address</h4>
            <form novalidate>
            <div class="row g-3">
                <div class="col-sm-6"> 
                        <label for="firstName" class="form-label">First name</label>
                        <input id="firstName" type="text" class="form-control" placeholder="John" required/>
                        <div class="invalid-feedback">Valid first name is required.</div>
                </div>
            </div>
                    
            <div class="col-sm-6"> 
                <label for="lastName" class="form-label">Last name</label>
                <input id="lastName" type="text" class="form-control" placeholder="Doe" required/>
                <div class="invalid-feedback">
                Valid last name is required.
                </div>
            </div>

            <div class="col-12"> 
                <label for="email" class="form-label">Email</label>
                <div class="input-group">    
                </div>
                <input id="email" type="text" class="form-control" placeholder="example@123.com" required/>
                <div class="invalid-feedback">Valid last name is required.</div>
                </div>
                <div class="col-md-5">
                    <label for="country" class="form-label">country</label>
                    <select id="username" class="form-control">
                        <option value="">
                            Choose your country...
                        </option>
                        <option value="Singapore">
                            Singapore
                        </option>
                        <option value="USA">
                            USA
                        </option>
                    </select>
                    <div class="col-md-4">
                        <label for="state" class="form-label">country</label>
                        <select id="state" class="form-control">
                            <option value="">
                                Choose your state...
                            </option>
                            <option value="Singapore">
                                Singapore
                            </option>
                            <option value="Texas">
                                Texas
                            </option>
                        </select>
                    </div>

                    <div class="col-md-3"> 
                        <label for="postcode" class="form-label">Postcode</label>
                        <input id="postcode" type="number" class="form-control" placeholder="1234" required/>
                        <div class="invalid-feedback"> Valid name is required.</div>
                </div>

                <hr class="my-4"/>

                <div class="col-12">
                    <div class="form-check">
                        <input id="sameaddress" type="checkbox" class="form-check-input"/>
                        <label class="form-check-label" for="sameAddress">Shipping address is the same as billing address</label>
                    </div>
                    <div class="form-check">
                        <input id="safeInfo" type="checkbox" class="form-check-input"/>
                        <label class="form-check-label" for="sameInfo">Save this info.</label>
                    </div>
                </div>
                

                <hr class="my-4"/>

                <h4 class="mb-3">Payment methods</h4>

                <div class="form-check">
                    <input id="creditCard" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                    <label for="creditCard">Credit Card</label>
                </div>

                <div class="form-check">
                    <input id="debitCard" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                    <label for="directDebit">Debit Card</label>
                </div>

                <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                    <label for="paypal">Paypal</label>
                </div>
                

                <div class=" row my-3 gy-3">
                    <div class="col-md-6">
                        Name on Card
                        <input id="fullName" type="text" class="form-control"/>
                        <small class="text-muted">
                            Please provide full name on card.
                        </small>
                        <div class="invalid-feedback">
                            Name on the card is required.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="cc-number" class="form-label">
                            Card Number
                        </label>
                        <input type="text" class="form-control"/>
                        <div class="invalid-feedback">
                            Card number is required.
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label for="cc-cvv" class="form-label">
                            CVV
                        </label>
                        <input type="text" class="form-control"/>
                        <div class="invalid-feedback">
                            CVV is required.
                        </div>
                    </div>

                    <hr class="my-4"/>

                    <button class="btn btn-primary btn-lgbtn-block" onClick={ButtonClick}>
                        Continue to Checkout
                    </button>
                </div>
           </div>
        </form>
    </div>
    </>
    )
}

export default CheckoutReact;
