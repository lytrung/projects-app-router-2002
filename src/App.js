import React, {Component} from 'react'
import { Router, Link } from '@reach/router'

import RouteProjects from './RouteProjects'
import RouteAddProject from './RouteAddProject'
import RouteEditProject from './RouteEditProject'
import RouteSingleType from './RouteSingleType'

import './App.css';

class App extends Component {

  render(){
    return (
      <div className="app">


          <div class="header">
            <span>Welcome Peter</span> <i class="fas fa-bars"></i>
            <ul class="menu">
              <li><Link to="projects">All Projects</Link></li>
              <li><Link to="projects/create">Add a project</Link></li>
              <li><a href="">Login</a></li>
              <li><a href="">Signup</a></li>
            </ul>
          </div>

          <Router>
            <RouteProjects path="projects" />
            <RouteSingleType path="/types/:id" />
            <RouteAddProject path="projects/create" />
            <RouteEditProject path="projects/:id/edit" />
          </Router>
        
      </div>
    );
  }
}

export default App;
