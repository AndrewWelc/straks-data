<template>
    <div class="boxed">
        <clear_header></clear_header>
        <div class="wrapper">
            <left_side v-show="this.$store.state.left_open"></left_side>
            <right_side>
                <router-view></router-view>
            </right_side>
            <right v-show="this.$store.state.right_open" id="right"></right>
        </div>
        <div class="background-overlay" @click="right_close"></div>
    </div>
</template>
<script>
    import clear_header from "./components/layout/clear_header";
    import left_side from "./components/layout/left-side/default/left-side";
    import right_side from "./components/layout/right-side";
    import right from "./components/layout/right";
    export default {
        name: 'layout',
        components: {
            clear_header,
            left_side,
            right_side,
            right
        },
        created: function() {},
        methods: {
            right_close() {
                this.$store.commit('rightside_bar', "close");
            }
        },
        mounted() {}
    }
</script>
<style src="./assets/css/custom_css/metisMenu.css"></style>
<style lang="scss" src="./assets/sass/dark/custom.scss"></style>
<style >
    #right{
        position: relative;
    }
    #right .sidebar{
        width: auto;
    }
    #right.left-aside{
        border-right: 0;
    }
    .rightsidebar-right{
        padding-top: 0;
    }
    .sidebar-right-opened #right{
        position: absolute;
    }
    @media (max-width:768px) {
        .sidebar-right-opened #right{
            position: fixed;
            margin-top: 50px;
        }
    }
    @media(min-width: 320px) and (max-width:425px){
        .sidebar-right-opened #right{
            position: fixed;
            margin-top: 80px;
        }
    }

    @media(min-width:1024px){
        #app,#app .header .navbar{
            width: 85vw !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }
    }
    @media (max-width: 768px) {
        .inline-response{
            padding-left: 5px !important;
        }
    }
    @media (min-width: 768px) {
        .flight-count .bootstrap-datetimepicker-widget{
            left:auto !important;
        }

    }

    @media (min-width: 320px) and (max-width: 425px) {

        /*right side menu*/
        .rightsidebar-right{
            padding-top: 14px !important;
        }
    }
    /*circle slider*/
    @media (max-width: 1024px) {
        .fixed-header .portlet-body .knob,.fixed-header .portlet-body + .row  .knob{
            margin-top: -80px !important;
            margin-left: -31px !important;
        }
        .fixed-header.left-hidden .portlet-body .knob,.fixed-header.left-hidden .portlet-body + .row  .knob{
            margin-top: 40px !important;
            margin-left: -90px !important;
        }

    }
    @media(max-width:768px) {
        .fixed-header .portlet-body .knob,.fixed-header .portlet-body + .row  .knob{
            margin-top: 40px !important;
            margin-left: -88px !important;
        }

    }
    /*widgets*/
    #sparkline2 canvas{
        width: 100% !important;
    }
    .wrapper{
        position: relative;
    }
    .boxed .bootstrap-datetimepicker-widget{
        left: 5px !important;
    }
    .boxed .message_dropdown .dropdown-menu.show,.boxed  .user-dropdown .dropdown-menu.show{
       position: fixed !important;
    }
    @media(max-width: 320px){
        .boxed .message_dropdown .dropdown-menu.show{
            left:20px !important;
        }
    }
    @media(max-width:1024px){
        .jp-card-container{
            transform: scale(1) !important;
        }
        .c-title{
            width:55px;
            overflow-x: scroll;
        }
    }
    /*masonry gallery*/
    .element-item img{
        width:260px !important;
    }

    /*social info dashboard-2*/
    .social .info-1{
        padding-left: 0 !important;
    }
    .social .info-2{
        padding-right: 0 !important;
    }
    /*widget*/
    .bg-custom1 p.text-white{
        margin-left: -5px;
    }
    .jqstooltip{
        z-index: 99 !important;
    }
    /*realtime form */
    .flight-count .bootstrap-datetimepicker-widget{
        margin-left: -15px !important;
    }
    /*radio and check*/
    .radio.radio-inline{
        margin-left: 5px;
    }
</style>