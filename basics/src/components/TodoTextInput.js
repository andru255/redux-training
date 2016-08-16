import React, {Component, Proptypes} from "react";
import classname from "classnames";

class TodoTextInput extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            text: this.props.text || ''
        };
    }

    handleSubmit(e){
        const text = e.target.value.trim();
        if( e.which === 13){
            this.props.onSave(text);
            if( this.props.newTodo ){
                this.setState({
                    text: ""
                });
            }
        }
    }

    handleChange(e){
        this.setState();
    }
}
