<template>
    <div class="fixed_menu">
        <clear_header></clear_header>
        <div class="wrapper">
            <left_side v-show="this.$store.state.left_open"></left_side>
            <right_side>
                <router-view></router-view>
            </right_side>
        </div>
        <div class="background-overlay" @click="right_close"></div>
    </div>
</template>
<script>
    import clear_header from "./components/layout/clear_header";
    import left_side from "./components/layout/left-side/default/left-side";
    import right_side from "./components/layout/right-side";
    export default {
        name: 'fixed_menu',
        components: {
            clear_header,
            left_side,
            right_side
        },
        created: function() {},
        methods: {
            right_close() {
                this.$store.commit('rightside_bar', "close");
            }
        },
        mounted() {
            window.onscroll = function(event){
                var top = ( document.getElementById('menu') &&  document.getElementById('menu').scrollTop  || document.body && document.body.scrollTop  || 0);
                var top_right = ( document.getElementById('right') &&  document.getElementById('right').scrollTop  || document.body && document.body.scrollTop  || 0);
                if(top<=56){
                    document.getElementsByClassName('sidebar')[0].style.marginTop = -top+'px ';
                    document.getElementById("right").style.marginTop=-top_right+"px"
                }
                else{
                    document.getElementsByClassName('sidebar')[0].style.marginTop = -56+'px';
                    document.getElementById("right").style.marginTop=-56+"px"
                }

            }
        }
    }
</script>
<style src="./assets/css/custom_css/metisMenu.css"></style>
<style lang="scss" src="./assets/sass/dark/custom.scss"></style>
<style >
    body.fixed-header #app .navbar{
        position: relative;
    }
    body.fixed-header #app .header{
        margin-bottom: 0;
    }
    #menu{
        position: absolute;
        background-color: #fff;
    }
    .left-aside .sidebar{
        position: fixed;
        overflow-y: scroll;
        min-height: 100vh;
        width: 250px;
    }
    @media(max-width: 768px){
        .left-aside .sidebar{
            min-height: 100vh;
        }
    }
    @media(max-width: 1024px){
        .left-aside .sidebar{
            min-height: 100vh;
        }
    }
    @media(min-width: 320px) and (max-width: 425px){
        .left-aside .sidebar{
            min-height: 90vh;
        }
    }
    @media(min-width: 1440px){
        .left-aside .sidebar{
            min-height: 100vh;
        }
    }
    @media(max-width:320px){
        .message_dropdown .dropdown-menu.show{
            left:15px !important;
        }
    }
    .fixed_menu .content-profile .icon-list{
        font-family: 'none';
    }
</style>
