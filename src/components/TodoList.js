import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group" style={styles.todo}>
        {this.props.todos.map((todo) => (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <p
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </p>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={this.props.updateTodo.bind(this, todo.id)}
            />
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={this.props.deleteTodo.bind(this, todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const styles = {
  todo: {
    width: '50%',
  },
};

export default TodoList;
