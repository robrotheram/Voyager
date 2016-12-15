import React from 'react';
import { connect } from 'react-redux'

class CardTitles extends React.Component{
    
    render () {
        console.log(this.props);

        return (
            <div className={"card river "+this.props.color}>
                <div className="card-block">
                    <a className="avatar-100 pull-left margin-right-20 ">
                        <img src={"src/images/mc/"+this.props.img+".png"} alt="" width="75px" className="avartar-img invert"/>
                    </a>
                    <div className="vertical-align text-right height-100 text-truncate">
                        <div className="vertical-align-middle">

                            <div className="font-size-18 margin-bottom-5 blue-600 text-truncate">{this.props.title}</div>
                            <div className="font-size-30 text-truncate">
                                {this.props.counter}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        //counter: store.todos.items.length
    }
};

export default connect(mapStateToProps)(CardTitles);
