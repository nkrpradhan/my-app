import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor(){
      console.log('welcome constr')
        super()
        this.state={
            flag:'false',
        }

    }

    componentDidMount(){
      console.log('welcome componentDidMount');
      this.setState({flag:'true'})

    }

    componentWillUnmount(){
      console.log('willunmount welcome comp')
    }
  render() {
    console.log('render welcome comp')
    return (
      <div>Welcome to react {this.props.children}--{this.state.flag}</div>
    )
  }
}
