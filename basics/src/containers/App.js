import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from "../components/Header";
import * as TodoActions from "../actions";

class App extends Component {
    render() {
        const {todos, actions} = this.props;
        return (
            <div>
                <Header addTodo={actions.addTodo} />
            </div>
        );
    }
}

//When I invoke this class, is required append this attr
//In this case needs an Array and Object
//Example:
//<App todos=[] actions={}></App>
//Because I define that:
App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//...
//but wait
function mapStateToProps(state){
    var valueToTodosProp = {
        todos: state.todos
    };
    console.log("the value to 'todos' prop", valueToTodosProp);
    return valueToTodosProp;
};


function mapDispatchToProps(dispatch){
    var valueToActionsProp = {
        actions: bindActionCreators(TodoActions, dispatch)
    };
    console.log("the value to 'actions' prop", valueToActionsProp);
    return valueToActionsProp;
};

//With connect, you can bind with functions to return this types
//And yes, when exports this class
//You can only declare a component like this:
//<App />
export default connect(mapStateToProps, mapDispatchToProps)( App );
