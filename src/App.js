import React, {Component} from 'react'
import { Router, Link, navigate} from '@reach/router'
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
  handleLogoutClick = (e) => {
    e.preventDefault()
    localStorage.removeItem('userId')
    this.setState({currentUser:null})
    navigate('/login')
  }

  componentDidMount(){
    API.getTypes().then(res => this.setState({types:res.data}))

    //local storage
    var userId = localStorage.getItem('userId')
    if(userId){
      API.getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
    }
  }

  render(){
    var {types, currentUser} = this.state
    return (
      <div className="app">
          <div class="header">
            {
              currentUser? (<span>Welcome {currentUser.name}</span>) : null
            }
            <i class="fas fa-bars"></i>
            <ul class="menu">
              <li><Link to="projects">All Projects</Link></li>
              {
                types.map(type => <li><Link to={'/types/'+type.id}>{type.name}</Link></li>)
              }

              {
                currentUser ? (
                  <>
                  <li><Link to="projects/create">Add a project</Link></li>
                  <li><a onClick={this.handleLogoutClick} href="#">Logout</a></li>
                  </>
                ) : (
                  <>
                  <li><Link to="/users/authenticate">Login</Link></li>
                  <li><Link to="/users/create">Sign up</Link></li>
                  </>
                )
              }
     
            
            </ul>
          </div>

          <Router>
            <RouteProjects path="projects" />
            <RouteSingleType path="/types/:id" />
            {currentUser ? <RouteAddProject path="/projects/create" /> : null}
            {currentUser ? <RouteEditProject path="/projects/:id/edit" /> : null}
            <RouteAddUser path="/users/create" />
            <RouteLogin setCurrentUser={this.setCurrentUser} path="/users/authenticate" />

          </Router>
        
      </div>
    );
  }
}

export default App;
