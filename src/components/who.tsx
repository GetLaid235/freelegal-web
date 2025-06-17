import Card2 from "./ui/card2";

const Who = () => {
	return (
		<div
			id="who-we-serve"
			className="w-full pt-4 pb-28 flex flex-col items-center bg-slate-50"
		>
			<div
				id="container"
				className="w-full px-4 sm:px-7 md:px-7 lg:px-16 items-center flex flex-col gap-3"
			>
				<div
					id="title"
					className="flex flex-col items-center pt-20 pb-12 gap-3 text-center"
				>
					<h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
						Who We Serve
					</h1>
					<p className="text-slate-900 text-lg">
						Our platform brings together three key groups to widen access to
						justice
					</p>
				</div>
				<div
					id="cards"
					className="w-full flex flex-col gap-12 lg:flex-row items-center"
				>
					<Card2
						title="Clients in Need"
						subtitle="Tell us about your legal issue. We gather essential information to understand your needs."
						buttonText="Submit Your Case"
					/>
					<Card2
						title="Law Students"
						subtitle="Law student volunteers review your case and prepare it for matching with a legal representative."
						buttonText="Become a Manager"
					/>
					<Card2
						title="Legal Representatives"
						subtitle="Legal Representatives provide pro bono services for suitable cases and earn recognition."
						buttonText="Join as a Legal Representative"
					/>
				</div>
			</div>
		</div>
	);
};

export default Who;
