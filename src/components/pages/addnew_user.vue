-<template>
    <card title="<i class='ti-user'></i> Add new user">
    <form-wizard  @on-complete="onComplete" id="adduser_form"
                 title="Add New User"
                 shape="tab"
                 back-button-text="Go back!"
                 next-button-text="Go next!"
                 finish-button-text="We're there"
                 color="#9b59b6">
        <tab-content title="User Profile"
                     icon="ti-user">
            <h2 class="hidden">&nbsp;</h2>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="first_name" class="form-control-label float-sm-left ">First Name
                    </label>
                </div>


                <div class="col-sm-9">
                    <input id="first_name" name="first_name" type="text"
                           placeholder="First Name" class="form-control required"/>

                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="last_name" class="form-control-label float-sm-left ">Last Name
                    </label>
                </div>
                <div class="col-sm-9">
                    <input id="last_name" name="last_name" type="text"
                           placeholder="Last Name" class="form-control required"/>

                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="email" class="form-control-label float-sm-left ">Email </label>
                </div>
                <div class="col-sm-9">
                    <input id="email" name="email" placeholder="E-mail" type="text"
                           class="form-control required email"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="password" class="form-control-label float-sm-left ">Password
                        </label>
                </div>
                <div class="col-sm-9">
                    <input id="password" name="password" type="password"
                           placeholder="Password" class="form-control required"/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3">
                    <label for="password_confirm" class="form-control-label float-sm-left   ">Confirm
                        Password
                    </label>
                </div>
                <div class="col-sm-9">
                    <input id="password_confirm" name="password_confirm" type="password"
                           placeholder="Confirm Password "
                           class="form-control required"/>
                </div>
            </div>
        </tab-content>
        <tab-content title="Bio"
                     icon="ti-id-badge">
            <h2 class="hidden">&nbsp;</h2>
            <div class="row form-group required">
                <div class="col-sm-3 float-sm-right">
                    <label for="dob" class="form-control-label">Date of Birth</label>
                </div>
                <div class="col-sm-9">
                    <datepicker id="dob" placeholder="Select Date" class=""></datepicker>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3 float-sm-right">
                    <label for="dropzone" class="form-control-label">Profile
                        picture</label>
                </div>
                <div class="col-sm-9">
                    <!--<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" url="https://httpbin.org/post"></vue-dropzone>-->
                    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 float-sm-right">
                    <label for="bio" class="control-label">Bio
                        <small>(brief intro)</small>
                    </label>
                </div>
                <div class="col-sm-9">
                    <textarea name="bio" id="bio" class="form-control resize_vertical"
                                                              rows="4"></textarea>
                </div>
            </div>
        </tab-content>
        <tab-content title="Address"
                     icon="ti-location-pin">
            <div class="row form-group">
                <div class="col-sm-3 float-sm-right">
                    <label for="gender" class="form-control-label">Gender</label>
                </div>
                <div class="col-sm-9">
                    <multiselect v-model="object_optiongender" id="gender" :options="object_gender" track-by="name" label="name" placeholder="Select Gender"></multiselect>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3 float-sm-right">
                    <label for="country" class="form-control-label">Country</label>
                </div>
                <div class="col-sm-9">
                    <multiselect v-model="object_countryvalue" id="country" :options="object_country" :multiple="true" group-values="libs" group-label="zone" placeholder="Country" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
                </div>
            </div>
            <div class="row form-group ">
                <div class="col-sm-3 float-sm-right">
                    <label for="state" class="form-control-label">State </label>
                </div>
                <div class="col-sm-9">
                    <input id="state" name="state" type="text" class="form-control"/>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 float-sm-right">
                    <label for="city" class="form-control-label">City </label>
                </div>
                <div class="col-sm-9">
                    <input id="city" name="city" type="text" class="form-control"/>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 float-sm-right">
                    <label for="address" class="form-control-label">Address </label>
                </div>
                <div class="col-sm-9">
                    <input id="address" name="address" type="text"
                           class="form-control"/>
                </div>
            </div>
            <div class="row form-group required">
                <div class="col-sm-3 float-sm-right">
                    <label for="postal" class="form-control-label">Postal/zip</label>
                </div>
                <div class="col-sm-9">
                    <input id="postal" name="postal" type="text" class="form-control"/>
                </div>
            </div>
        </tab-content>
        <tab-content title="User Group"
                     icon="ti-user">
            <p class="text-danger"><strong>Be careful with group selection, if you give
                admin access.. they can access admin section</strong></p>
            <div class="row form-group required">
                <div class="col-sm-3 float-sm-center">
                    <label for="group" class="form-control-label">Group</label>
                </div>
                <div class="col-sm-9">
                    <multiselect v-model="object_groupvalue" id="group" :options="object_group" track-by="name" label="name" placeholder="Select Group"></multiselect>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-sm-3 float-sm-center">
                   Activate User

                </div>
                <div class="col-sm-9">
                      <b-form-checkbox>&nbsp;Activate
                          the user otherwise the user won't be able to access their
                          account.</b-form-checkbox>
                </div>
            </div>
        </tab-content>
    </form-wizard>
    </card>

</template>
<script>
    import Multiselect from 'vue-multiselect';
    Vue.component(Multiselect);
    import Vue from 'vue'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.css'
    import VueFormWizard from 'vue-form-wizard'
    import Datepicker from 'vuejs-datepicker'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    Vue.use(VueFormWizard)
    import card from "./card/card.vue"
export default {
    name: "addnew_user",
    methods: {
        onComplete: function(){
            alert('Yay. Done!');
        }
    },
    components: {
        Multiselect,
        Datepicker,
        card,
        vueDropzone: vue2Dropzone
    },
    data() {
        return {
            object_groupvalue:null,
            object_countryvalue:null,
            object_optiongender:null,
            object_gender:[{
                name:"Male",
                code:'M'
            },{
                name:"Female",
                code:'F'
            },{
                name:"Others",
                code:'O'
            }],
            object_group:[{
                name:'Admin',
                code:'AD'
            },{
                name:'User',
                code:'US'
            }],
            tag_value: [{
                name: 'Javascript',
                code: 'js'
            }],
            object_country: [
                {
                    zone: 'Alaskan/Hawaiian Time Zone',
                    libs: [
                        { name: 'Alaska'},
                        { name: 'Hawaii'}
                    ]
                },
                {
                    zone: 'Mountain Time Zone',
                    libs: [
                        { name: 'Arizona'},
                        { name: 'Colorado'},
                        { name: 'Idaho'},
                        { name: 'Montana'},
                        { name: 'Nebraska'},
                        { name: 'New Mexico'},
                        { name: 'North Dakota'},
                        { name: 'Utah'},
                        { name: 'Wyoming'}

                    ]
                },
                {
                    zone: 'Central Time Zone',
                    libs: [
                        { name: 'Alabama'},
                        { name: 'Arkansas'},
                        { name: 'Illinois'},
                        { name: 'Iowa'},
                        { name: 'Kansas'},
                        { name: 'Kentucky'},
                        { name: 'Louisiana'},
                        { name: 'Minnesota'},
                        { name: 'Mississippi'},
                        { name: 'Missouri'},
                        { name: 'Oklahoma'},
                        { name: 'South Dakota'},
                        { name: 'Texas'},
                        { name: 'Tennessee'},
                        { name: 'Wisconsin'}
                    ]
                },
                {
                    zone: 'Eastern Time Zone',
                    libs: [
                        { name: 'Connecticut'},
                        { name: 'Delaware'},
                        { name: 'Florida'},
                        { name: 'Georgia'},
                        { name: 'Indiana'},
                        { name: 'Maine'},
                        { name: 'Maryland'},
                        { name: 'Massachusetts'},
                        { name: 'Michigan'},
                        { name: 'New Hampshire'},
                        { name: 'New Jersey'},
                        { name: 'New York'},
                        { name: 'North Carolina'},
                        { name: 'Ohio'},
                        { name: 'Pennsylvania'},
                        { name: 'Rhode Island'},
                        { name: 'South Carolina'},
                        { name: 'Vermont'},
                        { name: 'Virginia'},
                        { name: 'West Virginia'}
                    ]
                }
            ],
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 1,
                maxFiles:1,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    mounted: function() {
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/jasny-bootstrap/dist/css/jasny-bootstrap.min.css"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="../../assets/css/custom_css/vuewizard.css"></style>
<style>
    .vdp-datepicker input,.multiselect__tags{
        display: block;
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15
    }
    .multiselect .multiselect__tags{
        padding: 5px 0 0 0;
        min-height:30px;
        height: 33px;
    }
    @media(max-width:320px){
        #dropzone{
            padding: 10px;
        }
        .dz-preview{
            margin: 0 !important;
        }
    }
</style>

