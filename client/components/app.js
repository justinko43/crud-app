import React, { Component } from 'react';
import { render } from 'react-dom';
import Item from './item'
import InputForm from './input-form.js'

class App extends Component{
  constructor(props) {
    super(props);
	}
	
  render() { 
    return (
			<div>
				<h2>{Date.now()}</h2>
				<InputForm />
				<Item />
			</div>
  )}
}

export default App;