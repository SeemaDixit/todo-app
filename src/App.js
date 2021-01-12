import React, {useCallback, useState, useEffect} from 'react';
import logo from './logo.svg';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

const App = () => {

  const [newTodo, setNewTodo] = useState(' ');
  const [todos, setTodos] = useState([]);

  const newTodoChanged = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);
  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if(!newTodo.trim()) return;

    setTodos([
      ...todos,
      {
        id: todos.length ? todos[todos.length-1].id + 1 : 1,
        title: newTodo,
        done: false
      }
    ]);
    setNewTodo('');
  }, [newTodo, todos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const toggleTodoDone = useCallback((todo, index) => (event) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todo,
        done: event.target.checked
      });
      setTodos(newTodos);
  }, [todos]);

  const removeTodo = useCallback((index) => (event) => {
    const updatedTodo = [...todos];
    updatedTodo.splice(index, 1);

    setTodos(updatedTodo);
  }, [todos]);

  const markAllDone = useCallback(()=> {
    const updatedTodos = todos.map(todo => {
      return {
        ...todo,
        done: true
      }
    });
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodoForm  
        newTodo={newTodo}
        formSubmitted={formSubmitted}
        newTodoChanged={newTodoChanged}
      />
      <button onClick={markAllDone}>Mark All Done</button>
      <TodoList 
        todos={todos}
        toggleTodoDone={toggleTodoDone}
        removeTodo={removeTodo}
      />
    </div>
  );
}

/*  With class components
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
} */
export default App;
