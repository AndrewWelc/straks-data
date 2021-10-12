<template>
        <div class="card">
            <div class="row">
                <div class="col-md-12">
                    <div class="tile_1">
                        <div class="live-tile" data-mode="carousel" data-direction="vertical"
                             data-delay="2500">
                            <span class="tile-title feed-title">Feeds</span>
                            <div>
                                <h5 class="full"> It is a long established fact that a reader will be
                                    distracted.</h5>
                                <span class="tile-title tile-time">17 min ago</span>
                            </div>
                            <div>
                                <h5 class="full"> Many desktop publishing packages and web page
                                    editors.</h5>
                                <span class="tile-title tile-time">40 min ago</span>
                            </div>
                            <div>
                                <h5 class="full"> Richard McClintock, a Latin Trainer at
                                    Hampden-Sydney.</h5>
                                <span class="tile-title tile-time">yesterday at 4pm</span>
                            </div>
                            <div>
                                <h5 class="full"> There are many variations of passages of Lorem Ipsum
                                    available.</h5>
                                <span class="tile-title tile-time">Dec 4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="tile_2">
                        <div class="list-tile">
                            <ul class="flip-list fourTiles" data-mode="flip-list" data-delay="2000">
                                <li>
                                    <div><img class="full" src="../../../../assets/img/profile-pic.jpg" alt="1"/></div>
                                    <div><img class="full" src="../../../../assets/img/authors/avatar.jpg" alt="1"/></div>
                                </li>
                                <li data-direction="horizontal">
                                    <div><img class="full" src="../../../../assets/img/authors/avatar2.jpg" alt="2"/></div>
                                    <div><img class="full" src="../../../../assets/img/authors/avatar3.jpg" alt="2"/></div>
                                </li>
                                <li data-direction="horizontal">
                                    <div><img class="full" src="../../../../assets/img/authors/avatar4.jpg" alt="3"/></div>
                                    <div><img class="full" src="../../../../assets/img/authors/avatar5.jpg" alt="3"/></div>
                                </li>
                                <li>
                                    <div><img class="full" src="../../../../assets/img/authors/avatar6.jpg" alt="4"/></div>
                                    <div><img class="full" src="../../../../assets/img/authors/avatar7.jpg" alt="4"/></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    import metrojs from "../../../../vendors/metrojs/release/MetroJs.Full/MetroJs.min.js"
    export default {
        name:'feeds',
        mounted:function(){
            "use strict"
            $(".live-tile, .flip-list").not(".exclude").liveTile();
        }
    }
</script>
<style src="../../../../vendors/metrojs/release/MetroJs.Full/MetroJs.min.css" scoped></style>
<style scoped>
    /*feeds*/

    .tile_1 {
        background-color: rgba(82, 166, 223, .7);
        height: 148px;
    }

    .tile_2 {
        height: 200px;
    }

    .live-tile .tile-time {
        bottom: 4px;
        left: 20px;
    }

    .live-tile .feed-title {
        top: 5px;
        left: 10px;
        font-size: 19px;
        font-weight: bold;
    }

    .live-tile .full {
        padding: 40px 20px 10px 23px;
    }

    .live-tile,
    .list-tile,
    .copy-tile,
    .tile-strip .flip-list > li {
        height: 100%;
        margin: 0;
        outline: 1px solid transparent;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        width: 100%;
    }


    /*feeds ends*/

</style>