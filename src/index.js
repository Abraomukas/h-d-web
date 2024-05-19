import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './i18n';
import './index.css';

const spinnerSizing = { width: '3rem', height: '3rem' };

const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div className='spinner-border' style={spinnerSizing} role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	</div>
);

/**
 * PAGES
 */

import ErrorPage from './pages/Error';
import Main from './pages/Main';
import Services from './pages/Services';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/services',
		element: <Services />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/news',
		element: <News />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/about-us',
		element: <AboutUs />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/careers',
		element: <Careers />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/careers/:job',
		element: <JobDetails />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<RouterProvider router={router} />
	</React.Suspense>
);
