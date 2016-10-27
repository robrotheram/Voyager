<template>
    <div id="RealTime">
    <p>Time windows:{{time}} | Interval:{{interval}}</p>
    <svg  id="visualisation" width="1000" height="500"></svg>
</div>
</template>
<script>
    import * as d3 from '../../../node_modules/d3'
    export default {
        name: 'RealTime',
        props: {
            time: Number,
            interval: Number,
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                _vis: null,
                _lineData:[],
                _timeWindow : 60, //in seconds
                WIDTH : 1000,
                HEIGHT : 500,
                MARGINS : {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left:50,
                },
                maxDate: null,
                mainDate: null,
                xAxis:null,
                xRange:null,
                yRange:null,
                iterate:null,
            }
        },
        created() {
            console.log('Component Created', d3);
            document.addEventListener("visibilitychange", this.onVisibilitychange, false);
            this.$root.$on('test', function(data){
                alert('incoming broadcast from parent: ' + data);
            })
        },
        mounted() {
            this.init();
            this.start();
        },
        destroyed(){
            this.stop();
        },
        events: {
            test(test) {
                alert('incoming broadcast from parent: ');
            }
        },
        methods: {
            onVisibilitychange(){
                if (document.hidden) {
                    //this.stop();
                    this.$store.commit('switch');
                } else  {
                    //this.start();
                    this.$store.commit('switch');
                }
            },
            init(){
                var data = this.$data;
                data._timeWindow = this.time;
                //var d3 = this.$d3;
                var vis = d3.select('#visualisation');
                data.maxDate = Date.now();
                data.minDate = data.maxDate - (data._timeWindow*(1000)); //Calculate the min date as the max data - time window

                console.log(data._lineData);
                data.xRange = d3.time.scale().domain([data.minDate, data.maxDate]).range([
                    data.MARGINS.left,
                    data.WIDTH - data.MARGINS.right
                ]);
                data.yRange = d3.scale.linear().range([
                    data.HEIGHT - data.MARGINS.top,
                    data.MARGINS.bottom
                ]).domain([
                    0,100
                ]);
                data.xAxis = d3.svg.axis()
                        .scale(data.xRange)
                        .tickSize(1)
                        .tickFormat(d3.time.format("%X"))
                        .tickSubdivide(true)
                        .outerTickSize(0)
                        .tickPadding(10)
                        .innerTickSize(-data.HEIGHT)
                        .tickSize(-data.HEIGHT,0,0);

                var yAxis = d3.svg.axis()
                        .scale(data.yRange)
                        .tickSize(5)
                        .orient('left')
                        .tickSize(-data.WIDTH,0,0)
                        .tickSubdivide(true);


                vis.append('svg:g')
                        .attr('class', 'x axis grid')
                        .attr('transform', 'translate(0,' + (data.HEIGHT - data.MARGINS.bottom) + ')')
                        .call(data.xAxis);

                vis.append('svg:g')
                        .attr('class', 'y axis')
                        .attr('transform', 'translate(' + data.MARGINS.left + ',0)')
                        .call(yAxis);

                vis.append('svg:path')
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr("class", "line")
                        .attr('fill', 'none');
            },
            start (){
                console.log("Starting");
                this.$data.iterate = setInterval(this.newData,this.interval);
            },
            stop(){
                console.log("Stopping");
                clearInterval(this.$data.iterate);
                this.$data._lineData = [];
                console.log(this.$data._lineData)
            },
            newData(){
                if (this.$store.state.run) {
                    var data = this.$data;
                    data.maxDate = Date.now();
                    data.minDate = data.maxDate - (data._timeWindow * (1000)); //Calculate the min date as the max data - time window


                    this.$data._lineData.push({x: data.maxDate, y: Math.floor(((Math.random() * 10) + 1)+30)});
                    this.$data._lineData.forEach(function (point) {
                        if (point.x < (data.minDate)) {
                            data._lineData.shift();
                        }
                    });
                    var lineFunc = d3.svg.line()
                            .x(function (d) {
                                return data.xRange(d.x);
                            }).y(function (d) {
                                return data.yRange(d.y);
                            }).interpolate('basis');

                    data.xAxis.scale().domain([data.minDate, data.maxDate]);
                    var svg = d3.select("body").transition();
                    svg.select(".line").duration(0).attr('d', lineFunc(this.$data._lineData ));
                    svg.select(".x.axis").duration(0).call(data.xAxis);

                }
            }
        }
    };
</script>
