<template>
    <div class="edashboard">
        <h5>Today's sales</h5>
        <div class="row">
            <div class="col-sm-12 col-xl-6">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card p-3 text-center bg-success">
                            <h5 class="text-white">Total sales</h5>
                            <i class="fa fa-bar-chart text-white fa-2x mt-3 mb-3"></i>
                            <h5 class="text-white font-weight-bold"><i class="fa fa-long-arrow-up"></i> 15%</h5>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card p-3 text-center bg-primary">
                            <h5 class="text-white">Total orders</h5>
                            <i class="fa fa-shopping-cart text-white fa-2x mt-3 mb-3"></i>
                            <h5 class="text-white font-weight-bold"><i class="fa fa-long-arrow-up"></i> 2,23,100</h5>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card p-3 text-center bg-warning">
                            <h5 class="text-white">Total products</h5>
                            <i class="fa fa-list-alt text-white mt-3 mb-3 fa-2x"></i>
                            <h5 class="text-white font-weight-bold"><i class="fa fa-long-arrow-up"></i> 6,56,529</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-xl-6">
                <b-card header-tag="h5" class="bg-primary-card">
                    <vue-chartist :data="time.data" :options="time.options" type="Line" ref="chartist8"></vue-chartist>
                </b-card>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-center">
                            Today's Shipments
                        </h5>
                        <div class="text-center">
                            <span class="shipping_perc">
                                70% <br/>bouce rate
                            </span>
                            <circle-slider
                                    v-model="val3"
                                    :side="150"
                                    :circle-width="9"
                                    :progress-width="8"
                                    :knob-radius="7"
                                    progress-color="#418AC9"
                                    knob-color="#418AC9"
                                    circle-color="#edeff0"
                            ></circle-slider>
                        </div>

                        <div class="row mt-5">
                            <div class="col-sm-6 text-center">
                                45% completed
                                <b-progress height="3px" :value="value" variant="success"></b-progress>
                            </div>
                            <div class="col-sm-6 text-center">
                                55% in progress
                                <b-progress height="3px" :value="progress" variant="danger"></b-progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8 col-lg-6">
              <div class="card">
                  <div class="card-body">
                      <h5 class="text-center">Todays top product by revenue</h5>
                      <div class="row">
                          <div class="col-sm-6">
                              <img src="../../assets/img/ecommerce/product.png" alt="product" class="img-fluid">
                          </div>
                          <div class="col-sm-6">
                              <ul class="pl-0 top_revenue">
                                  <li>Name: US Polo T-shirt</li>
                                  <li>Seller: Lorvent Solutions</li>
                                  <li>
                                      <p>
                                          <span class="fa fa-star star_icon text-warning"></span>
                                          <span class="fa fa-star star_icon text-warning"></span>
                                          <span class="fa fa-star star_icon text-warning"></span>
                                          <span class="fa fa-star star_icon text-warning"></span>
                                          <span class="fa fa-star-half star_icon text-warning"></span>
                                      </p>
                                  </li>
                                  <li>
                                      <span class="text-success">Offer 1</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit.....
                                  </li>
                                  <li>
                                      <span class="text-primary">Number of sales today</span>: <span class="text-danger font-weight-bold">12,550</span>
                                  </li>
                                  <li>
                                      <span class="text-primary">Total income</span>: <span class="text-danger font-weight-bold">31,37,500</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <b-tabs class="mt-4 most_trending">
                    <b-tab title="Most visited" active>
                        <div class="row mt-3">
                            <div class="col-sm-4" v-for="(element,index) in visited" :key="index">
                                <span class="bg-danger text-white pl-2 pr-2 sale-tag">{{element.sale}}</span>
                                <img :src="element.src" alt="product" class="img-fluid">
                                <ul class="pl-0">
                                    <li>
                                        <h4 class="mt-2">{{element.price}}</h4>
                                    </li>
                                    <li><p class="text-secondary mb-0" >M.R.P: <del> {{element.mrp}}</del></p></li>
                                    <li>Name: {{element.name}}</li>
                                    <li>Number of visitors: <span class="text-danger">{{element.visits}}</span></li>
                                </ul>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Trending products" >
                        <div class="row mt-3">
                            <div class="col-sm-4" v-for="(element,index) in trending" :key="index">
                                <span class="bg-danger text-white pl-2 pr-2 sale-tag">{{element.sale}}</span>
                                <img :src="element.src" alt="product" class="img-fluid">
                                <ul class="pl-0">
                                    <li>
                                        <h4 class="mt-2">{{element.price}}</h4>
                                    </li>
                                    <li><p class="text-secondary mb-0" >M.R.P: <del> {{element.mrp}}</del></p></li>
                                    <li>Name: {{element.name}}</li>
                                    <li>Number of visitors: <span class="text-danger">{{element.visits}}</span></li>
                                </ul>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <h5>Visitors sources</h5>
                        <ul class="pl-0 visit_sources">
                            <li><i class="ti-facebook text-primary"></i> Facebook <span class="text-danger float-right mt-3">15,320</span></li>
                            <li><i class="ti-twitter text-primary"></i> Twitter <span class="text-danger float-right mt-3">15,320</span></li>
                            <li><i class="ti-instagram text-primary"></i> Instagram <span class="text-danger float-right mt-3">15,320</span></li>
                            <li><i class="ti-mobile text-success"></i> Application <span class="text-danger float-right mt-3">15,320</span></li>
                            <li><i class="ti-home text-warning"></i> Store<span class="text-danger float-right mt-3">15,320</span></li>
                            <li><i class="ti-desktop text-danger"></i> Direct site<span class="text-danger float-right mt-3">15,320</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card">
                    <div class="card-body new_visits">
                        <h5>Visitors</h5>
                        <vue-chartist :data="donut.data" :options="donut.options" type="Pie" :responsiveOptions="donut.responsiveoptions" ref="chartist6"></vue-chartist>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-5">
               <div class="card marketing_camp">
                   <div class="card-body">
                       <h5>
                           Marketing campaign
                       </h5>
                       <vue-chartist :data="pie.data" :options="pie.options" type="Pie" :responsiveOptions="pie.responsiveoptions" ref="chartist6"></vue-chartist>
                   </div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueChartist from 'v-chartist';
    import Chartist from "chartist";
    import Vue from 'vue'
    import VueCircleSlider from 'vue-circle-slider'
    Vue.use(VueCircleSlider)
    var unsub;
    export default {
        name:'edashboard',
        data(){
            return{
                value:70,
                val3:70,
                progress:30,
                visited:[{
                    src:require('img/ecommerce/product.png'),
                    price: "$250",
                    mrp:"$500",
                    name:"US-Polo T-shirt",
                    sale: "50%",
                    visits:"22,350"
                },{
                    src:require('img/ecommerce/product2.png'),
                    price: "$450.45",
                    mrp: "$585",
                    name:"US-Polo Red Shirt",
                    sale:"23%",
                    visits:"11,260"
                },{
                    src:require('img/ecommerce/product3.png'),
                    price: "$280",
                    mrp: "$350",
                    name:"Gift box",
                    sale:"20%",
                    visits:"10,360"
                }],
                trending:[{
                    src:require('img/ecommerce/product.png'),
                    price: "$250",
                    mrp:"$500",
                    name:"US-Polo T-shirt",
                    sale: "50%",
                    visits:"22,350"
                },{
                    src:require('img/ecommerce/product4.png'),
                    price: "$1000",
                    mrp: "1500",
                    name:"Apple Macbook pro",
                    sale:"33%",
                    visits:"16,234",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
                },{
                    src:require('img/ecommerce/product2.png'),
                    price: "$450.45",
                    mrp: "$585",
                    name:"US-Polo Red Shirt",
                    sale:"23%",
                    visits:"11,260"
                }],
                // =======line chart start===========
                time: {
                    data: {
                        labels: ['12am', '4am', '8am', '12pm', '4pm', '8pm'],
                        series: [
                            {
                                name: 'series-1',
                                data: [
                                    {x: new Date(143134652600), y: 53},
                                    {x: new Date(143234652600), y: 40},
                                    {x: new Date(143340052600), y: 45},
                                    {x: new Date(143366652600), y: 40},
                                    {x: new Date(143410652600), y: 20},
                                    {x: new Date(143508652600), y: 32},

                                ]
                            },
                            {
                                name: 'series-2',
                                data: [
                                    {x: new Date(143134652600), y: 53},
                                    {x: new Date(143234652600), y: 35},
                                    {x: new Date(143334652600), y: 30},
                                    {x: new Date(143384652600), y: 30},
                                    {x: new Date(143568652600), y: 10}
                                ]
                            }
                        ]
                    },
                    options: {
                        fullWidth: true,
                        chartPadding: {
                            right: 40
                        }
                    }
                },
                // =======Line chart end========
                // ======donut chart start=======
                donut: {
                    data: {
                        labels: ['Old 6,25,300', 'New 20,598'],
                        series: [83,17]
                    },
                    options: {
                        donut: true,
                        donutWidth: 45,
//                        labelInterpolationFnc: function(value) {
//                            return value[0]
//                        }
                    },
                    responsiveoptions: [
                        ['screen and (min-width: 320px)', {
                            labelOffset: 50,
                            chartPadding: 20
                        }],
                        ['screen and (min-width: 640px)', {
                            chartPadding: 20,
                            labelOffset: 50,
                            labelDirection: 'explode',
                            labelInterpolationFnc: function(value) {
                                return value;
                            }
                        }],
                        ['screen and (min-width: 1024px)', {
                            labelOffset: 50,
                            chartPadding: 20
                        }]
                    ]
                },
                // ======donut chart end================
                // ======pie chart start=======
                pie: {
                    data: {
                        labels: ['Social media', 'TV ads', 'Brochures', 'Hoardings'],
                        series: [40, 30, 15,15]
                    },
                    options: {
//                        labelInterpolationFnc: function(value) {
//                            return value[0]
//                        }
                    },
                    responsiveoptions: [
                        ['screen and (min-width: 640px)', {
                            chartPadding: 30,
                            labelOffset: 50,
                            labelDirection: 'explode',
                            labelInterpolationFnc: function(value) {
                                return value;
                            }
                        }],
                        ['screen and (min-width: 1024px)', {
                            labelOffset: 45,
                            chartPadding: 20
                        }]
                    ]
                },
                // ======pie chart end================
            }
        },
        components: {
            VueChartist
        },
        mounted: function() {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    setTimeout(() => {
                        this.$refs.chartist8.renderChart();
                    })
                }
            });
        },
        beforeRouteLeave (to, from, next) {        unsub();        next();    },
    }
</script>
<style src="chartist/dist/chartist.css"></style>
<style>
    .shipping_perc{
        margin-top: 52px;
        margin-left: -32px;
        position: absolute;
    }
    .top_revenue li{
        line-height: 26px;
    }
    .sale-tag{
        margin-top: 10px;
        position: absolute;
    }
    .sale-tag:after{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: 30px;
        right: auto;
        top: 0px;
        bottom: auto;
        border: 10px solid;
        border-color: #ff6666  transparent transparent transparent;
    }
    .sale-tag:before{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: 30px;
        right: auto;
        top: -1px;
        bottom: auto;
        border: 10px solid;
        border-color:  transparent transparent  #ff6666 transparent;
    }
    .visit_sources li {
        font-size: 15px;
        line-height: 30px;
    }
    .visit_sources li i{
        line-height: 3;
        font-size:16px;
        padding: 0.75rem;
        border-radius: 20px;
        border: 1px solid #c1c1c1;
    }
    .new_visits .ct-series-b .ct-slice-donut{
        stroke: #66cc99;
    }
    .new_visits .ct-series-a .ct-slice-donut{
        stroke:#6699cc;
    }
    .new_visits .v-chartist-container,.marketing_camp .v-chartist-container{
        height: 300px;
    }
    .donut-label{
        height:5px;
        width: 5px;
    }
    .ct-label {
        fill: rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        font-size: 0.75rem;
        line-height: 1;
    }
    .marketing_camp .ct-series-d .ct-slice-pie{
        fill:#6699cc;
    }
    .marketing_camp .ct-series-a .ct-slice-pie{
        fill:#66cc99;
    }
    .marketing_camp .ct-series-b .ct-slice-pie{
        fill:#ff6666;
    }
    .marketing_camp .ct-series-c .ct-slice-pie{
        fill: #ec9f1c;
    }
    .ct-series-a .ct-line,.ct-series-a .ct-point{
        stroke: #66cc99;
    }
    .top_revenue{
        margin-top: -8px;
    }
   @media(max-width:320px){
       .ct-label.ct-horizontal.ct-end{
           margin-left: -5px;
           transform: rotate(40deg);
       }
   }
    @media(max-width:1440px) {
        .most_trending .nav-link{
            padding: 0.7rem 1rem;
        }

    }
    @media(max-width:375px){
        .edashboard{
            margin-top: 15px;
        }
    }
    @media(min-width:320px) and (max-width: 425px){
        .top_revenue{
            margin-top: 0;
        }
    }
</style>

<!--linear-gradient(141deg, #ecb59a 0%, #f58383 51%, #fd8e8e 75%)-->
<!--linear-gradient(141deg, #68a2dc 0%, #96c2ef 51%, #a7c6e6 75%)-->
<!--linear-gradient(141deg, #a3eac7 0%, #75d4a5 51%, #7acaa2 75%)-->