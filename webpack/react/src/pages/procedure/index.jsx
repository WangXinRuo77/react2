import React from 'react';
import { Link , Router, Route, HashRouter } from 'react-router-dom';
import "@style/page_procedure_index.less"; 

export default class Procedure extends React.Component {
	constructor(){
		super() 
	}

	render(){
		return (
			<main>
				<div className="page-procedure">
					<div className="component-banner">
						<h1> this is procedure page!</h1>
						<Link to="/procedure/customer">customer</Link>
						<Link to="/procedure/designer">designer</Link>
					</div>
				</div> 	
			</main>
		)
	}
}

