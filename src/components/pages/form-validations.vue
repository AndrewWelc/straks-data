<template>
    <div>
        <!--main content-->
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <card title="<i class='fa fa-fw ti-star'></i> Basic Form Validation">
                    <form @submit.prevent="validateForm('form-1')" class="columns column is-multiline is-12" data-vv-scope="form-1">
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_user">User Name
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <input name="username" id="basic_user" v-model="username" v-validate="'required|alpha'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.username') }" type="text" placeholder="User Name">
                                <i v-show="errors.has('form-1.username')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.username')" class="help is-danger text-danger">{{ errors.first('form-1.username') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_email">Email
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <input name="email" v-validate="'required|email'" id="basic_email" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.email') }" type="text" placeholder="Email">
                                <i v-show="errors.has('form-1.email')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.email')" class="help is-danger text-danger">{{ errors.first('form-1.email') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_pass">Password
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <input name="password" v-validate="'required|min:6'" id="basic_pass" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.password') }" type="password" placeholder="Password">
                                <i v-show="errors.has('form-1.password')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.password')" class="help is-danger text-danger">{{ errors.first('form-1.password') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_confimpass">Confirm Password
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <input name="confirmpassword" id="basic_confimpass" v-validate="'required|min:6|confirmed:password'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.confirmpassword') }" type="password" placeholder="Confirm Password">
                                <i v-show="errors.has('form-1.confirmpassword')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.confirmpassword')" class="help is-danger text-danger">{{ errors.first('form-1.confirmpassword') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_message">Message
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <textarea name="message" v-validate="'required|min:2'" id="basic_message" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.message') }" type="password" placeholder="Message"></textarea>
                                <i v-show="errors.has('form-1.message')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.message')" class="help is-danger text-danger">{{ errors.first('form-1.message') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_skills">Best Skill
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <select id="basic_skills" name="skill" class="form-control" v-validate="'required|in:html,css,javascript,php,mysql'" :class="{'input': true, 'is-danger': errors.has('form-1.skill') }">
                                    <option value="">
                                        Please select
                                    </option>
                                    <option value="html">HTML</option>
                                    <option value="css">CSS</option>
                                    <option value="javascript">Javascript</option>
                                    <option value="php">PHP</option>
                                    <option value="mysql">MySQL</option>
                                </select>
                                <i v-show="errors.has('form-1.skill')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.skill')" class="help is-danger text-danger">{{ errors.first('form-1.skill') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_web">Website
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <input name="website" id="basic_web" v-validate="'required|url:require_protocol?'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.website') }" type="text" placeholder="http://example.com">
                                <i v-show="errors.has('form-1.website')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.website')" class="help is-danger text-danger">{{ errors.first('form-1.website') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" for="basic_mobile">Phone
                                <span class="text-danger">*</span>
                            </label>
                            <p class="control has-icon has-icon-right col-sm-6">
                                <input name="phone" id="basic_mobile" v-validate="'required|numeric|max:10|min:10'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.phone') }" type="text" placeholder="Enter your phone number">
                                <i v-show="errors.has('form-1.phone')" class="fa fa-warning text-danger"></i>
                                <span v-show="errors.has('form-1.phone')" class="help is-danger text-danger">{{ errors.first('form-1.phone') }}</span>
                            </p>
                        </div>
                        <div class="column is-12 row">
                            <label class="label col-sm-4" >
                                <legend class="label" :class="{ 'error': errors.has('form-1.gender') }">Gender
                                    <span class="text-danger">*</span>
                                </legend>
                            </label>
                            <div class="col-sm-6">
                                <p class="control">
                                    <label class="radio">
                                        <input name="gender" v-validate="'required|in:male,female,others'" value="male" type="radio">
                                        Male
                                    </label>
                                    <br/>
                                    <label class="radio">
                                        <input name="gender" value="female" type="radio">
                                        Female
                                    </label>
                                    <br/>
                                    <label class="radio">
                                        <input name="gender" value="others" type="radio">
                                        Others
                                    </label>
                                </p>
                                <span class="help is-danger text-danger" v-show="errors.has('form-1.gender')    ">{{ errors.first('form-1.gender') }}</span>
                            </div>
                            <div class="column is-6">

                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-8 ml-auto">
                                <b-form-checkbox>
                                    &nbsp;&nbsp;I agree to
                                    <a href="#modal-terms" data-toggle="modal">
                                        Terms &amp; Conditions
                                    </a>
                                </b-form-checkbox>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="control text-center">
                                <button class="button btn btn-primary" type="submit" name="button">Sign up</button>
                                <button class="button btn btn-secondary" type="reset" name="button" @click="errors.clear('form-1')">Reset</button>
                            </div>
                        </div>
                    </form>
                </card>
                <card title="<i class='fa fa-fw ti-folder'></i> Validations In Modal">
                    <div class="row">
                        <!-- Modal -->
                        <template >
                            <b-button @click="showModal" class="mx-auto btn-lg  btn-info">
                                Click to open form in modal
                            </b-button>
                            <b-modal ref="myModalRef" hide-footer title="Form Modal">
                                <div class="d-block ">
                                    <form id="form-validation3" @submit.prevent="validateForm('form-2')" class="columns column is-multiline is-12" data-vv-scope="form-2" >
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-6">
                                                <div class="form-group">
                                                    <p class="control has-icon has-icon-right">
                                                        <input name="firstname" v-validate="'required|alpha'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.firstname') }" type="text" placeholder="First Name">
                                                        <i v-show="errors.has('form-2.firstname')" class="fa fa-warning text-danger"></i>
                                                        <span v-show="errors.has('form-2.firstname')" class="help is-danger text-danger">{{ errors.first('form-2.firstname') }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-6">
                                                <div class="form-group">
                                                    <p class="control has-icon has-icon-right">
                                                        <input name="lastname" v-validate="'required|alpha'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.lastname') }" type="text" placeholder="Last Name">
                                                        <i v-show="errors.has('form-2.lastname')" class="fa fa-warning text-danger"></i>
                                                        <span v-show="errors.has('form-2.lastname')" class="help is-danger text-danger">{{ errors.first('form-2.lastname') }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <p class="control has-icon has-icon-right">
                                                        <input name="displayname" v-validate="'required|alpha'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.displayname') }" type="text" placeholder="Display Name">
                                                        <i v-show="errors.has('form-2.displayname')" class="fa fa-warning text-danger"></i>
                                                        <span v-show="errors.has('form-2.displayname')" class="help is-danger text-danger">{{ errors.first('form-2.displayname') }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <p class="control has-icon has-icon-right">
                                                        <input name="email" v-validate="'required|email'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.email') }" type="text" placeholder="Email">
                                                        <i v-show="errors.has('form-2.email')" class="fa fa-warning text-danger"></i>
                                                        <span v-show="errors.has('form-2.email')" class="help is-danger text-danger">{{ errors.first('form-2.email') }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-6">
                                                <div class="form-group">
                                                    <p class="control has-icon has-icon-right">
                                                        <input name="passwordmodal" v-validate="'required|min:6'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.passwordmodal') }" type="password" placeholder="Password">
                                                        <i v-show="errors.has('form-2.passwordmodal')" class="fa fa-warning text-danger"></i>
                                                        <span v-show="errors.has('form-2.passwordmodal')" class="help is-danger text-danger">{{ errors.first('form-2.passwordmodal') }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-6">
                                                <div class="form-group">
                                                    <p class="control has-icon has-icon-right">
                                                        <input name="confirmpasswordmodal" v-validate="'required|min:6|confirmed:passwordmodal'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-2.confirmpasswordmodal') }" type="password" placeholder="Confirm Password">
                                                        <i v-show="errors.has('form-2.confirmpasswordmodal')" class="fa fa-warning text-danger"></i>
                                                        <span v-show="errors.has('form-2.confirmpasswordmodal')" class="help is-danger text-danger">{{ errors.first('form-2.confirmpasswordmodal') }}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <div class="col-12 text-left">
                                                        <label class="padding7" >
                                                            <b-form-checkbox>&nbsp;&nbsp;I agree</b-form-checkbox>
                                                        </label>
                                                    </div>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <p class="margin-top">
                                                    By clicking on the
                                                    <strong class="label label-primary">Register</strong>
                                                    , you agree the following
                                                    <a href="#">Terms and Conditions</a> liability
                                                    as set out in this site, including our Cookie
                                                    Use.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row marginTop">
                                            <div class="col-6 col-md-6">
                                                <input type="submit" id="btncheck" value="Register"
                                                       class="btn btn-primary btn-block btn-md btn-responsive"
                                                       tabindex="7">
                                            </div>
                                            <div class="col-6 col-md-6">
                                                <a class="btn btn-success text_white btn-block text-white btn-md btn-responsive">Sign
                                                    In</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </b-modal>
                        </template>
                        <!-- /.modal -->

                    </div>
                </card>
            </div>
            <div class="col-md-12 col-lg-6">
                <card title="<i class='fa fa-fw ti-key'></i> Password Strength">
                    <form action="#" method="post" id="passwordForm">
                        <!-- CSRF Token -->
                        <password v-model="password" name="pswdstrength" id="password"></password>
                        <password v-model="confirmpassword" name="cpswdstrength" id="confirm_passowrd" placeholder="Confirm password"></password>
                        <div>
                            <div class="col-sm-12 padding">
                                        <span style="color:#2ECC71;">
                                        <i class="fa fa-check green2" id="pwmatch" :class="{green: password==confirmpassword}"></i></span>
                                Passwords Match
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <a href="#" class="col-12 btn btn-primary btn-load btn-md"
                               data-loading-text="Changing Password...">Change Password</a>
                        </div>
                    </form>
                </card>
                <card title="<i class='fa fa-fw ti-credit-card'></i> Payment Gateway">
                    <div class="card-wrapper"></div>
                    <vue-form :state="formstate" @submit.prevent="onSubmit" id="form">
                        <div class="row">
                            <div class="col-sm-12 mt-3 ">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.cardnumber" name="cardnumber" id="cardnumber" type="text" required autofocus placeholder="Card number" class="form-control" minlength="19" maxlength="22"/>
                                        <field-messages name="cardnumber" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Card number is a required field</div>
                                            <div slot="minlength">Card number must be 16 to 18 digits</div>
                                            <div slot="maxlength">Cardnumber must be 16 to 18 digits</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.cardexpiry" name="cardexpiry" id="cardexpiry" type="text" required placeholder="Expiry" class="form-control" />
                                        <field-messages name="cardexpiry" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Expiry date is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.cardcvc" name="cardcvc" id="cardcvc" type="text" required placeholder="CVV" class="form-control" />
                                        <field-messages name="cardcvc" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">CVV is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.cardname" name="cardname" id="cardname" type="text" required placeholder="Card holder name" class="form-control"  />
                                        <field-messages name="cardname" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Card name is required</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <input type="submit" value="Save and pay" class="btn btn-warning btn-block mb-3"/>
                            </div>
                        </div>
                    </vue-form>
                </card>
                <!--image upload -->
                <div class="row">
                    <div class="col-md-12">
                        <card title="<i class='fa fa-fw ti-ink-pen'></i> Bootstrap Input MaxLength">
                            <!--max length starts-->
                            <div class="form-group">
                                <label for="placement" class="control-label">
                                    Custom Position
                                </label>
                                <input type="text" class="form-control" maxlength="25" name="placement"
                                       id="placement"/>
                            </div>
                            <div class="form-group">
                                <label for="moreoptions" class="control-label">Options</label>
                                <input type="text" class="form-control experment" maxlength="25"
                                       name="moreoptions" id="moreoptions"/>
                            </div>
                            <div class="form-group">
                                <label for="alloptions" class="control-label">
                                    All the options
                                </label>
                                <input type="text" class="form-control experment" maxlength="25"
                                       name="alloptions"
                                       id="alloptions"/>
                            </div>
                            <div class="form-group">
                                <label for="textarea" class="control-label">Text Area</label>
                                <textarea id="textarea" class="form-control resize_vertical"
                                          maxlength="225" rows="4"
                                          placeholder="This textarea has a limit of 225 chars."></textarea>
                            </div>
                            <!--min length ends-->
                        </card>
                    </div>
                </div>
                <!-- col-md-6 -->
            </div>
        </div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);
    import Card from 'card'
    import VueForm from "vue-form";
    import options from "../../validations/validations.js";
    Vue.use(VueForm, options);
    import Password from 'vue-password-strength-meter'
import sweetalert from "../../vendors/sweetalert2/dist/sweetalert2.min.js"
import validator from "../../vendors/bootstrapvalidator/dist/js/bootstrapValidator.min.js"
import max_length from "../../vendors/bootstrap-maxlength/src/bootstrap-maxlength.js"
export default {
    data(){
        return{
            username:'',
            formstate: {},
            model: {
                number: "",
                password: ""

            },
            password: null,
            confirmpassword:null
        }
    },

    components:{
        Password,
        card
    },
    methods: {
        onSubmit() {
            if (this.formstate.$invalid) {
                swal({
                    type: "error",
                    title: 'Error',
                    html: 'Please Fill The Mandatory Fields'
                });
                return;
            } else {
                swal({
                    type: "success",
                    title: "Transaction Successful",
                    html: 'This card is saved for better Payment experience'
                });
            }
        },
        showModal() {
            this.$refs.myModalRef.show();
        },
        hideModal() {
            this.$refs.myModalRef.hide();
        },
            validateForm(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        alert('Form Submitted!');
                    }
                });
            },
    },
    name: "blank",
    mounted: function() {

        "use strict";
// =========== payment gateway start

        var card = new Card({
            // a selector or DOM element for the form where users will
            // be entering their information
            form: '#form', // *required*
            // a selector or DOM element for the container
            // where you want the card to appear
            container: '.card-wrapper', // *required*

            formSelectors: {
                numberInput: 'input[name="cardnumber"]', // optional — default input[name="number"]
                expiryInput: 'input[name="cardexpiry"]', // optional — default input[name="expiry"]
                cvcInput: 'input[name="cardcvc"]', // optional — default input[name="cvc"]
                nameInput: 'input[name="cardname"]' // optional - defaults input[name="name"]
            },

            width: 300, // optional — default 350px
            formatting: true, // optional - default true

            // Strings for translation - optional
            messages: {
                validDate: 'valid\ndate', // optional - default 'valid\nthru'
                monthYear: 'mm/yyyy', // optional - default 'month/year'
            },

            // Default placeholders for rendered fields - optional
            placeholders: {
                number: '•••• •••• •••• ••••',
                name: 'Full Name',
                expiry: '••/••',
                cvc: '•••'
            },
//
//                masks: {
//                    cardNumber: '•' // optional - mask card number
//                },

            // if true, will log helpful messages for setting up Card
            debug: false // optional - default false
        });

// =========== payment gateway end


        $(document).ready(function() {

            $('input#defaultconfig').maxlength();

            $('input#thresholdconfig').maxlength({
                threshold: 20

            });
            $("#placement").maxlength({
                alwaysShow: true,
                placement: 'top',
                warningClass: "label bg-success text-white",
                limitReachedClass: "label bg-danger text-white"
            });
            $('input#moreoptions').maxlength({
                alwaysShow: true,
                warningClass: "label bg-success text-white",
                limitReachedClass: "label bg-danger text-white"
            });

            $('input#alloptions').maxlength({
                alwaysShow: true,
                warningClass: "label bg-success text-white",
                limitReachedClass: "label bg-danger text-white",
                separator: ' chars out of ',
                preText: 'You typed ',
                postText: ' chars.',
                validate: true
            });


            $('#textarea').maxlength({
                alwaysShow: true,
                appendToParent: true,
                warningClass: "label bg-success text-white",
                limitReachedClass: "label bg-danger text-white  "
            });
        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/passtrength/passtrength.css"></style>
<style src="../../vendors/sweetalert2/dist/sweetalert2.min.css"></style>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style>
    .btn:active{
        color: #fff !important;
    }
    .jp-card{
        min-width: 100% !important;
        width: 100% !important;
    }
    .input.is-danger{
        border: 1px solid #ff6666;
    }
    .label legend{
        font-size: 1rem;
    }
    .Password .Password__strength-meter{
        margin-top: 0;
    }
    .Password .Password__strength-meter:before,.Password .Password__strength-meter:after{
        content: initial;
    }
    #passwordForm .Password__badge{
        line-height: 0.7;
        padding: 3px 10px;
    }
    @media(max-width: 320px){

        .card-body .jp-card-container{
            transform: scale(1.05) !important;
        }
    }
    .fa-check.green2{
        color: red;
    }
    .fa-check.green{
        color: #0F9E5E;
    }

</style>
