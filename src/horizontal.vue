<template>
    <div class="horizontal">
        <clear_header></clear_header>
        <div class="horizontal-nav">
            <div class="">
                <!-- sidebar: style can be found in sidebar-->
                <button class="d-lg-none bg-light m-2 toggle-menu"  @click="show"><span class="ti-menu p-1"></span>Menu</button>
                <section class="sidebar " v-bind:class="{active: isActive==1}">
                    <div id="menu" role="navigation">
                        <vmenu>
                            <vsub-menu title="Dashboards" icon="ti-home">
                                <vmenu-item link="/" icon="menu-icon ti-desktop"><span class="txt_dash">Dashboard 1</span></vmenu-item>
                                <vmenu-item link="/index2" icon="menu-icon ti-layout-list-large-image icon_layout">Dashboard 2</vmenu-item>
                            </vsub-menu>
                            <vsub-menu title="Elements" icon="ti-pencil-alt icon_pencil">
                                <vsub-menu title="E-Commerce" icon="leftmenu_icon ti-desktop">
                                    <vmenu-item link="/edashboard" icon="leftmenu_icon ti-desktop">Edashboard</vmenu-item>
                                    <vmenu-item link="/product_gallery"  icon="leftmenu_icon ti-gallery">Product gallery</vmenu-item>
                                    <vmenu-item link="/product_details"  icon="leftmenu_icon ti-info-alt">Product details</vmenu-item>
                                </vsub-menu>
                                <vsub-menu title="Forms" icon="leftmenu_icon ti-check-box">
                                    <vsub-menu title="Features" icon="leftmenu_icon ti-receipt">
                                        <vmenu-item link="/form-elements"  icon="fa fa-fw ti-cup">Form Elements</vmenu-item>
                                        <vmenu-item link="/realtime_form"  icon="leftmenu_icon ti-write">Realtime Form</vmenu-item>
                                        <vmenu-item link="/form-validations"  icon="leftmenu_icon ti-alert">Form Validations</vmenu-item>
                                        <vmenu-item link="/form_layouts"  icon="leftmenu_icon ti-layout-width-default">Form Layout</vmenu-item>
                                        <vmenu-item link="/complex_forms"  icon="leftmenu_icon ti-layout-cta-left">Complex Forms</vmenu-item>
                                        <vmenu-item link="/radio_check"  icon="leftmenu_icon ti-check-box">Radio&Checkboxes</vmenu-item>
                                    </vsub-menu>
                                    <vsub-menu title="Components" icon="leftmenu_icon ti-clipboard">
                                        <vmenu-item link="/form_editors"  icon="leftmenu_icon ti-pencil">Form Editors</vmenu-item>
                                        <vmenu-item link="/form_wizards"  icon="leftmenu_icon ti-settings">Form Wizards</vmenu-item>
                                        <vmenu-item link="/dropdowns"  icon="leftmenu_icon ti-widget-alt">Drop Downs</vmenu-item>
                                        <vmenu-item link="/vue_multiselect"  icon="leftmenu_icon ti-widget-alt">Vue Multiselect</vmenu-item>
                                        <vmenu-item link="/vue_slider"  icon="leftmenu_icon ti-bell">Vue Slider</vmenu-item>
                                        <vmenu-item link="/date_pickers"  icon="leftmenu_icon ti-calendar">Date Picker</vmenu-item>
                                        <vmenu-item link="/advanced_date_pickers"  icon="leftmenu_icon ti-notepad">Advanced Date Picker</vmenu-item>
                                    </vsub-menu>
                                </vsub-menu>
                                <vsub-menu title="UI Features" icon="leftmenu_icon ti-desktop">
                                    <vmenu-item link="/general_components" icon="leftmenu_icon ti-plug">General Components</vmenu-item>
                                    <vmenu-item link="/buttons"  icon="leftmenu_icon ti-layout-placeholder">Buttons</vmenu-item>
                                    <vmenu-item link="/tabs_accordions"  icon="leftmenu_icon ti-layers">Tabs Accordions</vmenu-item>
                                    <vmenu-item link="/font_icons"  icon="leftmenu_icon ti-ink-pen">Font Icons</vmenu-item>
                                    <vmenu-item link="/advanced_modals"  icon="leftmenu_icon ti-brush-alt">Advanced Modals</vmenu-item>
                                    <vmenu-item link="/timeline"  icon="leftmenu_icon ti-time">Timeline</vmenu-item>
                                </vsub-menu>
                                <vsub-menu title="UI Components" icon="leftmenu_icon ti-check-box">
                                    <vmenu-item link="/pickers"  icon="leftmenu_icon ti-brush">Pickers</vmenu-item>
                                    <vmenu-item link="/color_pickers"  icon="leftmenu_icon ti-paint-bucket">Color Picker</vmenu-item>
                                    <vmenu-item link="/grid_layout"  icon="leftmenu_icon ti-layout-grid2">Grid Layout</vmenu-item>
                                    <vmenu-item link="/tags_input"  icon="leftmenu_icon ti-tag">Tags Input </vmenu-item>
                                    <vmenu-item link="/nestable_list"  icon="leftmenu_icon ti-view-list">Nestable List</vmenu-item>
                                    <vmenu-item link="/sweet_alert"  icon="leftmenu_icon ti-bell">Sweet Alert</vmenu-item>
                                    <vmenu-item link="/toastr_notifications"  icon="leftmenu_icon ti-tablet">Toaster Notifications</vmenu-item>
                                    <vmenu-item link="/draggable_portlets"  icon="leftmenu_icon ti-control-shuffle">Draggable Portlets</vmenu-item>
                                    <vmenu-item link="/jstree"  icon="leftmenu_icon ti-control-shuffle">JS Tree</vmenu-item>
                                    <vmenu-item link="/transitions"  icon="leftmenu_icon ti-star">Transitoins</vmenu-item>
                                    <vmenu-item link="/listjs"  icon="leftmenu_icon ti-list">Listjs</vmenu-item>
                                </vsub-menu>
                                <vmenu-item link="/widgets"  icon="leftmenu_icon ti-widgetized">Widget</vmenu-item>
                            </vsub-menu>
                            <vsub-menu title="Components" icon="ti-world icon_world">
                                <vsub-menu title="Data Tables" icon="leftmenu_icon ti-layout-grid4">
                                    <vmenu-item link="/simple_tables"  icon="leftmenu_icon ti-layout">Simple Data Tables</vmenu-item>
                                    <vmenu-item link="/advanced-tables"  icon="leftmenu_icon ti-server">Advanced Data Tables</vmenu-item>
                                </vsub-menu>
                                <vsub-menu title="Charts" icon="menu-icon ti-bar-chart">
                                    <vmenu-item link="/flot_charts"  icon="fa fa-fw ti-bar-chart-alt">Flot Charts</vmenu-item>
                                    <vmenu-item link="/nvd3_charts"  icon="fa fa-fw ti-stats-up">NVD3 Charts</vmenu-item>
                                    <vmenu-item link="/circle_sliders"  icon="leftmenu_icon ti-basketball">Circle Slider</vmenu-item>
                                    <vmenu-item link="/chartist"  icon="fa fa-fw ti-bar-chart">Chartist Charts</vmenu-item>
                                    <vmenu-item link="/frappe_charts"  icon="fa fa-fw ti-stats-up">Frappe Charts</vmenu-item>
                                </vsub-menu>
                                <vmenu-item link="/calendar"  icon="menu-icon ti-calendar">Calendar<h5 class="badge badge-success float-right mt-1 badge1">7</h5></vmenu-item>
                                <vsub-menu title="Gallery" icon="menu-icon ti-gallery">
                                    <vmenu-item link="/masonry_gallery"  icon="fa fa-fw ti-gallery">Masonry Gallery</vmenu-item>
                                    <vmenu-item link="/dropify"  icon="fa fa-fw ti-dropbox">Dropify</vmenu-item>
                                    <vmenu-item link="/image_hover"  icon="fa fa-fw ti-image">Image Hover</vmenu-item>
                                    <vmenu-item link="/image_filter"  icon="fa fa-fw ti-filter">Image Filter</vmenu-item>
                                    <vmenu-item link="/image_magnifier"  icon="fa fa-fw ti-zoom-in">Image Magnifier</vmenu-item>
                                </vsub-menu>
                                <vsub-menu title="Maps" icon="menu-icon ti-location-pin">
                                    <vmenu-item link="/gmaps"  icon="fa fa-fw ti-world">Google Maps</vmenu-item>
                                    <vmenu-item link="/vector_maps"  icon="fa fa-fw ti-map">Vector Maps</vmenu-item>
                                </vsub-menu>
                            </vsub-menu>
                            <vsub-menu title="Users" icon="menu-icon ti-user">
                                <vmenu-item link="/users_list" icon="leftmenu_icon ti-menu-alt">User List</vmenu-item>
                                <vmenu-item link="/addnew_user" icon="leftmenu_icon ti-user">Add New User</vmenu-item>
                                <vmenu-item link="/user_profile" icon="leftmenu_icon ti-id-badge">View Profile</vmenu-item>
                                <vmenu-item link="/deleted_users" icon="leftmenu_icon ti-trash">Delete User</vmenu-item>
                            </vsub-menu>
                            <vsub-menu title="Pages" icon="menu-icon ti-files">
                                <vmenu-item link="/login" icon="fa fa-fw ti-shift-right">Login</vmenu-item>
                                <vmenu-item link="/register" icon="fa fa-fw ti-check-box">Register</vmenu-item>
                                <vmenu-item link="/forgot_password" icon="fa fa-fw ti-help">Forgot Password</vmenu-item>
                                <vmenu-item link="/reset_password" icon="fa fa-fw ti-key">Reset Password</vmenu-item>
                                <vmenu-item link="/lockscreen" icon="fa fa-fw ti-lock">Lock Screen</vmenu-item>
                            </vsub-menu>
                            <vsub-menu title="Extra Pages" icon="menu-icon ti-face-smile">
                                <vmenu-item link="/blank"  icon="fa fa-fw ti-file">Blank</vmenu-item>
                                <vmenu-item link="/invoice"  icon="fa fa-fw ti-layout-cta-left">Invoice</vmenu-item>
                                <vmenu-item link="/pricing"  icon="fa fa-fw ti-time">Pricing</vmenu-item>
                                <vmenu-item link="/*"  icon="fa fa-fw ti-unlink">404</vmenu-item>
                                <vmenu-item link="/500"  icon="fa fa-fw ti-face-sad">500</vmenu-item>
                            </vsub-menu>
                        </vmenu>
                        <!-- / .navigation -->
                    </div>
                    <!-- menu -->
                </section>
                <!-- /.sidebar -->
            </div>
        </div>
        <div class="wrapper">
            <right_side>
                <router-view></router-view>
            </right_side>
        </div>
        <div class="background-overlay" @click="right_close"></div>
    </div>
</template>
<script>
    import {
        vmenu,
        vmenuItem,
        vsubMenu
    } from './horizontal/menu';
    require("./horizontal/menu/tidy-menu.css");
    import clear_header from "./components/layout/clear_header";
    import left_side from "./components/layout/left-side/default/left-side";
    import right_side from "./components/layout/right-side";
    export default {
        name: 'layout',
        components: {
            clear_header,
            right_side,
            left_side,
            vmenu,
            vsubMenu,
            vmenuItem
        },
        created: function() {},
        mounted: function() {},
        data(){
            return{
                isActive:0
            }
        },
        methods: {
            right_close() {
                this.$store.commit('rightside_bar', "close");
            },
            show(){
                if(this.isActive==1){
                    this.isActive=0;
                }
                else{
                    this.isActive=1;
                }
            }
        },
        mounted() {
            require("./horizontal/menu/tidy-menu.js")
        }
    }
</script>
<style lang="scss" src="./assets/sass/dark/custom.scss"></style>
<style src="./horizontal/css/default.scss" lang="scss"></style>
<style scoped lang="scss">
    .left-aside {
        background-repeat: repeat-y;
        border:none;
        width: 100%;
    }
    .navigation {
        padding: 0;
    }

    #menu .vuemenu .collapse-item{
        padding-top: 15px;
        padding-bottom: 12px;
    }
    /*side bar nav */
    .sidebar {
        display: block;
    }
    .content {
        display: block;
        width: auto;
        overflow-x: hidden;
        padding: 0 15px;
    }
    .left-aside{
        width: 100%;
    }
    .sidebar{
        width:100%;
    }
</style>
<style>
    body > #app .header{
        z-index: 99999;
    }
    body.fixed-header #app .header{
        margin-bottom: 0;
    }
    .rightsidebar-right{
        padding-top: 117px;
    }
    #menu .navigation{
        width:100%;
    }
    #menu .navigation > .collapse-item{
        width:16.5%;
    }
    .collapse-item .submenu-header:hover,.collapse-item .submenu-header:active,.collapse-item.-active > .submenu-header{
        background-color: transparent !important;
    }
    ul.Menu.-horizontal{
        margin-bottom: 0 !important;
    }
    .right-aside{
        padding-top: 0 !important;
    }
    #menu .navigation .submenu .submenu-content{
        margin-top: 20px;
        width: 210px;
    }
    .horizontal-nav{
        margin-top: 54px;
        padding-left: 55px;
        padding-right: 55px;
        position: fixed;
        z-index: 9999;
        background-color: #fff;
        box-shadow: 1px 1px 5px 0 #eee;
        width: 100%;
    }
    @media(max-width: 1024px) {
        .horizontal-nav{
            padding-right: 0;
            padding-left: 0;
        }
    }
    .right-aside > .content-header{
        margin:109px -10px 25px;
    }
    .collapse-item .submenu-header{
        padding-left:26px !important;
        padding-right: 26px !important;
    }
    #menu .navigation .submenu a.active{
        border: none    ;
    }
    #menu .navigation .submenu a{
        padding: 8px 11px;
    }
    .collapse-item .submenu-content{
        overflow-y: visible !important;
        background-color: #fff !important;
        box-shadow: 0 0px 1px 1px #dadada;
    }
    .vuemenu>.collapse-item.submenu>a{
        text-align: center !important;
    }


    /*sweet alert*/
    .swal2-container.in{
        z-index: 99999;
    }
    @media(max-width: 320px) {
        body > #app .header .navbar-nav .message_dropdown .dropdown-menu.show{
            left:20px !important;
        }
        .rightsidebar-right{
            padding-top: 100px !important;
        }
    }
    @media (max-width: 768px) {
        .horizontal-nav{
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        .rightsidebar-right{
            padding-top: 56px;
        }
        .vuemenu.navigation{
            margin-left: 0;
        }
        #menu .navigation{
            min-height: 50vh;
            height: 70vh;
            overflow-y: scroll;
        }
        .right-aside > .content-header{
            margin:98px -10px 25px;
        }

    }
    @media (min-width: 320px) and (max-width: 768px) {
        #right{
            z-index: 9999;
        }
        .sidebar{
            display: none !important;
        }
        .active{
            display: block !important;
        }
        .collapse-item .submenu-content{
            box-shadow: none;
        }
        .Menu li > ul{
            left: 0 !important;
        }
        .submenu-content li{
            padding-left: 10px;
        }
        #menu .navigation .submenu .submenu-content li a{
            padding-left: 40px !important;
        }
        #menu .navigation .submenu .submenu-content li ul li a{
            padding-left: 55px !important;
        }
        #menu .navigation .submenu .submenu-content li ul li ul li a{
            padding-left: 65px !important;
        }
        .Menu.-horizontal > li{
            margin-right: 0
        }
        #menu .navigation .submenu .submenu-content{
            margin-top: 8px !important;
        }
        #menu .navigation > .collapse-item{
            width:100%;
        }
        .vuemenu>.collapse-item.submenu>a{
            text-align: left !important;
        }

    }
    @media (min-width: 320px) and (max-width:425px) {
        .horizontal-nav{
            margin-top: 100px;
        }
        .right-aside > .content-header{
            margin:140px -10px 25px !important;
        }
        .navbar .navbar-nav{
            margin-right: auto;
            margin-left: auto;
        }
    }
    .toggle-menu{
        border: 1px solid #eee;
        font-size: 18px;
    }
    .navbar-btn.sidebar-toggle{
        display: none !important;
    }

    @media(max-width:1024px){
        .horizontal  .profile-page .designation{
            padding-left:40px !important;
        }
    }
    @media(max-width:768px){
        .horizontal  .profile-page .designation{
            padding-left: 20px !important;
        }
    }
    @media(min-width:320px) and (max-width:375px){
        .horizontal  .profile-page .designation{
            margin-top: 20px;
        }
        .profile-page .about .brief{
            margin-left:32px;
        }
    }

    .dd-w {
        z-index: 99;
    }
    .modal-backdrop{
        z-index: 99999;
    }
    .modal{
        z-index: 999999;
    }
</style>
