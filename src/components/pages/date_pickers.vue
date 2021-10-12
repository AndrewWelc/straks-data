<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <card title="<i class='ti-calendar'></i> Default Date Picker">
                    <datepicker placeholder="Select Date"></datepicker>
                    <code>
                        &lt;datepicker&gt;&lt;/datepicker&gt;
                    </code>
                </card>
            </div>
            <div class="col-md-6">
                <card title=" <i class='ti-calendar'></i> Date Format">
                    <datepicker :format="format"></datepicker>
                    <code>
                        &lt;datepicker :format="format"&gt;&lt;/datepicker&gt;
                    </code>
                    <div class="settings">
                        <h5>Settings</h5>
                        <div class="form-group">
                            <label class="label_font">Format</label>
                            <select v-model="format">
                                <option value="d MMM yyyy" selected>d MMM yyyy - e.g 12 Feb 2016</option>
                                <option value="d MMMM yyyy">d MMMM yyyy - e.g 12 February 2016</option>
                                <option value="yyyy-MM-dd">yyyy-MM-dd - e.g 2016-02-12</option>
                                <option value="dsu MMM yyyy">dsu MMM yyyy - e.g 12th Feb 2016</option>
                                <option value="D dsu MMM yyyy">D dsu MMM yyyy - e.g Sat 12th Feb 2016</option>
                            </select>
                        </div>
                    </div>
                </card>
            </div>
            <div class="col-md-6">
                <card title=" <i class='ti-calendar'></i> Translations">
                    <h5>Spanish datepicker</h5>
                    <datepicker language="es"></datepicker>
                    <code>
                        &lt;datepicker language="es"&gt;&lt;/datepicker&gt;
                    </code>
                    <h5>French datepicker</h5>
                    <datepicker language="fr"></datepicker>
                    <code>
                        &lt;datepicker language="fr"&gt;&lt;/datepicker&gt;
                    </code>
                </card>
            </div>
            <div class="col-md-6">
                <card title="<i class='ti-calendar'></i> With minimum and maximum date range">
                    <datepicker :disabled="disabled"></datepicker>
                    <code>
                        &lt;datepicker :disabled="disabled"&gt;&lt;/datepicker&gt;
                    </code>
                    <div class="settings ">
                        <h5 class="mt-2">Settings</h5>
                        <div class="form-group">
                            <label class="label_font">Range from:</label>
                            <datepicker @selected="disableTo"></datepicker>
                        </div>
                        <div class="form-group">
                            <label class="label_font">Range to:</label>
                            <datepicker @selected="disableFrom"></datepicker>
                        </div>
                    </div>
                </card>
            </div>
            <div class="col-md-6">
                <card title="<i class='ti-calendar'></i> Inline datepicker">
                    <div class="full_calendar">
                        <datepicker :inline="true"></datepicker>
                        <code>
                            &lt;datepicker :inline="true"&gt;&lt;/datepicker&gt;
                        </code>
                    </div>
                </card>
            </div>
        </div>
    </div>

</template>
<script>
    import Vue from 'vue';
    import MaskedInput from 'vue-masked-input'
    import Datepicker from 'vuejs-datepicker'
    import card from "./card/card.vue"
    var state = {
        date1: new Date()
    }

    export default {
        components: {
            card,
            Datepicker,
            MaskedInput,
        },
        data() {
            return {
                format: 'd MMMM yyyy',
                disabled: {},
                eventMsg: null,
                state: state,
                date:'',
                date2:'',
                phone:'',
                intlphone:'',
                ip:'',
            }
        },
        methods: {
            disableTo(val) {
                console.log(val)
                if (typeof this.disabled.to === 'undefined') {
                    this.disabled = {
                        to: null,
                        from: this.disabled.from
                    };
                }
                this.disabled.to = val;
            },
            disableFrom(val) {
                if (typeof this.disabled.from === 'undefined') {
                    this.disabled = {
                        to: this.disabled.to,
                        from: null
                    };
                }
                this.disabled.from = val;
            }
        }
    }
</script>
<style scoped>
    code,
    pre {
        margin: 1em 0;
        padding: 1em;
        border: 1px solid #bbb;
        display: block;
        background: #f1f1f1;
        border-radius: 3px;
    }

    .settings {
        margin: 2em 0;
        /*padding: 0 1.5em 1.5em;*/
        background: #fff;
    }

    h5 {
        font-size: 100%;
        padding: 0;
    }

    .form-group {
        margin-bottom: 1em;
    }

    .form-group label {
        font-size: 80%;
        display: block;
    }

    select {
        height: 2.5em;
        padding: 0;
    }

</style>
<style>
    .example .vdp-datepicker__calendar{
        margin: 0 auto;
    }
    .label_font{
        font-size: 12px !important;
    }
    .vdp-datepicker input{
        padding: 0.75rem 0.5rem;
        width: 100%;
    }
    .vdp-datepicker .vdp-datepicker__calendar{
        margin: auto;
    }
    .c-pane-container.is-double-paned,.c-pane-container,.settings select{
        width: 100% !important;
    }
    .full_calendar .vdp-datepicker__calendar{
        margin-left:0 !important;
        width:100%!important;
    }
    .popover-container input{
        width: 100%;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #A9A9A9;
    }
    .usetweentyfour{
        margin-left: -20px;
    }
    @media(max-width: 768px){
        .c-pane-container.is-double-paned{
            margin-left: -8px;
        }
    }
    @media (min-width: 720px) and (max-width: 1024px){
        .popover-origin .popover-content-wrapper .popover-content.direction-bottom{
            left: -15px;
        }
    }
    @media(min-width:320px) and (max-width: 768px){
        .vdp-datepicker__calendar{
            width: 265px !important;
            margin-left: -20px !important;
        }
    }
    .c-pane-container.is-double-paned{
        min-width:100px !important;
    }

    @media(min-width: 1440px){
        .vdp-datepicker input {
            border: 1px solid #909090;
        }
    }
</style>
