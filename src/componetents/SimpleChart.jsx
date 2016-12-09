import React from 'react';
import ChartistGraph from 'react-chartist';

class SimpleChart extends React.Component {
    render() {

        var bdata ={
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            series: [
                [160, 390, 280, 440, 410, 360, 200],
                [440, 210, 320, 160, 190, 240, 400]
            ]
        };

        var baroptions = {
            stackBars: !0,
            fullWidth: !0,
            seriesBarDistance: 0,
            chartPadding: 30,
            axisX: {
                showLabel: !0,
                showGrid: !1,
                offset: 30
            },
            axisY: {
                showLabel: !0,
                showGrid: !1,
                offset: 0,
                labelOffset: {
                    x: 0,
                    y: 15
                }
                
            }
        };

        var type = 'Bar';

        return (
            <div className={"card card-chart "+this.props.color}>

                    <div className="font-size-20 margin-bottom-20">Average Players online</div>
                    <ChartistGraph data={bdata} options={baroptions} type={type} />

            </div>
        );
    }
}
export default SimpleChart;
