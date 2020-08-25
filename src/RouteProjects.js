import React, {Component} from 'react';

class RouteProjects extends Component {

  constructor(props){
    super(props)
    this.state = {
      projects:[
        // {
        //   id:1,
        //   name:'Build a hut',
        //   description: 'Nice project'
        // },{
        //   id:2,
        //   name:'Make a basket',
        //   description: 'Pretty project'
        // }
      ]
    }
  }

  render(){
    return (
      <div class="main">
        <h3>All projects</h3>
        <div class="card project">
          <img class="card-img-top" src="project.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title</p>
            <p>
              <i class="fas fa-heart"></i>
              <i class="fas fa-edit"></i>
              <i class="fas fa-trash"></i>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default RouteProjects;
