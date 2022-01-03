import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group" style={styles.todo}>
        {this.props.todos.map((todo) => (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <button type="button" class="btn btn-danger btn-sm">
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
    width: '85%',
  },
};

export default TodoList;
