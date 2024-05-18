import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * PAGES
 */
import Main from './pages/Main';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact component={Main} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
