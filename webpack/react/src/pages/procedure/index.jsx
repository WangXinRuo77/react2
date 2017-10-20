import React from 'react';
import PageProcedureCustomer from '@pages/procedure/customer.jsx';
import PageProcedureDesigner from '@pages/procedure/designer.jsx';
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
					<div className="component-banner"></div>
					<Route exact path="/procedure/customer" component={ PageProcedureCustomer }></Route>
					<Route path="/procedure/designer" component={ PageProcedureDesigner }></Route>
				</div> 	
			</main>
		)
	}
}

