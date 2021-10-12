<template>  
<div class="container-fluid p-0">
  <div class="row">
<div class="col-xl-12 col-sm-12 col-md-12 col-lg-12">

    <div class="card nvd3-card">
      <div class="card-header">
        <h3 class="card-title">Hashrate vs Difficulty - Last 48 hours</h3>
      </div>
      <div class="card-body">
        <div id="chartMulti" class="row chart mx-0" style="width: 100%; height: 300px; overflow: hidden; text-align: left;">
        </div>
      </div>
    </div>
</div>
</div>
  <div class="row">
        <div class="col-xl-3 col-sm-6 col-lg-6">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card p-3 text-center bg-percent-onehour">
                            <h5 class="text-white">Percent change - 1h (BTC)</h5>
                            <i class="fa fa-bar-chart text-white fa-2x mt-3 mb-3"></i>
                            <h5 id="oneHourPercent" class="text-white font-weight-bold"><i id="oneHourArrow" class="fa"></i> <b class="percentChangeOneHour"></b>%</h5>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="card p-3 text-center bg-percent-tfhour">
                            <h5 class="text-white">Percent change - 24h (BTC)</h5>
                            <i class="fa fa-bar-chart text-white fa-2x mt-3 mb-3"></i>
                            <h5 id="twentyFourHourPercent" class="text-white font-weight-bold"><i id="twentyFourHourArrow" class="fa"></i> <b class="percentChangeTf"></b>%</h5>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-12">
                        <div class="card p-3 text-center bg-percent-sevenday">
                            <h5 class="text-white">Percent change - 7d (BTC)</h5>
                            <i class="fa fa-bar-chart text-white mt-3 mb-3 fa-2x"></i>
                            <h5 id="sevenDayPercent" class="text-white font-weight-bold"><i id="sevenDayArrow" class="fa"></i> <b class="percentChangeSevenDays"></b>%</h5>
                        </div>
                    </div>
                </div>
  </div>
  <div class="col-xl-9 col-sm-6 col-lg-6">
    <div class="card nvd3-card">
      <div class="card-header">
        <h3 class="card-title">Addresses / New vs Total - Forever</h3>
      </div>
      <div class="card-body">
        <div id="chartAddresses" class="row chart mx-0" style="width: 100%; height: 370px; overflow: hidden; text-align: left;">
        </div>
      </div>
    </div>
</div>

</div>
<div class="row">
  <div class="col-xl-9 col-sm-6 col-lg-6">
        <div class="card nvd3-card">
      <div class="card-header">
        <h3 class="card-title">Price vs Volume - Last 3 months</h3>&nbsp; <button @click="changeValue('USD')">USD</button> <button @click="changeValue('BTC')">BTC</button> 
      </div>
      <div class="card-body">
        <div id="chartMarketVolume" class="row chart mx-0" style="width: 100%; height: 400px; overflow: hidden; text-align: left;">
        </div>
      </div>
    </div>
  </div>

    <div class="col-xl-3 col-sm-6 col-lg-6">
        <div class="card nvd3-card">
      <div class="card-header">
        <h3 class="card-title">Pie Chart - Coin Locked vs Available Supply</h3> 
      </div>
      <div class="card-body">
        <div id="chartPieCoinsLocked" class="row chart mx-0" style="width: 100%; height: 400px; overflow: hidden; text-align: left;">
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import nvd3 from "../../../../vendors/nvd3/build/nv.d3.min.js";
import Vue from "vue";

require("amcharts3/amcharts/amcharts");
require("amcharts3/amcharts/serial");
require("amcharts3/amcharts/pie");
require("amcharts3/amcharts/themes/light");
require("amcharts3/amcharts/plugins/dataloader/dataloader.min");
require("amcharts3/amcharts/plugins/export/export.min.js");
require("amcharts3/amcharts/plugins/export/export.css");
// require('amcharts3/amcharts/plugins/export/libs/fabric.js/fabric.min.js');
require("amcharts3/amcharts/plugins/export/libs/FileSaver.js/FileSaver.min.js");
require("amcharts3/amcharts/plugins/export/libs/jszip/jszip.min.js");
require("amcharts3/amcharts/plugins/export/libs/pdfmake/pdfmake.min.js");

export default {
  name: "charts",
  data() {
    return {
      multiChart: null,
      addressesChart: null,
      marketVolumeChart: null,
      addressesData: null,
      loading: true,
      pickedCurrency: "BTC",
      currencySign: "฿",
      masternodesTotal: null,
      availableSupply: null,
      coinsLocked: null
    };
  },
  computed: {
    latestStats() {
      return this.$store.state.chain.latest_stats;
    }
  },
  watch: {
    latestStats(newStats, oldStats) {
      this.multiChart.dataProvider.shift();
      this.multiChart.dataProvider.push({
        date: moment.unix(newStats.last_block).format("YYYY-MM-DD HH:mm:ss"),
        hashrate: newStats.hashrate,
        difficulty: newStats.difficulty
      });
      this.multiChart.validateData();
    }
  },
  methods: {
    changeValue(value) {
      this.pickedCurrency = value;
      if (this.pickedCurrency === "BTC") {
        this.currencySign = "฿";
      } else {
        this.currencySign = "$";
      }
      this.createMarketVolumeChart();
    },
    createPieCoinsChart: function() {
      // eslint-disable-next-line

      this.pieCoinChart = window.AmCharts.makeChart("chartPieCoinsLocked", {
        pathToImages: "/static/img/amcharts/",
        type: "pie",
        theme: "light",

        dataProvider: [
          {
            country: "Coins Locked",
            litres: "",
            color: "#363636",
            colorText: "#ffffff"
          },
          {
            country: "Available Supply",
            litres: "",
            color: "#f2932e",
            colorText: "#ffffff"
          }
        ],
        valueField: "litres",
        titleField: "country",
        colorField: "color",
        labelColorField: "colorText",
        labelRadius: 5,

        radius: "40%",
        labelRadius: -55,
        labelText: "[[title]]",
        export: {
          enabled: false
        }
      });
      var stats = [];
      var masternodes = [];
      axios
        .get("https://api.straks.info/v2/masternodes?status=enabled&limit=0")
        .then(
          response => {
            masternodes = response.data.pagination;
            this.masternodesTotal = masternodes.totalMasternodes;
            this.pieCoinChart.dataProvider[0].litres = this.coinsLocked =
              this.masternodesTotal * 15000;
              if(this.coinsLocked) {
                      axios.get("https://api.straks.info/v2/statistics/latest").then(
        response => {
          stats = response.data;
          this.availableSupply =
            stats.circulating_coins.toFixed(0) - this.coinsLocked;
          this.pieCoinChart.dataProvider[1].litres = this.availableSupply;
          this.pieCoinChart.validateData();
       this.loading = false;
        },
        error => {
          console.log(error);
        }
      );
              }
      
          },
          error => {
            console.log(error);
          }
        );
    },
    createAddressesChart: function() {
      // eslint-disable-next-line
      this.addressesChart = window.AmCharts.makeChart("chartAddresses", {
        pathToImages: "/static/img/amcharts/",
        type: "serial",
        theme: "light",
        dataProvider: null,
        synchronizeGrid: true,
        valueAxes: [
          {
            id: "v1",
            position: "left",
            title: "New"
          },
          {
            id: "v2",
            position: "right",
            title: "Total"
          }
        ],
        graphs: [
          {
            valueAxis: "v1",
            fillAlphas: 0.4,
            valueField: "value",
            type: "column",
            lineColor: "#243a4e",
            columnWidth: 0.6,
            balloonFunction: item => {
              return (
                '<div style="margin:5px; font-size:14px;">New:<b>' +
                item.values.value +
                "</b></div>"
              );
            }
          },
          {
            valueAxis: "v2",
            fillAlphas: 0.2,
            valueField: "total",
            lineColor: "#f2932e",
            balloonFunction: item => {
              return (
                '<div style="margin:5px; font-size:14px;">Total:<b>' +
                item.values.value +
                "</b></div>"
              );
            }
          }
        ],
        chartScrollbar: {},
        chartCursor: {
          categoryBalloonDateFormat: "DD MMMM",
          cursorPosition: "mouse"
        },
        categoryField: "date",
        categoryAxis: {
          minPeriod: "DD",
          parseDates: true,
          minorGridEnabled: true
        },
        export: {
          enabled: false,
          dateFormat: "YYYY-MM-DD",
          position: "bottom-right"
        }
      });

      axios.get("https://api.straks.info/v2/charts/addresses").then(
        response => {
          var total = response.data.reduce((a, c) => a + c[1], 0);
          var newData = response.data.map(el => {
            total -= el[1];
            return {
              date: el[0],
              value: el[1],
              total: total
            };
          });
          this.addressesChart.dataProvider = newData.reverse();
          this.addressesChart.validateData();
          this.loading = false;
        },
        error => {
          console.log(error);
        }
      );
    },
    createMultiChart: function() {
      // eslint-disable-next-line
      this.multiChart = window.AmCharts.makeChart("chartMulti", {
        pathToImages: "/static/img/amcharts/",
        libs: {
          path: "/static/plugins/amcharts"
        },
        type: "serial",
        theme: "light",
        legend: {
          useGraphSettings: true,
          align: "center",
          spacing: 100,
          valueAlign: "left",
          valueFunction: value => {
            return "";
          }
        },
        dataProvider: null,
        synchronizeGrid: true,
        valueAxes: [
          {
            id: "v1",
            axisColor: "#FF6600",
            axisThickness: 2,
            axisAlpha: 0.8,
            position: "left",
            title: "Hashrate",
            labelFunction: value => {
              return this.formatBytes(value) + "/s";
            }
          },
          {
            id: "v2",
            axisColor: "#243a4e",
            axisThickness: 2,
            axisAlpha: 0.8,
            position: "right",
            title: "Difficulty"
          }
        ],
        graphs: [
          {
            id: "g1",
            valueAxis: "v1",
            lineColor: "#f0974b",
            bullet: "round",
            bulletBorderThickness: 1,
            hideBulletsCount: 30,
            title: "Hashrate",
            valueField: "hashrate",
            fillAlphas: 0,
            balloonFunction: item => {
              return this.formatBytes(item.values.value) + "/s";
            }
          },
          {
            id: "g2",
            valueAxis: "v2",
            lineColor: "#243a4e",
            bullet: "square",
            bulletBorderThickness: 1,
            hideBulletsCount: 30,
            title: "Difficulty",
            valueField: "difficulty",
            fillAlphas: 0
          }
        ],
        chartScrollbar: {
          graph: "g2",
          scrollbarHeight: 50,
          backgroundAlpha: 0,
          selectedBackgroundAlpha: 0.1,
          selectedBackgroundColor: "#888888",
          graphFillAlpha: 0,
          graphLineAlpha: 0.5,
          selectedGraphFillAlpha: 0,
          selectedGraphLineAlpha: 1,
          autoGridCount: true,
          color: "#AAAAAA"
        },
        chartCursor: {
          cursorPosition: "mouse",
          categoryBalloonDateFormat: "JJ:NN, DD MMMM"
        },
        categoryField: "date",
        categoryAxis: {
          minPeriod: "mm",
          parseDates: true,
          axisColor: "#DADADA",
          minorGridEnabled: true
        },
        export: {
          enabled: false,
          dateFormat: "YYYY-MM-DD HH:NN:SS",
          position: "bottom-right"
        }
      });

      axios.get("https://api.straks.info/v2/charts/multi?days=2").then(
        response => {
          this.multiChart.dataProvider = response.data
            .map(el => {
              return {
                date: moment.unix(el.t).format("YYYY-MM-DD HH:mm:ss"),
                hashrate: el.h,
                difficulty: el.d
              };
            })
            .reverse();
          this.multiChart.validateData();
          this.loading = false;
        },
        error => {
          console.log(error);
        }
      );
    },

    createMarketVolumeChart: function() {
      // eslint-disable-next-line
      this.marketVolumeChart = window.AmCharts.makeChart("chartMarketVolume", {
        pathToImages: "/static/img/amcharts/",
        libs: {
          path: "/static/plugins/amcharts"
        },
        type: "serial",
        theme: "light",
        legend: {
          useGraphSettings: true,
          align: "center",
          spacing: 100,
          valueAlign: "left",
          valueFunction: value => {
            return "";
          }
        },
        dataProvider: null,
        synchronizeGrid: true,
        valueAxes: [
          {
            id: "v1",
            axisColor: "#363636",
            axisThickness: 2,
            axisAlpha: 1,
            position: "left",
            title: "Volume (" + this.pickedCurrency + ")"
          },
          {
            id: "v2",
            axisColor: "#f2932e",
            axisThickness: 2,
            axisAlpha: 1,
            position: "right",
            title: "Price (" + this.pickedCurrency + ")"
          }
        ],
        graphs: [
          {
            id: "g1",
            valueAxis: "v1",
            lineColor: "#363636",
            bullet: "round",
            bulletBorderThickness: 1,
            hideBulletsCount: 30,
            title: "Volume (" + this.pickedCurrency + ")",
            valueField: "volume",
            connect: false,
            type: "column",
            columnWidth: 1,
            fillAlphas: 1,
            balloonFunction: item => {
              return (
                '<div style="margin:4px; font-size:12px;">Volume: <b>' +
                this.currencySign +
                item.values.value +
                "</b></div>"
              );
            }
          },
          {
            id: "g2",
            valueAxis: "v2",
            lineColor: "#f2932e",
            bullet: "square",
            bulletBorderThickness: 1,
            hideBulletsCount: 30,
            title: "Price (" + this.pickedCurrency + ")",
            valueField: "price",
            fillAlphas: 0.5,
            balloonFunction: item => {
              return (
                '<div style="margin:4px; font-size:12px;">Price: <b>' +
                this.currencySign +
                item.values.value +
                "</b></div>"
              );
            }
          }
        ],
        chartScrollbar: {
          graph: "g2",
          scrollbarHeight: 50,
          backgroundAlpha: 0,
          selectedBackgroundAlpha: 0.1,
          selectedBackgroundColor: "#888888",
          graphFillAlpha: 0,
          graphLineAlpha: 0.5,
          selectedGraphFillAlpha: 0,
          selectedGraphLineAlpha: 1,
          autoGridCount: true,
          color: "#AAAAAA"
        },
        chartCursor: {
          cursorPosition: "mouse",
          categoryBalloonDateFormat: "JJ:NN, DD MMMM"
        },
        categoryField: "date",
        categoryAxis: {
          minPeriod: "hh",
          parseDates: true,
          axisColor: "#243a4e",
          minorGridEnabled: true
        },
        export: {
          enabled: false,
          dateFormat: "YYYY-MM-DD HH:NN:SS",
          position: "bottom-right"
        }
      });

      axios.get("https://mycryptostats.com/api/v1/straks/history/3m").then(
        response => {
          if (this.pickedCurrency == "USD") {
            this.marketVolumeChart.dataProvider = response.data.map(el => {
              if (!isNaN(el.vol_usd) && el.vol_usd == 0) {
                el.vol_usd = null;
              }
              return {
                date: moment.unix(el.timestamp).format("YYYY-MM-DD HH:mm"),
                price: el.price_usd,
                volume: el.vol_usd
              };
            });
          } else if (this.pickedCurrency == "BTC") {
            this.marketVolumeChart.dataProvider = response.data.map(el => {
              if (!isNaN(el.vol_btc) && el.vol_btc == 0) {
                el.vol_btc = null;
              } else {
                el.vol_btc = el.vol_btc.toFixed(4);
              }
              return {
                date: moment.unix(el.timestamp).format("YYYY-MM-DD HH:mm"),
                price: el.price_btc,
                volume: el.vol_btc
              };
            });
          }
          this.marketVolumeChart.validateData();
          this.loading = false;
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  mounted() {
    this.createMultiChart();
    this.createAddressesChart();
    this.createMarketVolumeChart();
    this.createPieCoinsChart();
  }
};
</script>

<style>
.component-fade-enter-active {
  transition: opacity 1s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.bg-percent-onehour {
  background-color: #243a4e !important;
  opacity: 0.9;
}
.bg-percent-tfhour {
  background-color: #363636 !important;
  opacity: 0.9;
}
.bg-percent-sevenday {
  background-color: #f2932e !important;
  opacity: 0.9;
}
.gone-up {
  color: #18a384 !important;
}
.gone-down {
  color: #d24119 !important;
}
</style>
