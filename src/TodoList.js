import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props)
    console.log("hello from constructor")
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    console.log("Hello from Did Mount")
    // some api call
    this.setState({
      tasks: [
        {name: "clean the dishes"},
        {name: "learn something"}
      ]
    })
  }

  showMessage = () => {
    let current = this.state.tasks.slice();
    current.push({name: "newone"})
    this.setState({tasks:current})
  }
  componentWillMount(){
    console.log("Hello from will Mount")
  }

  shouldComponentUpdate(){
    console.log("Component updating")
    return true
  }

  render() {
    console.log("Hello from Render")
    return (
      <ul>
      {this.state.tasks.map(item =>
        <MyListItem name={item.name} onClick={this.showMessage}/>
        )
      }
      </ul>
    );
  }
}

const MyListItem = ({name, onClick}) => <li onClick={onClick}>{name}</li>

export default TodoList
