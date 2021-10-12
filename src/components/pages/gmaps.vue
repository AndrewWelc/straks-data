<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <card title=" <i class='ti-map'></i> Basic">
                    <gmap-map :center="center" :zoom="5" class="gmap" ref="gmap"></gmap-map>
                </card>
            </div>
            <div class="col-md-6">
                <card title="<i class='ti-map'></i> Map with Markers">
                    <gmap-map :center="center" :zoom="5" class="gmap" ref="gmap">
                        <gmap-marker v-for="(m,index) in markers" :key="index" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
                    </gmap-map>
                </card>
            </div>
            <div class="col-md-6">
                <card title="<i class='ti-map'></i> Map with Clustering">
                    <gmap-map :center="center" :zoom="4" class="gmap" ref="gmap">
                        <gmap-cluster>
                            <gmap-marker v-for="(m,index) in markers" :key="index" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
                        </gmap-cluster>
                    </gmap-map>
                </card>
            </div>
            <div class="col-md-6">
                <card title="<i class='ti-map'></i> Satellite">
                    <gmap-map :center="center" :zoom="4" class="gmap" mapTypeId="hybrid" ref="gmap"></gmap-map>
                </card>
            </div>
        </div>
    </div>
</template>
<script>
import card from "./card/card.vue"
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
    load: {
        // key: 'tour gmaps api key'
        // v: 'OPTIONAL VERSION NUMBER',
        // libraries: 'places', // If you need to use place input
    }
});
export default {
    name: "gmaps",
    components:{
        card
    },
    mounted: function() {

    },
    destroyed: function() {

    },
    data() {
        return {
            center: {
                lat: 17.387140,
                lng: 78.491684
            },
            markers: [{
                position: {
                    lat: 17.387140,
                    lng: 78.491684
                }
            }, {
                position: {
                    lat: 12.972442,
                    lng: 77.580643
                }
            }, {
                position: {
                    lat: 18.910000,
                    lng: 72.809998
                }
            }]
        }
    }
}
</script>
<style scoped>
.gmap {
    width: 100%;
    height: 300px;
    margin: 5px auto;
}
</style>
