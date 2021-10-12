<template>
    <div>
        <div class="row mt-3">
                <div class="col-md-12">
                    <card title="<i class='fa fa-fw ti-user'></i> Book Flight Tickets" class="realtime_forms">
                        <div class="row">
                            <div class="col-sm-12 text-sm-center">
                                <div class="form-group">
                                    <label class="radio-inline iradio m-l-18">
                                        <input type="radio" id="one_way" name="trip-type" value="option1" v-model="selected"> One Way
                                    </label>
                                    <label class="radio-inline iradio m-l-18">
                                        <input type="radio" id="round_trip" name="trip-type" value="option2"  v-model="selected"> Round trip
                                    </label>
                                    <label class="radio-inline iradio m-l-18">
                                        <input type="radio" id="multi_stops" name="trip-type" value="option3" v-model="selected" > Multi Stops
                                    </label>
                                </div>
                            </div>
                        </div>
                        <form id="single-stop" v-show="(selected=='option1' || selected=='option2')?true:false">
                            <div class="row m-t-10">
                                <div class="trip-type d-sm-none">
                                    <i class="fa-rotate-90 fa ti-exchange-vertical icon"></i>
                                </div>
                                <div class="col-sm-5 col-xs-6">
                                    <div class="form-group">
                                        <label for="origin" class="control-label">From</label>
                                        <input type="text" class="form-control" id="origin" placeholder="Origin City">
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="trip-type">
                                        <i class="fa-rotate-90 fa ti-exchange-vertical icon" v-if="(selected=='option2')?true:false"></i>
                                        <i class="fa ti-arrow-right icon" v-else="(selected=='option2')?true:false"></i>
                                    </div>
                                </div>
                                <div class="col-sm-5 col-xs-6">
                                    <div class="form-group">
                                        <label for="destination" class="control-label">To</label>
                                        <input type="text" class="form-control" id="destination" placeholder="Destination City">
                                    </div>
                                </div>
                            </div>
                            <div class="row m-t-10">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label for="departure_date">Departure</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control" id="departure_date" placeholder="Select Date">
                                                </div>
                                            </div>
                                            <br class="d-sm-none">
                                            <div class="col-sm-6">
                                                <label for="return_date">Return</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                                    </div>
                                                    <input class="form-control" id="return_date" placeholder="Select Date" :disabled="(selected=='option1')?true:false">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.input group -->
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <label for="class-type">Class</label>
                                                <select name="class" id="class-type" class="form-control">
                                                    <option value="">Economy</option>
                                                    <option value="">Business</option>
                                                    <option value="">First</option>
                                                    <option value="">Premium Economy</option>
                                                </select>
                                            </div>
                                            <br class="d-sm-none">
                                            <div class="col-sm-6">
                                                <label for="pref-Air" class="control-label">Preferred Airline
                                                </label>
                                                <input type="text" class="form-control" id="pref-Air" placeholder="Airline name">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-t-10">
                                <div class="col-sm-8 col-md-10 col-lg-8 mx-auto">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="adult">Adult</label>
                                                <input id="adult" type="text" value="1" readonly name="adult_count">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="child">Child</label>
                                                <input id="child" type="text" value="0" readonly name="child_count">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="infant">Infant</label>
                                                <input id="infant" type="text" value="0" readonly name="infant_count">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-t-10">
                                <div class="col-sm-8">
                                    <div class="form-group icheck-element">
                                        <label class="price-alert">
                                            <input type="checkbox" name="c1" id="c1" value=""> Alert me when price changes
                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <button class="btn btn-warning btn-block">Search Flights</button>
                                </div>
                            </div>
                        </form>
                        <!--multistop flight form-->
                        <form id="nonsingle-stop" v-show="(selected=='option1' || selected=='option2')?false:true">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="flight-count">
                                        <div class="row multi-flight-data">
                                            <div class="trip-type d-sm-none">
                                                <i class="fa ti-arrow-right icon"></i>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <div class="form-group">
                                                    <label class="control-label">From
                                                        <input type="text" class="form-control" placeholder="Origin City">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-1 hidden-xs">
                                                <div class="trip-type-multi">
                                                    <i class="fa ti-arrow-right icon"></i>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <div class="form-group">
                                                    <label class="control-label">To
                                                        <input type="text" class="form-control" placeholder="Destination City">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-sm-offset-0 col-xs-12">
                                                <label class="m-l-16" for="multistop_departure">Departure</label>
                                                <div class="input-group m-l-16">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control departure_date" id="multistop_departure" placeholder="Select Date">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row multi-flight-data">
                                            <div class="trip-type d-sm-none">
                                                <i class="fa ti-arrow-right icon"></i>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <div class="form-group">
                                                    <label class="control-label">From
                                                        <input type="text" class="form-control" placeholder="Origin City">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-1 hidden-xs">
                                                <div class="trip-type-multi">
                                                    <i class="fa ti-arrow-right icon"></i>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <div class="form-group">
                                                    <label class="control-label">To
                                                        <input type="text" class="form-control" placeholder="Destination City">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-sm-offset-0 col-xs-12">
                                                <label class="m-l-16" for="multistop_departure2">Departure</label>
                                                <div class="input-group m-l-16">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control departure_date" id="multistop_departure2" placeholder="Select Date">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row multi-flight-data" v-for="(input, index) in inputs">
                                            <div class="trip-type d-sm-none">
                                                <i class="fa ti-arrow-right icon"></i>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <div class="form-group">
                                                    <label class="control-label">From
                                                    </label>
                                                    <input type="text" class="form-control" placeholder="Origin City">
                                                </div>
                                            </div>
                                            <div class="col-sm-1 hidden-xs">
                                                <div class="trip-type-multi">
                                                    <i class="fa ti-arrow-right icon"></i>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <div class="form-group">
                                                    <label class="control-label">To
                                                    </label>
                                                    <input type="text" class="form-control" placeholder="Destination City">
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-sm-offset-0 col-11">
                                                <label class="m-l-16 mb-2">Departure</label>
                                                <div class="input-group m-l-16">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control departure_date" placeholder="Select Date">
                                                </div>
                                                <span class='' @click="deleteRow(index)"><i class='fa fa-fw ti-minus remove-flight'></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row m-t-10 mt-3">
                                        <div class="col-sm-6">
                                            <a class="btn btn-secondary text-white mr-3" id="add-flight" @click="addRow">
                                                <i class="fa fa-fw ti-plus"></i> Add flight
                                            </a>
                                            <label>Add Flight(Upto 6)</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="class-type1">Class</label>
                                            <select name="class" class="form-control" id="class-type1">
                                                <option value="">Economy</option>
                                                <option value="">Business</option>
                                                <option value="">First</option>
                                                <option value="">Premium Economy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row m-t-10">
                                        <div class="col-sm-8 col-md-10 col-lg-8">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="adult-multi">Adult</label>
                                                        <input id="adult-multi" type="text" value="1" readonly name="adult_count">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="child-multi">Child</label>
                                                        <input id="child-multi" type="text" value="0" readonly name="child_count">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="infant-multi">Infant</label>
                                                        <input id="infant-multi" type="text" value="0" readonly name="infant_count">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-md-2 col-lg-4">
                                            <label for="multi-air" class="control-label">Preferred Airline
                                            </label>
                                            <input type="text" class="form-control" id="multi-air" placeholder="Airline name">
                                        </div>
                                    </div>
                                    <div class="row m-t-10">
                                        <div class="col-sm-8">
                                            <div class="form-group icheck-element">
                                                <label class="price-alert">
                                                    <input type="checkbox" name="price-alert" value=""> Alert me when price changes
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <button class="btn btn-warning btn-block">Search Flights</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </card>
                </div>
            </div>
        <div class="row">
            <div class="col-md-8">
                <card title="<i class='fa fa-fw ti-money'></i> Fund Transfer">
                    <div class="row">
                        <div class="col-sm-12">
                            <form id="form-validation"  class="form-horizontal">
                                <div class="form-group">
                                    <label class="col-sm-6 control-label" for="skill">
                                        Select Account :
                                    </label>
                                    <div class="col-12">
                                        <select id="skill" name="skill" class="form-control">
                                            <option value="" disabled="" selected="">
                                                Select account
                                            </option>
                                            <option value="234">0000432187653456</option>
                                            <option value="345">0000891236543567</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="number">
                                        Amount :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="number" name="number" class="form-control" placeholder="Enter amount" onkeypress="return isNumber(event, this)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="val-username">
                                        Sender name :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="val-username" name="firstName" class="form-control" placeholder="Account holder name">
                                    </div>
                                </div>
                                <div class="fund_text mt-2 ml-3 mb-2">Information of the account you want to transfer fund</div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="holder-name">
                                        Account Holder name :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="holder-name" name="holderName" class="form-control" placeholder="Account holder name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="bank-name">
                                        Name of the Bank :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="bank-name" name="bankName" class="form-control" placeholder="Bank name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="swift-code">
                                        SWIFT Code :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="swift-code" name="bankName" class="form-control" placeholder="SWIFT code">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="acc-number">
                                        Account Number/BAN :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="acc-number" name="number" class="form-control" placeholder="Account Number" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-5 control-label" for="purpose">
                                        Purpose (optional) :
                                    </label>
                                    <div class="col-12">
                                        <input type="text" id="purpose" name="purpose" class="form-control" placeholder="optional">
                                    </div>
                                </div>
                                <div class="form-group form-actions">
                                    <div class="col-12 col-sm-offset-5">
                                        <button type="submit" class="btn btn-effect-ripple btn-primary">Transfer</button>
                                        <button type="reset" class="btn btn-effect-ripple btn-secondary reset_btn">Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </card>
            </div>
            <div class="col-md-4">
                <card title="<i class='fa fa-fw ti-home'></i> Book your Stay">
                    <form>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="control-label" for="stay">Name</label>
                                    <input type="text" class="form-control" id="stay" placeholder="City, Area or Hotel">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="checkin_date">Check-In</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                        </div>
                                        <input type="text" class="form-control" id="checkin_date" placeholder="Select Check-in Date">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="checkout_date">Check-Out</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white"><i class="fa fa-fw ti-calendar"></i></span>
                                        </div>
                                        <input type="text" class="form-control" id="checkout_date" placeholder="Select Check-out Date">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="adult-number">Adult</label>
                                    <select name="count" id="adult-number" class="form-control">
                                        <option value="0">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                        <option value="4">5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="child-number">Child</label>
                                    <select name="count" id="child-number" class="form-control">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group icheck-element">
                                    <label class="guest-rooms">
                                        <input type="checkbox" name="price-alert" value=""> Guest Rooms
                                    </label>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <button class="btn btn-warning btn-block">Search Hotels</button>
                            </div>
                        </div>
                    </form>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    const moment = require("moment");
    import card from "./card/card.vue"
    import touchspin from "../../vendors/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js";
    import datetimepicker from "../../vendors/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js";
    export default {
        name: "blank",
        components:{
            card
        },
        data(){
            return{
                get:'',
                selected:'option3',
                inputs:[],

            }
        },
        methods:{
            addRow(){
                if(this.inputs.length<4){
                    this.inputs.push({
                        one: '',
                        two: ''
                    })
                   setTimeout(()=>{
                       $(".departure_date").datetimepicker({
                           format: 'DD/MM/YYYY'
                       });
                   })

                }
            },
            deleteRow(index) {
                this.inputs.splice(index,1)
            }
        },
        mounted: function() {
            "use strict"

            $("#departure_date,#return_date,.departure_date,#checkin_date,#checkout_date").datetimepicker({
                format: 'DD/MM/YYYY'
            });

            // touchspin initialisation
            $("input[name='adult_count']").TouchSpin({
                initval: 1,
                min: 1,
                max: 9,
                mousewheel: false
            });
            $("input[name='child_count']").TouchSpin({
                initval: 0,
                min: 0,
                max: 9,
                mousewheel: false
            });
            $("input[name='infant_count']").TouchSpin({
                initval: 0,
                min: 0,
                max: 4,
                mousewheel: false
            });
        },
        destroyed: function() {

        }
    }
</script>
<style src="../../vendors/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"></style>
<style src="../../vendors/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"></style>
<style src="../../assets/css/custom_css/realtime_form.css"></style>