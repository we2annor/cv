import React, { Component } from 'react'
import './Page.css'

class Education extends Component {
	constructor(props){
		super(props);
		this.state = ({
		});
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	 handleClick(e){
		e.preventDefault();
		console.log('The link was Clicked')
	}
	
	render(){
		return (
			<div id="Education" className="education">
				<div className="container">
					<h2>Education</h2>
					<p><span>2016 - 2018</span>Various online course including  React, Node.js.</p>
					<p><span>2007 - 2007</span> London South Bank University</p>
					<p><span>2006 - 2007 </span>Grafton College - shepherds Bush, London</p>
					<p><span>2002 - 2003 </span><span> Macromedia Flash ‒ Basic & Advance - NIIT, Ghana<br/>
                             		Macromedia Dreamweaver ‒ Basic & Advance - NIIT, Ghana
                             		</span>
					</p>
					<p><span>2000 - 2001</span><span className="wide-text"> IMIS Programming Diploma, IT 
                             H.A.C Institute <span className="hide">(Holland-African Mass Computer/Business        
                             Institute)</span>, Ghana </span>
					</p>
					<p><span>1996 - 1998</span>Osei Kyeretwei Senior High School - Kumasi, Ghana</p>
					<p><span>1992 - 1994</span>State ‘A’  Junior High School - Kumasi, Ghana</p>
					<p><span>1986 ‒ 1992 </span>Antoa Presbyterian Primary school - Kumasi, Ghana</p>
				</div>
			</div>
		)
	}
}

export default Education;