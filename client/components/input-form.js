import React, { Component } from 'react';
import { render } from 'react-dom'

class InputForm extends Component {
  render() {
    return (
			<form>
				<input type="text" />
				<button type="submit" ></button>
			</form>
    )
  }
}

export default InputForm;