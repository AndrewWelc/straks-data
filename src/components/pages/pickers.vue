<template>
<div>
    <!--main content-->
    <div class="row pickers">
        <div class="col-lg-6">
            <card title="<i class='ti-pin'></i> Bootstrap TouchSpin">
                <div class="box-body">
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo1">Postfix</label>
                        <input id="demo1" type="text" value="55" name="demo1" class="form-control">
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo2">Prefix</label>
                        <div class="form-group">
                            <input id="demo2" type="text" value="0" name="demo2" class="form-control">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo_vertical">
                            Vertical button alignment
                        </label>
                        <div class="form-group">
                            <input id="demo_vertical" type="text" value="" name="demo_vertical">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo_vertical2">
                            Vertical buttons with custom icons
                        </label>
                        <div class="form-group">
                            <input id="demo_vertical2" type="text" value="" name="demo_vertical2">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo3">
                            Init with empty value
                        </label>
                        <div class="form-group">
                            <input id="demo3" type="text" value="" name="demo3">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo3_21">
                            Value attribute is not set (applying settings.initval)
                        </label>
                        <div class="form-group">
                            <input id="demo3_21" type="text" value="" name="demo3_21">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo4">
                            Button postfix (small)
                        </label>
                        <div class="form-group">
                            <input id="demo4" type="text" value="" name="demo4" class="input-sm">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo4_2">
                            Button postfix (large)
                        </label>
                        <div class="form-group">
                            <input id="demo4_2" type="text" value="" name="demo4_2"
                                   class="form-control input-lg">
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <div class="form-group">
                        <label for="demo5">
                            Button group
                        </label>
                        <div class="form-group">
                            <div class="input-group">
                                <input id="demo5" type="text" class="form-control" name="demo5" value="50">
                            </div>
                        </div>
                    </div>
                    <!-- /.form group -->
                    <!-- Touch spin -->
                    <!-- /.form group -->
                </div>
            </card>
            <!--time picker ends-->
        </div>
        <!--col-md-6 ends-->
        <div class="col-lg-6">
            <card title="<i class=ti-alarm-clock'></i> Clock Face Picker">
                <div class="form-group">
                    <label for="t1" class="control-label">
                        Default clock
                    </label>
                    <input id="t1" class="form-control input-small" value="2:30 PM" data-format="hh:mm A"
                           type="text">
                </div>
                <div class="form-group">
                    <label for="t2" class="control-label">Button</label>
                    <div class="input-group">
                        <input type="text" class="form-control input-small" id="t2" value="14:30" readonly>
                        <button class="btn input-group-append" type="button" id="toggle-btn">
                            <i class="fa fa-fw fa-clock-o"></i>
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="input-a" class="control-label">
                        Clock picker
                    </label>
                    <div class="input-group form-inline">
                        <input type="text" class="form-control" id="input-a" value="" data-default="20:48">
                        <button class="btn input-group-append bg-primary" type="button" id="button-a">
                            Pick your time
                        </button>
                    </div>
                </div>
            </card>
        </div>
        <!--col-md-6 ends-->
    </div>
    <div class="background-overlay"></div>
</div>
</template>
<script>
const moment = require("moment");
import card from "./card/card.vue"
import clockface from "../../vendors/clockface.js/js/clockface.js"
import clockpicker from "../../vendors/clockpicker/dist/bootstrap-clockpicker.min.js"
import touchspin from "../../vendors/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"
export default {
    name: "pickers",
    components:{
        card
    },
    mounted: function() {
        "use strict";
        $(document).ready(function() {

            $('#t1').clockface();
            $('#t3').clockface({
                format: 'H:mm'
            }).clockface('show', '14:30');

            $('#t2').clockface({
                format: 'HH:mm',
                trigger: 'manual'
            });

            $('#toggle-btn').on('click', function(e) {
                e.stopPropagation();
                $('#t2').clockface('toggle');
            });

            var input = $('#input-a');
            input.clockpicker({
                autoclose: true
            });

            // Manual operations
            $('#button-a').click(function(e) {
                // Have to stop propagation here
                e.stopPropagation();
                input.clockpicker('show')
                    .clockpicker('toggleView', 'minutes');
            });

            //datetimepicker
            $("input[name='demo1']").TouchSpin({
                min: 0,
                max: 100,
                step: 0.1,
                decimals: 2,
                boostat: 5,
                maxboostedstep: 10,
                postfix: '%'
            });

            $("input[name='demo2']").TouchSpin({
                min: -1000000000,
                max: 1000000000,
                stepinterval: 50,
                maxboostedstep: 10000000,
                prefix: '$'
            });

            $("input[name='demo_vertical']").TouchSpin({
                verticalbuttons: true,
                verticalupclass: 'ti-angle-up',
                verticaldownclass: 'ti-angle-down'
            });

            $("input[name='demo_vertical2']").TouchSpin({
                verticalbuttons: true,
                verticalupclass: 'ti-plus',
                verticaldownclass: 'ti-minus'
            });

            $("input[name='demo3']").TouchSpin();

            $("input[name='demo3_21']").TouchSpin({
                initval: 40
            });

            $("input[name='demo3_22']").TouchSpin({
                initval: 40
            });

            $("input[name='demo4']").TouchSpin({
                postfix: "a button",
                postfix_extraclass: "btn btn-default"
            });

            $("input[name='demo4_2']").TouchSpin({
                postfix: "a button",
                postfix_extraclass: "btn btn-default"
            });

            $("input[name='demo5']").TouchSpin({
                prefix: "pre",
                postfix: "post"
            });

            $("input[name='demo6']").TouchSpin({
                buttondown_class: "btn btn-link",
                buttonup_class: "btn btn-link"
            });

        });
    },
    destroyed: function() {

    }
}
</script>
<style src="../../vendors/clockface.js/css/clockface.css"></style>
<style src="../../vendors/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css"></style>
<style src="../../vendors/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"></style>
<style src="../../vendors/clockpicker/dist/bootstrap-clockpicker.min.css"></style>
<style src="../../vendors/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"></style>
<style src="../../vendors/bootstrap-multiselect/dist/css/bootstrap-multiselect.css"></style>
<style src="../../assets/css/pickers.css"></style>
