import React from 'react';
import ChartistGraph from 'react-chartist';
import { connect } from 'react-redux';

class SimpleChart extends React.Component {
    render() {

        var bdata ={
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            series: [
                [160, 390, 280, 440, 410, 360, this.props.counter],
                [440, 210, 320, 160, 190, 240, (600 - this.props.counter)]
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

                    <div className="font-size-20 margin-bottom-20">Average Players online: {this.props.counter}</div>
                    <ChartistGraph data={bdata} options={baroptions} type={type} />

            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        counter: store.todos.length
    }
}

export default connect(mapStateToProps)(SimpleChart);

