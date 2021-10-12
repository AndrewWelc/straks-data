<template>
    <div>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-money text-warning"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="priceUsd"></b></h3>
                            <p>Price (USD)</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-stats-up text-success"></i>
                        </div>
                        <div class="text-right">
                            <h3><b id="widget_count3" class="priceBtc"></b></h3>
                            <p>Price (BTC)</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
    
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-world text-danger"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="marketCap"></b></h3>
                            <p>Market Cap (USD)</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-bar-chart text-info"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="volumeUsd"></b></h3>
                            <p>Volume 24h (USD)</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-flag-alt text-error"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="circSupply"></b></h3>
                            <p>Circulating Supply</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-cloud text-warning"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="hashrate"></b></h3>
                            <p>Network Hashrate</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-lock text-success"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="diff"></b></h3>
                            <p>Difficulty</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div slot="front">
                    <div class="widget-bg-color-icon card-box">
                        <div class="bg-icon float-left">
                            <i class="ti-harddrives text-danger"></i>
                        </div>
                        <div class="text-right">
                            <h3 class="text-dark"><b class="masternodesTotal"></b></h3>
                            <p>Active Masternodes</p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-xl-12 col-sm-12 col-md-12 col-lg-12">
                        <charts></charts>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import numeral from "numeral";
var spark_time;
const moment = require("moment");
import sparkline from "../../assets/js/custom_js/sparkline/jquery.flot.spline.js";
import lc_switch from "../../vendors/LC-switch/lc_switch.min.js";
import flot from "../../vendors/flotchart/jquery.flot.js";
import flotresize from "../../assets/js/jquery.flot.resize.js";
import flotstack from "../../vendors/flotchart/jquery.flot.stack.js";
import flotspline from "../../vendors/flot-spline/js/jquery.flot.spline.min.js";
import flottooltip from "../../vendors/flot.tooltip/js/jquery.flot.tooltip.min.js";

//    new
import chat from "./dashboard/dashboard_one/chat.vue";
import newsfeed from "./dashboard/dashboard_one/newsfeed.vue";
import timeline from "./dashboard/dashboard_one/timeline.vue";
import charts from "./dashboard/dashboard_one/charts.vue";
import project_status from "./dashboard/dashboard_one/project_status.vue";

export default {
  name: "index",
  components: {
    chat,
    newsfeed,
    timeline,
    charts,
    project_status
  },
  data() {
    return {
      bar_color: "#ccc",
      height: "300px",
      bar_width: "10px",
      visible: false
    };
  },
  mounted: function() {
    "use strict";
    $(document).ready(function() {
      // tab-1

      /* server load  */

      //                     function getThisFuckingData() {
      //     var prices = [];
      //     axios.get('https://graphs2.coinmarketcap.com/currencies/straks/')
      //         .then(response => {
      //             // JSON responses are automatically parsed.
      //             data = response.data[0];
      //             console.log('data: ' + data);
      //         })
      //         .catch(e => {
      //             console.log(e);
      //         })
      // }

      //     getThisFuckingData();

      function getPriceData() {
        var pricesBTC = [];
        var pricesUSD = [];
        axios
          .get("https://api.coinmarketcap.com/v2/ticker/2332/?convert=BTC")
          .then(response => {
            // JSON responses are automatically parsed.
            pricesBTC = response.data.data.quotes.BTC;
            pricesUSD = response.data.data.quotes.USD;
            var priceUsd = formatNumber(pricesUSD.price, "0,0.00");
            var priceBtc = formatNumber(pricesBTC.price, "0,0.00000000");
            var marketCapUsd = formatNumber(pricesUSD.market_cap, "0,0");
            var volume24hUsd = formatNumber(pricesUSD["volume_24h"], "0,0.00");
            var percentChange24hBtc = pricesBTC.percent_change_24h;
            var percentChange1hBtc = pricesBTC.percent_change_1h;
            var percentChange7dBtc = pricesBTC.percent_change_7d;
            $(".priceUsd").html("$" + priceUsd);
            $(".priceBtc").html("฿" + priceBtc);
            $(".marketCap").html("$" + marketCapUsd);
            $(".volumeUsd").html("$" + volume24hUsd);
            $(".percentChangeTf").html(percentChange24hBtc);
            $(".percentChangeOneHour").html(percentChange1hBtc);
            $(".percentChangeSevenDays").html(percentChange7dBtc);
            if (percentChange7dBtc > 0) {
              $("#sevenDayPercent").addClass("gone-up");
              $("#sevenDayArrow").addClass("fa-long-arrow-up");
            } else {
              $("#sevenDayPercent").addClass("gone-down");
              $("#sevenDayArrow").addClass("fa-long-arrow-down");
            }
            if (percentChange1hBtc > 0) {
              $("#oneHourPercent").addClass("gone-up");
              $("#oneHourArrow").addClass("fa-long-arrow-up");
            } else {
              $("#oneHourPercent").addClass("gone-down");
              $("#oneHourArrow").addClass("fa-long-arrow-down");
            }
            if (percentChange24hBtc > 0) {
              $("#twentyFourHourPercent").addClass("gone-up");
              $("#twentyFourHourArrow").addClass("fa-long-arrow-up");
            } else {
              $("#twentyFourHourPercent").addClass("gone-down");
              $("#twentyFourHourArrow").addClass("fa-long-arrow-down");
            }
          })
          .catch(e => {
            console.log(e);
          });
      }

      function getStats() {
        var stats = [];
        axios.get("https://api.straks.info/v2/statistics/latest").then(
          response => {
            stats = response.data;

            var circSupply = formatNumber(stats.circulating_coins, "0,0");
            var hashrate = formatBytes(stats.hashrate);
            var diff = formatNumber(stats.difficulty, "0,0.000");

            $(".circSupply").html(circSupply);
            $(".hashrate").html(hashrate + "/s");
            $(".diff").html(diff);
          },
          error => {
            console.log(error);
          }
        );
      }

      function getMasternodes() {
        var masternodes = [];
        axios
          .get("https://api.straks.info/v2/masternodes?status=enabled&limit=0")
          .then(
            response => {
              masternodes = response.data.pagination;

              $(".masternodesTotal").html(masternodes.totalMasternodes);
            },
            error => {
              console.log(error);
            }
          );
      }

      function formatNumber(value, format) {
        return numeral(value).format(format);
      }

      function formatBytes(a, b) {
        if (0 == a) return "0 Bytes";
        var c = 1024,
          d = b || 2,
          e = ["Bytes", "KH", "MH", "GH", "TH", "PH", "EH", "ZH", "YH"],
          f = Math.floor(Math.log(a) / Math.log(c));
        return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
      }

      function priceInterval() {
        getStats();
        getPriceData();
        getMasternodes();
        setTimeout(priceInterval, 60000);
      }

      function priceDataInterval() {
        getPriceData();
        setTimeout(priceDataInterval, 300000);
      }

      priceInterval();
      priceDataInterval();

      // real time chart ends
    });
  },
  destroyed: function() {
    window.clearTimeout(spark_time);
  }
};
</script>

<style src="../../vendors/LC-switch/lc_switch.css">
</style>

<style src="../../assets/css/custom_css/dashboard1.css">
</style>