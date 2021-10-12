
<template>
    <div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h3>{{filterOption}} Gallery</h3>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 text-lg-right text-md-right  text-sm-right masonry">

                    <button v-for="(val, key) in option.getFilterData" class="btn" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
                    </button>

            </div>
        </div>
        <isotope class="center-block" ref="cpt" id="isotope" :item-selector="'element-item'" :list="list" :options='option' v-images-loaded:on.progress="layout" @filter="filterOption=arguments[0]">
            <div v-for="element,index in list" :key="index" :class="element.filter">
                <a :href="element.src">
                    <img :src="element.src" class="img-fluid">
                </a>
            </div>
        </isotope>
    </div>
</template>
<script>
    var unsub;
    import isotope from 'vueisotope'
    import imagesLoaded from 'vue-images-loaded'
    import baguetteBox from "baguettebox.js";

    require("baguettebox.js/dist/baguetteBox.min.css");
    export default {
        directives: {
            imagesLoaded,
        },
        components: {
            isotope,
        },
        data() {
            return {

                list: [{
                    src: require("../../assets/img/gallery/thumbs/1.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/2.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/3.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/4.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/5.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/6.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/7.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/8.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/9.jpg"),
                    filter: "Studio"
                }, {
                    src: require("../../assets/img/gallery/thumbs/10.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/11.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/12.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/13.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/14.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/15.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/16.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/17.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/18.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/19.jpg"),
                    filter: "Studio"
                }, {
                    src: require("../../assets/img/gallery/thumbs/20.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/21.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/22.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/23.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/24.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/25.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/26.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/27.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/28.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/29.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/30.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/31.jpg"),
                    filter: "Studio"
                },{
                    src: require("../../assets/img/gallery/thumbs/32.jpg"),
                    filter: "Landscape"
                },{
                    src: require("../../assets/img/gallery/thumbs/33.jpg"),
                    filter: "Studio"
                }, {
                    src: require("../../assets/img/gallery/thumbs/34.jpg"),
                    filter: "Landscape"
                }],
                filterOption: "All",
                option: {
                    itemSelector: ".element-item",
                    getFilterData: {
                        All() {
                            return true;
                        },
                        Landscape(el) {
                            return el.filter === "Landscape";
                        },
                        Studio(el) {
                            return el.filter === "Studio";
                        }
                    }
                }
            }

        },
        methods: {
            filter: function(key) {
                this.$refs.cpt.filter(key);
            },
            layout() {
                this.$refs.cpt.layout('masonry');
            }
        },
        mounted() {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    setTimeout(() => {
                        this.$refs.cpt.layout('masonry');
                        setTimeout(() => {
                            this.$refs.cpt.layout('masonry');
                        }, 600)
                    });
                }
            });
            baguetteBox.run('#isotope');
        },
        beforeDestroy() {
            unsub();
        }
    }
</script>
<style scoped>
    #isotope{
        /*width:880px;*/
    }
    .element-item {
        padding: 7px;
    }

    .element-item img {
        width: 300px;
    }

    @media screen and (max-width: 1250px)and (min-width: 1100px) {
        .element-item img {
            width: 400px;
        }
    }

    @media screen and (max-width: 991px) and (min-width: 900px) {
        .element-item img {
            width: 270px;
        }
    }

    @media screen and (max-width: 899px) and (min-width: 775px) {
        .element-item img {
            width: 350px;
        }
    }

    @media screen and (max-width: 670px) and (min-width: 400px) {
        .element-item img {
            width: 270px;
        }
    }

    button.is-checked {
        background-color: #428bca;
        color: #fff;
    }

    button.btn {
        cursor: pointer;
    }
    .masonry .btn{
        margin-right: 5px;
        margin-left: 5px;
    }
</style>

