import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import How from "./components/how";
import Who from "./components/who";
import { SlPeople } from "react-icons/sl";

const launchingSoon = true;

function App() {
	if (launchingSoon) {
		return (
			<div className="bg-brand-blue pt-24 px-6 max-w-screen flex flex-col items-center gap-10 min-h-screen">
				<div
					id="heading"
					className="items-center justify-center flex flex-col gap-5 mb-4"
				>
					<p className="text-white text-5xl font-bold">Freelegal</p>
					<p className="text-white text-2xl">Justice, Made Accessible</p>
					<p className="text-brand-blue text-lg font-semibold bg-brand-gold p-3 rounded-3xl">
						🚀 Launching Soon
					</p>
				</div>
				<div
					id="whatIsFreelegal"
					className="bg-white px-6 py-16 w-fit flex flex-col items-center justify-center text-center rounded-xl gap-4"
				>
					<p className="text-3xl font-bold">
						Revolutionizing Legal Connections
					</p>
					<span className="w-[85%] mb-8">
						<p className="text-slate-500 text-wrap text-[1.2rem]">
							Freelegal is the premier platform that seamlessly connects clients
							seeking legal representation with qualified law firms and expert
							account managers.
						</p>
					</span>
					<div className="flex flex-wrap items-center justify-center gap-16 mb-8">
						<span className="mt-7 flex flex-col items-center gap-2 w-[18rem] lg:w-[25rem]">
							<span className="w-fit h-fit bg-blue-50/70 p-4 rounded-full">
								<SlPeople size={34} />
							</span>
							<p className="text-xl font-semibold">For Clients</p>
							<p className="text-slate-600">
								Submit your legal cases and get matched with the right law firms
								for your specific needs.
							</p>
						</span>
						<span className="mt-7 flex flex-col items-center gap-2 w-[18rem] lg:w-[25rem]">
							<span className="w-fit h-fit bg-blue-50/70 p-4 rounded-full">
								<SlPeople size={34} />
							</span>
							<p className="text-xl font-semibold">Smart Matching</p>
							<p className="text-slate-600">
								Our intelligent system ensures the perfect match between clients
								and legal expertise.
							</p>
						</span>
					</div>
				</div>
				<div id="firstToKnow">
					<form className="bg-white px-6 py-8 w-fit lg:max-w-screen flex flex-col items-center justify-center text-center rounded-xl gap-6 mb-4">
						<p className="text-2xl font-bold">Be the first to know</p>
						<p>
							Join our waiting list and get notified when Freelegal launches
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="e.g johndoe@gmail.com"
								className="w-[10rem] h-10 border border-brand-blue focus:border-brand-blue outline-brand-blue rounded-md p-4"
							/>
							<button className="text-brand-blue text-base font-semibold bg-brand-gold px-2.5 h-10 rounded-xl">
								Notify Me
							</button>
						</div>
						<p className="text-sm">
							We'll never spam you. Unsubscribe at any time.
						</p>
					</form>
					<span className="flex flex-col my-8 items-center justify-center text-slate-300">
						&copy; {new Date().getFullYear()} Freelegal - Justice, Made
						Accessible
					</span>
				</div>
			</div>
		);
	}
	return (
		<div className="flex flex-col min-h-screen bg-blue-900">
			<Header />
			<main className="flex-1">
				<Hero />
				<How />
				<Who />
			</main>
			<Footer />
		</div>
	);
}

export default App;
