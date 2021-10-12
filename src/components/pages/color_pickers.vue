<template>
    <div class="new_color">
        <!--main content-->
        <div class="row">
            <div class="col-lg-6">
                <card title=" <i class='ti-paint-roller'></i> Sketch Color Picker">
                    <div class="box-body">
                        <!-- Color Picker -->
                        <div class="form-group">
                            <sketch-picker v-model="colors" class="mx-auto"/>
                            <div class="from-control mb-3">
                                <label for="hexa_sketch">Hex: </label>
                                <input id="hexa_sketch" type="text" v-model="colors.hex" class="form-control">
                            </div>
                            <div class="from-control mb-3">
                                <label for="rgba_sketch">rgba: </label>
                                <input id="rgba_sketch" type="text" v-model="colors.rgba.r+','+colors.rgba.g+','+colors.rgba.b+','+colors.rgba.a" class="form-control">
                            </div>
                        </div>
                        <!-- /.form group -->
                    </div>
                </card>
            </div>
            <div class="col-lg-6">
                <card title="<i class='ti-paint-bucket'></i> Swatches Color Picker">
                    <div class="box-body">
                        <!-- Color Picker -->
                        <div class="form-group">
                            <swatches-picker v-model="colors" class="mx-auto"/>
                            <div class="from-control mt-3 mb-3">
                                <label for="hexa_swatches">Hex: </label>
                                <input id="hexa_swatches" type="text" v-model="colors.hex" class="form-control">
                            </div>
                            <div class="from-control mb-3">
                                <label for="rgba_swatches">rgba: </label>
                                <input id="rgba_swatches" type="text" v-model="colors.rgba.r+','+colors.rgba.g+','+colors.rgba.b+','+colors.rgba.a" class="form-control">
                            </div>
                        </div>
                        <!-- /.form group -->
                    </div>
                </card>
            </div>
            <div class="col-lg-6">
                <card title=" <i class='ti-paint-bucket'></i> Slider Color Picker">
                    <div class="box-body">
                        <!-- Color Picker -->
                        <div class="form-group">
                            <!--<label>Sketch</label>-->
                            <slider-picker v-model="colors" class="mx-auto"/>
                            <br>
                            <div class="from-control mb-3">
                                <label for="hexa_slider">Hex: </label>
                                <input id="hexa_slider" type="text" v-model="colors.hex" class="form-control">
                            </div>
                            <div class="from-control mb-3">
                                <label for="rgba_slider">rgba: </label>
                                <input id="rgba_slider" type="text" v-model="colors.rgba.r+','+colors.rgba.g+','+colors.rgba.b+','+colors.rgba.a" class="form-control">
                            </div>
                        </div>
                        <!-- /.form group -->
                    </div>
                </card>
            </div>
            <div class="col-lg-6">
                <card title="<i class='ti-palette'></i> Compact Color Picker">
                    <div class="box-body">
                        <!-- Color Picker -->
                        <div class="form-group">
                            <!--<label>Sketch</label>-->
                            <compact-picker v-model="colors" class="mx-auto"/>
                            <div class="from-control mb-3">
                                <label for="hexa_compact">Hex: </label>
                                <input id="hexa_compact" type="text" v-model="colors.hex" class="form-control">
                            </div>
                            <div class="from-control mb-3">
                                <label for="rgba_compact">rgba: </label>
                                <input id="rgba_compact" type="text" v-model="colors.rgba.r+','+colors.rgba.g+','+colors.rgba.b+','+colors.rgba.a" class="form-control">
                            </div>
                        </div>
                        <!-- /.form group -->
                    </div>
                </card>
            </div>
            <!--col-md-6 ends-->
        </div>
        <div class="background-overlay"></div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import { Sketch } from 'vue-color'
    import { Slider } from 'vue-color'
    import { Swatches } from 'vue-color'
    import { Material } from 'vue-color'
    import { Compact } from 'vue-color'
    let defaultProps = {
        hex: '#194d33',
        hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
        },
        hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
        },
        rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
        },
        a: 1
    }
    export default {
        name: "pickers",

        components: {
            card,
            updateValue:'',
            'material-picker': Material,
           'compact-picker': Compact,
            'swatches-picker': Swatches,
            'slider-picker': Slider,
            'sketch-picker': Sketch,
        },
        data() {
            return {
                colors: defaultProps
            }
        },
        destroyed: function() {

        }
    }
</script>
<style>
    .new_color .vc-material{
        height:120px;
    }
    .new_color .vc-swatches,.new_color .vc-slider{
        width: 100%;
    }
</style>


