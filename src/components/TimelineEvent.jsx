import React from 'react';
var TimelineEvent = React.createClass({
    render: function() {
        return (
            <li className="timeline-reverse">
                <div className="timeline-content-wrap">
                    <div className="timeline-dot" style={{"background-color" : "transparent"}}>
                        <img width="42px"  src={"src/images/mc/grass.png"} />
                    </div>
                    <div className="timeline-content">
                        <div className="title">
                            <span className="authors">Player Event</span>

                        </div>
                        <div className="tags">
                            As user experience designers we have to find the sweet spot
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

export default TimelineEvent;
