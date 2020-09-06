import React, {Component} from 'react';
import {Spring} from 'react-spring/renderprops'
import Project from './Project'

class RouteProjects extends Component {

  constructor(props){
    super(props)
    this.state = {
      projects:[
        {
          id:1,
          name:'Build a hut',
          description: 'Nice project'
        },{
          id:2,
          name:'Make a basket',
          description: 'Pretty project'
        }
      ]
    }
  }

  render(){
    return (

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {
          props => (
            <div style={props} class="main">
              <h3>All projects</h3>
              {
                this.state.projects.map((project) => {

                  var projectProps = {
                    ...project,
                    key: project.id,
          
                  };
                  return (<Project {...projectProps} />)
                })
              }
            </div>
          )
        }
      </Spring>
    )
  }
}

export default RouteProjects;
