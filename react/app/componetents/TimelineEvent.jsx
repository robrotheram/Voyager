import React from 'react';



var TimelineEvent = React.createClass({
    render: function() {
        return (
            <li className="timeline-reverse">
                <div className="timeline-content-wrap">
                    <div className="timeline-dot bg-cyan-600">
                        <i className="icon wb-file" aria-hidden="true"></i>
                    </div>
                    <div className="timeline-content">
                        <div className="title">
                            <span className="authors">Jeff Erixon</span>
                            invite you to attend topic discussion in
                            <span className="room-number">B205</span>
                            classroom
                        </div>
                        <div className="metas">
                            active 4 hours ago
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

export default TimelineEvent