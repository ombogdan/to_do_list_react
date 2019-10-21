import React from 'react';
import shortid from "shortid"
import './ToDo.css'
class ToDoItem extends React.Component {
    state = {
        text: ""
    };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
    };


    render() {

        return (
            <form onSubmit={this.handleSubmit} id="todoForm">
                <input id="input"
                       name="text"
                       value={this.state.text}
                       onChange={this.handleChange}
                       placeholder="...todo"/>

                <button onClick={this.handleSubmit}>Add to do</button>

            </form>


        );
    }
}

export default ToDoItem;
