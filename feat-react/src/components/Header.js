import React, {PropTypes, Component} from "react";
import TodoTextInput from "./TodoTextInput";

class Header extends Component {
    handleSave(text) {
        if(text.length !== 0){
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <header className="b-todo-header">
                <h1>Single Header</h1>
                <TodoTextInput newTodo
                               onSave={this.handleSave.bind(this)}
                               placeholder="Create a new todo item" />
            </header>
        );
    }
}

//When I invoke this class, is required append this attr
//In this case needs a function
//Example:
// <Header addTodo=fn></Header>
//Because I define that:
Header.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default Header;
