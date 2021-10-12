<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <card title='<i class="fa fa-fw ti-widget-alt"></i> Select2'>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="select21" class="control-label">
                                    Select2 single select
                                </label>
                                <select id="select21" class="form-control select2" style="width:100%">
                                    <option value="">Select value...</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">
                                            North Dakota
                                        </option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">
                                            Mississippi
                                        </option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">
                                            South Dakota
                                        </option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">
                                            Connecticut
                                        </option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">
                                            Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">
                                            New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                            North Carolina
                                        </option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">
                                            Pennsylvania
                                        </option>
                                        <option value="RI">
                                            Rhode Island
                                        </option>
                                        <option value="SC">
                                            South Carolina
                                        </option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">
                                            West Virginia
                                        </option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="select22" class="control-label">
                                    Select2 multi select
                                </label>
                                <select id="select22" class="form-control select2" multiple style="width:100%">
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">
                                            North Dakota
                                        </option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">
                                            Mississippi
                                        </option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">
                                            South Dakota
                                        </option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">
                                            Connecticut
                                        </option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">
                                            Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">
                                            New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                            North Carolina
                                        </option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">
                                            Pennsylvania
                                        </option>
                                        <option value="RI">
                                            Rhode Island
                                        </option>
                                        <option value="SC">
                                            South Carolina
                                        </option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">
                                            West Virginia
                                        </option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="select23" class="control-label">
                                    Select2 single select with country flag
                                </label>
                                <select id="select23" class="form-control select2" style="width:100%">
                                    <option value="">Select a value...</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">
                                            North Dakota
                                        </option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">
                                            Mississippi
                                        </option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">
                                            South Dakota
                                        </option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">
                                            Connecticut
                                        </option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">
                                            Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">
                                            New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                            North Carolina
                                        </option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">
                                            Pennsylvania
                                        </option>
                                        <option value="RI">
                                            Rhode Island
                                        </option>
                                        <option value="SC">
                                            South Carolina
                                        </option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">
                                            West Virginia
                                        </option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="select24" class="control-label">
                                    Select2 append
                                </label>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-group mb-3 select2-bootstrap-append search">
                                            <select id="select24" class="form-control custom-select" >
                                                <option value="">Select value...</option>
                                                <optgroup label="Alaskan/Hawaiian Time Zone">
                                                    <option value="AK">Alaska</option>
                                                    <option value="HI">Hawaii</option>
                                                </optgroup>
                                                <optgroup label="Pacific Time Zone">
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="WA">Washington</option>
                                                </optgroup>
                                                <optgroup label="Mountain Time Zone">
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="ND">
                                                        North Dakota
                                                    </option>
                                                    <option value="UT">Utah</option>
                                                    <option value="WY">Wyoming</option>
                                                </optgroup>
                                                <optgroup label="Central Time Zone">
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">
                                                        Mississippi
                                                    </option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="SD">
                                                        South Dakota
                                                    </option>
                                                    <option value="TX">Texas</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="WI">Wisconsin</option>
                                                </optgroup>
                                                <optgroup label="Eastern Time Zone">
                                                    <option value="CT">
                                                        Connecticut
                                                    </option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">
                                                        Massachusetts
                                                    </option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="NH">
                                                        New Hampshire
                                                    </option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">
                                                        North Carolina
                                                    </option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="PA">
                                                        Pennsylvania
                                                    </option>
                                                    <option value="RI">
                                                        Rhode Island
                                                    </option>
                                                    <option value="SC">
                                                        South Carolina
                                                    </option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WV">
                                                        West Virginia
                                                    </option>
                                                </optgroup>
                                            </select>
                                            <div class="input-group-append">
                                                <label class="input-group-text"><span class="ti-search"></span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="select25" class="control-label">
                                    Select2 prepend
                                </label>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-group mb-3 select2-bootstrap-append search">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text"><span class="ti-search"></span></span></label>
                                            </div>
                                            <select id="select25" class="form-control" >
                                                <option value="">Select value...</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </card>
            </div>
            <div class="col-md-6">
                <card title="<i class='fa fa-fw ti-arrow-circle-down'></i> Selectric Select">
                    <div class="box-body">
                        <!-- Time Picker -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="get_value">Get selected option value:</label>
                                    <select id="get_value"   class="form-control">
                                        <option value="pitons">Pitons</option>
                                        <option value="cams">Cams</option>
                                        <option value="nuts">Nuts</option>
                                        <option value="bolts">Bolts</option>
                                        <option value="stoppers">Stoppers</option>
                                        <option value="sling">Sling</option>
                                        <option value="skis">Skis</option>
                                        <option value="skins">Skins</option>
                                        <option value="poles">Poles</option>
                                    </select>
                                    <p id="select_value">Current value: <strong>oranges</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="set_value">Select Option:</label>
                                    <select id="set_value" class="form-control">
                                        <option value="First option">First option</option>
                                        <option value="Second option">Second option</option>
                                        <option value="Third option">Third option</option>
                                        <option value="Third option">Fourth option</option>
                                    </select>
                                    <br>
                                    <div class="row">
                                        <!--<div class="col-sm-12">-->
                                        <div class="col-md-6 col-sm-3 col-12">
                                            <button class="btn btn-info btn_selection mb-2"
                                                    id="set_first_option">
                                                <span class="box-display">Select </span>1<sup>st</sup> option
                                            </button>
                                        </div>
                                        <div class="col-md-6 col-sm-3 col-12">
                                            <button class="btn btn-info btn_selection mb-2"
                                                    id="set_second_option">
                                                <span class="box-display">Select</span> 2<sup>nd</sup> option
                                            </button>
                                        </div>
                                        <div class="col-md-6 col-sm-3 col-12">
                                            <button class="btn btn-info btn_selection mb-2"
                                                    id="set_third_option">
                                                <span class="box-display">Select</span>
                                                3<sup>rd</sup> option
                                            </button>
                                        </div>
                                        <div class="col-md-6 col-sm-3 col-12">
                                            <button class="btn btn-info btn_selection mb-2"
                                                    id="set_fourth_option">
                                                <span class="box-display">Select</span>
                                                4<sup>th</sup> option
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!--</div>-->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="dynamic">Change options:</label>
                                    <select id="dynamic" class="form-control">
                                        <option value="strawberries">Strawberries</option>
                                        <option value="mango">Mango</option>
                                        <option value="bananas">Bananas</option>
                                        <option value="watermelon">Watermelon</option>
                                        <option value="apples">Apples</option>
                                        <option value="grapes">Grapes</option>
                                        <option value="oranges">Oranges</option>
                                        <option value="pineapple">Pineapple</option>
                                        <option value="peaches">Peaches</option>
                                        <option value="cherries">Cherries</option>
                                    </select>
                                    <br>
                                    <p>
                                        <input type="text" class="form-control" id="add_val" name="add_val"
                                               placeholder="Enter text">
                                    </p>
                                    <p>
                                        <button class="btn btn-info" id="bt_add_val">Add Option</button>
                                    </p>
                                </div>
                                <!-- /.form group -->
                            </div>
                        </div>
                    </div>
                </card>
                <!--select-->
            </div>
            <!--col-md-6 ends-->
        </div>
        <div class="row">
            <div class="col-md-6">
                <card title="<i class='fa ti-reload' aria-hidden='true'></i> Selectize Tagging and Select">
                    <div class="box-body">
                        <!-- Time Picker -->
                        <div class="form-group">
                            <label for="select-gear">Default Selectize:</label>
                            <select id="select-gear" class="form-control ">
                                <optgroup label="Climbing">
                                    <option value="pitons">Pitons</option>
                                    <option value="cams">Cams</option>
                                    <option value="nuts">Nuts</option>
                                    <option value="bolts">Bolts</option>
                                    <option value="stoppers">Stoppers</option>
                                    <option value="sling">Sling</option>
                                </optgroup>
                                <optgroup label="Skiing">
                                    <option value="skis">Skis</option>
                                    <option value="skins">Skins</option>
                                    <option value="poles">Poles</option>
                                </optgroup>
                            </select>
                        </div>
                        <!-- /.form group -->
                        <!-- time Picker -->
                        <div class="form-group">
                            <label class="control-label" for="selectize3">Selectize with max limit:</label>
                            <select id="selectize3" class="form-control">
                                <option value="">Select gear...</option>
                                <option value="pitons">Pitons</option>
                                <option value="cams">Cams</option>
                                <option value="nuts">Nuts</option>
                                <option value="bolts">Bolts</option>
                                <option value="stoppers">Stoppers</option>
                                <option value="sling">Sling</option>
                                <option value="skis">Skis</option>
                                <option value="skins">Skins</option>
                                <option value="poles">Poles</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="selectize-tags2">Selectize Tags with remove button:</label>
                            <input type="text" id="selectize-tags2" class="form-control demo-default"
                                   value="science,biology,chemistry">
                            <p>This selectize adds classic a classic remove button to each item for behavior
                                that mimics Select2 and Choosen.</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="selectize-tags1">Selectize Tags:</label>
                            <input type="text" id="selectize-tags1" class="form-control mb-2"
                                   value="web development,design">
                            <p>Press the [backspace] key and go back to editing the item without it being fully
                                removed.
                            </p>
                        </div>
                        <!-- /.input group -->
                    </div>
                </card>
                <!--select-->
            </div>
            <!--col-md-6 ends-->
        </div>
        <!--main content ends-->
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import multiselect from "../../vendors/bootstrap-multiselect/dist/js/bootstrap-multiselect.js"
    import select2 from "../../vendors/select2/dist/js/select2.min.js"
    import selectize from "../../vendors/selectize/dist/js/standalone/selectize.min.js"
    import selectric from "../../vendors/jquery-selectric/public/jquery.selectric.js"
    export default {
        name: "dropdowns",
        components:{
            card
        },
        mounted: function() {
            "use strict";
            $(document).ready(function() {

                $("#multiselect1").multiselect({
                    buttonWidth: '160px'
                });
                $("#multiselect2").multiselect({
                    enableFiltering: true,
                    includeSelectAllOption: true,
                    maxHeight: 300,
                    dropUp: true
                });
                $("#select21").select2({
                    theme: "bootstrap",
                    placeholder: "single select"
                });
                $("#select22").select2({
                    theme: "bootstrap",
                    placeholder: "multi select"
                });

                function formatState(state) {
                    if (!state.id) {
                        return state.text;
                    }
                    var $state = $(
                        '<span><img src="/static/img/us_states_flags/' + state.element.value.toLowerCase() + '.png" class="img-flag"  width="20px" height="20px"/> ' + state.text + '</span>'
                    );
                    return $state;
                }

                $("#select23").select2({
                    templateResult: formatState,
                    templateSelection: formatState,
                    placeholder: "select with country flag",
                    theme: "bootstrap"
                });
                $('#select24').select2({
                    allowClear: true,
                    theme: "bootstrap",
                    placeholder: "select"
                });
                $('#select25').select2({
                    allowClear: true,
                    theme: "bootstrap",
                    placeholder: "select"
                });

                $('#select26').select2({
                    placeholder: "select",
                    theme: "bootstrap"
                });


                $('#select-gear').selectize({
                    sortField: 'text'
                });
                $("#selectize3").selectize({
                    maxItems: 3
                });
                $('#selectize-tags1').selectize({
                    plugins: ['restore_on_backspace'],
                    delimiter: ',',
                    persist: false,
                    create: function(input) {
                        return {
                            value: input,
                            text: input
                        }
                    }
                });
                $('#selectize-tags2').selectize({
                    plugins: ['remove_button'],
                    delimiter: ',',
                    persist: false,
                    create: function(input) {
                        return {
                            value: input,
                            text: input
                        }
                    }
                });
                $('#selectize-tags3').selectize({
                    plugins: ['drag_drop'],
                    delimiter: ',',
                    persist: false,
                    create: function(input) {
                        return {
                            value: input,
                            text: input
                        }
                    }
                });

                //Get selected option value
                var $selectValue = $('#select_value').find('strong');
                $selectValue.text($('#get_value').val());
                $('#get_value').selectric().on('change', function() {
                    $selectValue.text($(this).val());
                });
                //Get selected option value end

                //Set value
                $('#set_value').selectric();

                $('#set_first_option').on('click', function() {
                    $('#set_value').prop('selectedIndex', 0).selectric('refresh');
                });

                $('#set_second_option').on('click', function() {
                    $('#set_value').prop('selectedIndex', 1).selectric('refresh');
                });

                $('#set_third_option').on('click', function() {
                    $('#set_value').prop('selectedIndex', 2).selectric('refresh');
                });
                $('#set_fourth_option').on('click', function() {
                    $('#set_value').prop('selectedIndex', 3).selectric('refresh');
                });
                //Set value end

                //Change options on the fly
                $('#dynamic').selectric();

                $('#bt_add_val').on('click', function() {
                    var value = $.trim($('#add_val').val());
                    $('#dynamic').append('<option>' + (value ? value : 'Empty') + '</option>').selectric('refresh');
                    $('#add_val').val("");
                });
                //Change options on the fly end
            });
        },
        destroyed: function() {

        }
    }
</script>
<style src="../../vendors/bootstrap-multiselect/dist/css/bootstrap-multiselect.css"></style>
<style src="../../vendors/select2/dist/css/select2.min.css"></style>
<style src="../../vendors/select2-bootstrap-theme/dist/select2-bootstrap.min.css"></style>
<style src="../../vendors/selectize/dist/css/selectize.css"></style>
<style src="../../vendors/selectize/dist/css/selectize.bootstrap3.css"></style>
<style src="../../vendors/jquery-selectric/public/selectric.css"></style>
<style>
    .select2-dropdown,.selectric-open{
        z-index: 9;
    }
    #set_first_option:active,#set_second_option:active,#set_third_option:active,#set_fourth_option:active,#bt_add_val:active{
        color: #fff;
    }

    @media (max-width: 1024px) {
        .boxed .box-display{
            display: none;
        }
    }
    .search .select2-container{
        width: 92% !important;
    }


    @media(max-width:1024px){
        .search .select2-container{
            width: 89% !important;
        }
    }
    @media(min-width: 375px) and (max-width: 768px){
        .search .select2-container{
            width: 88% !important;
        }
    }
    @media(max-width:320px){
        .search .select2-container{
            width: 85% !important;
        }
    }
</style>