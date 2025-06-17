const Card = ({
	id,
	title,
	subtitle,
}: {
	id: string;
	title: string;
	subtitle: string;
}) => {
	return (
		<div className="flex flex-col items-start gap-3 bg-white flex-grow rounded-xl border shadow-[-3px_3px_12px_rgba(0,0,0,0.1)] w-[22rem] sm:w-full md:w-full lg:w-[24rem] p-5 transition-transform duration-200 hover:translate-y-[-0.3rem]">
			<p className="w-fit py-2 px-4 rounded-full bg-slate-200">{id}</p>
			<p className="text-blue-950 font-semibold text-xl">{title}</p>
			<p className="text-slate-900/90 text-base">{subtitle}</p>
		</div>
	);
};

export default Card;
