<template>
<div>
    <div class="row">
        <div class="col-12">
            <card title="<i class='fa fa-fw ti-check-box'></i> Multiple Select with Search Option">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <input type="search" class="form-control" id="search" placeholder="Add your options.." v-model="search" >
                    </div>
                    <div class="col-12 col-sm-6 col-md-4" v-for="drink in allDrinks">
                        <div class="pull-left">
                            <i class="fa fa-tags" ></i>
                        </div>
                        <div class="searchable-container">
                            <div data-toggle="buttons" class="btn-group bizmoduleselect"  >
                                <label class="btn btn-secondary" :class="{ active: drink.active}" @click="drink.active=!drink.active">
                                    <div class="bizcontent">
                                        <input type="checkbox" name="var_id[]" autocomplete="off" value="" @click.stop.prevent class="d-none">
                                        <i class="fa" :class="{'fa-check':drink.active}"></i>
                                        <h5>{{drink.name}}</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='fa fa-fw ti-check-box'></i> Bootstrap Vue Checkboxes">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="p-3">
                            <h5>Default Checkboxes</h5>
                            <b-form-checkbox class="ml-2" ></b-form-checkbox>
                            <b-form-checkbox></b-form-checkbox>
                            <b-form-checkbox  :disabled=true class="disabled"></b-form-checkbox>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-12">
                        <div class="p-3">
                            <h5>Button Group checkbox</h5>
                            <b-form-checkbox-group buttons v-model="selected" button-variant="success" name="butons1" :options="options_buttons" class="check_btn">
                            </b-form-checkbox-group>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="p-3">
                            <h5>Stacked Checkboxes</h5>
                            <b-form-checkbox-group stacked v-model="selected" :options="options" >
                            </b-form-checkbox-group>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="p-3">
                            <h5>Stacked Button Group checkbox</h5>
                            <b-form-checkbox-group buttons v-model="selected" button-variant="primary" stacked :options="btn_stacked_options">
                            </b-form-checkbox-group>
                        </div>
                    </div>
                </div>
            </card>
        </div>
        <div class="col-md-6">
            <card title="<i class='fa fa-fw ti-check'></i> Bootstrap Vue Radio Buttons">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="p-3">
                            <h5>Default Radios</h5>
                            <b-form-radio value="default1" name="default">
                            </b-form-radio>
                            <b-form-radio value="default2" name="default">
                            </b-form-radio>
                            <b-form-radio value="default3" name="default" :disabled=true class="disabled">
                            </b-form-radio>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-12">
                        <div class="p-3">
                            <h5>Radio Buttons</h5>
                            <b-form-radio-group id="btnradios1"
                                                buttons

                                                :options="radio_options"
                                                name="radiosBtnDefault"  button-variant="success"/>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="p-3">
                            <h5>Stacked Radios</h5>
                            <b-form-radio-group
                                    :options="stacked_radio_options"
                                    stacked
                                    name="radiosStacked">
                            </b-form-radio-group>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="p-3">
                            <h5>Stacked Button Radios</h5>
                            <b-form-radio-group id="btnradios3"
                                                buttons
                                                stacked
                                                :options="btn_radio_stacked"
                                                name="radioBtnStacked"  button-variant="primary"/>
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </div>
<div class="row">
    <div class="col-12">
        <card title="<i class='fa fa-fw ti-arrow-circle-up'></i> Awesome Radio &amp; Checkbox">
            <div class="box-body">
                <div class="row">
                    <div class="col-sm-6 awesomeradio_grid_sep">
                        <div class="row">
                            <div class="col-12 ">
                                <h5>Checkboxes</h5>
                                <div class="row  text-left text-lg-right text-xl-left">
                                    <div class="col-6 col-sm-4">
                                        <div class="checkbox checkbox-default">
                                            <input id="checkbox1" class="styled styled1" type="checkbox">
                                            <label for="checkbox1">Default</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-4">
                                        <div class="checkbox checkbox-primary">
                                            <input id="checkbox2" class="styled styled1" type="checkbox">
                                            <label for="checkbox2" class="marginTop">Primary</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-4">
                                        <div class="checkbox checkbox-success">
                                            <input id="checkbox3" class="styled styled1" type="checkbox">
                                            <label for="checkbox3" class="marginTop">Success</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-4 col-lg-4">
                                        <div class="checkbox checkbox-info">
                                            <input id="checkbox4" class="styled styled1" type="checkbox">
                                            <label for="checkbox4">Info &nbsp;&nbsp;</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-4 ">
                                        <div class="checkbox checkbox-warning">
                                            <input id="checkbox5" class="styled styled1" type="checkbox">
                                            <label for="checkbox5" class="marginTop">Warning</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-4">
                                        <div class="checkbox checkbox-danger">
                                            <input id="checkbox6" class="styled styled1" type="checkbox">
                                            <label for="checkbox6" class="marginTop">Danger</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <h5>Inline checkboxes</h5>
                                        <div class="row  text-left text-lg-right text-xl-left">
                                            <div class="col-6 col-sm-4">
                                                <div class="checkbox ">
                                                    <input type="checkbox" class="styled" id="inlineCheckbox1"
                                                           value="option1">
                                                    <label for="inlineCheckbox1">Inline 1</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                                <div class="checkbox  ">
                                                    <input type="checkbox" class="styled" id="inlineCheckbox2"
                                                           value="option1">
                                                    <label for="inlineCheckbox2">Inline 2</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-4">
                                                <div class="checkbox ">
                                                    <input type="checkbox" class="styled" id="inlineCheckbox3"
                                                           value="option1">
                                                    <label for="inlineCheckbox3">Inline 3</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <h5>
                                            Disabled
                                        </h5>
                                        <div class="inline-response">
                                            <div class="row">
                                                <div class="col-6 col-sm-4">
                                                    <div class="checkbox">
                                                        <input class="styled" id="checkbox9" type="checkbox"
                                                               disabled><label for="checkbox9">Disabled</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-sm-4">
                                                    <div class="checkbox checkbox-success ">
                                                        <input class="styled styled" id="checkbox10" type="checkbox"
                                                               disabled checked="true"><label for="checkbox10">This too</label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-sm-4">
                                                    <div class="checkbox checkbox-warning checkbox-circle">
                                                        <input class="styled" id="checkbox11" type="checkbox"
                                                               disabled checked="true"><label for="checkbox11">And this
                                                    </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-12">
                                <h5>Radios</h5>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="radio">
                                            <input type="radio" name="radio1" id="radio1"
                                                   value="option1">
                                            <label for="radio1">Small</label>
                                        </div>
                                        <div class="radio">
                                            <input type="radio" name="radio1" id="radio2"
                                                   value="option2">
                                            <label for="radio2">Big</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="radio radio-danger">
                                            <input type="radio" name="radio2" id="radio3"
                                                   value="option1">
                                            <label for="radio3">Next</label>
                                        </div>
                                        <div class="radio radio-danger">
                                            <input type="radio" name="radio2" id="radio4"
                                                   value="option2">
                                            <label for="radio4">One</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <h5>
                                            Disabled state
                                        </h5>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="radio radio-danger">
                                                    <input type="radio" name="radio3" id="radio5"
                                                           value="option1" disabled>
                                                    <label for="radio5">Next</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="radio">
                                                    <input type="radio" name="radio3" id="radio6"
                                                           value="option2" checked="true" disabled>
                                                    <label for="radio6">
                                                        &nbsp;One
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <h5>Inline radios</h5>
                                        <div class="inline-response">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="radio radio-info radio-inline m-l-18">
                                                        <input type="radio" id="inlineRadio1" value="option1"
                                                               name="radioInline">
                                                        <label for="inlineRadio1"> &nbsp;Inline One </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="radio radio-inline m-l-18">
                                                        <input type="radio" id="inlineRadio2" value="option2"
                                                               name="radioInline">
                                                        <label for="inlineRadio2"> &nbsp;Inline Two </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-3">
                                        <h5>
                                            Radio As Checkboxes
                                        </h5>
                                        <div class="checkbox  checkbox-inline checkbox-default">
                                            <input type="radio" name="radio4" id="radio7" value="option1"
                                                   checked="true">
                                            <label for="radio7">
                                                &nbsp;Default
                                            </label>
                                        </div>
                                        <div class="checkbox  checkbox-inline checkbox-success">
                                            <input type="radio" name="radio4" id="radio8" value="option2">
                                            <label for="radio8"><span>Success</span></label>
                                        </div>
                                        <div class="checkbox  checkbox-inline checkbox-danger">
                                            <input type="radio" name="radio4" id="radio9" value="option3">
                                            <label for="radio9">
                                                &nbsp;<span>Danger</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </card>
    </div>
</div>
    <!--main content ends-->
</div>
</template>
<script>
    import card from "./card/card.vue"
import prettyCheckable from "../../vendors/prettyCheckable/dist/prettyCheckable.min.js"
import labeluty from "../../vendors/jquery-labelauty/source/jquery-labelauty.js"

export default {
    name: "radio_check",
    components:{
        card
    },
    data(){
        return   {
            selected: [],
            options: [
                {text: 'Checkbox1', value: 'checkbox1'},
                {text: 'Checkbox2', value: 'checkbox2'},
                {text: 'Checkbox3', value: 'checkbox3'}
            ],
            options_buttons:[
                {text: 'Button1', value: 'button_checkbox1'},
                {text: 'Button2', value: 'button_checkbox2'},
                {text: 'Button3', value: 'button_ checkbox3'}
            ],
            btn_stacked_options:[
                {text: 'Button1', value: 'stacked_btn_check1'},
                {text: 'Button2', value: 'stacked_btn_check2'},
                {text: 'Button3', value: 'stacked_btn_ check3'}
            ],
            radio_options:[
                {text: 'Radio1', value: 'radiobutton1'},
                {text: 'Radio2', value: 'radiobutton2'},
                {text: 'Radio3', value: 'radiobutton3'}
            ],
            stacked_radio_options:[
                {text: 'Radio1', value: 'radio1'},
                {text: 'Radio2', value: 'radio2'},
                {text: 'Radio3', value: 'radio3'}
            ],
            btn_radio_stacked:[
                {text: 'Radio1', value: 'stacked_btn_radio1'},
                {text: 'Radio2', value: 'stacked_btn_radio2'},
                {text: 'Radio3', value: 'stacked_btn_radio3'}
            ],
        message: '',
        search:'',
        isActive:false,
        drinks:[{
            name:'Coffee',
            active:false
        },
            {
                name:'Tea',
                active:false
            },{
                name:'Milk',
                active:false
            },{
                name:'Juice',
                active:false
            },{
                name:'Milk shakes',
                active:false
            },{
                name:'Cool Drink',
                active:false
            },{
                name:'Water',
                active:false
            },{
                name:'Butter Milk',
                active:false
            }]
    }},
    mounted: function() {
    },
    destroyed: function() {
    },
    methods: {
        changeState() {
            var el = document.getElementById("indeterminateCheckbox");
            if (el.readOnly) el.checked = el.readOnly = false;
            else if (!el.checked) el.readOnly = el.indeterminate = true;
        },
    },
    computed:{
        allDrinks:function()
        {
            var self=this;
            return this.drinks.filter(function(drinky){return drinky.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
            //return this.customers;
        }
    }
}


</script>
<style src="../../vendors/prettyCheckable/dist/prettyCheckable.css"></style>
<style src="../../assets/css/jquery-labelauty.css"></style>
<style src="../../vendors/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css"></style>
<style src="../../assets/css/custom_css/radio_checkbox.css"></style>

