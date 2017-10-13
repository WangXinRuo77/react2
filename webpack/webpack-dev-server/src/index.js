import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './header';
import ComponentFooter from './footer';
import PageIndex from './body';
ReactDOM.render(
	<div>
		<ComponentHeader />
		<PageIndex />
		<ComponentFooter />
	</div>,
	document.getElementById('div1')
)