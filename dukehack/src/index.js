import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Main from './components/main.jsx';
import Rider from './components/rider.jsx';
import Driver from './components/driver.jsx';
import Info from './components/info.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import SignUp from './components/signUp.jsx'
import Nav from 'react-bootstrap/Nav';
import CreateAccount from './components/createaccount';
import SignIn from './components/signIn';
import Login from './components/login.jsx';

const routing = (
  <Router>
    <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Reality Ministries</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/info">Information</Nav.Link>
      <NavDropdown title="Rides" id="basic-nav-dropdown">
        <NavDropdown.Item href="/rider">Request a Pickup</NavDropdown.Item>
        <NavDropdown.Item href="/driver">Register as Driver</NavDropdown.Item>
        <NavDropdown.Item href="/login">View Scheduled Pickup</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Route exact path="/" component={Main} />
        <Route path="/info" component={Info} />
      <Route path="/rider" component={Rider} />
      <Route path="/driver" component={Driver} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={Login} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
