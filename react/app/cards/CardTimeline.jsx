import React from 'react';
import Timeline from '../componetents/Timeline.jsx';

import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
import cards from '../../styles/card.scss'


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