import React, { Component } from 'react';
import './Page.css'

class Strength extends Component {
	constructor(props){
		super(props);
				this.state = ({
		})
	}
	
	render(){
		return (
			<div id="Strength" className="strength">
				<div className="container">
					<h2>Technical Skills</h2>
					<p>
						<li>React</li>
						<li>jQuery</li>
						<li>Angular 4</li>
						<li>HTML( 5 )</li>
						<li>CSS( 3 )</li>
						<li>SASS</li>
						<li>Bootstrap</li>
						<li>Foundation</li>
						<li>NPM</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>MySQL</li>
						<li>Bower</li>
						<li>Homebrew</li>
						<li>JSON</li>
						<li>XML</li>
						<li>Git</li>
						<li>{this.props.skill}</li>
					</p>

					<h2 className="sub-header">Principles/ Decipline</h2>
					<p>
						<li>OOP</li>
						<li>RESTfull API</li>
						<li>Design patterns</li>
						<li>MVC</li>
						<li>Responsive development</li>
					</p>
				</div>
			</div>
		)
	};
}

export default Strength;