import React, { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import '../styles/app.scss';

class App extends Component {
	render(){
		return(
			<AppContainer>
				{ this.props.children }
			</AppContainer>
		);
	}	
}

export default App;
