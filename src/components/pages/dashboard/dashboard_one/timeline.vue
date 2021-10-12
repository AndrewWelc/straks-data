<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Timeline</h3>
        </div>
        <div class="card-body">
            <div>
                <ul class="timeline timeline-update">
                    <li>
                        <div class="timeline-badge primary wow lightSpeedIn center">
                            <img src="../../../../assets/img/authors/avatar1.jpg" height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft"
                             style="display:inline-block;">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Timeline one </h4>
                                <p>
                                    <small class="text-primary">11 hours ago</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Andrew set a new world record in being annoying.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="timeline-badge info wow lightSpeedIn center">
                            <img src="../../../../assets/img/authors/avatar.jpg" height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Potato Project</h4>
                                <p>
                                    <small class="text-primary">Sept 10, 2016</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Best project ever made.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge default wow lightSpeedIn center">
                            <img src="../../../../assets/img/authors/avatar2.jpg" height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Straks Meetup</h4>
                                <p>
                                    <small class="text-primary">Jan 02, 2017</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    You can't miss it.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge primary wow lightSpeedIn center">
                            <img src="../../../../assets/img/authors/avatar3.jpg" height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">

                        </div>
                        <div class="timeline-card wow slideInLeft"
                             style="display:inline-block;">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Daily Status</h4>
                                <p>
                                    <small class="text-primary">2days ago</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    Daily status of STRAKS.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="timeline-badge info wow lightSpeedIn center">
                            <img src="../../../../assets/img/authors/avatar4.jpg" height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">

                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Something important</h4>
                                <p>
                                    <small class="text-primary">Aug 10, 2018</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    We're in the future, mate.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge default wow lightSpeedIn center">
                            <img src="../../../../assets/img/authors/avatar2.jpg" height="36" width="36"
                                 class="rounded-circle float-right" alt="avatar-image">
                        </div>
                        <div class="timeline-card wow slideInLeft">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Project ETA</h4>
                                <p>
                                    <small class="text-primary">Jan 05, 2018</small>
                                </p>
                            </div>
                            <div class="timeline-body">
                                <p>
                                    What should we do more to the project?
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import newsticker from "../../../../vendors/jquery-advanced-news-ticker/js/newsTicker.js";
    import vScroll from "../../../../components/plugins/scroll/vScroll.vue"
    export default {
        name:'timeline',
        components:{
            vScroll
        },
        mounted:function(){
            "use strict"
            //auto timeline update card
            if ($('.timeline-update').length > 0) {
        $('.timeline-update').newsTicker({
            row_height: 117,
            max_rows: 4,
            speed: 2000,
            direction: 'up',
            duration: 3500,
            autostart: 1,
            pauseOnHover: 1
        });
    }
    //auto timeline update panel ends

    }
    }
</script>
<style src="../../../../assets/css/custom_css/dashboard1_timeline.css" scoped></style>