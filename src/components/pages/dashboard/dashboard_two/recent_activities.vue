<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Recent Activities</h3>
        </div>
        <div class="card-body">
            <ul class="schedule-cont">
                <li class="item success">
                    <div class="data">
                        <div class="time text-muted"> Just now</div>
                        <p><span class="text-info">Jade</span> Project team has successfully completed
                            their
                            first phase.</p>
                    </div>
                </li>
                <li class="item danger">
                    <div class="data">
                        <div class="time text-muted"> 7min ago</div>
                        <p>Tinder Project's <span class="text-info">Second</span> review has completed.
                        </p>
                    </div>
                </li>
                <li class="item">
                    <div class="data">
                        <div class="time text-muted">5hours ago</div>
                        <p>Richard McClintock, updated his project over view report.</p>
                    </div>
                </li>
                <li class="item success">
                    <div class="data">
                        <div class="time text-muted"> Yesterday</div>
                        <p>Variations Project <span class="text-info">Evaluation</span> is going on to
                            highlight
                            the project success .</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"recent_activities"
    }
</script>
<style scoped>

    /*timeline chart*/

    .schedule-cont {
        padding-left: 0;
    }

    .schedule-cont .item {
        border-left: 1px solid #ccc;
        margin-bottom: -14px;
        min-height: 70px;
        padding-top: 10px;
    }

    .schedule-cont .success {
        border-left: 1px solid #66CC99;
    }

    .schedule-cont .danger {
        border-left: 1px solid #FF6666;
    }

    .schedule-cont .item .text-muted {
        color: #888;
        font-size: 11px;
    }
    .schedule-cont .item p {
        color: #555;
    }

    .schedule-cont .item:before {
        content: " ";
        display: table;
        background-color: #fff;
        border: 1px solid #58748B;
        border-radius: 10px;
        height: 9px;
        left: 0;
        margin-left: -5px;
        width: 9px;
        clear: both;
        bottom: auto;
        top: 4px;
    }

    .schedule-cont .success:before {
        border-color: #66CC99;
    }

    .schedule-cont .danger:before {
        border-color: #FF6666;
    }

    .schedule-cont .item .data {
        padding-left: 20px;
        margin-top: -10px;
    }


    /*timeline chart ends*/

</style>