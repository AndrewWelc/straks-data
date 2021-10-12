<template>
    <div class="card weather-widget">
        <div class="row weather-data">
            <div class="col-md-12 temperature">
                <h2><i class="wi wi-day-cloudy icon"></i><span
                        class="float-right">19<sup><sup>o</sup></sup>c <br><span class="location"><i
                        class="ti-location-pin text-default" aria-hidden="true"></i>
                                    London, UK</span></span></h2>
            </div>
        </div>
        <div class="weather-footer">
            <div class="text-center row ml-0 mr-0">
                <div class="col-2 popup">
                    <h5>MON</h5>
                    <i class="wi wi-day-lightning"></i>
                    <p>21°c</p>
                </div>
                <div class="col-2 popup">
                    <h5>TUE</h5>
                    <i class="wi wi-cloudy"></i>
                    <p>28°c</p>
                </div>
                <div class="col-2 popup">
                    <h5>WED</h5>
                    <i class="wi wi-night-rain-mix"></i>
                    <p>26°c</p>
                </div>
                <div class="col-2 popup">
                    <h5>THU</h5>
                    <i class="wi wi-day-sunny"></i>
                    <p>31°c</p>
                </div>
                <div class="col-2 popup">
                    <h5>FRI</h5>
                    <i class="wi wi-day-lightning"></i>
                    <p>24°c</p>
                </div>
                <div class="col-2 popup">
                    <h5>SAT</h5>
                    <i class="wi wi-night-alt-snow"></i>
                    <p>25°c</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"weather"
    }
</script>
<style src="../../../../vendors/weather-icons/css/weather-icons.min.css" scoped></style>
<style scoped>

    /*weather widget*/

    .weather-widget {
        background-image: url("../../../../assets/img/d4-weather.jpg");
        background-size: cover;
        height: 260px;
        color: #fff;
        position: relative;
        border-radius: 5px;
    }

    .weather-data .temperature {
        padding-top: 29px;
        padding-left: 10%;
    }

    .weather-data .temperature h2 span {
        font-size: 60px;
        margin-right: 40px;
    }

    .weather-data .temperature .icon {
        position: absolute;
        font-size: 82px;
        z-index: 0;
    }

    .weather-data .temperature .location {
        font-size: 14px;
        position: absolute;
    }

    .weather-footer {
        background: rgba(0, 0, 0, 0.4);
        height: 100px;
        bottom: 0;
        width: 100%;
        position: absolute;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .weather-footer h5 {
        color: #B3B3B3;
        margin-top: 1rem;
    }

    .weather-footer i {
        font-size: 22px;
        margin: 5px 0 8px 0;
    }

    .weather-footer p {
        font-size: 15px;
    }

    .weather-footer .popup {
        -webkit-transition: .1s ease-in-out;
        -moz-transition: .1s ease-in-out;
        -o-transition: .1s ease-in-out;
        transition: .1s ease-in-out;
    }

    .weather-footer .popup:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }

    /*for test*/

    @media screen and (max-width: 375px) {
        .weather-data .temperature h2 span.pull-right {
            font-size: 50px;
            margin-right: 26px;
            margin-top: -15px;
        }
        .weather-footer .popup {
            padding-left: 10px;
        }
        .weather-data .temperature .icon {
            font-size: 60px;
        }
    }
    @media (min-width: 320px) and (max-width:425px){
        .weather-footer .popup{
            padding-right:0;
            padding-left: 0;

        }
    }
    @media(min-width: 768px) and (max-width: 1024px){
        .weather-footer .popup{
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>