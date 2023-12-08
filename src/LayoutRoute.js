import { Route } from 'react-router-dom';

/**
 * COMPONENTS
 */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function LayoutRoute(props) {
	return (
		<div>
			{/* <Navbar /> */}
			<Route
				path={props.path}
				exact={props.exact}
				component={props.component}
			/>
			{/* <Footer /> */}
		</div>
	);
}

export default LayoutRoute;
