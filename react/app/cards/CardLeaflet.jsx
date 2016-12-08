import React from 'react';
import ReactDOM from 'react-dom';
import LeafletMap from '../componetents/Leaflet.jsx';

import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
import cards from '../../styles/card.scss'


var CardLeaflet = React.createClass({
    render: function() {
        return (
            <div className={"card "+this.props.color}>
                <LeafletMap/>
            </div>
        );
    }
});

export default CardLeaflet