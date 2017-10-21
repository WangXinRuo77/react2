import React from 'react';
import PageProcedureCustomer from '@pages/procedure/customer.jsx';
import PageProcedureDesigner from '@pages/procedure/designer.jsx';
import { Link , Router, Route, Redirect, Switch } from 'react-router-dom';
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
					<div className="component-">
						<Switch>
							<Route exact path="/procedure/designer" component={ PageProcedureDesigner } />
							<Route path="/procedure/customer" component={ PageProcedureCustomer } />
						</Switch>
					</div>
				</div> 	
			</main>
		)
	}
}

