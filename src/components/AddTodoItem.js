import React, { Component } from 'react';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          // value={this.state.title}
          style={styles.input}
        />
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    );
  }
}

const styles = {
  input: {
    flex: '10',
    padding: '5px',
  },
  form: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default AddTodoItem;
