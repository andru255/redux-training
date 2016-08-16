import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from "../components/Header";
import * as TodoActions from "../actions";

class App extends Component {
    render (){
        const {todos, actions} = this.props;
        return (
                <Header addTodo={actions.addTodo} />
        );
    }
}

App.propTypes = {
    todo: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//props
let Reducer = {
    mapState: function(state){
        return {
            todos: state.todos
        };
    },
    mapDispatch: function(dispatch){
        return {
            actions: bindActionCreators(TodoActions, dispatch)
        };
    }
};

export default connect(Reducer.mapState, Reducer.mapDispatch);
