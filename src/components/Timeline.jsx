import React from 'react';
import TimelineEvent from './TimelineEvent.jsx';

var Timeline = React.createClass({
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.data);
    },
    render: function() {
        return (
            <ul className="timeline timeline-icon">
                {
                    this.props.data.map(function(event){
                        return <TimelineEvent event={event}/>;
                    }
                )}
            </ul>
        );
    }
});
export default Timeline;
