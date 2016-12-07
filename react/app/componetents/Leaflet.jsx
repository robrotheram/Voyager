import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';

import style from '../../styles/Sidenav.scss'
import badge from '../../styles/badge.scss'
import cards from '../../styles/card.scss'

var LeafletMap = React.createClass({
    componentDidMount: function() {
        var map = this.map = L.map(ReactDOM.findDOMNode(this), {
            crs: L.CRS.Simple,
            zoom: 9,
            maxZoom: 9,
            continuousWorld: true,
            noWrap: true
        });
        L.GridLayer.DebugCoords = L.GridLayer.extend({
            createTile: function (coords, done) {
                var tile = document.createElement('div');
                tile.innerHTML = [coords.z, coords.x, coords.y, ].join(', ');
                tile.style.outline = '1px solid red';
                tile.style.color = 'red';
                setTimeout(function () {
                    done(null, tile);	// Syntax is 'done(error, tile)'
                }, 500 + Math.random() * 1500);
                return tile;
            }
        });
        L.tileLayer('http://localhost:8888/{server}/tile/{world}/{z}/{x}/{y}', {
            server:"testACCOUNT",
            world:"world"
        }).addTo(map);
        L.gridLayer.debugCoords = function(opts) {
            return new L.GridLayer.DebugCoords(opts);
        };
        map.addLayer( L.gridLayer.debugCoords() );
        map.setView(map.unproject([8*256, -11*256]), 9);

        map.on('click', this.onMapClick);
        map.fitWorld();
    },
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    },
    onMapClick: function() {
        // Do some wonderful map things...
    },
    render: function() {
        return (
            <div className='map'></div>
        );
    }
});

export default LeafletMap