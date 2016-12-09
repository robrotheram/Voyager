import React from 'react';
import TimelineEvent from './TimelineEvent.jsx';

var Timeline = React.createClass({
    render: function() {
        return (
            <ul className="timeline timeline-icon">
                <TimelineEvent/>
                <TimelineEvent/>
                <TimelineEvent/>
                <TimelineEvent/>
                <TimelineEvent/>
            </ul>
        );
    }
});
export default Timeline;
