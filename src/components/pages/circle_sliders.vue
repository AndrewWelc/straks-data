<template>
    <div>
        <!--circle sliders starts-->
        <div class="row">
            <div class="col-12">
                <card title="<i class='ti-pie-chart'></i> Circle Slider">
                    <div class="row">
                        <div class="col-12 col-sm-4 mt-4 mt-sm-0 text-center">
                            <label>Default</label>
                            <circle-slider v-model="sliderValue" progress-color="#66cc99" knob-color="#66cc99"></circle-slider>
                            <div>{{ sliderValue }}</div>
                        </div>
                        <div class="col-12 col-sm-4 mt-4 mt-sm-0 text-center">
                            <label> Custom Dimenssion</label>
                            <circle-slider v-model="val2" :min="0" :max="10000" :step-size="100" progress-color="#66cc99" knob-color="#66cc99"></circle-slider>
                            <div>{{ val2 }}</div>
                        </div>
                        <div class="col-12 col-sm-4 mt-4 mt-sm-0 text-center">
                            <label class="d-flex">Custom side</label>
                            <circle-slider :side="100" v-model="val3" progress-color="#66cc99" knob-color="#66cc99" class="d-inline-block"></circle-slider>
                            <div class="d-inline-block ">
                                <circle-slider :side="50" v-model="val3" progress-color="#66cc99" knob-color="#66cc99" class="custom_small"></circle-slider>
                                <br/>
                            </div>
                            <br/>

                            <div>{{ val3 }}</div>
                        </div>
                        <div class="col-12 col-sm-6 mt-4 mt-sm-0 text-center exact-size">
                            <label>Exact sizes</label>
                            <br/>
                            <circle-slider
                                    v-model="val4"
                                    :circle-width="8"
                                    :progress-width="12"
                                    :knob-radius="10"
                                    progress-color="#66cc99"
                                    knob-color="#66cc99"
                            ></circle-slider>

                            <circle-slider
                                    v-model="val4"
                                    :circle-width="10"
                                    :progress-width="5"
                                    :knob-radius="10"
                                    progress-color="#66cc99"
                                    knob-color="#66cc99"
                            ></circle-slider>

                            <circle-slider
                                    v-model="val4"
                                    :circle-width="12"
                                    :progress-width="3"
                                    :knob-radius="4"
                                    progress-color="#66cc99"
                                    knob-color="#66cc99"
                            ></circle-slider>
                            <br/>
                            <div>{{ val4 }}</div>
                        </div>
                        <div class="col-12 col-sm-6 mt-4 mt-sm-0 text-center colors">
                            Colors
                            <br/>
                            <circle-slider
                                    v-model="val6"
                                    circle-color="#edeff0"
                                    progress-color="#eee"
                                    knob-color="#6699cc"
                            ></circle-slider>

                            <circle-slider
                                    v-model="val6"
                                    circle-color="#ff6666"
                                    progress-color="#6699cc"
                                    knob-color="#66ccff"
                            ></circle-slider>

                            <circle-slider
                                    v-model="val6"
                                    circle-color="#cecece"
                                    progress-color="#66cc99"
                                    knob-color="#f0ad4e"
                            ></circle-slider>
                            <br/>
                            <div>{{ val6 }}</div>
                        </div>
                        <div class="col-12 col-sm-4 mt-4 mt-sm-0 text-center">
                            <label>Relative sizes</label>
                            <circle-slider v-model="val5" :circle-width-rel="30" :progress-width-rel="15" :knob-radius-rel="8"  progress-color="#66cc99" knob-color="#66cc99"></circle-slider>

                            <div>{{ val5 }}</div>
                        </div>
                        <div class="col-12 col-sm-4 mt-4 mt-sm-0 text-center">
                            <label>Two-way binding</label>
                            <circle-slider v-model="val7" @touchmove="$refs.input.blur()"  progress-color="#66cc99" knob-color="#66cc99"></circle-slider>
                            <!-- @touchmove="$refs.input.blur()" - hide keyboard on touchmove at mobile devices -->

                            <input ref="input" type="number" v-model.number="val7" class="form-control"/>
                        </div>
                    </div>
                </card>
            </div>
        </div>
        <!--circle slider ends-->
        <!-- sparkline -->
        <div class="row">
            <div class="col-12">
                <card title="<i class='ti-bar-chart-alt'></i> Tiny Charts">
                    <div class="row sparkline_charts">
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny line chart</div>
                                <div class="chart linechart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny bar chart</div>
                                <div class="chart barchart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny stacked bar chart</div>
                                <div class="m-t-10 chart stackedbarchart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny tristate chart</div>
                                <div class="m-t-10 chart tristatechart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny bullet chart</div>
                                <div class="m-t-10 chart bulletchart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny pie chart</div>
                                <div class="m-t-10 chart piechart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny discrete chart</div>
                                <div class="m-t-10 chart discretechart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny boxplot chart</div>
                                <div class="m-t-10 chart boxchart">Loading...</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny composite line chart</div>
                                <div id="compositeline" class="m-t-10">
                                    8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny composite bar chart</div>
                                <div id="compositebar" class="m-t-10">4,6,7,7,4,3,2,1,4</div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny line chart with normal range</div>
                                <div id="normalline" class="m-t-10">
                                    8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 m-t-25 text-center">
                            <div>
                                <div>Tiny discrete chart with treshold</div>
                                <div id="discrete2" class="m-t-10">4,6,7,7,4,3,2,1,4</div>
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
import sparkline from "../../assets/js/custom_js/sparkline/jquery.flot.spline.js"
import Vue from 'vue'
import VueCircleSlider from 'vue-circle-slider'
Vue.use(VueCircleSlider)
export default {
    name: "circle_sliders",
    components:{

        circleslider: VueCircleSlider.VueCircleSlider,
        card,
    },
    data(){
        return{
            sliderValue:20,
            val2:0,
            val3:0,
            val4:0,
            val5:0,
            val6:0,
            val7:0,
        }
    },
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            // spark line charts js start
            $(".linechart").sparkline([5, 1, 7, 8, 2, 6, 4, 7, 4, 2, 4], {
                type: 'line',
                height: "50px",
                width: "80px;",
                lineColor: '#428bca',
                fillColor: 'rgba(66,139,202,0.5)'
            });
            $(".barchart").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
                type: 'bar',
                height: "50px",
                barWidth: "8px;",
                barSpace: "3px",
                barColor: "#428bca",
                negBarColor: '#fb8678'
            });
            $(".stackedbarchart").sparkline([
                [5, 4],
                [4, 7],
                [7, 3],
                [3, 5],
                [6, 3],
                [2, 5]
            ], {
                type: 'bar',
                zeroColor: '#dcdcdc',
                nullColor: '#dcdcdc ',
                height: "50px",
                barWidth: "8px;",
                barSpace: "3px",
                stackedBarColor: ['#fb8678', '#428bca']
            });
            $(".tristatechart").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
                type: 'tristate',
                height: "50px",
                barWidth: "8px;",
                barSpace: "3px",
                posBarColor: '#22d69d',
                negBarColor: '#fb8678',
                zeroBarColor: '#dcdcdc'
            });
            $(".bulletchart").sparkline([10, 12, 12, 9, 7], {
                type: 'bullet',
                height: "30px",
                width: "80px",
                targetColor: '#fb8678',
                performanceColor: '#4fc1e9',
                rangeColors: ['#ffb65f', '#fb8678', '#428bca']
            });
            $(".piechart").sparkline([3, 4, 1, 6, 3, 5], {
                type: 'pie',
                width: '50px',
                height: '50px',
                sliceColors: ['#428bca', '#22d69d', '#4fc1e9', '#fb8678', '#ffb65f']
            });
            $(".discretechart").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 2, 3, 5, 1, 6], {
                type: 'discrete',
                height: "50px",
                Width: "80px",
                lineColor: '#428bca'
            });
            $(".boxchart").sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {
                type: 'box',
                width: '80px',
                height: '50px',
                boxFillColor: '#4fc1e9',
                whiskerColor: '#ffb65f',
                medianColor: '#fb8678',
                targetColor: '#22d69d'
            });
            $('#compositeline').sparkline('html', {
                fillColor: false,
                changeRangeMin: 0,
                chartRangeMax: 10,
                width: '100px',
                height: '50px',
                lineColor: '#428bca'
            }).sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
                composite: true,
                fillColor: false,
                changeRangeMin: 0,
                chartRangeMax: 10,
                width: '100px',
                height: '50px',
                lineColor: '#fb8678'
            });
            $('#compositebar').sparkline('html', {
                type: 'bar',
                barWidth: "10px;",
                barSpace: "5px",
                height: '50px',
                barColor: "#428bca"
            }).sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
                composite: true,
                fillColor: false,
                barWidth: "10px;",
                barSpace: "5px",
                height: '50px',
                lineColor: '#ffb65f'
            });
            $('#normalline').sparkline('html', {
                fillColor: false,
                normalRangeMin: -1,
                normalRangeMax: 8,
                width: '120px',
                height: '50px',
                lineColor: '#428bca'
            });
            $('#normalExample').sparkline('html', {
                fillColor: false,
                normalRangeMin: 80,
                normalRangeMax: 95,
                normalRangeColor: '#dcdcdc'
            });
            $('#discrete2').sparkline('html', {
                type: 'discrete',
                thresholdColor: '#fb8678',
                thresholdValue: 4,
                height: "50px",
                Width: "80px",
                lineColor: '#428bca'
            });

        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/custom_css/circle_sliders.css"></style>
