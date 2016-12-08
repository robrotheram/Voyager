import React from 'react';
import ReactDOM from 'react-dom';
import TimelineEvent from './TimelineEvent.jsx';
import TimeLineStyles from '../../styles/Timeline.scss'

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

export default Timeline