<template>
<div class="ml-5 mr-5">
    <div class="modal fade" id="modalShowVicDay" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content modalDesign">
                <div class="modal-header">
                    <img src="/img/yinyang.png" id="yinyang" alt="">
                    <img src="/img/yinbig.png" id="yinBig" alt="">
                    <h5 class="modal-title text-white" id="exampleModalLabel">Victory Day</h5>
                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-white">
                    <div class="row">
                        
                        <div class="col-md-4 mt-2">
                            <select v-model="form.light" class="form-control">
                                <option value="" selected hidden>Divine Light</option>
                                <option v-for="(item, index) in palaces" :key="index" :value="item">{{item}}</option>
                            </select>
                        </div>

                        <div class="col-md-4 mt-2">
                            <select v-model="form.bless" class="form-control">
                                <option value="" selected hidden>Divine Bless</option>
                                <option v-for="(item, index) in palaces" :key="index" :value="item">{{item}}</option>
                            </select>
                        </div>

                        <div class="col-md-4 mt-2 mb-3">
                            <select v-model="form.force" class="form-control">
                                <option value="" selected hidden>Divine Force</option>
                                <option v-for="(item, index) in palaces" :key="index" :value="item">{{item}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="text-white">
                        <p id="light" hidden :value="form.light">{{form.light}}</p>
                        <p id="bless" hidden :value="form.bless">{{form.bless}}</p>
                        <p id="force" hidden :value="form.force">{{form.force}}</p>
                        <p id="id" hidden :value="form.id">{{form.id}}</p>
                        <h2 id="amount" :amountData="form.price">${{form.price}}.00</h2>
                    </div>
                    <div id="paypal-button-container"></div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
    export default {
        data(){
            return{
                palaces:["NE","N","NW","E","W","SE","S","SW"],
                form:new Form({
                    light:'',
                    bless:'',
                    force:'',
                    price:5,
                    id:''
                }),
            }
        },
        mounted() {
            this.paypal();
        },
        methods: {
            showModal(){
                $('#modalShowVicDay').modal('show');
            },
            paypal(){
                paypal.Buttons({
                createOrder: function(data, actions) {
                    var payableAmount = $('#amount').attr('amountData');
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                            value: payableAmount
                            }
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    var light = $('#light').attr('value');
                    var bless = $('#bless').attr('value');
                    var force = $('#force').attr('value');
                    var id = $('#id').attr('value');
                    return actions.order.capture().then(function(details) {
                        axios.post('/api/guest/purchase-guest?api_token='+window.token,{light:light,bless:bless,force:force,id:id})
                        .then(res => {
                            $('#modalShowVicDay').modal('hide');
                        })
                    });
                    
                }
                }).render('#paypal-button-container');
                //This function displays Smart Payment Buttons on your web page.
            },
            
        },
    }
</script>

<style scoped>
    .modalDesign{
        background-color: #000000;
    }

    #yinyang{
        width:50px;
        position: absolute;
        bottom: 0%;
        margin-bottom: -40px;
        margin-left: -40px;
    }

    #yinBig{
        position: absolute;
        bottom: 0%;
        right: 0%;
        width: 20%;
        margin-bottom: -80px;
        margin-right: -80px;
    }
    .buttonCancel{
        font-weight: bold;
        background-color: transparent;
        width: 40%;
        height: 40px;
        color: white;
        border: 1px solid white;
    }

    .buttonCancel:hover{
        border: 1px solid rgb(209, 209, 209);
        color: rgb(209, 209, 209);
    }

    .buttonSuccess{
        font-weight: bold;
        background-color: #F76D1E;
        width: 40%;
        height: 40px;
        color: white;
        border: none;
    }

    .buttonSuccess:hover{
        background-color: #fa8d4e;
        color: white;
    }

    .modal-footer{
        border-top: none;
    }

    .modal-header{
        border-bottom:none;
    }
</style>
