import React from 'react';
import JVectorMap from '../componetents/JVectormap'

var CardD3Map = React.createClass({
    render: function() {
        return (
            <div className={"card "+this.props.color}>
                <div className="chart-inner">
                    <JVectorMap/>
                </div>
            </div>
        );
    }
});
export default CardD3Map