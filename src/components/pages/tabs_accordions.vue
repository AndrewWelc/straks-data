<template>
<div>
    <!--main content-->
    <div class="row">
        <div class="col-md-6">
            <card title=" <i class='ti-layout-tab-window'></i> Tabs">
                <b-tabs >
                    <b-tab title="Home" active>
                        <p class="mt-3">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using
                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using 'Content here, content here'.
                        </p>
                        <br>
                    </b-tab>
                    <b-tab title="Profile" >
                        <p class="mt-3">
                            There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or
                            randomised words which don't look even slightly believable.
                        </p>
                        <br>
                    </b-tab>
                    <b-tab title="Disabled" disabled>
                        <p class="mt-3">If you are going
                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing hidden in the middle of text. The generated Lorem Ipsum is
                            therefore always free from repetition, injected humour, or
                            non-characteristic
                            words etc.
                        </p>
                        <br>
                    </b-tab>
                </b-tabs>
            </card>
        </div>
        <div class="col-md-6">
            <card title="<i class='ti-layout-tab'></i> Pills">
                <div class="bs-example">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a href="#/tabs_accordions" class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/tabs_accordions" class="nav-link">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/tabs_accordions" class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
                <br>
                <div class="bs-example">
                    <ul class="nav flex-column nav-pills bg-stacked" style="max-width: 300px;">
                        <li class="nav-item">
                            <a href="#/tabs_accordions" class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/tabs_accordions" class="nav-link">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a href="#/tabs_accordions" class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='ti-comment'></i> Popover">
                <div>
                    <b-btn id="exright" variant="warning" ref="primary" >
                        Right
                    </b-btn>
                    <b-popover target="exright" triggers="click" placement="right" >
                        <template slot="title">Popover title</template>
                        Popover on right
                    </b-popover>

                    <!--right popover-->

                    <b-btn id="top"  variant="primary" ref="button">
                        Top
                    </b-btn>
                    <b-popover target="top" triggers="click" placement="top" ref="popover">
                        <template slot="title">Popover title</template>
                        Popover on top
                    </b-popover>
                    <!--top popover-->
                    <b-btn id="bottom"  variant="success" ref="success" >
                        Bottom
                    </b-btn>
                    <b-popover target="bottom" triggers="click" placement="bottom" >
                        <template slot="title">Popover title</template>
                        Popover on bottom
                    </b-popover>
                    <!--bottom popover-->

                    <b-btn id="left"  variant="secondary" >
                        Left
                    </b-btn>
                    <b-popover target="left" triggers="click" placement="left" >
                        <template slot="title">Popover title</template>
                        Popover on left
                    </b-popover>
                    <!--left popover-->
                </div>
            </card>
            <card title="<i class='ti-comments'></i> Tool Tips">
                <b-btn  v-b-tooltip.hover.right variant="info" class="mb-3 btn-lg text-white" title="Tooltip in right ">Right </b-btn>
                <b-btn  v-b-tooltip.hover.top variant="primary" class="mb-3 btn-lg" title="Tooltip in top">Top</b-btn>
                <b-btn  v-b-tooltip.hover.left variant="success" class="mb-3 btn-lg"  title="Tooltip in left">Left</b-btn>
                <b-btn  v-b-tooltip.hover.bottom variant="warning" class="mb-3 btn-lg" title="Tooltip in bottom">Bottom</b-btn>
                <!--</div>-->

                <div class="bs-example">
                    <ul class="tooltip-examples list-inline">
                        <a  v-b-tooltip.hover.top  title="hi" class=" ml-3 mr-2">Tooltip</a>
                        <a  v-b-tooltip.hover.top  title="Hello!!" class=" ml-3 mr-3">Small tooltip</a>
                        <a  v-b-tooltip.hover.top  title="A much larger tooltip to demonstrate the max width of the Bootstrap tooltip" class=" ml-3 mr-3">Large tooltip</a>
                        <a  v-b-tooltip.hover.top  title="Bye!" class=" ml-3 mr-3">Last tooltip</a>
                    </ul>
                </div>
            </card>
            <card title=" <i class='ti-comment-alt'></i> Popover">
                <div>
                    <div class="po-markup">
                        <br>
                        <a href="http://www.fifa.com/" id="popoverr"   >
                            fifa.com
                        </a>
                        ← popover on link so you can get site information.
                        <b-popover target="popoverr" triggers="hover" placement="right" >
                            <template slot="title">
                                <img src="../../assets/img/football.jpg" alt="Google" width="20" height="20"/> Foot Ball
                                world cup
                            </template>
                            <p>
                                Football refers to a number of sports that involve, to varying degrees,
                                kicking a ball with the foot to score a goal. The most popular of these
                                sports worldwide is
                                <strong>association football</strong> , more commonly known as just
                                "football" or "soccer".
                            </p>
                        </b-popover>

                        <!-- ./po-content -->
                    </div>
                    <!-- ./po-markup-->
                </div>
            </card>
            <card title="<i class='ti-comment'></i> Wenk Tool tip">
                <div class="row">
                    <div class="col-sm-12"><h4>Wenk positions</h4></div>
                    <div class="col-sm-6 text-center">
                        <p><span class="wenk-area" data-wenk="Top!">Wenk to the top!</span></p>
                    </div>
                    <div class="col-sm-6 text-center">
                        <p><span class="wenk-area" data-wenk="Left!"
                                 data-wenk-pos="left">Wenk to the left!</span></p>
                    </div>
                    <div class="col-sm-6 text-center">
                        <p><span class="wenk-area" data-wenk="Right!"
                                 data-wenk-pos="right">Wenk to the right!</span></p>
                    </div>
                    <div class="col-sm-6 text-center">
                        <p><span class="wenk-area" data-wenk="Bottom!"
                                 data-wenk-pos="bottom">Wenk to the bottom!</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><h4>Wenk Size</h4></div>
                    <div class="col-sm-6 text-center">
                        <p><span data-wenk="I'm small!"
                                 class="wenk-length--small wenk-area">Small wenk!</span></p>
                    </div>
                    <div class="col-sm-6 text-center">
                        <p><span data-wenk="I'm medium!"
                                 class="wenk-length--medium wenk-area">Medium wenk!</span></p>
                    </div>
                    <div class="col-sm-6 text-center">
                        <p><span data-wenk="I'm large!"
                                 class="wenk-length--large wenk-area">Large wenk!</span></p>
                    </div>
                    <div class="col-sm-6 text-center">
                        <p><span data-wenk="I fit!"
                                 class="wenk-length--fit wenk-area">I fit just right!</span></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12"><h4>Wenk Alignment</h4></div>
                    <div class="col-sm-4 text-center">
                        <p><span data-wenk="I'm left!"
                                 class="wenk-align--left wenk-length--large wenk-area">Left wenk!</span>
                        </p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <p><span data-wenk="I'm center!"
                                 class="wenk-align--center wenk-length--large wenk-area">center wenk!</span>
                        </p>
                    </div>
                    <div class="col-sm-4 text-center">
                        <p><span data-wenk="I'm right!"
                                 class="wenk-align--right wenk-length--large wenk-area">Right wenk!</span>
                        </p>
                    </div>
                </div>
            </card>
        </div>
        <div class="col-md-6">
            <card title="<i class='ti-layout-menu-v'></i> Accordions">
                <b-card no-body>
                    <b-tabs ref="tabs" card>
                        <b-tab title="Tab 1" >
                            <div role="tablist">
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-btn block href="#" v-b-toggle.accordion1 variant="secondary">Item Tab-1</b-btn>
                                    </b-card-header>
                                    <b-collapse id="accordion1"  accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <p class="card-text">
                                                I start opened because <code>visible</code> is <code>true</code>
                                            </p>
                                            <p class="card-text">
                                                {{ text }}
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-btn block href="#" v-b-toggle.accordion2 variant="secondary">Item Tab-2</b-btn>
                                    </b-card-header>
                                    <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <p class="card-text">
                                                {{ text }}
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </b-tab>
                        <b-tab title="Tab 2">
                            <div role="tablist">
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-btn block href="#" v-b-toggle.accordion3  variant="secondary">Item Tab-1</b-btn>
                                    </b-card-header>
                                    <b-collapse id="accordion3"  accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <p class="card-text">
                                                I start opened because <code>visible</code> is <code>true</code>
                                            </p>
                                            <p class="card-text">
                                                {{ text }}
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-0" role="tab">
                                        <b-btn block href="#" v-b-toggle.accordion4 variant="secondary">Item Tab-2</b-btn>
                                    </b-card-header>
                                    <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <p class="card-text">
                                                {{ text }}
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </card>
        </div>
    </div>
    <!--main content ends-->
</div>
</template>
<script>
    import card from "./card/card.vue"
export default {
        components:{
            card
        },
    data(){
        return {
            text: `
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch.
           Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident.

           Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.

        `
        }
    },
    name: "tabs_accordions",
    mounted: function() {
        "use strict";

    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/wenk/dist/wenk.min.css"></style>
<style src="../../assets/css/tab.css"></style>
