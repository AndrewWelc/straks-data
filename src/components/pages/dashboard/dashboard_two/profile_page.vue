<template>
    <div class="card profile-page">
        <div class="cover-image" :style="{ backgroundImage: 'url('+images[Math.abs(currentNumber) % images.length]+')'}">
            <a class="btn change_pic prev_pic" @click="prev"><img src="../../../../assets/img/prev.png" alt="previous"></a>
            <a class="btn change_pic next_pic float-right" @click="next"><img src="../../../../assets/img/next.png" alt="previous"></a>
            <span class="profile-name"><b>{{profile_name[Math.abs(currentNumber) % profile_name.length]}}</b></span>
            <span class="follow-link"><a href="javascript:void(0)" class="btn btn-sm">+ Follow</a></span>
        </div>
        <div class="profile-pic"  :style="{ backgroundImage: 'url('+ profile_pic[Math.abs(currentNumber) % profile_pic.length] +')'}">
        </div>
        <div class="about">
            <div class="row">
                <div class="col-sm-4 designation text-center">
                    <h5 class="mt-lg-1">
                        {{desig[Math.abs(currentNumber) % desig.length]}}
                        <br class='hidden-xs'>
                        {{desigtag[Math.abs(currentNumber) % desigtag.length]}}
                    </h5>
                    <span><a href="javascript:void(0)" class="btn btn-sm button-pill new-task">New Task +</a></span>
                </div>
                <div class="col-sm-8 brief">
                    <h4>About</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.deserunt eveniet facilis possimus, omnis porro possimus rem repellat</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'profile_page',
        data(){
            return{
                images: [ '/static/img/pages/slider1.jpg', '/static/img/pages/slider2.jpg', '/static/img/profile-cover.jpg'],
                profile_name:['Clinton Leo','Tony','Jenny Kerry'],
                profile_pic:['/static/img/profile-pic.jpg','/static/img/authors/avatar.jpg','/static/img/authors/avatar2.jpg'],
                desig:['Designer,','Editor,','Tester,'],
                desigtag:['Team Lead.','Manager.','Trainee.'],
                currentNumber: 0,
            }
        },
        methods:{
            next: function() {
                this.currentNumber += 1
            },
            prev: function() {
                this.currentNumber -= 1
            }
        },
    }
</script>
<style scoped>

    /*chats profile*/

    .profile-page .cover-image {
        width: 100%;
        height: 114px;
        background-image: url("../../../../assets/img/profile-cover.jpg");
        background-size: cover;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .profile-page .cover-image .change_pic {
        background-color: rgba(225, 225, 225, .4);
    }

    .profile-page .cover-image .change_pic img {
        height: 20px;
    }

    .profile-page .cover-image .profile-name {
        top: 85px;
        left: 174px;
        position: absolute;
        color: #fff;
        font-size: 20px;
    }

    .profile-page .cover-image .follow-link {
        position: absolute;
        right: 30px;
        top: 140px;
        border: 1px solid #509DE0;
        background-color: #509DE0;
        border-radius: 4px;
    }

    .profile-page .cover-image .follow-link .btn {
        font-size: 14px;
        padding: 1px 9px;
        color: #fff;
    }

    .profile-page .profile-pic {
        width: 120px;
        height: 120px;
        background-image: url("../../../../assets/img/profile-pic.jpg");
        background-size: cover;
        border-radius: 50%;
        border: 4px solid rgba(225, 225, 225, 1.5);
        margin-top: -75px;
        margin-left: 25px;
    }

    .profile-page .about {
        min-height: 123px;
        margin-top: -25px;
    }

    .profile-page .about .designation {
        padding-top: 24px;
        padding-left: 7%;
        color: #555;
    }

    .profile-page .about .designation .new-task,
    .profile-page .about .designation .new-task:active {
        border-color: #509DE0;
        color: #509DE0;
        border-radius: 200px;
        font-size: 14px;
        padding: 3px 10px;
    }

    .profile-page .about .designation .new-task:hover {
        color: #fff;
        background-color: #509DE0;
    }

    .profile-page .about .brief {
        overflow-y: hidden;
        height: 100px;
        padding: 5px 35px 5px 20px;
        color: #777;
    }

    .profile-page .about .brief:before {
        content: '';
        height: 67%;
        width: 1px;
        position: absolute;
        left: 0;
        top: 26%;
        background-color: #ccc;
    }

    .profile-page .about .brief h4 {
        font-weight: 700;
    }


    /*chats profile ends*/
</style>