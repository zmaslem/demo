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

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount(){
    console.log("Hello from Did Mount")
    // some api call
    let current = this.state.tasks.slice();
    current.push({name: "clean the dishes"})
    current.push({name: "learn something"})
    this.setState({tasks:current})
  }

  showMessage = () => {
    let current = this.state.tasks.slice();
    current.push({name: "newone"})
    this.setState({tasks:current})
  }

  shouldComponentUpdate(){
    console.log("Component updating")
    return true
  }

  updateInputValue = (evt) => {
    this.setState({inputValue:evt.target.value})
  }

  addElement = (e) => {
    if (e.key === 'Enter') {
      this.setState({custom: this.state.inputValue})
    }
  }

  render() {
    console.log("Hello from Render", this.state)
    return (
      <ul>
      {this.state.tasks.map(item =>
        <MyListItem name={item.name} onClick={this.showMessage}/>
      )
      }
      }
      <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} onKeyPress={e => this.addElement(e)}/>
      {this.state.custom && <ErrorBoundary><CustomItem custom={this.state.custom}/></ErrorBoundary>}
      </ul>
    );
  }
}

const MyListItem = ({name, onClick}) => <li onClick={onClick}>{concatName(name)} {2+2}</li>

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
    render() {
      return(
      <div>{this.state.custom}</div>
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

const concatName = (name) => {
  return name + " lol"
}
export default TodoList
