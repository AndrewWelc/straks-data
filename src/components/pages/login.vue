<template>
    <div class="container-fluid login">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-10 col-sm-8 mx-auto login-form">

                    <h2 class="text-center logo_h2">
                        <img src="../../assets/img/pages/clear_black.png" alt="Logo">
                    </h2>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <vue-form :state="formstate" @submit.prevent="onSubmit">
                                    <div class="row">
                                        <div class="col-sm-12 mt-3 ">
                                            <div class="form-group">
                                                <validate tag="div">
                                                    <input v-model="model.email" name="email" id="email" type="email" required autofocus placeholder="E-mail" class="form-control" />
                                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                        <div slot="required">Email is a required field</div>
                                                        <div slot="email">Email is not valid</div>
                                                    </field-messages>
                                                </validate>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <validate tag="div">
                                                    <input v-model="model.password" name="password" id="password" type="password" required placeholder="Password" class="form-control" minlength="6" maxlength="10" />
                                                    <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                                        <div slot="required">Password is required</div>
                                                        <div slot="minlength">Password should be atleast 6 characters long</div>
                                                        <div slot="maxlength">Password should be atmost 10 characters long</div>
                                                    </field-messages>
                                                </validate>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group checkbox">
                                                <label for="remember">
                                                    <input type="checkbox" name="remember" id="remember">&nbsp; Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <input type="submit" value="Sign In" class="btn btn-primary btn-block mb-3"/>
                                        <div class="col-sm-6">
                                            <router-link to="/forgot_password" class="float-left" exact >Forgot Password ? </router-link>
                                        </div>
                                        <div class="col-sm-6">
                                        <span class="float-right sign-up">New ?  <router-link to="/register" exact>Sign Up</router-link></span>
                                        </div>
                                    </div>
                                </vue-form>
                            </div>
                        </div>
                        <div class="row text-center social">
                            <div class="col-12">
                                <p class="alter">Sign in with</p>
                            </div>
                            <div class="row m-auto">

                                <div class="col-4">
                                    <a href="#" class="btn btn-lg btn-facebook">
                                        <i class="ti-facebook"></i>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="#" class="btn btn-lg btn-twitter">
                                        <i class="ti-twitter-alt"></i>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="#" class="btn btn-lg btn-google">
                                        <i class="ti-google"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue"
import VueForm from "vue-form";
import options from "../../validations/validations.js";
Vue.use(VueForm, options);
export default {
    name: "login",
    data() {
        return {
            formstate: {},
            model: {
                email: "",
                password: ""

            }
        }
    },
    methods: {
        onSubmit() {
            if (this.formstate.$invalid) {
                return;
            } else {
                this.$router.push("/");
            }
        }
    },
    mounted: function() {
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/bootstrapvalidator/dist/css/bootstrapValidator.min.css"></style>
<style src="../../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
.login {
    padding-top: 6.5%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
</style>
