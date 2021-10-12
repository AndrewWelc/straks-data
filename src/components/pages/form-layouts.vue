<template>
<div>
    <div class="row form_layout">
        <div class="col-lg-12">
            <b-card no-body>
                <b-tabs ref="tabs" card >
                    <b-tab title="Form Action" active>
                        <div class="row">
                            <div class="col-lg-6">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Form Actions On Top">
                                    <form action="#" class="form-horizontal">
                                        <div>
                                            <div class="row">
                                                <div class="col-sm-offset-3 col-sm-9 ml-auto">
                                                    <button type="button" class="btn  mb-3 btn-primary">Submit
                                                    </button>
                                                    &nbsp;
                                                    <button type="button" class="btn  mb-3 btn-danger">Cancel
                                                    </button>
                                                    &nbsp;
                                                    <button type="reset"
                                                            class="btn btn-secondary  mb-3 bttn_reset butn buttn">
                                                        Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-body">
                                            <div class="form-group m-t-10 row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputUsername1"
                                                           class="form-control-label">
                                                        Username
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white" id="basic-addon1">
                                                                <i class="fa fa-fw ti-user"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Username" id="inputUsername1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputEmail" class="form-control-label">
                                                        Email
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa ti-email"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Email Address" id="inputEmail">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputpass" class="form-control-label">
                                                        Password
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                 <i class="fa fa-fw ti-key"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Password" id="inputpass">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputnumber1"
                                                           class="form-control-label">
                                                        Phone Number
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                  <i class="fa fa-fw ti-mobile"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Phone Number" id="inputnumber1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputAddress" class="form-control-label">
                                                        Address
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                 <i class="fa fa-fw ti-pencil"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Address" id="inputAddress">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputContent1"
                                                           class="form-control-label">Message</label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                                <textarea id="inputContent1" rows="3"
                                                                          name="inputContent1"
                                                                          class="form-control resize_vertical"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                            <div class="col-lg-6">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Form Actions On Bottom">
                                    <form action="#" class="form-horizontal">
                                        <div class="form-body">
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputUsername2"
                                                           class="form-control-label">
                                                        Username
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-user"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Username" id="inputUsername2">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputEmail2" class="form-control-label">
                                                        Email
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa ti-email"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Email Address" id="inputEmail2">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="keypassword" class="form-control-label">
                                                        Password
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                 <i class="fa fa-fw ti-key"></i>
                                                            </span>
                                                        </div>
                                                        <input type="password" class="form-control" placeholder="Password" id="keypassword">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputnumber2"
                                                           class="form-control-label">
                                                        Phone Number
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                  <i class="fa fa-fw ti-mobile"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Phone Number" id="inputnumber2">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputAddress2"
                                                           class="form-control-label">
                                                        Address
                                                    </label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                  <i class="fa fa-fw ti-pencil"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" class="form-control"
                                                               placeholder="Address" id="inputAddress2">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                    <label for="inputContent2"
                                                           class="form-control-label">Message</label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                                <textarea id="inputContent2" rows="3"
                                                                          class="form-control resize_vertical"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-sm-offset-3  col-sm-9 ml-auto">
                                                    <button type="button" class="btn btn-primary  mb-3">Submit
                                                    </button>
                                                    &nbsp;
                                                    <button type="button" class="btn btn-danger  mb-3">Cancel
                                                    </button>
                                                    &nbsp;
                                                    <button type="reset"
                                                            class="btn btn-secondary bttn_reset butn buttn  mb-3">
                                                        Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                            <div class="col-lg-12">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Form Actions On Top & Bottom">
                                    <form action="#" class="form-horizontal">
                                        <div>
                                            <div class="row">
                                                <div class="col-sm-12 text-center">
                                                    <button type="button" class="btn btn-primary  mb-3">Submit
                                                    </button>
                                                    &nbsp;
                                                    <button type="button" class="btn btn-danger  mb-3">Cancel
                                                    </button>
                                                    &nbsp;
                                                    <button type="reset"
                                                            class="btn btn-secondary bttn_reset butn  mb-3">
                                                        Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-body">
                                            <div class="form-group m-t-10 row">
                                                <div class="col-sm-3 float-md-right txt_media">
                                                    <label for="inputUsername3"
                                                           class="form-control-label">
                                                        Username
                                                    </label></div>
                                                <div class="col-sm-6">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-user"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" id="inputUsername3" class="form-control" placeholder="Username">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 float-md-right txt_media">
                                                    <label for="inputEmail3" class="form-control-label">
                                                        Email
                                                    </label></div>
                                                <div class="col-sm-6">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa ti-email"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" id="inputEmail3" placeholder="Email Address" class="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 float-md-right txt_media">
                                                    <label for="fapassword" class="form-control-label">
                                                        Password
                                                    </label></div>
                                                <div class="col-sm-6">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-key"></i>
                                                            </span>
                                                        </div>
                                                        <input type="password" placeholder="Password"
                                                               id="fapassword" class="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 float-md-right txt_media">
                                                    <label for="inputnumber3"
                                                           class="form-control-label">
                                                        Phone Number
                                                    </label></div>
                                                <div class="col-sm-6">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-mobile"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" id="inputnumber3"
                                                               placeholder="Phone Number"
                                                               class="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 float-md-right txt_media">
                                                    <label for="inputAddress3"
                                                           class="form-control-label">
                                                        Address
                                                    </label></div>
                                                <div class="col-sm-6">
                                                    <div class="input-group ">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-pencil"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" id="inputAddress3" class="form-control" placeholder="Address">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 float-md-right txt_media">
                                                    <label for="inputContent3"
                                                           class="form-control-label">Message</label></div>
                                                <div class="col-sm-6">
                                                                <textarea id="inputContent3" rows="3"
                                                                          class="form-control resize_vertical"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <div class="row">
                                                <div class="col-sm-12 text-center">
                                                    <button type="button" class="btn btn-primary  mb-3">Submit
                                                    </button>
                                                    &nbsp;
                                                    <button type="button" class="btn btn-danger  mb-3">Cancel
                                                    </button>
                                                    &nbsp;
                                                    <button type="reset"
                                                            class="btn btn-secondary bttn_reset butn  mb-3">
                                                        Reset
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                            <div class="col-lg-6">
                                <card title=" <i class='fa fa-fw ti-pencil'></i> Left Aligned">
                                    <form action="#">
                                        <div>
                                            <button type="button" class="btn btn-primary  mb-3">Submit
                                            </button>
                                            &nbsp;
                                            <button type="button" class="btn btn-danger  mb-3">Cancel</button>
                                            &nbsp;
                                            <button type="reset" class="btn btn-secondary bttn_reset butn  mb-3">
                                                Reset
                                            </button>
                                        </div>
                                        <div class="form-body">
                                            <div class="form-group m-t-10">
                                                <label for="inputUsername4" class="control-label">
                                                    Username
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-user"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" id="inputUsername4" class="form-control" placeholder="Username">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputEmail4" class="control-label">
                                                    Email
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa ti-email"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" id="inputEmail4" placeholder="Email Address" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="validpassword" class="control-label">
                                                    Password
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-key"></i>
                                                            </span>
                                                    </div>
                                                    <input type="password" placeholder="Password" id="validpassword" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputnumber4" class="control-label">
                                                    Phone Number
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-mobile"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" id="inputnumber4" placeholder="Phone Number" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress4" class="control-label">
                                                    Address
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-pencil"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" id="inputAddress4" class="form-control" placeholder="Address">
                                                </div>
                                            </div>
                                            <div class="form-group mbn">
                                                <label for="inputContent4"
                                                       class="control-label">Message</label>
                                                <textarea id="inputContent4" rows="3"
                                                          class="form-control resize_vertical"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="button" class="btn  mb-3 btn-primary">Submit
                                            </button>
                                            &nbsp;
                                            <button type="button" class="btn  mb-3 btn-danger">Cancel</button>
                                            &nbsp;
                                            <button type="reset" class="btn  mb-3 btn-secondary bttn_reset butn">
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </card>
                            </div>
                            <div class="col-lg-6">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Right Aligned">
                                    <form action="#" class="right_aligned">
                                        <div class="float-md-right ">
                                            <button type="button" class="btn  mb-3 btn-primary">Submit
                                            </button>
                                            <button type="button" class="btn  mb-3 btn-danger">Cancel</button>
                                            <button type="reset" class="btn  mb-3 btn-secondary bttn_reset butn">
                                                Reset
                                            </button>
                                        </div>
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label for="inputUsername5" class="control-label">
                                                    Username
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-user"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" id="inputUsername5" class="form-control" placeholder="Username">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputEmail5" class="control-label">
                                                    Email
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa ti-email"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" placeholder="Email Address" class="form-control" id="inputEmail5"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="uniquepassword" class="control-label">
                                                    Password
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-key"></i>
                                                            </span>
                                                    </div>
                                                    <input type="password" placeholder="Password" id="uniquepassword" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputnumber5" class="control-label">
                                                    Phone Number
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-mobile"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" id="inputnumber5" placeholder="Phone Number" class="form-control"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputAddress5"  class="control-label">
                                                    Address
                                                </label>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                <i class="fa fa-fw ti-pencil"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Address" id="inputAddress5">
                                                </div>
                                            </div>
                                            <div class="form-group mbn">
                                                <label for="inputContent"
                                                       class="control-label">Message</label>
                                                <textarea id="inputContent" rows="3"
                                                          class="form-control resize_vertical"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-actions float-md-right ">
                                            <button type="button" class="btn  mb-3 btn-primary">Submit
                                            </button>
                                            <button type="button" class="btn  mb-3 btn-danger">Cancel</button>
                                            <button type="reset" class="btn  mb-3 btn-secondary bttn_reset butn">
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </card>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="2 Columns">
                        <div class="row">
                            <div class="col-sm-12">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Form 2 Columns Default">
                                    <div class="row">
                                        <div class=" col-sm-6">
                                            <form>
                                                <div class="form-group row has-success">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label text-success"
                                                               for="inputSuccess1">First
                                                            Name
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" id="inputSuccess1"
                                                               class="form-control form-control-success is-valid"
                                                               placeholder="Input with success">
                                                        <span class="form-text text-success">
                                                                        First name is too small
                                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="form-group has-error row">
                                                    <div class="col-sm-3 float-md-right text-danger txt_media">
                                                        <label class="form-control-label"
                                                               for="inputError1">Email</label></div>
                                                    <div class="col-sm-9">
                                                        <input type="email" id="inputError1"
                                                               class="form-control"
                                                               placeholder="Input with error">
                                                        <span class="form-text text-danger">
                                                                        Please enter a valid email address
                                                                    </span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-sm-6">
                                            <form >
                                                <div class="form-group row has-success has-feedback">
                                                    <div class="col-sm-3 float-md-right text-success txt_media">
                                                        <label class="form-control-label"
                                                               for="inputSuccess2">
                                                            Second Name
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" id="inputSuccess2"
                                                               class="form-control is-valid "
                                                               placeholder="Input with success">
                                                        <!--<span><i class="fa fa-check fnt_position"></i></span>-->
                                                        <span class="form-text text-success">
                                                                        Second name is too small
                                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="form-group row has-error has-feedback">
                                                    <div class="col-sm-3 float-md-right text-danger txt_media">
                                                        <label class="form-control-label"
                                                               for="inputError2">
                                                            Confirm Email
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="email" id="inputError2"
                                                               class="form-control brdr_danger"
                                                               placeholder="Input with error">
                                                        <!--<span><i class="fa fa-close fnt_position"></i></span>-->
                                                        <span class="form-text text-danger">
                                                                        Email mis-match
                                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-10 ml-auto">
                                                        <button type="button" class="btn   btn-primary">
                                                            Login
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-12">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Personal Details Horizontal">
                                    <form method="post" class="form-horizontal">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="first_Name">First
                                                            Name:
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control"
                                                               id="first_Name"
                                                               placeholder="First Name">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="input_Email">Email:</label></div>
                                                    <div class="col-sm-9">
                                                        <input type="email" class="form-control"
                                                               id="input_Email" placeholder="Email">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="input_Password">Password:</label></div>
                                                    <div class="col-sm-9">
                                                        <input type="password" class="form-control"
                                                               id="input_Password"
                                                               placeholder="Password">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label m-t-10">Date of
                                                            Birth:</label></div>
                                                    <div class="col-sm-3 m-t-10">
                                                        <select class="form-control">
                                                            <option>Date</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                            <option>13</option>
                                                            <option>14</option>
                                                            <option>15</option>
                                                            <option>16</option>
                                                            <option>17</option>
                                                            <option>18</option>
                                                            <option>19</option>
                                                            <option>20</option>
                                                            <option>21</option>
                                                            <option>22</option>
                                                            <option>23</option>
                                                            <option>24</option>
                                                            <option>25</option>
                                                            <option>26</option>
                                                            <option>27</option>
                                                            <option>28</option>
                                                            <option>29</option>
                                                            <option>30</option>
                                                            <option>31</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-3 m-t-10">
                                                        <select class="form-control">
                                                            <option>Month</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-3 m-t-10">
                                                        <select class="form-control">
                                                            <option>Year</option>
                                                            <option>1991</option>
                                                            <option>1992</option>
                                                            <option>1993</option>
                                                            <option>1994</option>
                                                            <option>1995</option>
                                                            <option>1996</option>
                                                            <option>1997</option>
                                                            <option>1998</option>
                                                            <option>1999</option>
                                                            <option>2000</option>
                                                            <option>2001</option>
                                                            <option>2002</option>
                                                            <option>2003</option>
                                                            <option>2004</option>
                                                            <option>2005</option>
                                                            <option>2006</option>
                                                            <option>2007</option>
                                                            <option>2008</option>
                                                            <option>2009</option>
                                                            <option>2000</option>
                                                            <option>2011</option>
                                                            <option>2012</option>
                                                            <option>2013</option>
                                                            <option>2014</option>
                                                            <option>2015</option>
                                                            <option>2016</option>
                                                            <option>2017</option>
                                                            <option>2018</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="Zip_Code">Zip
                                                            Code:
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control"
                                                               id="Zip_Code"
                                                               placeholder="Zip Code">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="city">City:</label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control"
                                                               id="city"
                                                               placeholder="City">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-9 ml-auto">
                                                        <label class="checkbox-inline">

                                                            <b-form-checkbox>

                                                                All Flavors
                                                            </b-form-checkbox>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="last_Name">Last
                                                            Name:
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control"
                                                               id="last_Name"
                                                               placeholder="Last Name">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="phone_Number">phone:
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control"
                                                               id="phone_Number"
                                                               placeholder="Phone Number">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="confirm_Password">confirm password:
                                                        </label></div>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control"
                                                               id="confirm_Password"
                                                               placeholder="Confirm Password">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="form-control-label"
                                                               for="postal_Address">Address:</label></div>
                                                    <div class="col-sm-9">
                                                                <textarea rows="3" class="form-control resize_vertical"
                                                                          id="postal_Address"
                                                                          placeholder="Postal Address"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-3 float-md-right txt_media">
                                                        <label class="control-label">Gender:</label></div>
                                                    <div class="col-sm-8">
                                                        <b-form-radio  name="gender" checked="false">
                                                            Male
                                                        </b-form-radio>
                                                        <b-form-radio  name="gender" checked="false">
                                                            Female
                                                        </b-form-radio>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-9 ml-auto mr-4">
                                                        <label class="checkbox-inline">
                                                            <b-form-checkbox>
                                                                I agree to the
                                                                <a href="#" class="forgot">Terms and
                                                                    Conditions.</a>
                                                            </b-form-checkbox>

                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-group form-actions">
                                                    <div class="col-sm-offset-3 col-sm-9 ml-auto">
                                                        <button type="button" class="btn  btn-primary">
                                                            Submit
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <button type="reset"
                                                                class="btn btn-effect-ripple  btn-secondary  reset_btn1">
                                                            Reset
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <card title="<i class='fa fa-fw ti-pencil'></i> Form 2 Columns Readonly">
                                    <form action="#">
                                        <div class="form-body">
                                            <h3>Personal</h3>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">
                                                                First Name:
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                            <span class="form-control-plaintext">Jenny</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">
                                                                Last Name:
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                            <span class="form-control-plaintext">Kerry</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label for="inputEmail6"
                                                                   class="form-control-label">Email
                                                                :
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                                            <span class="form-control-plaintext">
                                                                                <a href="mailto:whisfat1935@jourrapide.com"
                                                                                   class="forgot">
                                                                                    Jenny321@example.com
                                                                                </a>
                                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">Gender :
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                            <span class="form-control-plaintext">Female</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6 col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">Birthday :
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                                            <span class="form-control-plaintext">
                                                                                10.11.1980</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">Phone :
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-control-plaintext">
                                                                321-333-5432
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3>Address</h3>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="row form-group">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">
                                                                Address 1:
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-text">
                                                                1219 Quiet Subdivision
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">
                                                                Address 2:
                                                            </label></div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-text">
                                                                3536 Petunia Way
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6 col-sm-6">
                                                    <div class="form-group row">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">City
                                                                :</label>
                                                        </div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-text">Albany</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="row form-group">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="form-control-label">State :
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-text">New york</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="row form-group">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="control-label">
                                                                Country :
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-text">USA</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="row form-group">
                                                        <div class="col-sm-5 col-6 float-md-right txt_media">
                                                            <label class="control-label">
                                                                Post Code:
                                                            </label>
                                                        </div>
                                                        <div class="col-sm-7 col-6">
                                                            <p class="form-text">12203</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Form Striped" >
                        <div class="row">
                            <div class="col-lg-12">
                                <card class="striped_full" title="<i class='fa fa-fw ti-move'></i> Form Bordered Striped">
                                    <form method="post" enctype="multipart/form-data"
                                          class="form-bordered">

                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">Static</label></div>
                                            <div class="col-sm-9">
                                                <p class="form-control-plaintext">
                                                    Static text
                                                </p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-text-input1">Text</label></div>
                                            <div class="col-sm-6">
                                                <input type="text" id="example-text-input1"
                                                       name="example-text-input"
                                                       class="form-control"
                                                       placeholder="Text">
                                                <span class="form-control-plaintext">
                                                            This is a help text
                                                        </span>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-email1">Email</label></div>
                                            <div class="col-sm-6">
                                                <input type="email" id="example-email1"
                                                       name="example-email"
                                                       class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-password1">Password</label></div>
                                            <div class="col-sm-6">
                                                <input type="password" id="example-password1"
                                                       name="example-password" class="form-control"
                                                       placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-disabled1">Disabled</label></div>
                                            <div class="col-sm-6">
                                                <input type="text" id="example-disabled1"
                                                       name="example-disabled" class="form-control"
                                                       placeholder="Disabled" disabled>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-textarea-input2">Textarea</label></div>
                                            <div class="col-sm-6">
                                                        <textarea id="example-textarea-input2"
                                                                  name="example-textarea-input" rows="7"
                                                                  class="form-control resize_vertical"
                                                                  placeholder="Description...."></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-select1">Select</label></div>
                                            <div class="col-sm-6">
                                                <select id="example-select1" name="example-select"
                                                        class="form-control" size="1">
                                                    <option value="0">
                                                        Please select
                                                    </option>
                                                    <option value="1">Bootstrap</option>
                                                    <option value="2">CSS</option>
                                                    <option value="3">JavaScript</option>
                                                    <option value="4">HTML</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-multiple-select2">Multiple</label></div>
                                            <div class="col-sm-6">
                                                <select id="example-multiple-select2"
                                                        name="example-multiple-select"
                                                        class="form-control"
                                                        size="5" multiple>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                    <option value="4">Option #4</option>
                                                    <option value="5">Option #5</option>
                                                    <option value="6">Option #6</option>
                                                    <option value="7">Option #7</option>
                                                    <option value="8">Option #8</option>
                                                    <option value="9">Option #9</option>
                                                    <option value="10">Option #10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row  striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">Radio
                                                    Buttons</label></div>
                                            <div class="col-sm-9">
                                                <b-form-radio-group  stacked :options="example_radio"></b-form-radio-group>

                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">
                                                    Inline Radio Buttons
                                                </label></div>
                                            <div class="col-sm-9">
                                                <b-form-radio name="example-inline-radio" checked="false">HTML</b-form-radio>
                                                <b-form-radio name="example-inline-radio" checked="false" >CSS</b-form-radio>
                                                <b-form-radio name="example-inline-radio" checked="false">JavaScript</b-form-radio>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">Checkboxes</label></div>
                                            <div class="col-sm-9">

                                                <b-form-checkbox-group stacked :options="example_check"></b-form-checkbox-group>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">
                                                    Inline Checkboxes
                                                </label></div>
                                            <div class="col-sm-9">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>HTML</b-form-checkbox>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>CSS</b-form-checkbox>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>JavaScript</b-form-checkbox>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-file-input1">File</label></div>
                                            <div class="col-sm-9">
                                                <input type="file" id="example-file-input1"
                                                       name="example-file-input">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-file-multiple-input1">
                                                    Multiple File
                                                </label></div>
                                            <div class="col-sm-9">
                                                <input type="file" id="example-file-multiple-input1"
                                                       name="example-file-multiple-input" multiple>
                                            </div>
                                        </div>
                                        <div class="form-group row form-actions">
                                            <div class="col-sm-9 col-sm-offset-3 ml-auto">
                                                <button type="button"
                                                        class="btn btn-effect-ripple  btn-primary   ">
                                                    Submit
                                                </button>
                                                <button type="reset"
                                                        class="btn btn-effect-ripple  btn-secondary reset_btn2">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <card class="striped_full" title="<i class='fa fa-fw ti-move'></i> Form Seperated Row Striped">
                                    <form method="post" enctype="multipart/form-data"
                                          class="form-bordered-row">
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">Static</label></div>
                                            <div class="col-sm-9">
                                                <p class="form-control-plaintext">
                                                    Static text
                                                </p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-text-input2">Text</label></div>
                                            <div class="col-sm-6">
                                                <input type="text" id="example-text-input2"
                                                       name="example-text-input"
                                                       class="form-control"
                                                       placeholder="Text">
                                                <span class="help-block">
                                                                This is a help text
                                                            </span>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-email2">Email</label></div>
                                            <div class="col-sm-6">
                                                <input type="email" id="example-email2"
                                                       name="example-email"
                                                       class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-password2">Password</label></div>
                                            <div class="col-sm-6">
                                                <input type="password" id="example-password2"
                                                       name="example-password" class="form-control"
                                                       placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-disabled2">Disabled</label></div>
                                            <div class="col-sm-6">
                                                <input type="text" id="example-disabled2"
                                                       name="example-disabled" class="form-control"
                                                       placeholder="Disabled" disabled>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-textarea-input1">Textarea</label></div>
                                            <div class="col-sm-6">
                                                        <textarea id="example-textarea-input1"
                                                                  name="example-textarea-input" rows="7"
                                                                  class="form-control resize_vertical"
                                                                  placeholder="Description.."></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-select2">Select</label></div>
                                            <div class="col-sm-6">
                                                <select id="example-select2" name="example-select"
                                                        class="form-control" size="1">
                                                    <option value="0">
                                                        Please select
                                                    </option>
                                                    <option value="1">Bootstrap</option>
                                                    <option value="2">CSS</option>
                                                    <option value="3">JavaScript</option>
                                                    <option value="4">HTML</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-multiple-select1">Multiple</label></div>
                                            <div class="col-sm-6">
                                                <select id="example-multiple-select1"
                                                        name="example-multiple-select"
                                                        class="form-control"
                                                        size="5" multiple>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                    <option value="4">Option #4</option>
                                                    <option value="5">Option #5</option>
                                                    <option value="6">Option #6</option>
                                                    <option value="7">Option #7</option>
                                                    <option value="8">Option #8</option>
                                                    <option value="9">Option #9</option>
                                                    <option value="10">Option #10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">Radio
                                                    Buttons</label></div>
                                            <div class="col-sm-9">
                                                <b-form-radio-group  stacked :options="example_radio_seperated"></b-form-radio-group>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">
                                                    Inline Radio Buttons
                                                </label></div>
                                            <div class="col-sm-9">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="example-inline-radio">HTML</b-form-radio>


                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false"  name="example-inline-radio">CSS</b-form-radio>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="example-inline-radio">JavaScript</b-form-radio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">Checkboxes</label></div>
                                            <div class="col-sm-9">
                                                <b-form-checkbox-group stacked :options="example_check_seperated"></b-form-checkbox-group>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label">
                                                    Inline Checkboxes
                                                </label></div>
                                            <div class="col-sm-9">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>HTML</b-form-checkbox>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>CSS</b-form-checkbox>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>JavaScript</b-form-checkbox>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row striped-col ">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-file-input2">File</label></div>
                                            <div class="col-sm-9">
                                                <input type="file" id="example-file-input2"
                                                       name="example-file-input">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-file-multiple-input2">
                                                    Multiple File
                                                </label></div>
                                            <div class="col-sm-9">
                                                <input type="file" id="example-file-multiple-input2"
                                                       name="example-file-multiple-input" multiple>
                                            </div>
                                        </div>
                                        <div class="form-group form-actions">
                                            <div class="col-sm-9 col-sm-offset-3 ml-auto">
                                                <button type="button"
                                                        class="btn btn-effect-ripple  btn-primary">
                                                    Submit
                                                </button>
                                                <button type="reset"
                                                        class="btn btn-effect-ripple btn-secondary  reset_btn3">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <card title=" <i class='fa fa-fw ti-move'></i> Form Bordered" class="striped_full border">
                                    <form method="post" enctype="multipart/form-data"
                                          class="form-bordered">
                                        <!--<div class="row">-->
                                        <div class="form-group row">
                                            <div class="col-sm-3  txt_media border-left-none">
                                                <label class="form-control-label float-md-right">Static</label></div>
                                            <div class="col-sm-9">
                                                <p class="form-control-plaintext">
                                                    Static text
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-text-input3">Text</label>
                                            <div class="col-sm-6">
                                                <input type="text" id="example-text-input3"
                                                       name="example-text-input"
                                                       class="form-control"
                                                       placeholder="Text">
                                                <span class="help-block">
                                                                This is a help text
                                                            </span>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-email3">Email</label>
                                            <div class="col-sm-6">
                                                <input type="email" id="example-email3"
                                                       name="example-email"
                                                       class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-password3">Password</label>
                                            <div class="col-sm-6">
                                                <input type="password" id="example-password3"
                                                       name="example-password" class="form-control"
                                                       placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-disabled3">Disabled</label>
                                            <div class="col-sm-6">
                                                <input type="text" id="example-disabled3"
                                                       name="example-disabled" class="form-control"
                                                       placeholder="Disabled" disabled>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-textarea-input3">Textarea</label>
                                            <div class="col-sm-6">
                                                        <textarea id="example-textarea-input3"
                                                                  name="example-textarea-input" rows="7"
                                                                  class="form-control resize_vertical"
                                                                  placeholder="Description.."></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-select3">Select</label>
                                            <div class="col-sm-6">
                                                <select id="example-select3" name="example-select"
                                                        class="form-control" size="1">
                                                    <option value="0">
                                                        Please select
                                                    </option>
                                                    <option value="1">Bootstrap</option>
                                                    <option value="2">CSS</option>
                                                    <option value="3">JavaScript</option>
                                                    <option value="4">HTML</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-multiple-select3">Multiple</label>
                                            <div class="col-sm-6">
                                                <select id="example-multiple-select3"
                                                        name="example-multiple-select"
                                                        class="form-control"
                                                        size="5" multiple>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                    <option value="4">Option #4</option>
                                                    <option value="5">Option #5</option>
                                                    <option value="6">Option #6</option>
                                                    <option value="7">Option #7</option>
                                                    <option value="8">Option #8</option>
                                                    <option value="9">Option #9</option>
                                                    <option value="10">Option #10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media">Radio
                                                Buttons</label>
                                            <div class="col-sm-9">
                                                <b-form-radio-group stacked :options="example_radio_bordered"></b-form-radio-group>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media">
                                                Inline Radio Buttons
                                            </label>
                                            <div class="col-sm-9">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="exaple_radio_bordered_inline">HTML</b-form-radio>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="exaple_radio_bordered_inline">CSS</b-form-radio>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="exaple_radio_bordered_inline">JavaScript</b-form-radio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media">Checkboxes</label>
                                            <div class="col-sm-9">
                                                <b-form-checkbox-group stacked :options="example_check_bordered"></b-form-checkbox-group>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media">
                                                Inline Checkboxes
                                            </label>
                                            <div class="col-sm-9">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>HTML</b-form-checkbox>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>CSS</b-form-checkbox>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-checkbox>JavaScript</b-form-checkbox>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-file-input3">File</label>
                                            <div class="col-sm-9">
                                                <input type="file" id="example-file-input3"
                                                       name="example-file-input3">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label txt_media"
                                                   for="example-file-multiple-input3">
                                                Multiple File
                                            </label>
                                            <div class="col-sm-9">
                                                <input type="file" id="example-file-multiple-input3"
                                                       name="example-file-multiple-input3" multiple>
                                            </div>
                                        </div><div class="form-group form-actions">
                                        <div class="col-sm-9 col-sm-offset-3 ml-auto">
                                            <button type="button"
                                                    class="btn btn-effect-ripple  btn-primary">
                                                Submit
                                            </button>
                                            <button type="reset"
                                                    class="btn btn-effect-ripple btn-secondary  reset_btn4">
                                                Reset
                                            </button>
                                        </div>
                                    </div>

                                    </form>
                                </card>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="More Examples">
                        <div class="row">
                            <div class="col-sm-6">
                                <card title="<i class='fa fa-fw ti-heart'></i> Vertical Form Layout">
                                    <form>
                                        <div class="form-group">
                                            <label for="inputEmail7">Email</label>
                                            <input type="email" class="form-control" id="inputEmail7"
                                                   placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPassword1">Password</label>
                                            <input type="password" class="form-control"
                                                   id="inputPassword1"
                                                   placeholder="Password">
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <b-form-checkbox class="remember">Remember me</b-form-checkbox>
                                            </label>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-primary  m-t-10">Login
                                            </button>
                                        </div>
                                    </form>
                                </card>
                                <!--select2 starts-->
                                <card title="<i class='fa fa-fw ti-pencil'></i> Inline Form Layout">
                                    <form class="form-inline" role="form">
                                        <div class="form-group">
                                            <label class="sr-only" for="inputEmail8">Email</label>
                                            <input type="email" class="form-control" id="inputEmail8"
                                                   placeholder="Email">
                                        </div>
                                        &nbsp;&nbsp;
                                        <div class="form-group ml-1">
                                            <label class="sr-only" for="inputPassword2">Password</label>
                                            <input type="password" class="form-control"
                                                   id="inputPassword2"
                                                   placeholder="Password">
                                        </div>

                                        <label>
                                            <b-form-checkbox class="remember ml-2">Remember me</b-form-checkbox>
                                        </label>

                                        <button type="button" class="btn btn-primary  mr-1">Login</button>
                                    </form>
                                </card>
                                <card title=" <i class='fa fa-fw ti-pencil'></i> Static Form Control">
                                    <form>
                                        <div class="form-group row">
                                            <div class="col-sm-3 float-md-right txt_media">
                                                <label for="inputEmail9"
                                                       class="form-control-label">Email</label></div>
                                            <div class="col-sm-9">
                                                <p class="form-text">
                                                    harrypotter@mail.com
                                                </p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="static_inputPassword3" class="control-label col-sm-3 float-md-right txt_media">Password</label>
                                            <div class="col-sm-9">
                                                <input type="password" class="form-control"
                                                       id="static_inputPassword3" placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-offset-3 col-sm-9 ml-auto txt_media">

                                                <label>
                                                    <b-form-checkbox class="remember">Remember me</b-form-checkbox>
                                                </label>

                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-offset-3 col-sm-9 ml-auto txt_media">
                                                <button type="button" class="btn  btn-primary">Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <card title="<i class='fa fa-fw ti-pencil'></i> Button Dropdowns">
                                    <form class="d-inline">
                                        <div class="row">
                                            <div class="col-12 m-t-10">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend fisrt_dropdwn">
                                                            <b-dropdown text="Action" variant="info" class="text-white">
                                                                <b-dropdown-item-button>action</b-dropdown-item-button>
                                                                <b-dropdown-item-button>another action</b-dropdown-item-button>
                                                                <b-dropdown-item-button >something else here</b-dropdown-item-button>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item-button ><a href="#">seperated link here</a></b-dropdown-item-button>
                                                            </b-dropdown>
                                                    </div>
                                                    <input type="text" class="form-control" aria-label="Text input with checkbox">
                                                </div>
                                            </div>
                                            <div class="col-12 mt-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend fisrt_dropdwn">
                                                        <b-dropdown text="Action" variant="warning" class="text-white">
                                                            <b-dropdown-item-button>action</b-dropdown-item-button>
                                                            <b-dropdown-item-button>another action</b-dropdown-item-button>
                                                            <b-dropdown-item-button >something else here</b-dropdown-item-button>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item-button ><a href="#">seperated link here</a></b-dropdown-item-button>
                                                        </b-dropdown>
                                                    </div>
                                                    <input type="text" class="form-control" aria-label="Text input with checkbox">
                                                </div>
                                                <br>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <card title="<i class='fa fa-fw ti-pencil'></i> Disabled Inputs">
                                    <form>
                                        <input type="text" class="form-control"
                                               placeholder="Disabled input"
                                               disabled>
                                    </form>
                                    <hr>
                                    <form class="form-horizontal">
                                        <fieldset>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 txt_media">
                                                    <label for="inputEmail10" class="form-control-label">Email</label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <input type="email" class="form-control"
                                                           id="inputEmail10" placeholder="Email"  disabled>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-3 col-lg-4 txt_media">
                                                    <label for="inputPassword4"
                                                           class="form-control-label">Password</label></div>
                                                <div class="col-sm-9 col-lg-8">
                                                    <input type="password" class="form-control"
                                                           id="inputPassword4" placeholder="Password" disabled>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-offset-3 col-sm-9 col-lg-8 ml-auto txt_media">
                                                    <div class="checkbox">
                                                        <label>
                                                            <b-form-checkbox class="remember" disabled>Remember me</b-form-checkbox>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-offset-3 col-sm-9 ml-auto txt_media">
                                                    <button type="submit" class="btn  btn-primary" disabled>Login
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </card>
                                <card title="<i class='fa fa-fw ti-pencil'></i> Supported Form Controls in Twitter Bootstrap">
                                    <form action="#">
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="more_inputEmail4">Email</label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <input type="email" class="form-control"
                                                       id="more_inputEmail4"
                                                       placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="more_inputPassword5">Password</label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <input type="password" class="form-control"
                                                       id="more_inputPassword5" placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="confirmPassword2">Confirm Password</label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <input type="password" class="form-control"
                                                       id="confirmPassword2"
                                                       placeholder="Confirm Password">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="more_firstName">
                                                    First Name
                                                </label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <input type="text" class="form-control" id="more_firstName"
                                                       placeholder="First Name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="more_lastName">Last
                                                    Name
                                                </label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <input type="text" class="form-control" id="more_lastName"
                                                       placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="mobile_phoneNumber">Phone</label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <input type="tel" class="form-control" id="mobile_phoneNumber"
                                                       placeholder="Phone Number">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label" for="more_mobile">
                                                    Date of Birth
                                                </label></div>
                                            <div class="col-sm-3 col-lg-2 col-12 m-t-10">
                                                <select class="form-control" id="more_mobile">
                                                    <option>Date</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                    <option>13</option>
                                                    <option>14</option>
                                                    <option>15</option>
                                                    <option>16</option>
                                                    <option>17</option>
                                                    <option>18</option>
                                                    <option>19</option>
                                                    <option>20</option>
                                                    <option>21</option>
                                                    <option>22</option>
                                                    <option>23</option>
                                                    <option>24</option>
                                                    <option>25</option>
                                                    <option>26</option>
                                                    <option>27</option>
                                                    <option>28</option>
                                                    <option>29</option>
                                                    <option>30</option>
                                                    <option>31</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-3 col-lg-3 col-12 m-t-10">
                                                <select class="form-control">
                                                    <option>Month</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-3 col-lg-3 col-12 m-t-10">
                                                <select class="form-control">
                                                    <option>Year</option>
                                                    <option>1991</option>
                                                    <option>1992</option>
                                                    <option>1993</option>
                                                    <option>1994</option>
                                                    <option>1995</option>
                                                    <option>1996</option>
                                                    <option>1997</option>
                                                    <option>1998</option>
                                                    <option>1999</option>
                                                    <option>2000</option>
                                                    <option>2001</option>
                                                    <option>2002</option>
                                                    <option>2003</option>
                                                    <option>2004</option>
                                                    <option>2005</option>
                                                    <option>2006</option>
                                                    <option>2007</option>
                                                    <option>2008</option>
                                                    <option>2009</option>
                                                    <option>2000</option>
                                                    <option>2011</option>
                                                    <option>2012</option>
                                                    <option>2013</option>
                                                    <option>2014</option>
                                                    <option>2015</option>
                                                    <option>2016</option>
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="control-label"
                                                       for="more_postalAddress">Address</label></div>
                                            <div class="col-sm-9 col-lg-8 col-12">
                                                            <textarea rows="3" class="form-control resize_vertical"
                                                                      id="more_postalAddress"
                                                                      placeholder="Postal Address"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="ZipCode">Zip
                                                    Code
                                                </label></div>
                                            <div class="col-sm-9 col-lg-8 col-12">
                                                <input type="text" class="form-control" id="ZipCode"
                                                       placeholder="Zip Code">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label">Gender</label></div>
                                            <div class="col-sm-9 col-12 col-lg-8">
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="radio_twitter">Male</b-form-radio>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <b-form-radio checked="false" name="radio_twitter">Female</b-form-radio>
                                                    </div>
                                                    <div class="col-sm-4 col-lg-6">
                                                        <b-form-radio checked="false" name="radio_twitter">Others</b-form-radio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-offset-3 col-lg-offset-4 col-8 ml-auto txt_media">
                                                <label>
                                                    <b-form-checkbox>&nbsp; Send me
                                                        latest news and updates.</b-form-checkbox>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-offset-3 col-8 ml-auto txt_media">
                                                <label>
                                                    <b-form-checkbox> I agree
                                                        to
                                                        the
                                                        <a href="#">
                                                            Terms and Conditions
                                                        </a></b-form-checkbox>
                                                </label>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <div class="col-sm-offset-3= col-9 ml-auto txt_media">
                                                <input type="button" class="btn  btn-primary "
                                                       value="Submit ">
                                                <button type="reset" class="btn  btn-secondary mt-1 mt-sm-0">Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <!--select2 ends-->
                            </div>
                            <div class="col-sm-6">
                                <card title="<i class='fa fa-fw ti-check-box'></i> Horizontal Form Layout">
                                    <form>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label for="horizontal_inputEmail"
                                                       class="control-label ">Email</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <input type="email" class="form-control" id="horizontal_inputEmail"
                                                       placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label for="horizontal_inputPassword"
                                                       class="control-label hidden-xs">Password</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <input type="password" class="form-control"
                                                       id="horizontal_inputPassword" placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-3 col-sm-9 col-lg-8  ml-auto txt_media">
                                                <div class="checkbox">
                                                    <label>
                                                        <b-form-checkbox class="remember">Remember me</b-form-checkbox>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-3 col-sm-9 ml-auto txt_media">
                                                <button type="button" class="btn  btn-primary">Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <card title="<i class='fa fa-fw ti-move'></i> General Controls">
                                    <form method="post" enctype="multipart/form-data">
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label">Static</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <p class="form-text">
                                                    Static text
                                                </p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-text-input">Text</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <input type="text" id="example-text-input"
                                                       name="example-text-input" class="form-control"
                                                       placeholder="Text">
                                                <span class="help-block">
                                                                        This is a help text
                                                                    </span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-email">Email</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <input type="email" id="example-email"
                                                       name="example-email"
                                                       class="form-control" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-password">Password</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <input type="password" id="example-password"
                                                       name="example-password" class="form-control"
                                                       placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-disabled">Disabled</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <input type="text" id="example-disabled"
                                                       name="example-disabled" class="form-control"
                                                       placeholder="Disabled" disabled>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-textarea-input">Textarea</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                            <textarea id="example-textarea-input"
                                                                      name="example-textarea-input" rows="7"
                                                                      class="form-control resize_vertical"
                                                                      placeholder="Description.."></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label" for="example-select">Select</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <select id="example-select" name="example-select"
                                                        class="form-control" size="1">
                                                    <option value="0">
                                                        Please select
                                                    </option>
                                                    <option value="1">Bootstrap</option>
                                                    <option value="2">CSS</option>
                                                    <option value="3">JavaScript</option>
                                                    <option value="4">HTML</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-multiple-select">Multiple</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <select id="example-multiple-select"
                                                        name="example-multiple-select"
                                                        class="form-control"
                                                        size="5" multiple>
                                                    <option value="1">Option #1</option>
                                                    <option value="2">Option #2</option>
                                                    <option value="3">Option #3</option>
                                                    <option value="4">Option #4</option>
                                                    <option value="5">Option #5</option>
                                                    <option value="6">Option #6</option>
                                                    <option value="7">Option #7</option>
                                                    <option value="8">Option #8</option>
                                                    <option value="9">Option #9</option>
                                                    <option value="10">Option #10</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label">Radio Buttons</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <div class="m-l-10 m-t-6">
                                                    <b-form-radio checked="false" name="radio_ganeral">HTML</b-form-radio>
                                                </div>
                                                <div class="m-l-10">
                                                    <b-form-radio checked="false" name="radio_ganeral">HTML</b-form-radio>
                                                </div>
                                                <div class="m-l-10">
                                                    <b-form-radio checked="false" name="radio_ganeral">HTML</b-form-radio>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label">
                                                    Inline Radio Buttons
                                                </label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <b-form-radio checked="false" name="radio_ganeral_inline" class="mr-0">HTML</b-form-radio>
                                                <b-form-radio checked="false" name="radio_ganeral_inline" class="mr-0">CSS</b-form-radio>
                                                <b-form-radio checked="false" name="radio_ganeral_inline" class="mr-0">JavaScript</b-form-radio>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label">Checkboxes</label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <div class="m-l-10 m-t-6">
                                                    <b-form-checkbox>HTML</b-form-checkbox>
                                                </div>
                                                <div class="m-l-10">
                                                    <b-form-checkbox>HTML</b-form-checkbox>
                                                </div>
                                                <div class="m-l-10">
                                                    <b-form-checkbox>HTML</b-form-checkbox>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label">
                                                    Inline Checkboxes
                                                </label></div>
                                            <div class="col-sm-9 col-lg-8">
                                                <b-form-checkbox class="mr-0 mr-sm-1">HTML</b-form-checkbox>
                                                <b-form-checkbox class="mr-0 mr-sm-1">HTML</b-form-checkbox>
                                                <b-form-checkbox class="mr-0 mr-sm-1">HTML</b-form-checkbox>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-file-input">File</label></div>
                                            <div class="col-sm-9 m-t-10 col-lg-8">
                                                <input type="file" id="example-file-input"
                                                       name="example-file-input">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                <label class="form-control-label"
                                                       for="example-file-multiple-input">
                                                    Multiple File
                                                </label></div>
                                            <div class="col-sm-9 m-t-10 col-lg-8">
                                                <input type="file" id="example-file-multiple-input"
                                                       name="example-file-multiple-input" multiple>
                                            </div>
                                        </div>
                                        <div class="form-group form-actions">
                                            <div class="col-sm-9 col-sm-offset-3 ml-auto">
                                                <button type="button"
                                                        class="btn btn-effect-ripple  btn-primary">Submit
                                                </button>
                                                <button type="reset"
                                                        class="btn btn-effect-ripple btn-secondary reset_btn5">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                                <card title="<i class='fa fa-fw ti-pencil'></i> Twitter Bootstrap Form Validation States">
                                    <form>
                                        <div class="form-group row has-success">
                                            <label class="col-sm-3 control-label text-success" for="inputSuccess3">Username</label>
                                            <div class="col-sm-9">
                                                <input type="text" id="inputSuccess3"
                                                       class="form-control is-valid"
                                                       placeholder="Input with success">
                                                <span class="form-text text-success">
                                                                        Username is available
                                                                    </span>
                                            </div>
                                        </div>
                                        <div class="form-group row has-error">
                                            <label class="col-sm-3 control-label text-danger"
                                                   for="inputError3">Email</label>
                                            <div class="col-sm-9">
                                                <input type="email" id="inputError3"
                                                       class="form-control brdr_danger is-invalid"
                                                       placeholder="Input with error">
                                                <span class="form-text text-danger">
                                                                        Please enter a valid email address
                                                                    </span>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-offset-3 col-sm-9 ml-auto">
                                                <button type="button" class="btn  btn-primary">Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <form>
                                        <div class="form-group row has-success has-feedback">
                                            <label class="col-sm-3 control-label text-success" for="inputSuccess">Username</label>
                                            <div class="col-sm-9">
                                                <input type="text" id="inputSuccess"
                                                       class="form-control is-valid "
                                                       placeholder="Input with success">

                                                <span class="form-text text-success">
                                                                        Username is available
                                                                    </span>
                                            </div>
                                        </div>
                                        <div class="form-group row has-error has-feedback">
                                            <label class="col-sm-3 control-label text-danger"
                                                   for="inputError">Email</label>
                                            <div class="col-sm-9">
                                                <input type="email" id="inputError" class="form-control is-invalid brdr_danger"
                                                       placeholder="Input with error">

                                                <span class="form-text text-danger">
                                                                        Please enter a valid email address
                                                                    </span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-3 col-sm-9 ml-auto">
                                                <button type="button" class="btn  btn-primary">Login
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                            <div class="col-sm-12">
                                <card class="card_brdr" title="<i class='fa fa-fw ti-pencil'></i> Bootstrap Form Inputs">
                                    <form role="form" class="form-horizontal">
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="valid_email">
                                                Email Address
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                 <i class="fa ti-email"></i>
                                                            </span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Email Address" id="valid_email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="exampleInputPassword1">Password</label>
                                            <div class="col-sm-8">
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                  <i class="fa ti-key"></i>
                                                            </span>
                                                    </div>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row has-success">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="valid_email2">
                                                Validation Email
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group input-icon right">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                 <i class="fa ti-email"></i>
                                                            </span>
                                                    </div>
                                                    <input id="valid_email2" class="input-error form-control"
                                                           type="text" placeholder="Email Address">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right" for="validate_confirm">
                                                Validation Password
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group input-icon right">
                                                    <div class="input-group-prepend">
                                                            <span class="input-group-text bg-white">
                                                                  <i class="fa ti-key"></i>
                                                            </span>
                                                    </div>
                                                    <input type="password"
                                                           class="form-control"
                                                           placeholder="Password" id="validate_confirm">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="left_check">
                                                Checkbox Left
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text bg-white">
                                                            <b-form-checkbox class="mr-0"></b-form-checkbox>
                                                        </div>
                                                    </div>
                                                    <input type="text" class="form-control" id="left_check">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="right_check">
                                                Checkbox right
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" id="right_check">
                                                    <div class="input-group-append">
                                                        <div class="input-group-text bg-white">
                                                            <b-form-checkbox class="mr-0"></b-form-checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="right_on">
                                                Radio on left
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text bg-white">
                                                            <b-form-checkbox class="mr-0"></b-form-checkbox>
                                                        </div>
                                                    </div>
                                                    <input type="text" class="form-control" id="right_on">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="right_off">
                                                Radio on right
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" id="right_off">
                                                    <div class="input-group-append">
                                                        <div class="input-group-text bg-white">
                                                            <b-form-checkbox class="mr-0"></b-form-checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="process_right">
                                                Processing right
                                            </label>
                                            <div class="col-sm-8">
                                                <div class="input-icon left spinner" >
                                                    <input class="input-error form-control"
                                                           type="text" placeholder="" id="process_right"> <i
                                                        class="fa fa-fw fa-spin fa-spinner proc text-primary"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media">
                                                Static Paragraph
                                            </label>
                                            <div class="col-sm-8">
                                                <p class="form-control" >
                                                    email@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 control-label float-md-right txt_media" for="bootstrap_readonly">Readonly</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control"
                                                       placeholder="Readonly" readonly="" id="bootstrap_readonly">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-8 col-sm-offset-2 ml-auto">
                                                <button type="button" class="btn  btn-primary m-t-10">
                                                    Submit
                                                </button>
                                                <button type="button" class="btn  btn-danger m-t-10">
                                                    Cancel
                                                </button>
                                                <button type="reset"
                                                        class="btn btn-effect-ripple  btn-secondary m-t-10 reset_btn6">
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </card>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</div>
</template>
<script>
    import card from "./card/card.vue"
export default {
        components:{
            card
        },
    data(){
        return {
            example_radio: [
                {text: 'HTML', value: 'HTML'},
                {text: 'CSS', value: 'CSS'},
                {text: 'JavaScript', value: 'JS'}
            ],
            example_radio_seperated:[
                {text: 'HTML', value: 'HTML'},
                {text: 'CSS', value: 'CSS'},
                {text: 'JavaScript', value: 'JS'}
            ],
            example_radio_bordered:[
                {text: 'HTML', value: 'HTML'},
                {text: 'CSS', value: 'CSS'},
                {text: 'JavaScript', value: 'JS'}
            ],
            example_check:[
                {text:'HTML', value:'HTML'},
                {text:'CSS', value:'CSS'},
                {text:'JavaScript', value:'JS'},
                ],
            example_check_seperated:[
                {text:'HTML', value:'HTML'},
                {text:'CSS', value:'CSS'},
                {text:'JavaScript', value:'JS'},
            ],
            example_check_bordered:[
                {text:'HTML', value:'HTML'},
                {text:'CSS', value:'CSS'},
                {text:'JavaScript', value:'JS'},
            ],
        }
    },

    name: "form_layouts",
    destroyed: function() {
    }
}
</script>
<style src="../../assets/css/form_layouts.css"></style>