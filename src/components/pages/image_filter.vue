<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <card title="<i class='ti-image'></i> Image Filters (Aden - Hudson)">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-lg-6 col-md-8 mx-auto col-xs-12 text-center">
                                <figure id="imgfigure1" :class="filters[isActive]">
                                    <img class="temp_path1 img-fluid" src="/static/img/gallery/full/16.jpg"  alt="hudson image">
                                </figure>
                            </div>
                            <div class="col-12 text-center">
                                <ul class="pagination mx-auto">
                                    <li v-for="(filter, index) in filters" @click="isActive=index" v-bind:class="{active_filter : isActive==index}">
                                        <figure class="text-center" v-bind:class="filter">
                                            <img class="temp_path1" src="/static/img/gallery/full/16.jpg" height="75" alt="hudson image">
                                            <span>{{filter}}</span>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </card>
                <card title=" <i class='ti-image'></i> Image Filters (Inkwell - Perpetua)">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-lg-6  col-md-8 mx-auto text-center">
                                <figure id="imgfigure2" :class="secondfilters[isActive]">
                                    <img class="temp_path2 img-fluid" src="/static/img/gallery/full/15.jpg" alt="inkwell image">
                                </figure>
                            </div>
                            <div class="col-md-12 col-xs-12 text-center">
                                <ul class="pagination">
                                    <li v-for="( secondfilter, index) in secondfilters" @click="isActive=index" v-bind:class="{active_filter : isActive==index}">
                                        <figure class="text-center"  v-bind:class="secondfilter">
                                            <img class="temp_path2 img-fluid" src="/static/img/gallery/full/15.jpg" alt="inkwell image">
                                            <span>{{secondfilter}}</span>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </card>
                <card title="<i class='ti-image'></i> Image Filters (Rise - Xpro2)">
                    <div class="row">
                        <div class="col-md-12 col-xs-12">
                            <div class="col-lg-6  col-md-8 mx-auto text-center">
                                <figure id="imgfigure3" :class="thirdfilters[isActive]">
                                    <img class="temp_path3 img-fluid" src="/static/img/gallery/full/5.jpg" alt="rise image">
                                </figure>
                            </div>
                            <div class="col-md-12 col-xs-12 text-center">
                                <ul class="pagination">
                                    <li  v-for="( thirdfilter, index) in thirdfilters" @click="isActive=index" v-bind:class="{active_filter : isActive==index}">
                                        <figure class="text-center" v-bind:class="thirdfilter">
                                            <img class="temp_path3" src="/static/img/gallery/full/5.jpg" height="75" alt="rise image">
                                            <span>{{thirdfilter}}</span>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
import dropify from "../../vendors/dropify/dist/js/dropify.min.js"
export default {
    name: "image_filter",
    components:{
        card
    },
    data(){
        return{
            isActive:0,
            filters:['brannan','aden','brooklyn','clarendon','earlybird','gingham','hudson'],
            secondfilters:['inkwell','lark','lofi','mayfair','moon','nashville','perpetua'],
            thirdfilters:['rise','slumber','toaster','valencia','walden','willow','xpro2']
        }
    },
    mounted: function() {
        "use strict";
    },
    methods:{
        activation:function(){
            this.isActive=1
//            console.log(this.filter);
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/dropify/dist/css/dropify.min.css"></style>
<style src="../../vendors/cssgram/source/css/cssgram.min.css"></style>
<style src="../../assets/css/custom_css/dropify.css"></style>
<style src="../../assets/css/custom_css/image_filters.css"></style>
