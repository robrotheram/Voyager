import React from 'react';
import ChartistGraph from 'react-chartist';

var CardWorldData = React.createClass({
    render: function() {
        var data = {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri","Sat"],
            series: [
                {
                    name: 'series-1',
                    data: [
                        {x: "mond", y: 11},
                        {x: "wqeqwe" , y: 33},
                        {x: "qweqwe" , y: 23},
                        {x: "moasdnd" , y: 56},
                        {x: "sadasd" , y: 13}
                    ]
                }

            ]
        };
        var lineoptions = {
            stackBars: !0,
            fullWidth: !0,
            seriesBarDistance: 0,
            chartPadding: 0,
            axisX: {
                showLabel: !0,
                showGrid: !0,
                offset: 40
            },
            axisY: {
                showLabel: !0,
                showGrid: !0,
                offset: 40,
                labelOffset: {
                    x: 0,
                    y: 15
                }
            }
        };

        var type = 'Line';
        return (
            <div className={"card "+this.props.color}>
                <div className="chart-inner">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="font-size-20 margin-bottom-20">World Data</div>
                            <hr/>
                                <div className="switch">
                                    <label>

                                        <input type="checkbox" checked="checked"/>
                                            <span className="lever"></span>
                                            Players
                                    </label>
                                </div>

                                <div className="switch">
                                    <label>

                                        <input type="checkbox" className="checked"/>
                                            <span className="lever"></span>
                                            Enities
                                    </label>
                                </div>

                                <div className="switch">
                                    <label>

                                        <input type="checkbox" checked="checked"/>
                                            <span className="lever"></span>
                                            Chunks
                                    </label>
                                </div>
                            </div>
                        <div className="col-md-10 header-chart">
                            <ChartistGraph data={data} options={lineoptions} type={type} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default CardWorldData;
