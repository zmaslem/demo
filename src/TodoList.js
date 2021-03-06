import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props)
    console.log("hello from constructor")
    this.state = {
      tasks: [],
      inputValue: '',
      custom: null
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

  updateInputValue = (evt) => {
    this.setState({inputValue: evt.target.value})
  }

  addElement = (e) => {
    if (e.key === 'Enter') {
      this.setState({custom: this.state.inputValue})
    }
  }

  render() {
    console.log("Hello from Render")
    return (
      <ul>
      {this.state.tasks.map(item =>
        <MyListItem name={item.name} onClick={this.showMessage}/>
        )
      }
      <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} onKeyPress={e => this.addElement(e)}/>
      {this.state.custom && <ErrorBoundary><CustomItem custom={this.state.custom}/></ErrorBoundary>}
      </ul>
    );
  }
}

class CustomItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        custom : props.custom
      }
    }
    componentWillReceiveProps(nextProps) {
      console.log("new props", nextProps)
      if(nextProps.custom !== this.state.custom) {
        this.setState({custom: nextProps.custom})
        nextProps.custom = undefined;
        nextProps.custom.toString();
      }
    }

    shouldComponentUpdate(nextProps, nextState) {

    }
    render() {
      return(
      <div>custom {this.state.custom}</div>
    )
    }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isError: false
      }
    }

    componentDidCatch(error, info) {
      this.setState({isError: true});
      console.log(error, info)
    }

    render() {
      if(this.state.isError) {
          return <div>Something Went wrong :( </div>;
      }
      return this.props.children;
    }
}

const MyListItem = ({name, onClick}) => <li onClick={onClick}>{concat(name)} {2+2} </li>

const concat = (name) => {
  return "costam" + name
}
export default TodoList
