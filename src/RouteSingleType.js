import React, {Component} from 'react';
import Project from './Project';
import API from './API';

class RouteSingleType extends Component {

  constructor(props){
    super(props)
    this.state = {
      type:null
    }
  }

  componentDidMount(){
    var {id} = this.props
    API.getSingleType(id).then(res => this.setState({type:res.data}))
  }

  render(){
    var {type} = this.state

    return type ? (
      <div class="main">
        <h3>{type.name}</h3>
        {
          type.projects.map((project) => {

            var projectProps = {
              ...project,
              key: project.id,
            };
            return (<Project {...projectProps} />)
          })
        }
      </div>
    ) : null

  }
}

export default RouteSingleType;
