<template>
<div>
    <!--main content-->
    <div class="row">
        <div class="col-sm-6 col-md-6 col-xl-3">
            <div class="widget-bg-color-icon card-box">
                <div class="bg-icon bg-warning float-left">
                    <i class="ti-eye text-white"></i>
                </div>
                <div class="text-right">
                    <h3 class="text-dark"><b id="widget_count1">2652</b></h3>
                    <p>Visitors</p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
            <div class="widget-bg-color-icon card-box border_success">
                <div class="bg-icon float-left">
                    <i class="ti-pie-chart text-success"></i>
                </div>
                <div class="text-right">
                    <h3 class="text-success"><b id="widget_count3">3251</b></h3>
                    <p>Sales status</p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>

        <div class="col-sm-6 col-md-6 col-xl-3">
            <div class="widget-bg-color-icon card-box">
                <div class="bg-icon bg-icon-info float-left">
                    <i class="ti-cup text-primary"></i>
                </div>
                <div class="text-right">
                    <h3 class="text-dark"><b id="widget_count2">7698</b></h3>
                    <p class="text-primary">Income status</p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="col-sm-6 col-md-6 col-xl-3">
            <div class="widget-bg-color-icon card-box border_danger">
                <div class="text-center">
                    <h3 class="text-danger"><b id="widget_count4">4358</b></h3>
                    <p>Total sales:<span class="text-success"> 3251</span><span class="float-right"><i
                            class="ti-angle-double-down text-danger m-r-5"></i>7.85%</span></p>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    <div class="row m-t-10">
        <div class="col-md-4">
            <div class="slider-content m-b-20">
                <div class="cover-wrapper">
                    <b-carousel id="carousel1"
                                style="text-shadow: 1px 1px 2px #333;"
                                indicators
                                background="#ababab"
                                :interval="4000"
                                img-width="1024"
                                img-height="480"
                                >
                        <b-carousel-slide img-src="/static/img/gallery/full/35.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="/static/img/gallery/full/36.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="/static/img/gallery/full/37.jpg"></b-carousel-slide>
                    </b-carousel>

                </div>
                <div class="post-info">
                    <div class="date">
                        <span class="day">22</span><br>
                        <span class="month">Mar</span>
                    </div>

                    <div class="meta-container">
                        <a href="#/widgets">
                            <h4 class="m-t-0">Beautiful Cover Image Post</h4>
                        </a>
                        <div class="font-13">
                            <span class="meta">Posted by John Doe in <a href="#/widgets"><b>Web Design</b></a></span>
                        </div>
                    </div>

                    <p class="m-b-0">
                        Nunc nec dui vitae urna cursus lacinia. In
                        venenatis eget justo in dictum. Vestibulum
                        auctor raesent quisnm.
                    </p>

                    <div class="row m-t-10">
                        <div class="col-6">
                            <div class="m-t-10 blog-widget-action">
                                <a href="javascript:void(0)">
                                    <i class="ti-heart"></i> <span>28</span>
                                </a>
                                <a href="javascript:void(0)">
                                    <i class="ti-comment-alt"></i> <span>46</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-6 float-right">
                            <a href="" class="btn btn-sm waves-effect btn-seconday">Read More</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div class="col-md-4">
            <div class="card card-widget">
                <div class="card-header">
                    <h4 class="card-title">Total Revenue</h4>
                </div>
                <div class="card-body">
                    <div class="widget-chart text-center">
                        <div id="sparkline2"></div>
                    </div>
                </div>
            </div>
            <div class="card card-widget">
                <div class="card-header">
                    <h4 class="card-title">Today Sales</h4>
                </div>
                <div class="card-body text-center">
                    <circle-slider
                            v-model="val5"
                            :circle-width="8"
                            :progress-width="9"
                            :knob-radius="4"
                            progress-color="#418AC9"
                            knob-color="#418AC9"
                    ></circle-slider>
                    <div class="circle_number">{{ val5 }}</div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card-box p-0">
                <div class="profile-widget text-center">
                    <div class="bg-custom1 bg-profile"></div>
                    <img src="../../assets/img/images/avatar1.jpg" class="thumb-lg rounded-circle img-thumbnail" alt="img"
                         height="95" width="95">
                    <h4>Addison</h4>
                    <p><i class="ti-location-pin"></i> London</p>
                    <a href="#/widgets" class="btn p-2 btn-success m-t-20">Follow</a>
                    <a href="#/widgets" class="btn p-2 btn-info m-t-20">Send message</a>
                    <div class="">
                        <p class="m-t-20 clearfix p-10 pl-2 pr-2">It has survived not only five centuries, but also the
                            leap into
                            electronic typesetting.</p>
                        <div class="social_icons p-2 text-white bg-custom1">
                            <i class="ti-facebook pl-2 pr-2" aria-hidden="true"></i>
                            <i class="ti-twitter pl-2 pr-2" aria-hidden="true"></i>
                            <i class="ti-google pl-2 pr-2" aria-hidden="true"></i>
                            <i class="ti-youtube pl-2 pr-2" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row m-t-10">
        <div class="col-md-4">
            <div class="card card-widget">
                <div class="card-header bg-warning stat">
                    <div class="card-title text-white">
                        <img class="rounded-circle img_alt" src="../../assets/img/authors/avatar.jpg" alt="User Avatar"
                             height="85" width="85">

                        <h3 class="user-username">Toby Adey</h3>
                        <h5 class="user-po"> Developer</h5>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="nav nav-stacked nav_border">
                        <li><a href="#/widgets">Projects <span class="float-right badge badge-success ">31</span></a></li>
                        <li><a href="#/widgets">Tasks <span class="float-right badge badge-success">5</span></a></li>
                        <li><a href="#/widgets">Completed Projects <span class="float-right badge badge-success ">12</span></a></li>
                        <li><a href="#/widgets">Followers <span class="float-right badge badge-success">58</span></a></li>
                        <li><a href="#/widgets">Progress <span class="float-right badge badge-success">75</span></a></li>
                        <li><a href="#/widgets">Upcoming <span class="float-right badge badge-success">157</span></a></li>
                        <li><a href="#/widgets">Others <span class="float-right badge badge-success">842</span></a></li>
                        <li><a href="#/widgets">Extra <span class="float-right badge badge-success">545</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-widget">
                <div class="card-header p-0">
                    <swiper :options="swiperOption" ref="mySwiper" >
                        <!-- slides -->
                        <swiper-slide>
                            <img src="/static/img/gallery/full/35.jpg" class="img-fluid" alt="img">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/static/img/gallery/full/36.jpg" class="img-fluid" alt="img">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/static/img/gallery/full/37.jpg" class="img-fluid" alt="img">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="/static/img/gallery/full/38.jpg" class="img-fluid" alt="img">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="card-body text-justify">
                    <p>It is a long established fact that a reader will be distracted
                        by the readable content of a page.
                    </p>
                    <p>The point of using
                        Lorem Ipsum is that it has a more-or-less normal distribution.
                    </p>
                    <p>Lorem Ipsum is therefore more -or-less always free from repetition.</p>
                    <p>It is a long established fact that a reader will be distracted
                        by the readable content of a page.
                        The point of using
                        that it has distribution.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="widget">
                <ul class="list-group">
                    <li class="list-group-item">
                        <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-layers-alt float-left text-primary"></i>
                        <h4>More Features</h4>
                        <p>This is the kind of thing you really need.</p>
                    </li>
                    <li class="list-group-item">
                        <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-server float-left text-primary"></i>
                        <h4>Unlimited Users</h4>
                        <p>This is the kind of thing you really need.</p>
                    </li>
                    <li class="list-group-item">
                        <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-cup float-left text-primary"></i>
                        <h4>Custom Database</h4>
                        <p>This is the kind of thing you really need.</p>
                    </li>
                    <li class="list-group-item">
                        <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-bookmark-alt float-left text-primary"></i>
                        <h4>Enhanced Reporting</h4>
                        <p>This is the kind of thing you really need.</p>
                    </li>
                    <li class="list-group-item">
                        <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-medall-alt float-left text-primary"></i>
                        <h4>Enterprise Features</h4>
                        <p>This is the kind of thing you really need.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row m-t-10">

        <div class="col-md-4">
            <div class="card-box p-0">
                <div class="profile-widget text-center">
                    <div class="bg-info bg-profile"></div>
                    <img src="../../assets/img/authors/avatar2.jpg" class="thumb-lg rounded-circle img-thumbnail" alt="img"
                         height="95" width="95">
                    <h4>Awesome Gallery</h4>
                    <p>1 Photo</p>
                    <div class="" id="lightgallery">
                        <div class="social_icons p-10 text-white">
                            <div class="row">
                                <div class="col-md-12">

                                    <!-- normal -->
                                    <div class="ih-item square colored effect1 top_to_bottom">
                                        <a href="javascript:;">
                                            <div class="img">
                                                <img src="/static/img/gallery/full/35.jpg" class="img-fluid"
                                                     alt="img">
                                            </div>
                                            <div class="info text-justify">
                                                <h4 class="text-white text-center pt-3">Clear Nature</h4>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- end normal -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">

            <div class="card card-widget">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-facebook float-left text-primary"></i>
                        </div>
                        <div class="col-3">
                            <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-google float-left text-danger"></i>
                        </div>
                        <div class="col-3">
                            <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-twitter-alt float-left text-info"></i>
                        </div>
                        <div class="col-3">
                            <i class="fa-2x padding-top-small padding-bottom padding-right-small fa ti-linkedin float-left text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card card-widget">
                <div class="card-header text-center">
                    <img src="../../assets/img/authors/avatar3.jpg" class="thumb-lg img-thumbnail rounded-circle" alt="">
                    <h4 class="text-center"><strong>Alex Cooper</strong></h4>
                </div>
                <div class="card-body p-b-0">
                    <div class="bg-custom1  p-t-b-20 text-center row">
                        <div class="col-4">
                            <h4 class="text-white">782</h4>
                            <p class="text-white">Followers</p>
                        </div>
                        <div class="col-4">
                            <h4 class="text-white">834</h4>
                            <p class="text-white">Following</p>
                        </div>
                        <div class="col-4">
                            <h4 class="text-white">2907</h4>
                            <p class="text-white">Likes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-widget anime" v-for="(clss,index) in classes" :key="index" >
                <div class="card-body bg-primary text-center careers-item" :class="(clss.bgclass)">
                    <div>
                        <i class="fa hover-rotate text-white fa-5x" :class="(clss.fontclass)" style="margin:auto;padding: 0"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--main content ends-->
</div>
</template>
<script>
    import Vue from 'vue'
import sparkline from "../../assets/js/custom_js/sparkline/jquery.flot.spline.js";
import animate_css from "animate.css/animate.min.css"
//new swiper
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

import VueCircleSlider from 'vue-circle-slider'
Vue.use(VueCircleSlider)
export default {
    name: "widgets",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
//================animation =========
            classes:[{bgclass:'bg-primary',fontclass:'ti-user'},
                {bgclass:'bg-warning',fontclass:'ti-bookmark-alt'},
                {bgclass:'bg-info',fontclass:'ti-medall'},
                {bgclass:'bg-success',fontclass:'ti-bell'}],
            styleObject:{
                margin:'auto auto auto 0',
                paddding:10
            },
//========= end animation=========
            isActive:0,
            val5:80,
//==============   swiper
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false
                },
                speed: 1050,
                effect: 'fade',
            }
        }
    },
    mounted: function() {
         console.log('this is current swiper instance object', this.swiper)
         this.swiper.slideTo(3, 1000, false)

        "use strict";
        $(document).ready(function() {
            var options = {
                useEasing: true,
                useGrouping: true,
                decimal: '.',
                prefix: '',
                suffix: ''
            };

            //sparkline charts

            $("#sparkline2").sparkline([6, 7, 8, 6, 4, 7, 10, 12, 7, 6, 9, 12], {
                type: 'bar',
                width: '100%',
                barWidth: '15%',
                height: '135',
                barColor: '#66ccff',
                negBarColor: '#fff'
            });

        });
    },
    methods:{

    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/ihover/src/ihover.min.css"></style>
<style src="../../assets/css/custom_css/widgets.css"></style>
<style>
    .anime i{
        margin:auto;
        padding: 0;
    }
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }

        50% {
            opacity: 1;
        }
    }
    .anime:hover  i{
        animation-duration: 1s;
        animation-fill-mode: both;
        font-size: 3em;
        animation-name: zoomIn;
        margin:auto auto auto 0 !important;
        padding: 10px !important;
    }

</style>
