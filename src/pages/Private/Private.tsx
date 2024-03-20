import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes, RoutesWithNotFound } from "../../routes";
import { lazy } from "react";

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));


function Private() {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
			<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
			<Route path={PrivateRoutes.HOME} element={<Home />} />
		</RoutesWithNotFound>
	);
}

export default Private;

// 1:15:09 / 1:51:31
// https://www.youtube.com/watch?v=UVsX7A2wfLo&t=1021s