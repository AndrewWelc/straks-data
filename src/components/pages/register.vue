<template>
    <div class="container-fluid register">
        <div class="container">
            <div class="row">
                <div class="col-lg-4  col-10 col-sm-8 m-auto login-form">

                    <h2 class="text-center logo_h2">
                        <img src="../../assets/img/pages/clear_black.png" alt="Logo">
                    </h2>

                    <div class="card-body">
                        <vue-form :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="first" class="sr-only"> First Name</label>
                                            <input v-model="model.firstname"  id="first" name="firstname" type="text" required autofocus placeholder="First Name" class="form-control" />
                                            <field-messages name="firstname" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Firstname is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="last" class="sr-only"> Last Name</label>
                                            <input v-model="model.lastname" id="last" name="lastname" type="text" required autofocus placeholder="Last Name" class="form-control" />
                                            <field-messages name="lastname" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Lastname is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="email" class="sr-only"> E-mail</label>
                                            <input v-model="model.email" id="email"name="email" type="email" required placeholder="E-mail" class="form-control" />
                                            <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Email is a required field</div>
                                                <div slot="email">Email is not valid</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="password" class="sr-only"> Password</label>
                                            <input v-model="model.password" id="password" name="password" type="password" required placeholder="Password" class="form-control" minlength="6" maxlength="10" />
                                            <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Password is required</div>
                                                <div slot="minlength">Password should be atleast 6 characters long</div>
                                                <div slot="maxlength">Password should be atmost 10 characters long</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="confirm_password" class="sr-only"> Confirm Password</label>
                                            <input v-model="model.repeatPassword" name="repeatpassword" id="confirm_password" type="password" required placeholder="Confirm Password" class="form-control" :sameas="model.password">
                                            <field-messages name="repeatpassword" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Password confirmatoin is required</div>
                                                <div slot="sameas">Password and Confirm password should match</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group checkbox">
                                        <label for="terms">
                                            <input type="checkbox" name="terms" id="terms">&nbsp; I accept the <a href="javascript:void(0)">terms &amp; Conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input type="submit" value="Sign Up" class="btn btn-primary btn-block"/>
                                    </div>
                                    <span class="sign-in">Already a member?  <router-link to="/login" exact>Sign In</router-link></span>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="row text-center social">
                        <div class="col-xl-12">
                            <p class="alter">Sign Up with</p>
                        </div>
                        <div class="row m-auto">
                            <div class="col-4">
                                <a href="javascript:void(0)" class="btn btn-lg btn-facebook">
                                    <i class="ti-facebook"></i>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:void(0)" class="btn btn-lg btn-twitter">
                                    <i class="ti-twitter-alt"></i>
                                </a>
                            </div>
                            <div class="col-4">
                                <a href="javascript:void(0)" class="btn btn-lg btn-google">
                                    <i class="ti-google"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueForm from "vue-form";
    import options from "../../validations/validations.js";
    Vue.use(VueForm, options);
export default {
    name: "register",
    data() {
        return {
            formstate: {},
            model: {
                firstname: "",
                lastname:'',
                email: "",
                password: '',
                repeatPassword: '',
                terms: false
            }
        }
    },
    methods: {
        onSubmit: function() {
            if (this.formstate.$invalid) {
                return;
            } else {
                this.$router.push("/");
            }
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
.register {
    padding-top: 6.5%;
    width: 100%;
    height:100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
    label[for="terms"]{
        width: 100%;
    }
</style>
