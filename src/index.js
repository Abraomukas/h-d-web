import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './utils/ThemeProvider';
import RootLayout from './utils/RootLayout';

import './index.css';
import './utils/i18n';
import './utils/ThemeProvider';

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
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <Main />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'services',
				element: <Services />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'events',
				element: <Events />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'events/:event',
				element: <EventDetails />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'about',
				element: <AboutUs />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'careers',
				element: <Careers />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'careers/:job',
				element: <JobDetails />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.Suspense>
);
