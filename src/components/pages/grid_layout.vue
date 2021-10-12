<template>
    <div>
        <!--main content-->
        <div class="row">
            <div class="col-md-12 ">
                <card title="<i class='ti-layout-menu-v'></i> Responsive Grid Examples">
                    <div class="row">
                        <div class="col-md-12">
                            <p>
                                This demostrates Bootstrap Grid system and how it responds to different screen
                                sizes.
                            </p>
                            <div class="">
                                <p class="d-lg-block d-md-none d-sm-none d-none">
                                    lg indicates that the large grid displaying. The grid stacks horizontally
                                    &lt; 1200px.
                                </p>
                                <p class="d-md-block d-lg-none d-sm-none d-none">
                                    md indicates that the medium grid displaying. The grid stacks horizontally
                                    &lt; 992px.
                                </p>
                                <p class="d-sm-block d-md-none d-lg-none d-xl-none d-none">
                                    sm indicates that the small grid displaying. The grid stacks horizontally
                                    &lt; 768px.
                                </p>
                                <p class="d-block d-sm-none d-md-none d-lg-none d-xl-none">
                                    xs indicates that the extra small grid displaying. This grid is always
                                    horizontal.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12 grid-section">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div class="text-center grid-property ">
                                        <span class="d-lg-block d-md-none d-sm-none d-none">.col-lg-4</span>
                                        <span class="d-md-block d-lg-none d-none d-sm-none">.col-md-4</span>
                                        <span class="d-sm-block d-md-none d-lg-none d-none">.col-sm-3</span>
                                        <span class="d-block d-md-none d-sm-none d-lg-none">.col-4</span>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-2 col-sm-3 col-4">
                                    <div class="text-center grid-property ">
                                        <span class="d-lg-block d-md-none d-sm-none d-none">.col-lg-4</span>
                                        <span class="d-md-block d-lg-none d-none d-sm-none">.col-md-2</span>
                                        <span class="d-sm-block d-md-none d-lg-none d-none">.col-sm-3</span>
                                        <span class="d-block d-md-none d-sm-none d-lg-none">.col-4</span>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-4">
                                    <div class="text-center grid-property ">
                                        <span class="d-lg-block d-md-none d-sm-none d-none">.col-lg-4</span>
                                        <span class="d-md-block d-lg-none d-none d-sm-none">.col-md-6</span>
                                        <span class="d-sm-block d-md-none d-lg-none d-none">.col-sm-6</span>
                                        <span class="d-block d-md-none d-sm-none d-lg-none">.col-4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="grid-section">
                                <div class="row">
                                    <label class="col-12">xs Grid</label>
                                    <div class="col-4">
                                        <div class="text-center grid-property ">
                                            <span>.col-4</span>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="text-center grid-property ">
                                            <span>.col-4</span>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="text-center grid-property ">
                                            <span>.col-4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <div class="col-md-12">
                            <div class="grid-section">
                                <div class="row">
                                    <div class="col-sm-12"><label>sm Grid</label></div>
                                    <div class="col-sm-2">
                                        <div class="text-center grid-property ">
                                            <span>.col-sm-2</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class=" text-center grid-property ">
                                            <span>.col-sm-4</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="text-center grid-property ">
                                            <span>.col-sm-6</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <div class="col-md-12">
                            <div class="grid-section">
                                <div class="row">
                                    <div class="col-md-12"><label>md Grid</label></div>
                                    <div class="col-md-2">
                                        <div class=" text-center grid-property ">
                                            <span>.col-md-2</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="text-center grid-property ">
                                            <span>.col-md-4</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="text-center grid-property ">
                                            <span>.col-md-6</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <div class="col-md-12">
                            <div class="grid-section">
                                <div class="row">
                                    <div class="col-lg-12"><label>lg Grid</label></div>
                                    <div class="col-lg-4">
                                        <div class=" text-center grid-property ">
                                            <span>.col-lg-4</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="text-center grid-property ">
                                            <span>.col-lg-4</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="text-center grid-property ">
                                            <span>.col-lg-4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end row -->
                        </div>
                        <!-- end row -->
                    </div>
                </card>
            </div>
            <!--grif stack-->
        </div>
        <!--main content ends-->
        <div class="background-overlay"></div>
    </div>
</template>
<script>
    import card from "./card/card.vue"
export default {
    name: "grid_layout",
    components:{
        card
    },
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/custom_css/grids_layout.css"></style>
