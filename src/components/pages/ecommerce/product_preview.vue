<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-xl-12  mt-5">
                    <div class="row">
                        <div class="mx-auto">
                            <a class="magnifier-thumb-wrapper" href="#/product_details">
                                <img id="thumb" src="~img/ecommerce/product.png" class="img-fluid" alt="product">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12 col-md-12 text-center right_modal">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-12" v-for="(image,index) in thumbs" :key="index">
                            <b-btn  @click="openPictureModal(index)" class="mb-3 small_img">
                                <img :src="image" class="img-fluid slide-preview" alt="phone image">
                            </b-btn>
                            <!--Modal Component-->
                            <b-modal title="Modal" ref="pictureModal">
                                <img :src="image" class="img-fluid" alt="small phone image missing">
                            </b-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import vueSlider from 'vue-slider-component';
    import Magnifier from "assets/js/Magnifier.js";
    import Event from "assets/js/Event.js";
    require('assets/css/magnifier.css');


    export default {
        // ===Component name
        name: "product_preview",

        // ===Components used by this component
        components: {
            vueSlider
        },
        // ====component Data properties
        data() {
            return {
                thumbs: [
                        require('img/ecommerce/product.png'),
                        require('img/ecommerce/product_4.png'),
                        require('img/ecommerce/product_2.png'),
                        require('img/ecommerce/product_3.png')
                    ],
               mag_data: {
                    thumb: '#thumb',
                   large: require('img/ecommerce/product.png'),
                   largeWrapper: 'preview',
                   mode: 'inside',
                   zoom: 3,
                   zoomable: false
                }
            }
        },
        // ===Code to be executed when Component is mounted
        mounted() {
            var evt = new Event(),
                m = new Magnifier(evt);
            m.attach(this.mag_data);
        },
        // ===Computed properties for the component
        computed: {},
        // ===Component methods
        methods: {
            openPictureModal(ref) {
                this.$refs.pictureModal[ref].show()
            },
            addTag(newTag) {
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.object_options.push(tag)
                this.tag_value.push(tag)
            }
        }
    }
</script>
<style scoped>
    #preview {
        position: absolute;
        left: 85%;
        top: 5%;
    }
    .slide-preview {
        max-height: 100px;
    }
    .small_img{
        border:none !important;
        background-color: #fff !important;
    }.small_img:hover{
         background-color: #fff !important;
     }
    .right_modal {
        margin-top: 20px;
    }
    @media(max-width: 320px) {
        #preview {
            position: absolute;
            left: 5%;
            top: 105%;
        }
    }
    @media (max-width: 768px){
        #preview{
            left:77%;
        }
    }
    @media(max-width:1024px){
        .small_img{
            padding: 0;
        }
    }
</style>
