<template>
    <div>
        <div class="color-show">
            <div v-for="color in colors" v-dragging="{ list: colors, item: color, group: 'color' }" class="color-box card m-2" :key="color.text">
                <div class="card-header " :style="{'background-color': color.text}">
                    <h3 class="card-title text-light"><i class="ti-menu"></i> {{color.color_name}}</h3>
                </div>
                <div class="card-body text-dark" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam cum cupiditate eius exercitationem harum hic laudantium molestiae nihil, officia, possimus praesentium quisquam quo recusandae rem unde voluptate voluptatem.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueDND from 'awe-dnd'
Vue.use(VueDND)
    export default {
        data () {
            return {
                colors: [{
                    text: "#6699cc",
                    color_name:"Primary"
                }, {
                    text: "#868e96",
                    color_name:"Secondary"
                }, {
                    text: "#66cc99",
                    color_name:"Success"
                }, {
                    text: "#66ccff",
                    color_name:"Info"
                }, {
                    text: "#f0ad4e",
                    color_name:"Warning"
                }, {
                    text: "#ff6666",
                    color_name:"Danger"
                }, {
                    text: "#343a40",
                    color_name:"Dark"
                }]
            }
        },
        methods:{

        },
        mounted: function() {

        },
        destroyed: function() {

        }
    }
</script>
<style src="../../assets/css/portlet.css"></style>
<style>
    body{font-family:Helvetica,sans-serif}
    .playground {
        display: flex;
        margin-top: 4rem;
    }
    .color-item {
        background: #f5f5f5;
        padding: .5rem;
        color: #5f5f5f;
        transition: transform .3s;
    }
    .color-item.dragging {
        background-color: #fff;
    }
    .color-show {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .color-box {
        width: 31%;
        /*background: #efefef;*/
        text-align: center;
        color: #fff;
        transition: transform .3s;
    }
    @media (min-width: 320px) and (max-width: 425px) {
        .color-show .color-box{
            width: 100% !important;
        }
    }
    .color-box.dragging {
        transform: scale(1.1);
    }
    .in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {
        transition: all .5s;
    }
    .in-out-translate-fade-enter, .in-out-translate-fade-leave-active {
        opacity: 0;
    }
    .in-out-translate-fade-enter {
        transform: translate3d(100%, 0, 0);
    }
    .in-out-translate-fade-leave-active {
        transform: translate3d(-100%, 0, 0);
    }
</style>

