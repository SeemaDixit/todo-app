import React, {Component} from 'react';
import logo from './logo.svg';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
      newTodo: "",
      todos: []
      };
      this.formSubmitted = this.formSubmitted.bind(this);
      this.newTodoChanged = this.newTodoChanged.bind(this);
      this.toggleTodoDone = this.toggleTodoDone.bind(this);
  }
  newTodoChanged(event) {
    console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  }
  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }
  toggleTodoDone(event, index) {
    console.log(event.target.checked);
    const todos = [...this.state.todos];
    todos[index] = {...todos[index]}
    todos[index].done = event.target.checked; 
    this.setState({
        todos
    });
    console.log(todos);
  }
  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
        return {
          title: todo.title,
          done:true
        }
    });

    this.setState({
      todos
    });
    console.log(todos);
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <NewTodoForm  
        newTodo={this.state.newTodo}
        formSubmitted={this.formSubmitted.bind(this)}
        newTodoChanged={this.newTodoChanged.bind(this)}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList 
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}
export default App;
