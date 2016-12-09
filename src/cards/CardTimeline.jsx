import React from 'react';
import Timeline from '../componetents/Timeline';

var CardTimeline = React.createClass({
    render: function() {
        return (
            <div className={"card card-timeline "+this.props.color}>
                <Timeline/>
            </div>
        );
    }
});

export default CardTimeline