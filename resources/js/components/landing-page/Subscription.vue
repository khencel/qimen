<template>
    <div class="container">
        <!-- <div class="row text-center">
            <div class="col-md-4 border p-3">
                <button class="btn button-success" @click="payment(3,1)" >SUBSCRIBE NOW</button>
                <p class="subcription-font">1 Year Subscription</p>
                <h3 class="subcription-font text-success" style="font-size:20px;">$3.00</h3>
            </div>
            <div class="col-md-4 border p-3">
                <button class="btn button-success" @click="payment(6,2)">SUBSCRIBE NOW</button>
                <p class="subcription-font">2 Years Subscription</p>
                <h3 class="subcription-font text-success" style="font-size:20px;">$6.00</h3>
            </div>
            <div class="col-md-4 border p-3">
                <button class="btn button-success" @click="payment(10,5)">SUBSCRIBE NOW</button>
                <p class="subcription-font">5 Years Subscription</p>
                <h3 class="subcription-font text-success" style="font-size:20px;">$10.00</h3>
            </div>
        </div> -->
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Pricing</h1>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quasi asperiores! Ullam, optio consequuntur. Est praesentium, incidunt, voluptatem quod, hic accusantium sint cumque laboriosam unde debitis ducimus fugit a quaerat.</p>
        </div>

        <div class="container">
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">1 Year</h4>
            </div>
            <div class="card-body text-center">
                <h1>$3 <small class="text-muted">/ year</small></h1>
                <p>
                    1 year coverage Victory Day
                </p>
                <button type="button" @click="payment(3,1)" class="buttonSuccess w-100">Subscribe Now</button>
            </div>
            </div>
            <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">2 Years</h4>
            </div>
            <div class="card-body text-center">
                <h1>$6 <small class="text-muted">/ 2 year</small></h1>
                <p>
                    2 year coverage Victory Day
                </p>
                <button type="button" @click="payment(6,2)" class="buttonSuccess w-100">Subscribe Now</button>
            </div>
            </div>
            <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 class="my-0 font-weight-normal">5 Years</h4>
            </div>
            <div class="card-body text-center">
                <h1>$10 <small class="text-muted">/ 5 year</small></h1>
                <p>
                    5 year coverage Victory Day
                </p>
                <button type="button" @click="payment(10,5)" class="buttonSuccess w-100">Subscribe Now</button>
            </div>
            </div>
        </div>
        </div>

        <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Payment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class=" p-2"><h3>{{terms}} Years</h3></div>
                    <div class="p-2">
                        <ul>
                            <li>Victory day({{terms}} year/s)</li>
                            <li>Sample included</li>
                            <li>Sample included</li>
                            <li>Sample included</li>
                            <li>Sample included</li>
                        </ul>
                    </div>
                    <div class="pl-2" >
                        <span><strong>Total:</strong></span>
                        <span class="font-weight-bold">$</span>
                        <span class="font-weight-bold" style="font-size:25px;" id="finalAmount" :amountData="price">{{price}}.00</span>
                        
                    </div>
                    <div id="paypal-button-container"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                modalShow:false,
                price: null,
                terms:'',
            }
        },
        mounted() {
            this.paypal();
        },
        methods:{
            payment(price,term){
                $('#paymentModal').modal('show')
                this.price = price;
                this.terms = term;
            },
            paypal(price){
                paypal.Buttons({
                createOrder: function(data, actions) {
                    var payableAmount = $('#finalAmount').attr('amountData');
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                            value: payableAmount
                            }
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    var payableAmount = $('#finalAmount').attr('amountData');
                    // This function captures the funds from the transaction.
                    return actions.order.capture().then(function(details) {
                    // This function shows a transaction success message to your buyer.
                    // alert('Transaction completed by ' + details.payer.name.given_name);
                        axios.post('/api/subscription?api_token='+window.token,{price:payableAmount})
                        .then(response => {
                            $('#paymentModal').modal('hide')
                            window.location = "/home";
                        });
                        
                    });
                    
                }
                }).render('#paypal-button-container');
                //This function displays Smart Payment Buttons on your web page.
            },
        }
        
    }
    Holder.addTheme('thumb', {
        bg: '#55595c',
        fg: '#eceeef',
        text: 'Thumbnail'
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap');
    .subcription-font{
        font-family: 'Vampiro One', cursive;
        font-size: clamp(0.5rem, 10vw, 1rem);
    }

    html {
    font-size: 14px;
    }
    @media (min-width: 768px) {
    html {
        font-size: 16px;
    }
    }

    .container {
    max-width: 960px;
    }

    .pricing-header {
    max-width: 700px;
    }

    .card-deck .card {
    min-width: 220px;
    }
</style>
