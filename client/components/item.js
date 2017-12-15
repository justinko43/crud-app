import React, { Component } from 'react';
import { render } from 'react-dom';

class Item extends Component{
  render(){
    return(
      <div>
        <h4>todo list</h4>
        <button>update</button>
        <button>delete</button>
      </div>
    )
  }
}

export default Item;