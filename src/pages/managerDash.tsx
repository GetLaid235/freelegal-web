import React from "react";
import { FileText } from "lucide-react";
import Footer from "../components/footer";

// type defs
interface Case {
	id: number;
	title: string;
	category: string;
	date: string;
	status: "New" | "In Progress";
	interestExpressed: boolean;
}

interface LeaderboardEntry {
	rank: number;
	firm: string;
	points: number;
	cases: number;
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

const leaderboardData: LeaderboardEntry[] = [
	{ rank: 1, firm: "Justice Warriors LLP", points: 120, cases: 8 },
	{ rank: 2, firm: "Pro Bono Pros", points: 98, cases: 6 },
	{ rank: 3, firm: "Legal Aid Bros", points: 76, cases: 5 },
	{ rank: 4, firm: "Community Counsel", points: 60, cases: 4 },
];

// status badge
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

const CaseTable: React.FC<{ data: Case[] }> = ({ data }) => (
	<div className="w-full flex flex-col">
		<div className="text-2xl font-semibold my-4 font-[inter]">
			{data.length > 0 && data.every((c) => c.interestExpressed)
				? "Cases You've Assigned"
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
										Withdraw assignment
									</button>
								) : (
									<button className="inline-flex items-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">
										Assign
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

const LeaderBoard: React.FC<{ data: LeaderboardEntry[] }> = ({ data }) => {
	const sorted = [...data].sort((a, b) => b.points - a.points);

	return (
		<div className="w-full flex flex-col my-20">
			<p className="text-xl font-semibold my-4 font-[inter]">Leaderboard</p>
			<div className="w-full p-4 rounded-md border border-slate-300 overflow-x-auto">
				<table className="w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							{["Rank", "Firm", "Points", "Cases"].map((h) => (
								<th
									key={h}
									className="px-6 py-3 text-left text-sm font-bold text-gray-700"
								>
									{h}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						{sorted.map((entry) => (
							<tr key={entry.rank}>
								<td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
									#{entry.rank}
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-normal">
									{entry.firm}
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									{entry.points}
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									{entry.cases}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-6 p-4 rounded-md border border-slate-300 bg-gray-50">
				<h3 className="text-lg font-semibold mb-2">How to Earn Points</h3>
				<ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
					<li>
						<span className="font-medium text-green-700">+100 points:</span>{" "}
						Successfully completing a pro bono case
					</li>
					<li>
						<span className="font-medium text-green-700">+25 points:</span>{" "}
						Expressing interest in a case
					</li>
					<li>
						<span className="font-medium text-green-700">+50 points:</span> Each
						month of ongoing representation
					</li>
					<li>
						<span className="font-medium text-green-700">+10 points:</span> For
						each referral to another lawyer when you can't take a case
					</li>
				</ul>
			</div>
		</div>
	);
};

const ManagerDashboard: React.FC = () => {
	const [selectedTab, setSelectedTab] = React.useState<
		"available" | "assigned"
	>("available");

	const availableCases = cases.filter((c) => !c.interestExpressed);
	const assignedCases = cases.filter((c) => c.interestExpressed);
	const showCases =
		selectedTab === "available" ? availableCases : assignedCases;

	return (
		<>
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 border-b-4 border-white">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>

			<div className="w-full flex flex-col mt-20 px-8 py-4">
				<div className="flex flex-col gap-2 mb-4">
					<h1 className="text-3xl font-bold">Case Portal</h1>
					<p className="text-slate-600">Manage and assign pro bono cases.</p>
				</div>

				<div className="flex gap-4 mb-6">
					<button
						onClick={() => setSelectedTab("available")}
						className={`px-4 py-2 text-sm font-medium rounded-md ${
							selectedTab === "available"
								? "bg-blue-600 text-white"
								: "bg-gray-100 text-gray-700"
						}`}
					>
						Available
					</button>
					<button
						onClick={() => setSelectedTab("assigned")}
						className={`px-4 py-2 text-sm font-medium rounded-md ${
							selectedTab === "assigned"
								? "bg-blue-600 text-white"
								: "bg-gray-100 text-gray-700"
						}`}
					>
						Assigned
					</button>
				</div>

				<CaseTable data={showCases} />
				<LeaderBoard data={leaderboardData} />
			</div>
			<Footer />
		</>
	);
};

export default ManagerDashboard;
