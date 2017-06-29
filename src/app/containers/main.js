import React from "react";

import { setName } from "../actions/index";
import {connect} from "react-redux";

import {bindActionCreators} from 'redux';

class Main extends React.Component {

    render(){

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>First Container Which Connected To State</h1>
                        <h4>The Main Page</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <input type="text"  id="value" placeholder="Enter name"/> <span></span>
                        <button
                            className="btn btn-primary"
                            onClick={()=> this.props.setName(document.querySelector('#value').value)}>Change the Username
                        </button>
                    </div>
                    <div className="col-xs-12"><p>Note:The Name You Enter Will Display In User Conatiner</p></div>
                </div>
                <hr/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};


 const mapDispatchToProps = (dispatch)=> {

    return bindActionCreators({
        setName: setName
    },dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Main);