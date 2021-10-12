<template>
    <div class="container-fluid five">
        <div class="row">
            <div class="col-md-6 mx-auto col-sm-8">
                <div class="text-center">
                    <div class="error_msg">
                        <img src="../../assets/img/pages/500.gif" alt="500 error image">
                    </div>
                    <hr class="seperator">
                    <a href="/" class="btn btn-primary link-home">Try Home</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "err500",
    mounted: function() {
    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/404.css"></style>
<style type="text/css">
div.container-fluid.five {
    position: fixed;
    width: 100%;
    height:100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #C79D6F;
}
</style>
