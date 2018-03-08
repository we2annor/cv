import React, { Component } from 'react';
import './Page.css'

class Experience extends Component {
	render () {
		return (
			<div id="Experience" className="experience">
				<div className="container">
					<h2>Work Experience ( +8 )</h2>
					<p>2014 - Present : <span>Freelance FrontEnd Developer</span></p>
					<p className="header">Responsibilities:</p>
					<p>
						<li>Design, develop, and relaunch responsive websites of clients</li>
						<li>Builds codes for shadow boxes, slider carousels, tickers, rotating headers, validation and JS animations</li>
						<li>Present website mock ups to clients to give better visual experience of the end product and to ensure all parameters are met</li>
						<li>Liaised with clients to help choose colours, concepts and fund solutions to get websites completed</li>
					</p>
		
					<h3>Caimun</h3>
					<p><span>Employment:</span> Permanent</p>
					<p><span>Date:</span> feb 2010 - July 2014</p>
		
					<p className="sub-header">Description:</p>
					<p>
						<li>Created Website based on photoshop designs using HTML, CSS, JavaScript and PHP</li>
						<li>Implemented MVC design patterns reading content from external JSON</li>
						<li>Took instructions from the senior programmer to ensure projects are completed within set time constraints</li>
						<li>Write code while considering performance, scalability, maintainability and flexibity</li>
						<li>Help manage junior developers</li>
						<li>Liaise and advice our FrontEnd engineers, UX and Creatives</li>
						<li>Share the knowledge and elevate the engineering teams with code reviews, suggested restracturing and beneficial external technologies.</li>
					</p>
		
					<p>
						<li>Created websites with flash and actionScript 3</li>
						<li>Build classes to create the components of websites</li>
						<li>Created animation aspect of websites</li>
						<li>Resolved design issues through root cause analysis and performed data clean ups</li>
					</p>
		
					<h3>Pal Security</h3>
					<p><span>Employment:</span> Permanent</p>
					<p><span>Date:</span> 2008 - 2010</p>
		
					<p><span>Position:</span> Security Guard</p>
					<p className="sub-header">Description:</p>
					<p>
						<li>Secured access to residential properties.</li>
						<li>Provided comprehensive and cohesive security management services to retail/shop complexes.</li>
						<li>Patrolled residential properties</li>
						<li>Managed and Handled Keys</li>
						<li>Checked and controlled CCTV Cameras</li>
					</p>
		
					<h3>London Site Security</h3>
					<p><span>Employment:</span> Permanent</p>
					<p><span>Date:</span> 2005 - 2008</p>
		
					<p><span>Position:</span> Security Guard</p>
					<p className="sub-header">Description:</p>
					<p>
						<li>Safeguarded construction site</li>
						<li>Conducted comprehensive site Patrol</li>
						<li>Protected Keys and equipments on construction sites and site offices.</li>
					</p>
				</div>
			</div>
		)
	}
}

export default Experience;