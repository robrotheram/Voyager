import React from 'react';
import ReactDOM from 'react-dom';
import LeafletMap from './LeafletMap';

import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
import cards from '../../styles/card.scss'
var CardTitles = React.createClass({
    render: function() {
        return (
            <div className={"card "+this.props.color}>
                <LeafletMap/>
            </div>
        );
    }
});

export default CardTitles