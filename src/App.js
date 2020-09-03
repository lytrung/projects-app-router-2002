import React, {Component} from 'react'
import { Router, Link } from '@reach/router'
import API from './API'

import RouteProjects from './RouteProjects'
import RouteAddProject from './RouteAddProject'
import RouteEditProject from './RouteEditProject'
import RouteSingleType from './RouteSingleType'
import RouteAddUser from './RouteAddUser'
import RouteLogin from './RouteLogin'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      types:[],
      currentUser: null
    }
  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  componentDidMount(){
    API.getTypes().then(res => this.setState({types:res.data}))
  }

  render(){
    var {types} = this.state
    return (
      <div className="app">
          <div class="header">
            <span>Welcome Peter</span> <i class="fas fa-bars"></i>
            <ul class="menu">
              <li><Link to="projects">All Projects</Link></li>
              {
                types.map(type => <li><Link to={'/types/'+type.id}>{type.name}</Link></li>)
              }
              <li><Link to="projects/create">Add a project</Link></li>
              <li><Link to="/users/authenticate">Login</Link></li>
              <li><Link to="/users/create">Sign up</Link></li>
            
            </ul>
          </div>

          <Router>
            <RouteProjects path="projects" />
            <RouteSingleType path="/types/:id" />
            <RouteAddProject path="projects/create" />
            <RouteEditProject path="projects/:id/edit" />
            <RouteAddUser path="/users/create" />
            <RouteLogin setCurrentUser={this.setCurrentUser} path="/users/authenticate" />

          </Router>
        
      </div>
    );
  }
}

export default App;
