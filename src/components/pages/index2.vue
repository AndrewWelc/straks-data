<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="main-chart" style="width: 100%">
                    <div class="chart-header">Recent Stats
                        <div class="btn-group float-right">
                            <span id="fullscreen-toggle" role="button">
                                    <small><i class="ti-fullscreen"></i></small>
                                </span>
                            <!--sull-screen-->

                            <b-dd class="content-menu bg-light">
                                <template slot="button-content" ><i class="ti-more-alt more option-more"></i>
                                </template>
                                <b-dropdown-item class="content-header">
                                    Vue
                                </b-dropdown-item>
                                <b-dropdown-item class="content-header">
                                    Update
                                </b-dropdown-item>
                                <b-dropdown-item class="content-header">
                                    Settings
                                </b-dropdown-item>
                            </b-dd>

                        </div>
                    </div>
                    <div class="statchart-data">
                        <div class="row">
                            <div class="data text-center">
                                <span class="percent"> 19%</span>
                                <br class="hidden-sm hidden-md hidden-lg">
                                <span>Orders</span>
                            </div>
                            <div class="data text-center">
                                <span class="percent">23%</span>
                                <br class="hidden-sm hidden-md hidden-lg">
                                <span>Sales</span>
                            </div>
                            <div class="data text-center">
                                <span class="percent">12%</span>
                                <br class="hidden-sm hidden-md hidden-lg">
                                <span>Support</span>
                            </div>
                        </div>
                    </div>
                    <div id="sales-chart" class='with-3d-shadow with-transitions'>
                        <svg></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="row main-cards">
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <h5><b>New Users</b></h5>
                    <p>14,205
                        <small>Last month</small>
                    </p>
                    <span id="user-chart"></span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <h5><b>Revenue</b></h5>
                    <p>$56,180
                        <small>Target</small>
                    </p>
                    <span id="mr-chart"></span>
                </div>
            </div>
            <div class="clearfix hidden-md hidden-lg"></div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <h5><b>Hits</b></h5>
                    <p>24,525
                        <small>Reached</small>
                    </p>
                    <h6>
                    <span class="float-right progress-label"><b>6</b><small>%</small> <i
                                class="ti-stats-up"></i></span>
                    </h6>
                    <div class="progress progress-xs progress-striped active hits-progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="card">
                    <h5><b>Subscribers</b></h5>
                    <p>8,958
                        <small>Quarterly</small>
                    </p>
                    <span id="subscriber-chart"></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <profile_page></profile_page>

            </div>
            <div class="col-sm-6">
                <weather></weather>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-sm-7 col-xl-4">
                <recent_activities></recent_activities>
            </div>

            <div class="col-sm-5 col-lg-5 col-xl-3">
                <feeds></feeds>
            </div>
            <div class="col-sm-12 col-lg-12 col-xl-5">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="server-load text-center">
                                    <circle-slider
                                        v-model="val5"
                                        :circle-width="8"
                                        :progress-width="9"
                                        :knob-radius="4.5"
                                        progress-color="#418AC9"
                                        knob-color="#418AC9"
                                        circle-color="#edeff0"
                                ></circle-slider>
                                    <div class="circle_number text-primary">{{ val5 }}%</div>
                                    <h4>CPU-LOAD</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="server-load text-center">
                                    <circle-slider
                                            v-model="val5"
                                            :circle-width="8"
                                            :progress-width="9"
                                            :knob-radius="4.5"
                                            progress-color="#66cc99"
                                            knob-color="#66cc99"
                                            circle-color="#edeff0"
                                    ></circle-slider>
                                    <div class="circle_number text-success">{{ val5 }}%</div>
                                    <h4>DISC-SPACE</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card mt-3">
                            <div class="social">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="twitter text-center">
                                            <i class="ti-twitter-alt"></i>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="info-1 text-center">
                                            <h3>27k</h3>
                                            <p>Tweets</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="info-2 text-center">
                                            <h3>9.2k</h3>
                                            <p>followers</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card mt-3">
                            <div class="social">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="facebook text-center">
                                            <i class="ti-facebook"></i>
                                        </div>
                                    </div>
                                    <div class="col-6 text-center">
                                        <div class="info-1">
                                            <h3>31k</h3>
                                            <p>Likes</p>
                                        </div>
                                    </div>
                                    <div class="col-6 text-center">
                                        <div class="info-2">
                                            <h3>12k</h3>
                                            <p>feeds</p>
                                        </div>
                                    </div>
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
import nvd3 from "../../vendors/nvd3/build/nv.d3.min.js"
import sparkline from "../../assets/js/custom_js/sparkline/jquery.flot.spline.js"
import screenfull from "../../vendors/screenfull.js/dist/screenfull.min.js"
require("imports-loader?screenfull=./src/vendors/screenfull.js/dist/screenfull.min.js!");
import VueCircleSlider from 'vue-circle-slider'
Vue.use(VueCircleSlider)

//new

import feeds from "./dashboard/dashboard_two/feeds.vue"
import recent_activities from "./dashboard/dashboard_two/recent_activities.vue"
import profile_page from "./dashboard/dashboard_two/profile_page.vue"
import weather from "./dashboard/dashboard_two/weather.vue"
export default {
    name: 'index2',
    components:{
        feeds,recent_activities,profile_page,weather
    },
    data(){
        return{
            url:'',
            val5:65,
        }
    },
    mounted: function() {
        "use strict";
        $(document).ready(function() {

            $('#fullscreen-toggle').on('click', function() {
                if ($('#fullscreen-toggle').find('i').hasClass('ti-fullscreen')) {
                    screenfull.toggle($('#main-chart')[0]);
                    $('.ti-fullscreen').toggleClass('ti-fullscreen ti-move');
                } else {
                    screenfull.exit();
                    $('.ti-move').toggleClass('ti-fullscreen ti-move');
                }
            });

            // sales chart starts
            nv.addGraph(function() {
                var linechart = nv.models.lineChart()
                    // .useInteractiveGuideline(true)
                    .showYAxis(false)
                    .showXAxis(true);
                linechart.xAxis
                    .tickFormat(d3.format(',r'));

                linechart.yAxis
                    .tickFormat(d3.format('.1f'));

                var myData = sinAndCos();
                linechart.forceY([0, 10]);
                d3.select('#sales-chart svg')
                    .datum(myData)
                    .call(linechart);
                nv.utils.windowResize(function() {
                    linechart.update();
                });
                $(window).on("scroll", function() {
                    linechart.tooltip.hideDelay(100);
                });
                $(".sidebar-toggle").on('click', function() {
                    $("#sales-chart").find('svg').remove();
                    $("#sales-chart").html("<svg></svg>");
                    d3.select('#sales-chart svg')
                        .datum(myData)
                        .call(linechart);
                    linechart.update();
                });
                return linechart;

            });

            function sinAndCos() {
                var sin = [],
                    sin2 = [],
                    cos = [];
                for (var i = 0; i < 121; i++) {

                    sin.push({
                        x: eval(i / 10),
                        y: Math.cos(i / 9) + 7.5
                    });
                    sin2.push({
                        x: eval(i / 10),
                        y: Math.cos(i / 14) + 5
                    });
                    cos.push({
                        x: eval(i / 10),
                        y: Math.cos(i / 10) + 4
                    });
                }
                return [{
                    values: sin,
                    key: 'Orders',
                    color: '#4285F4',
                    area: true
                }, {
                    values: sin2,
                    key: 'Sales',
                    color: '#81ADF8',
                    area: true
                }, {
                    values: cos,
                    key: 'Support',
                    color: '#BCD3F9',
                    area: true
                }];
            }

            // sales chart end


            // sparkline charts of visits sales etc..

            function spark_user() {
                $("#user-chart").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
                    type: 'line',
                    width: '100%',
                    height: '33',
                    lineColor: '#6699CC',
                    fillColor: '#D2E9FF',
                    tooltipSuffix: ' Users',
                    highlightLineColor: 'rgba(0,0,0,0)'
                });
            }

            spark_user();

            function spark_revenue() {
                var barParentdiv = $('#mr-chart').closest('.card');
                var barCount = [91, 121, 131, 121, 131, 101, 91, 141, 131, 111, 111, 121, 111, 111, 101, 121, 111, 111, 121, 131, 121, 131, 121];
                var barSpacing = 2;
                $("#mr-chart").sparkline(barCount, {
                    type: 'bar',
                    width: '100%',
                    barWidth: (barParentdiv.width() - (barCount.length * barSpacing)) / barCount.length,
                    height: '30',
                    barSpacing: barSpacing,
                    barColor: '#FFE5C0',
                    tooltipSuffix: ' Sales'
                });
            }

            spark_revenue();

            function spark_subscribe() {
                $("#subscriber-chart").sparkline([209, 210, 209, 210, 210, 211, 212, 211, 210, 211, 209, 211, 213, 210, 212, 214, 211, 210, 212], {
                    type: 'line',
                    width: '100%',
                    height: '33',
                    lineColor: '#ff6666',
                    fillColor: '#FEEFEF',
                    tooltipSuffix: ' Subscribers',
                    highlightLineColor: 'rgba(0,0,0,0)'
                });
            }

            spark_subscribe();

            $(window).on('resize', function() {
                spark_user();
                spark_revenue();
                spark_subscribe();
            });
            $("[data-toggle='offcanvas']").on('click', function(e) {
                spark_user();
                spark_revenue();
                spark_subscribe();
            });

            // swiper ends

        });

    }
}
</script>
<style src="../../vendors/nvd3/build/nv.d3.min.css"></style>
<style src="../../assets/css/custom_css/dashboard2.css" scoped></style>
<style>
#sales-chart svg {
    height: 350px;
    margin-left: -21px;
    margin-bottom: -9px;
}

#sales-chart .nvd3 .nv-groups .nv-group {
    fill-opacity: 1 !important;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child{
    background-color: #fff;
    color:#666;
    border: none;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child:active{
    border:none;
}
.dropdown-toggle::after{
    display: none;
}
body > #app .header .navbar-nav .user-dropdown .dropdown-toggle{
    padding-bottom: 11px !important;
}
@media(min-width: 320px) and (max-width:768px){
    .profile-page .follow-link{
        right: 16% !important;
    }
}
    .circle_number{
        font-size: 20px;
        position: relative;
        top: -67px;
    }
@media(min-width: 320px) and (max-width: 425px){
    .designation{
        margin-top: 15px;
    }
    .profile-page .about .brief:before {
        visibility: hidden;
    }
}
</style>
