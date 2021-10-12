<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Basic">
                    <h4>The value of slider is {{value}}</h4>
                    <vue-slider v-model="value" class="m-t-25"></vue-slider>
                    <vue-slider v-model="value" class="m-t-25 centeralign" direction="vertical" :reverse=true height="300px" width="5"></vue-slider>
                </card>
            </div>
            <div class="col-md-12">
                <card title=" <i class='ti-map'></i> Options">
                    <ul>
                        <li>min : 20</li>
                        <li>max : 90</li>
                        <li>reverse : true</li>
                        <li>tooltip-dir : left</li>
                        <li>interval : 5</li>
                        <li>piecewise : true</li>
                        <li>value : {{value1}}</li>
                    </ul>
                    <vue-slider v-model="value1" class="m-t-25" tooltip-dir="left" :reverse=true :min="20" :max="90" :interval="5" :piecewise=true></vue-slider>
                </card>
            </div>
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Range">
                    <h4>The value of slider is {{value2}}</h4>
                    <vue-slider v-model="value2" class="m-t-25" :range=true></vue-slider>
                </card>
            </div>
            <div class="col-md-12">
                <card title="<i class='ti-map'></i> Custom Data">
                    <h4>The value of slider is {{value3}}</h4>
                    <vue-slider v-model="value3" class="m-t-25" :data="['jan','feb','mar','apr','may','jun','jul','aug','sept','oct','nov','dec']" :piecewise=true :piecewiseStyle='{"backgroundColor": "#000"}'></vue-slider>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
import vueSlider from 'vue-slider-component';
export default {
    name: "vue_slider",
    components: {
        vueSlider,card
    },
    data() {
        return {
            value: 15,
            value1: 35,
            value2: [20, 50],
            value3: "jul"
        }
    },
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style scoped>
.centeralign {
    text-align: -webkit-center;
}
</style>
