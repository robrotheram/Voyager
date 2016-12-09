import React from 'react';
import moment from 'moment'
import ChartistGraph from 'react-chartist'

var CardStats = React.createClass({
    render: function() {
        var data = {
            series: [
                {
                    name: 'series-1',
                    data: [
                        {x: new Date(143134652600), y: 11},
                        {x: new Date(143234652600), y: 33},
                        {x: new Date(143334652600), y: 23},
                        {x: new Date(143384652600), y: 56},
                        {x: new Date(143568652600), y: 13}
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
                },
                {
                    name: 'series-3',
                    data: [
                        {x: new Date(143134652600), y: 33},
                        {x: new Date(143234652600), y: 53},
                        {x: new Date(143334652600), y: 10},
                        {x: new Date(143384652600), y: 32},
                        {x: new Date(143568652600), y: 44}
                    ]
                }
            ]
        };

        var lineoptions = {
            showPoint: false,
            showLine: true,
            showArea: false,
            fullWidth: true,
            showLabel: true,
            axisX: {
                showGrid: true,
                showLabel: false,

                divisor: 7,
                labelInterpolationFnc: function(value) {
                    return moment(value).format('  D / MM');
                },
                offset: 0
            },
            axisY: {
                showGrid: true,
                showLabel: false,
                offset: 0
            },
            chartPadding: 0,
            low: 0
        };

        var type = 'Line';
        return (
            <div className={"card card-stats "+this.props.color}>
                <ChartistGraph className="asphalte" data={data} options={lineoptions} type={type} />

                <div className="card-block card-stats-block">
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td>TPS:</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>CPU Load:</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Memory </td>
                            <td>234</td>
                        </tr>
                        <tr>
                            <td>Network </td>
                            <td>234</td>
                        </tr>
                        <tr>
                            <td>Enities </td>
                            <td>234</td>
                        </tr>
                        <tr>
                            <td>Chunks </td>
                            <td>234</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

export default CardStats