<template>
<div>
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
    name: 'layout',
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
    mounted() {}
}
</script>
<style src="./assets/css/custom_css/metisMenu.css"></style>
<style lang="scss" src="./assets/sass/dark/custom.scss"></style>
<style>
    @media(max-width: 320px){
        .message_dropdown .dropdown-menu.show{
            left:15px !important;
        }
    }
</style>
