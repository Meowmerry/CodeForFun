import React, { Component } from 'react';
import Greeting from '../components/Greeting';

import * as ACTION_TYPE from '../store/actions/actions_types';
import * as ACTIONS from  '../store/actions/actions'

import {connect } from 'react-redux';

 class Container1 extends Component {
    render() {
        return (
            <div>
                <Greeting />
                {/* <button onClick={}> Get State</button>
                <button onClick={}>Dispatch Action 1</button>
                <button onClick={}>Dispatch Action 2</button> */}
            </div>
        )
    }
}
function mapStateToProps(state){

}

function mapDispatchToProps(dispatch){

}


export default connect(mapStateToProps, mapDispatchToProps)(Container1);
