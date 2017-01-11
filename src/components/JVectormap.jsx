import React from 'react';
import d3 from 'd3';
import ReactDOM from 'react-dom';
import Datamap from 'datamaps/dist/datamaps.world.min';

var JVectorMap = React.createClass({
    renderMap(){
        return new Datamap({
            element: ReactDOM.findDOMNode(this),
            projection: 'mercator',
            scope: 'world',
            //data: this.redducedData(),
            geographyConfig: {
                borderWidth: 0.5,
                highlightFillColor: '#FFCC80',
                popupTemplate: function(geography, data) {
                    if (data && data.value)
                        return ('<div class="hoverinfo"><strong>' + geography.properties.name + ', ' + data.value + '</strong></div>');
                    else
                        return ('<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>');

                }
            }
        });
    },
    /*redducedData(){
        const newData = this.props.regionData.reduce((object, data) => {
            object[data.code] = { value: data.value, fillColor: this.linearPalleteScale(data.value) };
            return object;
        }, {});
        return objectAssign({}, statesDefaults, newData);
    },*/
    currentScreenWidth(){
        return window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
    },
    componentDidMount: function() {
        const mapContainer = d3.select('#datamap-container');
        const initialScreenWidth = this.currentScreenWidth();
        const containerWidth = (initialScreenWidth < 600) ? { width: initialScreenWidth + 'px', height: (initialScreenWidth * 0.5625) + 'px' } : { width: '100%', height: '550px' };
        mapContainer.style(containerWidth);
        this.datamap = this.renderMap();
        window.addEventListener('resize', () => {
            const currentScreenWidth = this.currentScreenWidth();
            const mapContainerWidth = mapContainer.style('width');
            if (this.currentScreenWidth() > 600 && mapContainerWidth !== '600px') {
                d3.select('svg').remove();
                mapContainer.style({
                    width: '100%',
                    height: '550px'

                });
                this.datamap = this.renderMap();
            }
            else if (this.currentScreenWidth() <= 600) {
                d3.select('svg').remove();
                mapContainer.style({
                    width: currentScreenWidth + 'px',
                    height: '550px'
                });
                this.datamap = this.renderMap();
            }
        });
    },
    componentWillUnmount: function() {
        d3.select('svg').remove();
    },
    onMapClick: function() {
        // Do some wonderful map things...
    },
    render: function() {
        return (
            <div id="datamap-container" className="card-map"></div>
        );
    }
});

export default JVectorMap;
