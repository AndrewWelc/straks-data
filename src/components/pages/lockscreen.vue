<template>
    <div class="container-lockscreen container-fluid lockscreen">
        <div class="row">
            <div class="col-10 col-lg-6 col-sm-8 m-auto">
                <div class="lockscreen-container">
                    <div id="output"></div>
                    <img src="../../assets/img/strakswhite.png" alt="Logo">
                    <div class="form-box">
                        <div class="avatar"></div>
                        <form action="#" method="post">
                            <div class="form">
                                <div class="row">
                                    <div class="col-12 text-center d-sm-none d-md-none d-lg-none d-xl-none">
                                        <h4 class="user-name">Addision</h4>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="d-none d-sm-block" value="Addison" readonly>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" name="user" class="form-control" placeholder="Password">
                                    </div>
                                </div>
                                <button class="btn login" id="index" type="submit">
                                    <img src="../../assets/img/pages/arrow-right.png" alt="Go" width="30" height="30">
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "lockscreen",
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            var textfield = $("input[name=user]");
            $('button[type="submit"]').on('click', function(e) {
                e.preventDefault();
                //little validation just to check username
                if (textfield.val() != "") {
                    //$("body").scrollTo("#output");
                    $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back Addison").removeClass(' alert-danger');
                    $("input").css({
                        "height": "0",
                        "padding": "0",
                        "margin": "0",
                        "opacity": "0"
                    });
                    //change button text
                    $('.user-name').html('Unlocked');
                    $('button[type="submit"]').html("CONTINUE")
                        .addClass("btn-submit ").on('click', function() {
                            window.location.href = '#/';
                        });

                    //show avatar
                    $(".avatar").css({
                        "background-image": "url('/static/img/authors/avatar1.jpg')"
                    });
                } else {
                    //profile pic error animation
                    $(".avatar").addClass('error_anim');
                    setTimeout(function() {
                        $(".avatar").removeClass('error_anim');
                    }, 400);
                }
            });
            // for demopage js fast loading

            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-59850948-1', 'auto');
            ga('send', 'pageview');

            // for demopage js loading ends
        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/lockscreen.css" scoped></style>
<style type="text/css" scoped>
.container-fluid.lockscreen {
    padding-top: 6.5%;
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
</style>
