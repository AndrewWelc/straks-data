<template>
    <div>
        <!--main content-->
        <div class="row animated fadeInDown">
            <!--row starts-->
            <div class="col-md-12">
                <card title="<i class='ti-bell'></i> Transition Effects">
                    <div class="col-md-12">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <h5> Click on the Ball to see an Animations</h5>
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <!--content starts-->
                            <div class="wrap">
                                <div class="row ">
                                    <div v-for="animation in animations" class="col-lg-2 col-sm-3">
                                        <img src="../../assets/img/football.png" alt="football" @click="animate(animation,$event)" class="animated">
                                        <p>{{animation}}</p>
                                    </div>
                                </div>
                                <!-- row end-->
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
        <!--row ends-->
        <!--main content ends-->
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import animate_css from "animate.css/animate.min.css"
    export default {
        name: "transitions",
        components:{
            card
        },
        data() {
            return {
                animations: ["flash", "tada", "shake", "swing", "pulse", "wobble", "jello", "rubberBand", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceOut", "bounceOutLeft", "bounceOutRight", "bounceOutDown", "fadeIn", "fadeInDown", "fadeInLeftBig", "fadeInRightBig", "fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "rotateIn", "rotateOut", "lightSpeedOut", "rotateInUpRight", "rotateInUpLeft", "hinge"]
            }
        },
        methods: {
            animate(animation, el) {
                el.target.classList.add(animation);
                el.target.addEventListener("animationend", () => {
                    el.target.classList.remove(animation);
                });
            }
        },
        destroyed() {

        }
    }
</script>
<style src="../../assets/css/animate1.css"></style>