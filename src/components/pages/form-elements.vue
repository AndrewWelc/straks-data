<template>
<div>
    <div class="row">
        <div class="col-md-12">
            <card title="<i class='fa fa-fw ti-move'></i> General Elements">
                <form class="form-horizontal" role="form">
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label for="input-text" class="control-label float-md-right txt_media1">Input text</label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="input-text"
                                   placeholder="Input text">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label for="inputPassword" class="control-label float-md-right txt_media1">Password</label>
                        </div>
                        <div class="col-md-9">
                            <input type="password" class="form-control" id="inputPassword"
                                   placeholder="Password">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label for="input-text-disabled" class=" control-label float-md-right txt_media1">Disabled</label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="input-text-disabled"
                                   placeholder="Input text" disabled>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label for="color" class="control-label float-md-right txt_media1">Color</label>
                        </div>
                        <div class="col-md-9 form_control">
                            <input type="color" class="form-control form_control" id="color">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label for="url" class="control-label float-md-right txt_media1">Url</label>
                        </div>
                        <div class="col-md-9">
                            <input type="url" class="form-control" id="url"
                                   placeholder="URL" value="http://getbootstrap.com">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label for="range" class="control-label float-md-right txt_media1">Range</label>
                        </div>
                        <div class="col-md-9">
                            <input type="range" class="form-control " id="range" value="50">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right m-t-ng-8 txt_media1">Radio Buttons</label>
                        </div>
                        <div class="col-md-9">
                            <b-form-radio-group  class="inline_radio" :options="options" stacked >
                            </b-form-radio-group>

                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right m-t-ng-8 txt_media1">Checkbox</label>
                        </div>
                        <div class="col-md-9">
                            <b-form-checkbox-group stacked   :options="stacked_check">
                            </b-form-checkbox-group>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right txt_media1">
                                Inline Radio
                            </label>

                        </div>
                        <div class="col-md-9">
                            <b-form-radio-group :options="radios" class="inlineRadio">
                            </b-form-radio-group>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right txt_media1">
                                Inline Checkbox
                            </label>
                        </div>
                        <div class="col-md-9">
                            <b-form-checkbox-group  class="inline_check" :options="check">
                            </b-form-checkbox-group>
                        </div>
                    </div>
                    <div class="row form-group has-success">
                        <div class="col-md-3">
                            <label for="input-text-has-success" class="form-control-label float-md-right text-success txt_media1">
                                Input Success
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control brdr_success" id="input-text-has-success">
                        </div>
                    </div>
                    <div class="row form-group has-warning">
                        <div class="col-md-3">
                            <label for="input-text-has-warning" class="control-label float-md-right text-warning txt_media1">
                                Input Warning
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control brdr_warn" id="input-text-has-warning">
                        </div>
                    </div>
                    <div class="row form-group has-error">
                        <div class="col-md-3">
                            <label for="input-text-has-error" class="control-label text-danger float-md-right txt_media1">
                                Input Error
                            </label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control brdr_danger" id="input-text-has-error">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right txt_media1">Input Size</label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control input-sm ipt_size" placeholder="input-sm">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right"></label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control ipt_size1 input-md" placeholder="input-md">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right"></label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control input-lg ipt_size2" placeholder="input-lg">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right txt_media1">
                                Input Group
                            </label>
                        </div>
                        <div class="col-md-9">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white" id="basic-addon1">@</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right"></label>
                        </div>
                        <div class="col-md-9">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Currency">
                                <div class="input-group-append">
                                    <span class="input-group-text bg-white">.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class=" control-label float-md-right txt_media"></label>
                        </div>
                        <div class="col-md-9">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white">$</span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Currency">
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-white">.00</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right"></label>
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-6 m-b-10">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text bg-white">
                                                <b-form-checkbox></b-form-checkbox>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>
                                    <!-- /input-group -->
                                </div>
                                <!-- /.col-lg-6 -->
                                <div class="col-md-6 m-b-10">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text bg-white">
                                                <b-form-radio checked="false"></b-form-radio>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>
                                    <!-- /input-group -->
                                </div>
                                <!-- /.col-lg-6 -->
                            </div>
                            <!-- /.row -->
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right"></label>
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-lg-6 m-b-10">
                                    <div class="input-group input_height">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-warning" type="button">Go!</button>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>
                                    <!-- /input-group -->
                                </div>
                                <!-- /.col-lg-6 -->
                                <div class="col-lg-6 m-b-10">
                                    <div class="input-group input_height">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <button class="btn btn-warning" type="button">Go!</button>
                                        </div>
                                    </div>
                                    <!-- /input-group -->
                                </div>
                                <!-- /.col-lg-6 -->
                            </div>
                            <!-- /.row -->
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class=" control-label float-md-right"></label>
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-lg-6 m-b-10">
                                    <div class="input-group input_height">
                                        <div class="input-group-prepend">
                                            <b-dropdown text="Action" variant="info">
                                                <b-dropdown-item-button>action</b-dropdown-item-button>
                                                <b-dropdown-item-button>another action</b-dropdown-item-button>
                                                <b-dropdown-item-button >something else here</b-dropdown-item-button>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item-button ><a href="#">seperated link here</a></b-dropdown-item-button>
                                            </b-dropdown>
                                        </div>
                                        <input type="text" class="form-control">
                                    </div>

                                    <!-- /input-group -->
                                </div>
                                <!-- /.col-lg-6 -->
                                <div class="col-lg-6 m-b-10">
                                    <div class="input-group input_height">
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <b-dropdown text="Action" variant="info">
                                                <b-dropdown-item-button>action</b-dropdown-item-button>
                                                <b-dropdown-item-button>another action</b-dropdown-item-button>
                                                <b-dropdown-item-button >something else here</b-dropdown-item-button>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item-button ><a href="#">seperated link here</a></b-dropdown-item-button>
                                            </b-dropdown>
                                        </div>
                                    </div>
                                    <!-- /input-group -->
                                </div>
                                <!-- /.col-lg-6 -->
                            </div>
                            <!-- /.row -->
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right txt_media1">
                                Text Area
                            </label>
                        </div>
                        <div class="col-md-9">
                                        <textarea rows="4" class="form-control resize_vertical"
                                                  placeholder="Basic"></textarea>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right txt_media">
                            </label>
                        </div>
                        <div class="col-md-9">
                            <textarea rows="4" class="form-control resize_vertical" disabled></textarea>
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-3">
                            <label class="control-label float-md-right">
                            </label>
                        </div>
                        <div class="col-md-9">
                                        <textarea rows="4" class="form-control noresize"
                                                  placeholder="No resize"></textarea>
                        </div>
                    </div>
                </form>
            </card>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <card title="<i class='fa fa-fw ti-pencil'></i> Grid sizing of Form Elements">
                <form>
                    <div class="row">

                        <div class="col-3">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-4">
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-5">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <br>
                    <div class="row">

                        <div class="col-3">
                                                                <textarea
                                                                        class="form-control resize_vertical"></textarea>
                        </div>
                        <div class="col-4">
                                                                <textarea
                                                                        class="form-control resize_vertical"></textarea>
                        </div>
                        <div class="col-5">
                                                                <textarea
                                                                        class="form-control resize_vertical"></textarea>
                        </div>

                    </div>
                    <br>
                    <div class="row">

                        <div class="col-3">
                            <select class="form-control">
                                <option>Select</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <select class="form-control">
                                <option>Select</option>
                            </select>
                        </div>
                        <div class="col-5">
                            <select class="form-control">
                                <option>Select</option>
                            </select>
                        </div>

                    </div>
                </form>
            </card>
        </div>
        <div class="col-md-6">
            <card title="<i class='fa fa-fw ti-pencil'></i> Height Sizing of Input Groups">
                <form>
                    <div class="row">
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group input-group-lg">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <i class="fa fa-fw ti-user" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group input-group-lg">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <b-form-checkbox></b-form-checkbox>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group input-group-lg">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <b-form-radio checked="false"></b-form-radio>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <i class="fa fa-fw ti-user" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <b-form-checkbox></b-form-checkbox>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <b-form-radio checked="false"></b-form-radio>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <i class="fa fa-fw ti-user" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <b-form-checkbox></b-form-checkbox>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-4 col-12 m-t-10">
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text bg-white">
                                        <b-form-radio checked="false"></b-form-radio>
                                    </div>
                                </div>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </form>
            </card>
        </div>
    </div>
    <div class="row file-input-section">
        <div class="col-md-12">
            <card title="<i class='fa fa-fw ti-download'></i> Advanced File Input">
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-20">
                            Select File
                        </label>
                        <input id="input-20" type="file" class="file-loading">

                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10 alert_pad mt-2 mt-sm-0">
                            Display the widget as a single block button
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-21">
                            Select File
                        </label>
                        <input id="input-21" type="file" accept="image/*" class="file-loading">
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Show only image files for selection & preview. Control button labels, styles,
                            and icons for the Pick Image, upload, and delete buttons.
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-22">
                            Select File
                        </label>
                        <input id="input-22" type="file" class="file-loading" accept="text/plain"
                               data-preview-file-type="text" data-preview-class="bg-warning">
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Preview section control. Change preview background and display only text files
                            content within the preview window.
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8 ">
                        <label class="control-label txt_media" for="input-23">
                            Select File
                        </label>
                        <input id="input-23" type="file" class="file-loading" data-show-preview="false">
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Advanced customization using templates. For example, Hide file preview
                            thumbnails.
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-40">
                            Select File
                        </label>
                        <input id="input-40" type="file" class="file-loading">
                        <br>
                        <button type="button" class="btn btn-warning btn-modify">Modify</button>
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Using plugin methods to alter input at runtime. For example, click the Modify
                            button to disable the plugin and change plugin options.
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-41">
                            Select File
                        </label>
                        <input id="input-41" type="file" class="file-loading">
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Allow only image and video file types to be uploaded. You can configure the
                            condition for validating the file types using
                            <code>fileTypeSettings</code> .
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-42">
                            Select File
                        </label>
                        <input id="input-42" type="file" class="file-loading">
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Allow only specific( jpg, gif, png, txt ) file extensions.
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-8">
                        <label class="control-label txt_media" for="input-43">
                            Select File
                        </label>
                        <input id="input-43" type="file" class="file-loading">
                        <div idfirst="errorBlock43" class="help-block"></div>
                    </div>
                    <div class="col-sm-4">
                        <div class="alert alert-info small m-t-10">
                            Disable preview and customize your own error container and messages.
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
import fileinput from "../../vendors/bootstrap-fileinput/js/fileinput.min.js"
import themea from"../../vendors/bootstrap-fileinput/themes/fa/theme.js"
export default {
        components:{
            card
        },
    data() {
        return{
            selected: 'first',
            options: [
                { text: 'First radio', value: 'first' },
                { text: 'Second radio', value: 'second' },
                { text: 'Third radio', value: 'third' }
            ],
            radios: [
                { text: 'First radio', value: 'first' },
                { text: 'Second radio', value: 'second' },
                { text: 'Third radio', value: 'third' }
            ],
            stacked_check: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
            check: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
        }
    },
    name: "form-elements",
    mounted: function() {
        "use strict";
        $("#input-43").fileinput({
            browseClass: "btn btn-info",
            showPreview: false,
            allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
            elErrorContainer: "#errorBlock43",
            theme:"fa"
            // you can configure `msgErrorClass` and `msgInvalidFileExtension` as well
        });
        $("#input-42").fileinput({
            browseClass: "btn btn-warning",
            maxFilesNum: 10,
            allowedFileExtensions: ["jpg", "gif", "png", "txt"],
            theme:"fa"
        });
        $("#input-41").fileinput({
            browseClass: "btn btn-danger",
            maxFileCount: 10,
            allowedFileTypes: ["image", "video"],
            theme:"fa"
        });
        $("#input-40,#input-22").fileinput({
            theme:"fa"
        });
        $(".btn-modify").on("click", function() {

            var $btn = $(this);
            if ($btn.text() == "Modify") {
                $("#input-40").fileinput("disable");
                $btn.html("Revert");
                alert("Hurray! I have disabled the input and hidden the upload button.");
            } else {
                $("#input-40").fileinput("enable");
                $btn.html("Modify");
                alert("Hurray! I have reverted back the input to enabled with the upload button.");
            }
        });
        $("#input-23").fileinput({
            browseClass: "btn btn-secondary",
            showUpload: false,
            mainTemplate: "{preview}\n" +
                "<div class='input-group {class}'>\n" +
                "   <div class='input-group-btn'>\n" +
                "       {browse}\n" +
                "       {upload}\n" +
                "       {remove}\n" +
                "   </div>\n" +
                "   {caption}\n" +
                "</div>",
            theme:"fa"
        });
        $("#input-21").fileinput({
            previewFileType: "image",
            browseClass: "btn btn-success",
            browseLabel: " Pick Image",

            removeClass: "btn btn-danger",
            removeLabel: "Delete",

            uploadClass: "btn btn-info",
            uploadLabel: " Upload",

            theme:"fa"
        });
        $("#input-20").fileinput({
            browseClass: "btn btn-info btn-block",
            showCaption: false,
            showRemove: false,
            showUpload: false,
            theme:"fa"
        });
        $("#input-4").fileinput({
            browseClass: "btn btn-success",
            showCaption: false
        });
        $("#input-5").fileinput({
            browseClass: "btn btn-warning",
            showUpload: false,
            maxFileCount: 10,
            mainClass: "input-group-lg"
        });
    }
}
</script>
<style src="../../vendors/bootstrap-fileinput/css/fileinput.min.css"></style>
<style src="../../assets/css/formelements.css"></style>
