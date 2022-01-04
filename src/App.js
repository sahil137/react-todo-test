import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  // get todo items when component renders
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .then((result) => {
        // console.log(result.data);
        this.setState({
          todos: result.data,
        });
      });
  }

  // add todo

  addTodo = (title) => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
      })
      .then((result) => {
        this.setState({
          todos: [...this.state.todos, result.data],
        });
      });
  };

  // delete todo and filter it out from todo list
  deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((result) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  // update todo
  updateTodo = (id) => {
    let status;
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          status = todo.completed;
        }
        return todo;
      }),
    });
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: status,
      })
      .then((result) => {
        console.log(result.data);
      });
  };

  render() {
    return (
      <div className="App" style={styles.app}>
        <Header />
        <AddTodoItem addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid black',
  },
};

export default App;
