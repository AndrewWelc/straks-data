<template>
    <div>
        <card title="<h4 class='card-title'>Bar Charrts</h4>">
            <div class="row">
                <div class="col-sm-6 push-sm-1 later" style="font-size: 14px;">

                    <div id="chart-composite-1" class="border"><svg height=225></svg></div>
                    <span class="mt-1">Click or use arrow keys to navigate data points</span>

                </div>
                <div class="col-sm-6 push-sm-1 later" style="font-size: 14px;">
                    <div class="card-header">
                        <div id="chart-composite-2" class="border"><svg height=225></svg></div>
                    </div>

                </div>
            </div>
        </card>
        <!--default demo charts-->
        <card title="<h4 class='card-title'>Default charts</h4>">
            <div id="chart-types" class="border"></div>
            <div class="btn-group chart-type-buttons margin-vertical-px mt-3" role="group">
                <button type="button" class="btn btn-sm btn-primary  p-1 p-sm-2" data-type='bar'>Bar </button>
                <button type="button" class="btn btn-sm btn-primary p-1 p-sm-2" data-type='line'>Line </button>
                <button type="button" class="btn btn-sm btn-primary p-1 p-sm-2" data-type='scatter'>Scatter </button>
                <button type="button" class="btn btn-sm btn-primary p-1 p-sm-2"  data-type='pie'>Pie </button>
                <button type="button" class="btn btn-sm btn-primary p-1 p-sm-2" data-type='percentage'>Percentage</button>
            </div>
        </card>
        <card title="<h4 class='card-title'>Plot Trends</h4>">
            <div id="chart-trends" class="border"></div>
            <div class="btn-group chart-plot-buttons mt-1  mt-3" role="group">
                <button type="button" class="btn btn-sm btn-primary" data-type="line">Line</button>
                <button type="button" class="btn btn-sm btn-primary active" data-type="heatline">HeatLine</button>
                <button type="button" class="btn btn-sm btn-primary" data-type="region">Region</button>
            </div>
        </card>
    </div>
</template>
<script>
    import card from "./card/card.vue"
    import Chart from "frappe-charts/dist/frappe-charts.min.esm"
    export default {
        name: "blank",
        data(){
            return{
            }
        },
        components:{
            card
        },
        mounted: function() {
            "use strict"
            // Composite Chart
// ================================================================================
            let report_count_list = [17, 40, 33, 44, 126, 156,
                324, 333, 478, 495, 373];

            let bar_composite_data = {
                labels: ["2007", "2008", "2009", "2010", "2011", "2012",
                    "2013", "2014", "2015", "2016", "2017"],

                datasets: [{
                    "title": "Events",
                    "values": report_count_list,
                     "formatted": report_count_list.map(d => d + " reports")
                }]
            };

            let line_composite_data = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    "values": [36, 46, 45, 32, 27, 31, 30, 36, 39, 49, 0, 0],
                }]
            };

            let more_line_data = {
                // 0: {values: [4, 0, 3, 1, 1, 2, 1, 2, 1, 0, 1, 1]},
                0: {values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
                1: {values: [2, 3, 3, 2, 1, 4, 0, 1, 2, 7, 11, 4]},
                2: {values: [7, 7, 2, 4, 0, 1, 5, 3, 1, 2, 0, 1]},
                3: {values: [0, 2, 6, 2, 2, 1, 2, 3, 6, 3, 7, 10]},
                4: {values: [9, 10, 8, 10, 6, 5, 8, 8, 24, 15, 10, 13]},
                5: {values: [9, 13, 16, 9, 4, 5, 7, 10, 14, 22, 23, 24]},
                6: {values: [20, 22, 28, 19, 28, 19, 14, 19, 51, 37, 29, 38]},
                7: {values: [29, 20, 22, 16, 16, 19, 24, 26, 57, 31, 46, 27]},
                8: {values: [36, 24, 38, 27, 15, 22, 24, 38, 32, 57, 139, 26]},
                9: {values: [37, 36, 32, 33, 12, 34, 52, 45, 58, 57, 64, 35]},
                10: {values: [36, 46, 45, 32, 27, 31, 30, 36, 39, 49, 0, 0]}
            };

            let c1 = document.querySelector("#chart-composite-1");
            let c2 = document.querySelector("#chart-composite-2");

            let bar_composite_chart = new Chart ({
                parent: c1,
                title: "Fireball/Bolide Events - Yearly (more than 5 reports)",
                data: bar_composite_data,
                type: 'bar',
                height: 180,
                colors: ['#ff6666'],
                is_navigable: 1,
                is_series: 1,
                 region_fill: 1
            });

            let line_composite_chart = new Chart ({
                parent: c2,
                data: line_composite_data,
                type: 'line',
                height: 180,
                colors: ['#20c997'],
                is_series: 1
            });

            bar_composite_chart.parent.addEventListener('data-select', (e) => {
                line_composite_chart.update_values([more_line_data[e.index]]);
            });


// Demo Chart (bar, linepts, scatter(blobs), percentage)
// ================================================================================
            let type_data = {
                labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
                    "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

                datasets: [
                    {
                        title: "Some Data",
                        values: [25, 40, 30, 35, 8, 52, 17, -4]
                    },
                    {
                        title: "Another Set",
                        values: [25, 50, -10, 15, 18, 32, 27, 14]
                    },
                    {
                        title: "Yet Another",
                        values: [15, 20, -3, -15, 58, 12, -17, 37]
                    }
                ]
            };

            let type_chart = new Chart({
                parent: "#chart-types",
                title: "My Awesome Chart",
                data: type_data,
                type: 'pie',
                height: 250,
                colors: ['#20c997', '#fd7e14', '#66ccff'],
                is_series: 1,
                format_tooltip_x: d => (d + '').toUpperCase(),
                format_tooltip_y: d => d + ' pts'
            });

            Array.prototype.slice.call(
                document.querySelectorAll('.chart-type-buttons button')
            ).map(el => {
                el.addEventListener('click', (e) => {
                    let btn = e.target;
                    let type = btn.getAttribute('data-type');

                    let newChart = type_chart.get_different_chart(type);
//                    type_chart.colors=['#20c997', '#fd7e14', '#66ccff','#ccc','#ddd','#eee','#222','#111'];

                    if(newChart){
                        type_chart = newChart;
                    }

                    type_chart.setColors(['#20c997', '#fd7e14', '#66ccff'],type);
                    type_chart.refresh()
                    Array.prototype.slice.call(
                        btn.parentNode.querySelectorAll('button')).map(el => {
                        el.classList.remove('active');
                    });
                    btn.classList.add('active');
                });
            });

            // Trends Chart
// ================================================================================
            let trends_data = {
                labels: [1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
                    1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986,
                    1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
                    1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
                    2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] ,
                datasets: [
                    {
                        "values": [132.9, 150.0, 149.4, 148.0,  94.4,  97.6,  54.1,  49.2,  22.5, 18.4,
                            39.3, 131.0, 220.1, 218.9, 198.9, 162.4,  91.0,  60.5,  20.6,  14.8,
                            33.9, 123.0, 211.1, 191.8, 203.3, 133.0,  76.1,  44.9,  25.1,  11.6,
                            28.9,  88.3, 136.3, 173.9, 170.4, 163.6,  99.3,  65.3,  45.8,  24.7,
                            12.6,   4.2,   4.8,  24.9,  80.8,  84.5,  94.0, 113.3,  69.8,  39.8]
                    }
                ]
            };

            let plot_chart_args = {
                parent: "#chart-trends",
                title: "Mean Total Sunspot Count - Yearly",
                data: trends_data,
                type: 'line',
                height: 250,
                colors: ['#20c997'],
                is_series: 1,
                show_dots: 0,
                heatline: 1,
                x_axis_mode: 'tick',
                y_axis_mode: 'span'
            };

            new Chart(plot_chart_args);

            Array.prototype.slice.call(
                document.querySelectorAll('.chart-plot-buttons button')
            ).map(el => {
                el.addEventListener('click', (e) => {
                    let btn = e.target;
                    let type = btn.getAttribute('data-type');
                    let config = [];

                    if(type === 'line') {
                        config = [0, 0, 0];
                    } else if(type === 'region') {
                        config = [0, 0, 1];
                    } else {
                        config = [0, 1, 0];
                    }

                    plot_chart_args.show_dots = config[0];
                    plot_chart_args.heatline = config[1];
                    plot_chart_args.region_fill = config[2];

                    plot_chart_args.init = false;

                    new Chart(plot_chart_args);

                    Array.prototype.slice.call(
                        btn.parentNode.querySelectorAll('button')).map(el => {
                        el.classList.remove('active');
                    });
                    btn.classList.add('active');
                });
            });
        },
        methods:{
        },
        destroyed: function() {

        }
    }
</script>
<style>
    @media(min-width: 320px) and(max-width: 425px){
        .chart-type-buttons .btn{
           display: block;

        }
    }
</style>
