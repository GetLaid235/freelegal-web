import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import Header from "../components/header";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<Header />

			<main className="flex-1 flex items-center justify-center p-4">
				<div className="relative max-w-3xl w-full">
					<div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
						<div className="bg-brand-blue/90 text-white p-6 flex items-center gap-4">
							<AlertTriangle size={32} className="text-brand-gold" />
							<h1 className="text-2xl sm:text-3xl font-bold">
								404 - Page Not Found
							</h1>
						</div>

						<div className="p-6 sm:p-8">
							<div className="flex flex-col sm:flex-row gap-8 items-center">
								<div className="flex-shrink-0 text-center sm:text-left">
									<div className="text-8xl sm:text-9xl font-bold text-brand-blue opacity-10">
										404
									</div>
								</div>

								<div className="space-y-4">
									<h2 className="text-xl font-semibold text-gray-800">
										We can't seem to find that page
									</h2>
									<p className="text-gray-600">
										The page you were looking for at{" "}
										<span className="font-medium text-brand-blue">
											{location.pathname}
										</span>{" "}
										doesn't exist or may have been moved.
									</p>

									<div className="pt-4 flex flex-col sm:flex-row gap-4">
										<Link
											to="/"
											className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-brand-blue text-white hover:bg-brand-blue/90"
										>
											<Home size={18} className="mr-2" />
											Back to Home
										</Link>

										<a
											href="#"
											onClick={(e) => {
												e.preventDefault();
												window.history.back();
											}}
											className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-brand-blue text-blue-900 hover:bg-blue-900 hover:text-white"
										>
											<ArrowLeft size={18} className="mr-2 " />
											Go Back
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gray-50 border-t border-gray-100 p-4 text-center text-sm text-gray-500">
							Need help?{" "}
							<Link
								to="/login"
								className="text-blue-900 hover:underline font-medium"
							>
								Sign in
							</Link>{" "}
							to your account or{" "}
							<Link
								to="/submit-case"
								className="text-blue-900 font-medium hover:underline"
							>
								submit a case
							</Link>{" "}
							for assistance.
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default NotFound;
