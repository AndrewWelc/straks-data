<template>
    <div class="card">
        <div>
            <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide class="gradient-color">
                    <div class="slider-content">
                        <div class="news-head">
                            <h3>Straks Intro</h3>
                            <span class="float-right">Yesterday</span>
                            <hr>
                        </div>
                        <div class="news-cont">
                            <h4>The strategy of adjusting and optimizing energy, using systems
                                and
                                procedures so as to reduce energy requirements per unit of
                                output
                                while holding ...</h4>
                            <p class="text-right read-more"><a class="read-more"
                                                               href="javascript:void(0)">Read
                                more <i class="ti-angle-double-right"></i></a></p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="gradient-color">
                    <div class="slider-content">
                        <div class="news-head">
                            <h3>What to expect in the final race..</h3>
                            <span class="float-right">5min ago</span>
                            <hr>
                        </div>
                        <div class="news-cont">
                            <h4>The strategy of adjusting and optimizing energy, using systems
                                and
                                procedures so as to reduce energy per unit of output
                                while holding ...</h4>
                            <p class="text-right read-more"><a class="read-more"
                                                               href="javascript:void(0)">Read
                                more <i class="ti-angle-double-right"></i></a></p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="gradient-color">
                    <div class="slider-content">
                        <div class="news-head">
                            <h3>First ever Largest open Air Purifier</h3>
                            <span class="float-right">On 28th Oct</span>
                            <hr>
                        </div>
                        <div class="news-cont">
                            <h4>The strategy of adjusting and optimizing energy, using systems
                                and
                                procedures so as to reduce energy requirements per unit of
                                output
                                while holding ...</h4>
                            <p class="text-right read-more"><a class="read-more"
                                                               href="javascript:void(0)">Read
                                more <i class="ti-angle-double-right"></i></a></p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name:'newsfeed',
        components:{
            swiper, swiperSlide,
        },
        data(){
            return{
                swiperOption: {
                    loop: true,
                    autoplay: {
                        disableOnInteraction: false
                    },
                    speed: 1050,
                }
            }
        }
    }
</script>
<style scoped>
    /*news swiper*/

    .swiper-container {
        height: 335px;
        border-radius: 4px;
        color: #fff;
    }

    .swiper-container .slider-content {
        padding: 12px 18px;
        height:336px;
    }

    .slide-1 {
        background-image: url("../../../../assets/img/pages/slider1.jpg");
        width: 100%;
    }

    .slide-2 {
        background-image: url("../../../../assets/img/pages/slider2.jpg");
        width: 100%;
    }

    .slide-3 {
        background-image: url("../../../../assets/img/pages/slider3.jpg");
        width: 100%;
    }

    .gradient-color:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.9;
        background: linear-gradient(to top, #243a4e, #363636);
    }

    .swiper-container .slider-content span {
        margin-left: 10px;
        margin-top: -3px;
    }

    .slider-content .news-head {
        z-index: 3;
        position: relative;
        padding-top: 20px;
    }

    .slider-content .news-head hr {
        border-top: 1px solid #eee;
        overflow-x: hidden;
    }

    .slider-content .news-cont {
        padding: 17px 3px 0 3px;
        z-index: 3;
        position: relative;
        line-height: 2;
    }

    .slider-content .news-cont h4 {
        font-size: 16px;
        line-height: 18px;
    }

    .news-cont .read-more {
        color: #fff;
        margin-right: 10px;
        margin-top: 25px;
    }
    .swiper-slide{
        width: 100% !important;
    }

</style>