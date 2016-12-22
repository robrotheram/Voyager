import React from 'react';
import Timeline from '../components/Timeline';
import { connect } from 'react-redux'
import * as serverActions from '../actions/ServerAction';
import * as eventActions from '../actions/events';
import {push} from 'react-router-redux';
import store from '../store';

var CardTimeline = React.createClass({
    componentDidMount() {
        console.log(this.props.Events.data);
    },
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.Events.data);
    },
    render: function() {
        return (
            <div className={"card card-timeline "+this.props.color}>
                <Timeline data={this.props.Events.data}/>
            </div>
        );
    }
});

const mapStateToProps = store => {
    return { Events: store.Events }
};
export default connect(mapStateToProps)(CardTimeline);
