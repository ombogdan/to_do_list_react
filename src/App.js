import React, {Component} from 'react';
import "./App.css"
import ToDoItem from "./components/ToDoItem"
import ToDo from "./components/ToDo";

// import Router from "react-router/modules/Router";
class App extends Component {
    state = {
        todos: [],
        todosToShow: 'all'
    };

    addTodo = (todo) => {
        const newTodos = [todo, ...this.state.todos];
        this.setState({
            todos: newTodos,
        })

    };

    completeTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        })
    };
    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateToShow = (s) => {
        this.setState({
            todosToShow: s
        })
    };


    render() {
        let todos = [];

        if (this.state.todosToShow ===  'all') {
            todos = this.state.todos;
        } else if (this.state.todosToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todosToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <div className="app">
                <ToDoItem onSubmit={this.addTodo}/>
                {todos.map(todo =>
                    (<ToDo key={todo.id}
                           comleteTodos={() => this.completeTodo(todo.id)}
                           onDelete={() => this.handleDelete(todo.id)}
                           todo={todo}/>))}
                <div className="buttons">
                    <button onClick={() => this.updateToShow("all")}>ALL</button>
                    <button onClick={() => this.updateToShow("active")}>Active</button>
                    <button onClick={() => this.updateToShow("complete")}>Complete</button>
                </div>
            </div>

        );
    }
}

export default App;
