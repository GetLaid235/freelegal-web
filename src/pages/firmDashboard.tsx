import React from "react";
import { FileSearch, FileText, Briefcase } from "lucide-react";

// type defs for sanity. typescript your mama
interface Case {
	id: number;
	title: string;
	category: string;
	date: string;
	status: "New" | "In Progress";
	interestExpressed: boolean;
}

// dummy data
const cases: Case[] = [
	{
		id: 1,
		title: "Wrongful Eviction Case",
		category: "Housing/Tenancy",
		date: "2025-05-10",
		status: "New",
		interestExpressed: false,
	},
	{
		id: 2,
		title: "Domestic Violence Restraining Order",
		category: "Family Law",
		date: "2025-05-12",
		status: "In Progress",
		interestExpressed: true,
	},
	{
		id: 3,
		title: "Wage Theft Dispute",
		category: "Employment",
		date: "2025-05-08",
		status: "In Progress",
		interestExpressed: false,
	},
	{
		id: 5,
		title: "Consumer Fraud Case",
		category: "Consumer Rights",
		date: "2025-05-15",
		status: "New",
		interestExpressed: false,
	},
];

// status badge wrapper
const StatusBadge: React.FC<{ status: "New" | "In Progress" }> = ({
	status,
}) => {
	const base = "px-3 py-1 rounded-full text-sm font-medium";
	return (
		<span
			className={
				status === "New"
					? `${base} bg-blue-100 text-blue-900`
					: `${base} bg-yellow-100 text-yellow-900`
			}
		>
			{status}
		</span>
	);
};

// the table itself, reused across both tabs
const CaseTable: React.FC<{ data: Case[] }> = ({ data }) => (
	<div className="w-full flex flex-col">
		<div className="text-2xl font-semibold my-4 font-[inter]">
			{data.length > 0 && data.every((c) => c.interestExpressed)
				? "Cases You've Expressed Interest In"
				: "Available Pro Bono Cases"}
		</div>
		<div className="w-full p-4 rounded-md border border-slate-300 overflow-x-auto">
			<table className="w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						{["ID", "Title", "Category", "Date", "Status", "Actions"].map(
							(h) => (
								<th
									key={h}
									className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
								>
									{h}
								</th>
							)
						)}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 bg-white">
					{data.map((caseItem) => (
						<tr key={caseItem.id}>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								#{caseItem.id}
							</td>
							<td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
								{caseItem.title}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								{caseItem.category}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								{caseItem.date}
							</td>
							<td className="px-6 py-4 text-sm whitespace-nowrap">
								<StatusBadge status={caseItem.status} />
							</td>
							<td className="px-6 py-4 text-sm flex gap-2 whitespace-nowrap">
								<button className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
									<FileText className="w-4" />
									View
								</button>
								{caseItem.interestExpressed ? (
									<button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
										Withdraw Interest
									</button>
								) : (
									<button className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">
										Express Interest
									</button>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);

const FirmDashboard: React.FC = () => {
	const [selectedTab, setSelectedTab] = React.useState<
		"available" | "interested"
	>("available");

	const availableCases = cases.filter((c) => !c.interestExpressed);
	const interestedCases = cases.filter((c) => c.interestExpressed);

	const showCases =
		selectedTab === "available" ? availableCases : interestedCases;

	return (
		<>
			{/* navbar */}
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 border-b-4 border-white">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>

			<div className="w-full flex flex-col mt-20 justify-start px-8 py-4">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-[649]">Case Portal</h1>
					<p className="text-slate-600">Browse and express interest in cases</p>
				</div>

				{/* tabs */}
				<div className="tabContainer flex gap-2 mt-4">
					<button
						onClick={() => setSelectedTab("available")}
						className={`tabName ${
							selectedTab === "available" ? "bg-white border shadow-sm" : ""
						}`}
					>
						<FileSearch className="w-4" /> Available Cases
					</button>
					<button
						onClick={() => setSelectedTab("interested")}
						className={`tabName ${
							selectedTab === "interested" ? "bg-white border shadow-sm" : ""
						}`}
					>
						<Briefcase className="w-4" /> My Interested Cases
					</button>
				</div>

				<div className="mt-4">
					<CaseTable data={showCases} />
				</div>
			</div>
		</>
	);
};

export default FirmDashboard;
