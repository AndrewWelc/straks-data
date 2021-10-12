<template>
<div>
    <div class="row" id="complex-form">
        <!--5th tab bank application starting-->
        <div class="col-lg-12">
            <form class="grid-form">
                <div class="text-center">
                    <img src="../../assets/img/pages/complexform1.png" alt="bank name" width="200">
                    <h3>ACCOUNT OPENING FORM</h3>
                </div>
                <fieldset>
                    <legend>Please open an account at</legend>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>Branch Name</label>
                            <input type="text" autofocus>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Personal Details (Sole/First Accountholder/Minor)</legend>
                    <div data-row-span="4">
                        <div data-field-span="1">
                            <label>Title</label>
                                <b-form-radio checked="false" name="prefix">&nbsp;Mr.</b-form-radio>
                            <b-form-radio checked="false" name="prefix">&nbsp;Mrs.</b-form-radio>
                            <b-form-radio checked="false" name="prefix">&nbsp;Ms.</b-form-radio>
                        </div>
                        <div data-field-span="3">
                            <label>Full Name</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="2">
                        <div data-field-span="1" class="complex-dob">
                            <label>Date of birth</label>
                            <flat-pickr v-model="date" class="form-control"></flat-pickr>
                        </div>
                        <div data-field-span="1">
                            <label class="typo__label mb-0"><h6 class="mb-1">Nationality</h6></label>
                            <multiselect v-model="value" :options="options" placeholder="Select one" label="name" track-by="name"></multiselect>
                        </div>
                    </div>
                    <div data-row-span="4">
                        <div data-field-span="2" data-field-error="Please enter a valid email address">
                            <label>E-mail</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Mobile No.</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Existing Bank Account No. (if any)</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="2">
                        <div data-field-span="1">
                            <label>In case of a minor please provide details (Name of parent and natural
                                guardian)
                            </label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Name of father/spouse</label>
                            <input type="text">
                        </div>
                    </div>
                    <br>
                    <fieldset>
                        <legend>Residential address</legend>
                        <div data-row-span="2">
                            <div data-field-span="1">
                                <label>Flat no. and bldg. name</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>Road no./name</label>
                                <input type="text">
                            </div>
                        </div>
                        <div data-row-span="4">
                            <div data-field-span="3">
                                <label>Area and landmark</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>City</label>
                                <input type="text">
                            </div>
                        </div>
                        <div data-row-span="4">
                            <div data-field-span="1">
                                <label>Telephone Residence</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>Office</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>Fax</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>Pin code</label>
                                <input type="text">
                            </div>
                        </div>
                    </fieldset>
                </fieldset>
                <br>
                <fieldset>
                    <legend>Mailing Address (If different from the First Accountholder's address)
                    </legend>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>Company name and department/ Flat no. and bldg. name</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="4">
                        <div data-field-span="1">
                            <label>Road no./name</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Area and landmark</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>City</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Pin Code</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="4">
                        <div data-field-span="1">
                            <label>Telephone Residence</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Office</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Fax</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Mobile No.</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>E-mail</label>
                            <input type="text">
                        </div>
                    </div>
                </fieldset>
                <br>
                <br>
                <fieldset>
                    <legend>Details of Introduction by Existing Customer (If applicable)</legend>
                    <div data-row-span="2">
                        <div data-field-span="1">
                            <label>Customer Name</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Account No.</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>Introducer's signature</label>
                            <textarea class="resize_vertical"></textarea>
                        </div>
                    </div>
                </fieldset>
                <br>
                <br>
                <fieldset>
                    <legend>Account Details</legend>
                    <div data-row-span="2">
                        <div data-field-span="1">
                            <label>Choice of account</label>
                            <b-form-radio name="account-type" checked="false">Savings</b-form-radio>
                            <b-form-radio name="account-type" checked="false">Current</b-form-radio>&nbsp;
                            <b-form-radio name="account-type" checked="false">Fixed Deposit</b-form-radio>
                        </div>
                        <div data-field-span="1">
                            <label>Mode of funding</label>
                            <b-form-radio name="transfer-type" checked="false">Cash</b-form-radio>
                            <b-form-radio name="transfer-type" checked="false">Cheque</b-form-radio>&nbsp;
                            <b-form-radio name="transfer-type" checked="false">NEFT</b-form-radio>
                        </div>
                    </div>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>Amount</label>
                            <input type="text">
                        </div>
                    </div>
                    <br>
                    <fieldset>
                        <legend>Details of Fixed Deposit</legend>
                        <div data-row-span="2">
                            <div data-field-span="1">
                                <label>Types of deposit</label>
                                <b-form-radio name="deposit-type" checked="false">Ordinary</b-form-radio>
                                <b-form-radio name="deposit-type" checked="false">Cumulative</b-form-radio>
                            </div>
                            <div data-field-span="1">
                                <label>Mode of funding</label>
                                <b-form-radio name="fund-type" checked="false">Cash</b-form-radio>
                                <b-form-radio name="fund-type" checked="false">Cheque</b-form-radio>
                                <b-form-radio name="fund-type" checked="false">NEFT</b-form-radio>
                            </div>
                        </div>
                        <div data-row-span="4">
                            <div data-field-span="2">
                                <label>Amount</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>No. of deposits</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>Individual Deposit Amount</label>
                                <input type="text">
                            </div>
                        </div>
                    </fieldset>
                </fieldset>
                <br>
                <br>
                <fieldset>
                    <legend>Personal Details
                        <small>(Occupation)</small>
                    </legend>
                    <div data-row-span="12">
                        <div data-field-span="2">
                           <b-form-checkbox>Non-executive</b-form-checkbox>

                        </div>
                        <div data-field-span="2">
                            <b-form-checkbox>Non-executive</b-form-checkbox>

                        </div>
                        <div data-field-span="2">
                            <b-form-checkbox>Housewife</b-form-checkbox>
                        </div>
                        <div data-field-span="2">
                            <b-form-checkbox> Student</b-form-checkbox>
                        </div>
                        <div data-field-span="2">
                            <b-form-checkbox> Other</b-form-checkbox>
                        </div>
                        <div data-field-span="2">
                            <b-form-checkbox>Unemployed</b-form-checkbox>
                        </div>
                    </div>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>Job Title</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="2">
                        <div data-field-span="1">
                            <label>Department</label>
                            <input type="text">
                        </div>
                        <div data-field-span="1">
                            <label>Nature of business</label>
                            <input type="text">
                        </div>
                    </div>
                    <div data-row-span="2">
                        <div data-field-span="1">
                            <label>Education</label>
                            <b-form-radio name="education-type" checked="false">Under Graduate</b-form-radio>
                            <b-form-radio name="education-type" checked="false">Graduate</b-form-radio>
                            <b-form-radio name="education-type" checked="false">Others</b-form-radio>
                        </div>
                        <div data-field-span="1">
                            <label>Monthly Income</label>
                            <b-form-radio name="income" checked="false">Zero Income</b-form-radio>
                            <b-form-radio name="income" checked="false">Less than $10,000</b-form-radio>
                            <b-form-radio name="income" checked="false"> $10,000+</b-form-radio>

                        </div>
                    </div>
                    <div data-row-span="2">
                        <div data-field-span="1">
                            <label>Maritial Status</label>
                            <b-form-radio name="marital-status" checked="false">Married</b-form-radio>
                            <b-form-radio name="marital-status" checked="false">Single</b-form-radio>
                        </div>
                        <div data-field-span="1">
                            <label>Spouse name</label>
                            <input type="text">
                        </div>
                    </div>
                    <br>
                    <fieldset>
                        <legend>Other existing bank accounts, if any</legend>
                        <div data-row-span="2">
                            <div data-field-span="1">
                                <label>Name of the Bank / branch</label>
                                <input type="text">
                            </div>
                            <div data-field-span="1">
                                <label>Name of the Bank / branch</label>
                                <input type="text">
                            </div>
                        </div>
                    </fieldset>
                </fieldset>
                <br>
                <br>
                <fieldset>
                    <legend>Reason for Account opening</legend>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label>Please specify</label>
                            <input type="text">
                        </div>
                    </div>
                </fieldset>
                <br>
                <br>
                <fieldset>
                    <legend>Terms And Conditions</legend>
                    <div data-row-span="1">
                        <div data-field-span="1">
                            <label></label>
                            <label>
                                <input type="checkbox"> I/We confirm having read and understood the account
                                rules of The Banking Corporation Limited ('the Bank'), and hereby agree to be
                                bound by the terms and conditions and amendments governing the account(s) issued
                                by the Bank from time-to-time.</label>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
    <!--5 th tab bank application ending  -->
</div>
</template>
<script>
import gridform from "../../vendors/gridforms/gridforms/gridforms.js"
import Multiselect from 'vue-multiselect'
import Vue from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
export default {
    name: "complex_forms",
    components: {
        Multiselect,
        flatPickr
    },
    data () {
        return {
            date: new Date(),
            fromPage: null,
            toPage: null,
            value: { name: 'Country', language: 'lang' },
            options: [
                { name: 'India', language: 'India' },
                { name: 'America', language: 'America' },
                { name: 'Germany', language: 'Germany' },
                { name: 'Japan', language: 'Japan' },
                { name: 'England', language: 'England' }
            ]
        }
    },
    mounted: function() {
    },
    methods: {
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/gridforms/gridforms/gridforms.css" scoped></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="../../assets/css/complex_forms.css"></style>
