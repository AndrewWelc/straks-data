<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <card title="Image Magnifier">
                    <div class="row">
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" class="mag-style img-fluid"
                                     src="../../assets/img/gallery/thumbs/24.jpg" alt="image">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/30.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/20.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/29.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                    </div>
                    <!--row-->
                    <div class="row" style="margin-top:40px;">
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/29.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/8.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/31.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/20.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="row" style="margin-top:40px;">
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/30.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/32.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/17.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/8.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="row" style="margin-top:40px;">
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/31.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/8.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/30.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                        <div class="col-6 col-lg-3 col-sm-6">
                            <a class="mag img-fluid">
                                <br/>
                                <img data-toggle="magnify" src="../../assets/img/gallery/thumbs/29.jpg" alt="image"
                                     class="mag-style img-fluid">
                            </a>
                        </div>
                    </div>
                </card>
            </div>
        </div>
        <!--row-->
    </div>
</template>
<script>
    import card from "./card/card.vue"
import magnify from "../../vendors/bootstrap-magnify/js/bootstrap-magnify.min.js"
export default {
    name: "image_magnifier",
    components:{
        card
    },
    mounted: function() {
        "use strict"
        $('[data-toggle="magnify"]').magnify();
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/bootstrap-magnify/css/bootstrap-magnify.min.css"></style>
<style>
/*image overlapping in magification*/

.magnify .magnify {
    z-index: 2;
}

.magnify .magnify-large {
    z-index:4;
}
</style>
