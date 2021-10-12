<template>
<div id="app">
    <preloader v-show="this.$store.state.preloader"></preloader>
    <router-view></router-view>
</div>
</template>
<script>
import preloader from "./components/layout/preloader";

//import icheck from "../static/iCheck/icheck.min.js";
export default {
    name: 'app',
    components: {
        preloader
    }
}
</script>
<style lang="scss" src="./assets/sass/bootstrap/bootstrap.scss"></style>
<style src="./vendors/font-awesome/css/font-awesome.min.css"></style>
<style src="./vendors/themify-icons/css/themify-icons.css"></style>
