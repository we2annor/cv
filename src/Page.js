import React, { Component } from 'react';
import './Page.css';
import Strength from './Strength'
import Experience from './Experience'
import Education from './Education'
import Clock from './Clock'

class Page extends Component {
	constructor(props){
		super(props);
		this.state = ({
			greetings: "Welcome to my CV"
		})
	}
	render(){
		
		return (
			<div className="Page">
				<header id="Header" className="header">
					<div className="container">
						<Clock />
						<h1 className="name">{this.props.name}</h1>
						<h2 className="title">FrontEnd Developer</h2>

						<div className="personal-details">
							<h3>Personal</h3>
							<p><span>Date of Birth:</span> 28th October 1982</p>
							<p><span>Birthplace:</span> Kumasi, Ghana</p>
							<p><span>Citizenship:</span> Ghanaian</p>
							<p><span>Language:</span> English</p>
						</div>
						<div>
							<h3><span>Website</span><a href="www.ernestannor.com">www.ernestannor.com</a></h3>
						</div>
						<div>
							<h3>Contact</h3>
							<p><span>Email:</span><a href="mailto:contact@ernestannor.com">contact@ernestannor.com</a></p>
							<p className="mobile"><span>Mobile:</span>07805545160</p>
						</div>
					</div>
				</header>
				
				<div>
					<Strength skill="Ember.js"/>
				</div>
				<div>
					<Experience />
				</div>
				
				<div>
					<Education greeting ={this.state.greetings}/>
				</div>
			
			  <div className="copyright">
					<p>Copyright - 2018. ErnestAnnor.</p>
			  </div>
			</div>//----------- End of the whole page ----------*>
		);
	}
}

export default Page;