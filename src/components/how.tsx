import { Link } from "react-router-dom";
import Card from "./ui/card";

const How = () => {
	return (
		<div className="w-full py-8 flex flex-col bg-white items-center">
			<div
				id="container"
				className="w-full px-4 sm:px-7 md:px-7 lg:px-16 items-center flex flex-col gap-3"
			>
				<div
					id="title"
					className="flex flex-col items-center pt-20 pb-12 gap-3 text-center"
				>
					<h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
						How It Works
					</h1>
					<p className="text-slate-900 text-lg">
						Our platform makes it easy to connect legal needs with pro bono
						services
					</p>
				</div>
				<div
					id="cards"
					className="w-full flex flex-col gap-12 lg:flex-row items-center"
				>
					<Card
						id="1"
						title="Submit Your Case"
						subtitle="Tell us about your legal issue. We gather essential information to understand your needs."
					/>
					<Card
						id="2"
						title="Account Manager Review"
						subtitle="Law student volunteers review your case and prepare it for matching with a legal representatives."
					/>
					<Card
						id="3"
						title="Connect with Legal representatives"
						subtitle="Legal representatives provide pro bono services for suitable cases and earn recognition."
					/>
				</div>
				<div id="title" className=" my-12 text-center">
					<Link
						to="/register"
						className="text-lg bg-blue-900 px-3.5 py-2 rounded-md text-white transition-colors duration-[300ms] shadow-[-3px_3px_12px_rgba(0,0,0,0.2)] hover:bg-blue-950 ease-in-out"
					>
						Get Started Today
					</Link>
				</div>
			</div>
		</div>
	);
};

export default How;
