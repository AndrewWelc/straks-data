<template>
    <div>
        <div class="card personal-chat">
            <div class="card-header">
                <div class="card-title"><img class="chat-image rounded-circle float-left" height="36"
                                             width="36"
                                             src="../../assets/img/authors/avatar5.jpg" alt="avatar-image">
                    <div class="header-elements float-left">Wilton zeph
                        <br>
                        <small class="status"><b>Online</b></small>
                    </div>
                </div>
                <div class="float-right options">
                    <b-dd class="attachment-menu">
                        <template slot="button-content"><i class="ti-clip attachment"></i>
                        </template>
                        <b-dropdown-item class="attachment-header">
                            <a href="#"><i class="ti-file text-primary"></i>Document</a>
                        </b-dropdown-item>
                        <b-dropdown-item class="attachment-header">
                            <a href="#"><i class="ti-gallery text-primary"></i>Gallery</a>
                        </b-dropdown-item>
                        <b-dropdown-item class="attachment-header">
                            <a href="#"><i class="ti-location-arrow text-primary"></i>Location</a>
                        </b-dropdown-item>
                        <b-dropdown-item class="attachment-header">
                            <a href="#"><i class="ti-camera text-primary"></i>Camera</a>
                        </b-dropdown-item>

                    </b-dd>
                    <b-dd class="content-menu">
                        <template slot="button-content"><i class="ti-more-alt more"></i>
                        </template>
                        <b-dropdown-item class="content-header">
                            Profile
                        </b-dropdown-item>
                        <b-dropdown-item class="content-header">
                            Media
                        </b-dropdown-item>
                        <b-dropdown-item class="content-header">
                            Mute
                        </b-dropdown-item>
                        <b-dropdown-item class="content-header">
                            More
                        </b-dropdown-item>
                    </b-dd>

                </div>
            </div>
            <div class="card-body p-0">
                <!--</div>-->
                <div class="chat-conversation">
                    <v-scroll :height="height" :color="bar_color" max-height="100%" min-height="120px" :bar-width="bar_width" :alwaysvisible="visible">
                            <ul class="conversation-list" id="scroll" ref='messageDisplay'>
                            <li class="clearfix odd conversers1">

                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2 m-t-10">
                                        <p class="text-left">
                                            Hello Wilton, are the review papers ready?
                                            <i class="text-right">8:31 pm</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix  m-t-10 conversers2">
                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2">
                                        <p>
                                            Not yet, it will take a bit of time for you to get them.
                                            <br><i class="text-right">8:31 pm</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix odd m-t-10 conversers1">
                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2">
                                        <p class="text-left">
                                            Treat this on urgent Basis.
                                            <i class="text-right">8:33 pm</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix  m-t-10 conversers2">
                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2">
                                        <p>
                                            I will make it as early as possible.
                                            <br><i class="text-right">8:34 pm</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix odd m-t-10 conversers1">
                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2">
                                        <p class="text-left">
                                            Okay.
                                            <i class="text-right">8:35 pm</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="clearfix m-t-10 conversers2">
                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2">
                                        <p>
                                            If there is anything else..
                                            <br><i class="text-right">8:35 pm</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                                <div v-for="(newmsg,index) in msgarr">
                            <li class="clearfix odd m-t-10 conversers1">
                                <div class="conversation-text">
                                    <div class="ctext-wrap mt-2">
                                        <p class="text-left">
                                            {{newmsg.msg}}
                                            <i class="text-right">{{newmsg.time}}</i>
                                        </p>
                                    </div>
                                </div>
                            </li>
                                <li class="clearfix m-t-10 conversers2">
                                    <div class="conversation-text">
                                        <div class="ctext-wrap mt-2">
                                            <p class="text-left" v-cloak>
                                                {{newmsg.reponse}}
                                                <i class="text-right">{{newmsg.time}}</i>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                </div>
                        </ul>
                    </v-scroll>
                    <form id="main_input_box" @submit.prevent>
                        <div class="row">
                            <div class="col-12 m-b-15">
                                <div class="input-group text-field">
                                    <input type="search"
                                           class="form-control chat-input custom_textbox"
                                           id="custom_textbox" placeholder="Type a message"
                                           required v-model="input">
                                    <span class="input-group-btn">
                                        <button class="btn btn-success send-btn" type="submit" @click="add">
                                            <i class="menu-icon ti-location-arrow text-white"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!--</div>-->
            </div>
        </div>
    </div>
</template>
<script>
    const moment = require("moment");
    import vScroll from "../../components/plugins/scroll/vScroll.vue"
    export default {
        name:'chat',
        data(){
            return{
                styleObject:{
                    margin:'auto auto auto 0',
                    paddding:10
                },
                isActive:0,
                bar_color: "#ccc",
                height: "300px",
                bar_width: "10px",
                visible: false,
                input:'',
                msgarr:[],
                response:["Oh! Cool", "How do you Do", "Hope! you are having good time", "Really!","That's, Awesome"],
            }
        },
        components:{
            vScroll
        },
        methods:{
            add() {
                if (this.input.length > 0) {
                    var x = moment().format("h:mm a");
                    this.msgarr.push({
                        msg: this.input,
                        time: x,
                        reponse: this.response[Math.floor(Math.random() * this.response.length)],
                        time: x
                    });
                    this.input = "";

                }
            },
                mouseEnter(){
                     this.isActive=1
                },
            mouseLeave(){
                    this.isActive=0
            }
        }
    }
</script>
<style>

    /*chat*/

    .personal-chat .panel-heading span {
        margin-top: 3px;
    }

    .personal-chat .panel-body {
        padding: 0;
    }

    .personal-chat .options .dropdown-menu {
        min-width: 100px;
    }

    .personal-chat .header-elements {
        padding-top: 5px;
        line-height: 18px;
    }

    .personal-chat .header-elements .status b {
        color: #777;
    }

    .personal-chat .header-elements .status:after {
        content: "";
        position: absolute;
        height: 9px;
        width: 9px;
        left: 45px;
        top: 37px;
        border: 2px solid #fff;
        border-radius: 50%;
        display: block;
        background-color: #6cd187;
    }

    .personal-chat .chat-image {
        margin-right: 10px;
    }

    .personal-chat .options {
        margin-top: 5px;
    }

    .personal-chat .options .dropdown-menu li {
        border-bottom: 1px solid #e5e5e5;
    }

    .personal-chat .options .dropdown-menu li:last-child {
        border-bottom: 0;
    }

    .personal-chat .options .more {
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        display: inline-block;
    }

    .personal-chat .options .attachment {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(945deg);
        display: inline-block;
        font-size: 18px;
    }

    .personal-chat .options i {
        padding: 5px;
    }

    .personal-chat .chat-conversation {
        background-image: url(../../assets/img/brick-wall.png);
    }

    .personal-chat .conversation-list {
        list-style: none;
        padding: 0 9px 0 0;
        margin: 0;
    }

    .personal-chat .conversation-list .chat-avatar {
        display: inline-block;
        float: left;
        text-align: center;
        width: 42px;
    }

    .personal-chat .conversation-list .chat-avatar img {
        border-radius: 100%;
        width: 100%;
    }

    .personal-chat .conversation-list .chat-avatar i {
        font-size: 12px;
        font-style: normal;
    }

    .personal-chat .conversation-list .conversation-text {
        display: inline-block;
        float: left;
        font-size: 13px;
        margin-left: 15px;
        width: 70%;
    }

    .personal-chat .conversation-list  .ctext-wrap {
        border-radius: 3px;
        display: inline-block;
        padding: 5px 10px;
        position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .personal-chat .conversation-list .conversers1 .ctext-wrap {
        background: #D8F1E4;
    }

    .personal-chat .conversation-list .conversers2 .ctext-wrap {
        background: #fff;
    }

    .personal-chat .conversation-list .conversers2 .ctext-wrap:after {
        border-top-color: #fff;
        border-right-color: #fff;
    }

    .personal-chat .conversation-list .ctext-wrap i {
        color: #777;
        display: block;
        font-size: 11px;
        font-style: normal;
        position: relative;
    }

    .personal-chat .conversation-list .ctext-wrap p {
        margin: 0;
        padding-top: 3px;
    }

    .personal-chat .conversation-list .ctext-wrap:after {
        right: 98%;
        top: 0;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        margin-left: -1px;
        border-top: 0 solid #fff;
        border-right: 12px solid #fff;
        border-bottom: 14px solid transparent;
    }

    .personal-chat .conversation-list .odd .conversation-text {
        float: right;
        margin-right: 5px;
        text-align: right;
        width: 78%;
    }

    .personal-chat .conversation-list .odd .ctext-wrap:after {
        border-color: rgba(238, 238, 242, 0);
        left: 99%;
        margin-right: -1px;
        border-top: 0 solid #D8F1E4;
        border-left: 12px solid #D8F1E4;
        border-bottom: 14px solid transparent;
    }

    .personal-chat .text-field {
        padding: 6px 10px;
    }

    .personal-chat #main_input_box .custom_textbox {
        min-height: 42px;
    }

    .personal-chat .text-field .send-btn {
        padding: 8px 8px 3px 2px;
    }

    .personal-chat .text-field .send-btn i {
        font-size: 25px;
        -webkit-transform: rotate(133deg);
        -moz-transform: rotate(133deg);
        -ms-transform: rotate(133deg);
        -o-transform: rotate(133deg);
        transform: rotate(133deg);
        display: inline-block;
    }


    /*chat loader*/

    .personal-chat .ctext-wrap .reply {
        width: 98px;
        color: #777;
    }

    .personal-chat .spinner {
        padding-top: 6px;
    }

    .personal-chat .spinner>div {
        width: 5px;
        height: 5px;
        background-color: #777;
        margin-right: 2px;
        border-radius: 50%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    .personal-chat .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    .personal-chat .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: translateY(-7px);
        }
        40% {
            -webkit-transform: scale(1.0);
            transform: translateY(0);
        }
    }
    .personal-chat .chat-conversation .ss-container{
        height:380px !important;
    }

    @media(min-width: 768px) and (max-width:1024px){
        .personal-chat .chat-conversation .ss-container{
            height:475px !important;
        }
    }
    .personal-chat .btn-secondary{
        background-color: #0F9E5E;
    }
    .personal-chat .dropdown-menu .dropdown-item{
        border-bottom: 1px solid #333 !important;
    }
    .personal-chat .btn-secondary,.personal-chat .btn-secondary:active{
        background-color:rgba(0, 0, 0, 0.0) !important;
        color: #333 !important;
        border: none;
        box-shadow: none !important;
    }
    .personal-chat .attachment-menu .btn-secondary:after,.personal-chat .content-menu .btn-secondary:after{
        display: none;
    }
    .personal-chat .dropdown-menu{
        padding: 0;
    }
    [v-cloak]{
        display: none;
        transition-duration: 1s;
    }
    /*chat end*/

</style>