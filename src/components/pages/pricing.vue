<template>
    <div>
        <div class="row text-center">
            <div class="col-sm-12 col-lg-12">
                <div class="btn-group" data-toggle="buttons">
                    <label class="btn btn-default span-btn monthly " v-bind:class="{active: isActive==1}" @click="number">
                        <input type="radio" name="options" id="option2" autocomplete="off"  value="monthly" checked v-model="selected" class="d-none"> Monthly Tariff
                    </label>
                    <label class="btn btn-default span-btn yearly" v-bind:class="{active: isActive==0}" @click="numbers">
                        <input type="radio" name="options" id="option3" autocomplete="off" value="yearly" v-model="selected" class="d-none">  Yearly Tariff
                    </label>
                </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3">
                <div class="modal-1">
                    <div class="pack-heading">
                        <h4 class="pack-title"><strong>Basic</strong></h4>
                        <div class="pack-price monthly-pack" v-if="(selected=='monthly')?true:false"><sup class="dollar">$</sup>49<span>/mo</span></div>
                        <div class="pack-price yearly-pack" v-else ><sup class="dollar">$</sup>540<span>/yr</span>
                        </div>
                        <p>$45/mo If you get yearly Pack.</p>
                    </div>
                    <p class="section-head">TRACKED CAMPAIGNS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>5</strong> Campaigns</li>
                        <li><strong>300</strong> Keyword Ranking</li>
                        <li><strong>250,000</strong> Crawled Pages</li>
                        <li class="text-dummy">No Branded Reports</li>
                    </ul>
                    <p class="section-head">KEYWORD EXPLORER</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>5 Keywords Reports</strong></li>
                        <li class="text-dummy">No Keywords List</li>
                    </ul>
                    <p class="section-head">USER ACCESS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>2</strong> Seats</li>
                    </ul>
                    <button class="btn btn-primary center-block btn-getit">Get it now</button>
                </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3">
                <div class="modal-1">
                    <div class="trending-tag">
                        <div class="tag-design bg-primary text-white">Best
                            <br> Package</div>
                    </div>
                    <div class="pack-heading">
                        <h4 class="pack-title"><strong>Econamic</strong></h4>
                        <div class="pack-price monthly-pack" v-if="(selected=='monthly')?true:false"><sup class="dollar">$</sup>99<span>/mo</span></div>
                        <div class="pack-price yearly-pack" v-else><sup class="dollar">$</sup>1104<span>/yr</span>
                        </div>
                        <p>$92/mo If you get yearly Pack.</p>
                    </div>
                    <p class="section-head">TRACKED CAMPAIGNS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>10</strong> Campaigns</li>
                        <li><strong>750</strong> Keyword Ranking</li>
                        <li><strong>500,000</strong> Crawled Pages</li>
                        <li> <strong>Branded Reports</strong></li>
                    </ul>
                    <p class="section-head">KEYWORD EXPLORER</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>5,000</strong> Full Keywords Reports</li>
                        <li><strong>30</strong> Full Keywords List</li>
                    </ul>
                    <p class="section-head">USER ACCESS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>10</strong> Seats</li>
                    </ul>
                    <button class="btn btn-danger center-block btn-getit">Get it now</button>
                </div>
            </div>
            <div class="col-sm-6  col-lg-6 col-xl-3">
                <div class="modal-1">
                    <div class="pack-heading">
                        <h4 class="pack-title"><strong>Premium</strong></h4>
                        <div class="pack-price monthly-pack" v-if="(selected=='monthly')?true:false"><sup class="dollar">$</sup>159<span>/mo</span></div>
                        <div class="pack-price yearly-pack" v-else ><sup class="dollar">$</sup>1788<span>/yr</span>
                        </div>
                        <p>$149/mo If you get yearly Pack.</p>
                    </div>
                    <p class="section-head">TRACKED CAMPAIGNS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>25</strong> Campaigns</li>
                        <li><strong>1,700</strong> Keyword Ranking</li>
                        <li><strong>1,125,000</strong> Crawled Pages</li>
                        <li> <strong>Branded Reports</strong></li>
                    </ul>
                    <p class="section-head">KEYWORD EXPLORER</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>12,000</strong> Full Keywords Reports</li>
                        <li><strong>50</strong> Full Keywords List</li>
                    </ul>
                    <p class="section-head">USER ACCESS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>25</strong> Seats</li>
                    </ul>
                    <button class="btn btn-primary center-block btn-getit">Get it now</button>
                </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-3">
                <div class="modal-1">
                    <div class="pack-heading">
                        <h4 class="pack-title"><strong>Enterprise</strong></h4>
                        <div class="pack-price monthly-pack" v-if="(selected=='monthly')?true:false"><sup class="dollar">$</sup>399<span>/mo</span></div>
                        <div class="pack-price yearly-pack " v-else><sup class="dollar">$</sup>4620<span>/yr</span>
                        </div>
                        <p>$385/mo If you get yearly Pack.</p>
                    </div>
                    <p class="section-head">TRACKED CAMPAIGNS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>100</strong> Campaigns</li>
                        <li><strong>7,500</strong> Keyword Ranking</li>
                        <li><strong>1,250,000</strong> Crawled Pages</li>
                        <li> <strong>Branded Reports</strong></li>
                    </ul>
                    <p class="section-head">KEYWORD EXPLORER</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>30,000</strong> Full Keywords Reports</li>
                        <li><strong>90</strong> Full Keywords List</li>
                    </ul>
                    <p class="section-head">USER ACCESS</p>
                    <ul class="pack-details list-unstyled">
                        <li><strong>30</strong> Seats</li>
                    </ul>
                    <button class="btn btn-primary center-block btn-getit">Get it now</button>
                </div>
            </div>
            <div class="col-sm-12 col-lg-12">
                <p class="pro-option">Want to be a PRO User?</p>
                <p class="contact-info">We have larger and the best plans designed for you.</p>
                <a href="javascript:void(0)" class="btn btn-contact">Contact Us</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isActive:1,
                selected:"monthly"
            }
        },
        methods:{
            number(){
               this.isActive=1
            },
            numbers(){
                this.isActive=0
            }

        }
    }
</script>
<style src="../../assets/css/custom_css/pricing_table.css"></style>