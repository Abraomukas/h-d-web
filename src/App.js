import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * PAGES
 */
import Main from './pages/Main';
import Offices from './pages/Offices';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact component={Main} />
				<Route path='/offices' component={Offices} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
