import React from 'react';

var CardTitles = React.createClass({
    render: function() {
        return (
            <div className={"card "+this.props.color}>
                <div className="card-block">
                    <a className="avatar-100 pull-left margin-right-20 ">
                        <img src={"src/images/mc/"+this.props.img+".png"} alt="" width="75px" className="avartar-img invert"/>
                    </a>
                    <div className="vertical-align text-right height-100 text-truncate">
                        <div className="vertical-align-middle">
                            
                            <div className="font-size-18 margin-bottom-5 blue-600 text-truncate">{this.props.title}</div>
                            <div className="font-size-30 text-truncate">
                                {this.props.value}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default CardTitles;
