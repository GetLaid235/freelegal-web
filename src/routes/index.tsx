import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import NotFound from "../pages/404";
import Login from "../pages/login";
import Register from "../pages/register";
import Hero from "../components/hero";
import Submit from "../pages/submit";
import FirmDashboard from "../pages/firmDashboard";
import Who from "../components/who";
import News from "../pages/news";
import { Contact } from "lucide-react";
import ManagerDash from "../pages/managerDash";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <NotFound />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <NotFound />,
	},
	{
		path: "/hero",
		element: <Hero />,
		errorElement: <NotFound />,
	},
	{
		path: "/learnMore",
		element: <Who />,
		errorElement: <NotFound />,
	},
	{
		path: "/submit",
		element: <Submit />,
		errorElement: <NotFound />,
	},
	{
		path: "/firmdashboard",
		element: <FirmDashboard />,
		errorElement: <NotFound />,
	},
	{
		path: "/managerdashboard",
		element: <ManagerDash />,
		errorElement: <NotFound />,
	},
	{
		path: "/news",
		element: <News />,
		errorElement: <NotFound />,
	},
	{
		path: "/contact",
		element: <Contact />,
		errorElement: <NotFound />,
	},
]);

export default router;
