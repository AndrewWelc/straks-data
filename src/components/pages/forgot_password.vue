<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-10 col-sm-6 m-auto  box animated fadeInUp">
                    <div class="text-center ">
                        <img src="../../assets/img/strakswhite.png" class="img-fluid" alt="Clear logo">
                    </div>
                    <h3 class="text-center">Forgot Password
                    </h3>
                    <p class="text-center enter_email">
                        Enter your Registered email
                    </p>
                    <p class="text-center check_email hidden">
                        Check your email for Reset link
                        <br><br>
                        <u><a href="javascript:void(0)" class="reset-link">Resend the link</a></u>
                    </p>
                    <form  class="forgot_Form text-center" method="POST" id="forgot_password">
                        <div class="form-group">
                            <input type="email" class="form-control email pl-3" name="email" id="email" placeholder="Email">
                        </div>
                        <button type="submit" value="Reset Your Password" class="btn submit-btn">
                            Retrieve Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <!--row-->
    </div>
</template>
<script>
    import magnify from "../../vendors/bootstrap-magnify/js/bootstrap-magnify.min.js"
    export default {
        name: "image_magnifier",
        mounted: function() {
            "use strict"
            $(document).ready(function () {


                var input_field = $("input[name=email]");

                $('button[type="submit"]').on('click', function (e) {
                    e.preventDefault();

                    if (input_field.val() != "") {
                        $(".enter_email").addClass("hidden");
                        $(".check_email").removeClass("hidden");
                        $('#email, .signup-signin').addClass('hidden');
                        $('.submit-btn').addClass('animated fadeInUp');
                        $('button[type="submit"]').html("Reset Password")
                            .removeClass("btn-primary btn-block")
                            .addClass("btn-success").on('click', function () {
                            window.location.href = '#/reset_password';
                        });
                    } else {
                        var error_msg = "<p>Sorry, Enter Your Registered email</p>";
                        $(".enter_email").addClass("err-text animated fadeInUp").html(error_msg);
                    }

                });

                $("#email").on('keypress focus', function () {
                    var element = 'Enter your Registered email';
                    $(".enter_email").removeClass("text-danger animated fadeInUp").html(element);
                });


            });


        },
        destroyed: function() {

        }
    }
</script>
<style src="../../assets/css/custom_css/forgot_password.css"></style>

