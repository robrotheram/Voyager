import React from 'react';
import LeafletMap from '../components/Leaflet';

var CardLeaflet = React.createClass({
    render: function() {
        return (
            <div className={"card "+this.props.color}>
                <LeafletMap/>
            </div>
        );
    }
});
export default CardLeaflet;
