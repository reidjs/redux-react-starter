import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';
import store from './store';

document.addEventListener("DOMContentLoaded", function(){
  let myStore = store;
  window.state = myStore.getState();
  ReactDOM.render(
    <Widget store={myStore}/>, 
    document.getElementById('root'));
});
