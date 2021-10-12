<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-lg-4">
                                <preview></preview>
                            </div>
                            <div class="col-sm-7 col-lg-5">
                                <product_component></product_component>
                            </div>
                            <div class="col-sm-5 col-lg-3">
                                <payment></payment>
                            </div>
                            <div class="col-sm-12">
                                <product_description></product_description>
                            </div>
                            <div class="col-12">
                                <recent_view></recent_view>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import product_component from "./ecommerce/product_component.vue"
    import payment from "./ecommerce/payment.vue"
    import preview from "./ecommerce/product_preview.vue"
    import product_description from "./ecommerce/product_description.vue"
    import recent_view from "./ecommerce/recent_views.vue"
    import Vue from "vue";

    export default {
        // ===Component name
        name: "product_details",
        // ===Components used by this component
        components: {
            preview,product_component,payment,product_description,recent_view
        },
        // ====component Data properties
        data() {
            return{
                value:75,
            }
        },
        // ===Code to be executed when Component is mounted
        mounted() {

        },
        // ===Computed properties for the component
        computed: {},
        // ===Component methods
        methods: {

        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<!--<style scoped src="assets/sass/product_details.scss"></style>-->
<style scoped>

</style>
