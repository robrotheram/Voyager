import React from 'react';
import ReactDOM from 'react-dom';
import JVectorMap from './JVectorMap.jsx'
import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
import cards from '../../styles/card.scss'

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