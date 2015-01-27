import React from 'react';
import {Behavior} from 'aurelia-framework';

var NavBarElem = React.createClass({
	getInitialState: function () {
		return {
			router: {}
		};
	},
	render: function () {
		var navLoader = null;
		if(this.props.router.isNavigating) {
			navLoader = <li className="loader">
						  <i className="fa fa-spinner fa-spin fa-2x"></i>
						</li>;
		}
	   return (
		<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
			<div className="navbar-header">
			  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span className="sr-only">Toggle Navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			  </button>
			  <a className="navbar-brand" href="#">
				<i className="fa fa-home"></i>
				<span>{this.props.router.title}</span>
			  </a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <ul className="nav navbar-nav">
			   {this.props.router.navigation.map(function(row) {
					return <li className={row.isActive ? 'active' : ''}>
							  <a href={row.href} key={row.href}>{row.title}</a>
							</li>;
				})}
			  </ul>

			  <ul className="nav navbar-nav navbar-right">
				{navLoader}
			  </ul>
			</div>
		  </nav>);
	}
});
export class NavBar {
	static metadata(){ 
		return Behavior
			.customElement('nav-bar')
			.withProperty('router')
			.noView(); 
	}
	
	static inject() {
		return [Element];
	}
	
	constructor(element) {
		this.element = element;
	}
	
	bind() {
		React.render(<NavBarElem router={this.router} />, this.element);
	}
}