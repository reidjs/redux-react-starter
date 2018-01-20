import React from 'react';
import { doSomething } from './actions';

class Widget extends React.Component {

  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);

    // require this component to re-render whenever the store's state changes
    // can be avoided using provider connect with container 
    this.props.store.subscribe(this.forceUpdate);
    this.doThing = this.doThing.bind(this);
  }

  doThing() {
    this.props.store.dispatch(doSomething(1));
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h3>World</h3>
        <button onClick={this.doThing}>ChangeStore</button>
        <p>counter: {this.props.store.getState().counter}</p>
      </div>
    );
  }
};


export default Widget;
