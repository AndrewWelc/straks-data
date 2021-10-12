<template>
    <div class="container-fluid reset">
        <div class="row">
            <div class="col-lg-4 col-sm-8 col-10 m-auto login-form">
                <h2 class="text-center">
                    <img src="../../assets/img/pages/clear_black.png" alt="Logo">
                </h2>
                <div class="row">
                    <div class="col-xl-12">
                        <h4 class="text-center marginTB">Reset Password</h4>
                    </div>
                    <div class="col-xl-12">
                        <form id="authentication"  class="reset_validator" @submit.prevent="validateForm('form-1')" data-vv-scope="form-1">
                            <div class="column is-12 row">
                                <p class="control has-icon has-icon-right col-sm-12">
                                    <input name="password" v-validate="'required|min:6'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.password') }" type="password" placeholder="Password">
                                    <i v-show="errors.has('form-1.password')" class="fa fa-warning text-danger"></i>
                                    <span v-show="errors.has('form-1.password')" class="help is-danger text-danger">{{ errors.first('form-1.password') }}</span>
                                </p>
                            </div>
                            <div class="column is-12 row">
                                <p class="control has-icon has-icon-right col-sm-12">
                                    <input name="confirmpassword" v-validate="'required|min:6|confirmed:password'" class="form-control" :class="{'input': true, 'is-danger': errors.has('form-1.confirmpassword') }" type="password" placeholder="Confirm Password">
                                    <i v-show="errors.has('form-1.confirmpassword')" class="fa fa-warning text-danger"></i>
                                    <span v-show="errors.has('form-1.confirmpassword')" class="help is-danger text-danger">{{ errors.first('form-1.confirmpassword') }}</span>
                                </p>
                            </div>
                            <div class="col-12 text-center">
                                <div class="form-group">
                                    <input type="submit" value="Reset Password" class="btn btn-primary center-block"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    Vue.use(VeeValidate);
export default {
    name: "reset_password",
    mounted: function() {

    },
    methods:{
        validateForm(scope) {
            this.$validator.validateAll(scope).then((result) => {
                if (result) {
                    // eslint-disable-next-line
                    alert('Form Submitted!');
                }
            });
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/login.css" scoped></style>
<style type="text/css" scoped>
.container-fluid.reset {
    padding-top: 6.5%;
    width: 100%;
    top: 0;
    height:100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    background-size: 100% 100%;
    overflow-y: auto;
}
.help.is-danger,.fa-warning{
    font-size: 13px;
}
.input.is-danger{
    border: 1px solid #ff6666;
}
.reset .btn{
    box-shadow: none;
}
    #authentication .input:focus{
        border-color: #6699cc;
        box-shadow: none;
    }
</style>
