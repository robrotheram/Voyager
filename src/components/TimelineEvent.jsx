import React from 'react';
var TimelineEvent = React.createClass({
    render: function() {
        function timeConverter(UNIX_timestamp){
            var a = new Date(UNIX_timestamp * 1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            return time;
        }
        return (
            <li className="timeline-reverse">
                <div className="timeline-content-wrap">
                    <div className="timeline-dot" style={{"background-color" : "transparent"}}>
                        <img width="42px"  src={"src/images/mc/grass.png"} />
                    </div>
                    <div className="timeline-content">
                        <div className="title">
                            <span className="authors">{this.props.event.EventType}</span>
                            {this.props.event.location != undefined &&
                            (<div>{this.props.event.location.world} : x:{this.props.event.location.x} y:{this.props.event.location.y} z:{this.props.event.location.z}</div>)
                            }
                            at {timeConverter(parseInt(this.props.event.time))}
                        </div>
                        <div className="tags">
                            {this.props.event.time}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

export default TimelineEvent;
