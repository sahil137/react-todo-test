import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <nav className="navbar bg-dark ">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <span className="navbar-brand h1">Todo List</span>
          </div>
        </nav>
      </header>
    );
  }
}

const styles = {
  header: {
    width: '85%',
    color: 'white',
  },
};

export default Header;
