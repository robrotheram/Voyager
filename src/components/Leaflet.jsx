import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

var LeafletMap = React.createClass({
    componentDidMount: function() {
        let element = ReactDOM.findDOMNode(this);
        setTimeout(() => {
            this.map = new L.map(element, {
                crs: L.CRS.Simple,
                zoom: 9,
                maxZoom: 9,
                continuousWorld: true,
                noWrap: true
            });
            L.GridLayer.DebugCoords = L.GridLayer.extend({
                createTile: function (coords, done) {
                    var tile = document.createElement('div');
                    tile.innerHTML = [ coords.z, coords.x, coords.y ].join(', ');
                    tile.style.outline = '1px solid red';
                    tile.style.color = 'red';
                    setTimeout(function () {
                        done(null, tile);	// Syntax is 'done(error, tile)'
                    }, 500 );
                    return tile;
                }
            });
            
            L.tileLayer('http://192.168.1.173:8888/{server}/tile/{world}/{z}/{x}/{y}', {
                server: this.props.Server.server,
                world:"world"
            }).addTo(this.map);
            L.gridLayer.debugCoords = function(opts) {
                return new L.GridLayer.DebugCoords(opts);
            };
            this.map.addLayer( L.gridLayer.debugCoords() );
            this.map.setView(this.map.unproject([8*256, -11*256]), 9);
        },500);
    },
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    },
    onMapClick: function() {
       alert("map clicked");
    },
    render: function() {
        return (
            <div className='map'>{this.props.Server.server}</div>
        );
    }
});

const mapStateToProps = store => {
    console.log(store);
    return {
        Server: store.Server
    }
};

export default connect(mapStateToProps)(LeafletMap);

