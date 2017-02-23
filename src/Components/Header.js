
// import libraries
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

//create component
class Header extends Component {
  render() {
    return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">BookFinder</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>

    );
  }
}
//export component
export default Header;
