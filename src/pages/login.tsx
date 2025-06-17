import React from "react";

const Login = () => {
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 shadow-[0_1.5px_4px_-1px_rgba(255,255,255,0.3)]">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>
			<div className="w-full max-h-screen flex mt-32 justify-center">
				<div className="w-[85%] sm:w-[80%] md:[30rem] lg:w-[32rem] h-fit border-[1.1px] border-gray-200 rounded-md pt-8 pb-8 px-6 flex flex-col items-center">
					<div id="header" className="flex flex-col items-center mb-8 mt-5">
						<h1 className="text-2xl font-semibold mb-1">Login</h1>
						<p className="font-normal text-gray-600">
							Enter your email and password to login
						</p>
					</div>
					<form onSubmit={handleLogin} className="flex flex-col w-full gap-8">
						<label
							htmlFor="email"
							className="flex flex-col gap-2.5 text-gray-600 font-medium"
						>
							Email
							<input
								type="email"
								name="email"
								placeholder="name@example.com"
								className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
							/>
						</label>
						<label
							htmlFor="password"
							className="flex flex-col gap-2.5 text-gray-600 font-medium"
						>
							Password
							<input
								type="password"
								name="password"
								placeholder="eg: **********"
								className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
							/>
						</label>
						<button
							type="submit"
							className="bg-blue-950 w-full h-10 text-white rounded-md mt-2.5 mb-1"
						>
							Login
						</button>
					</form>
					<span className="text-sm mt-5">
						New to Freelegal?{" "}
						<a href="/register" className="text-blue-900 font-semi-bold">
							Register
						</a>
					</span>
				</div>
			</div>
		</>
	);
};

export default Login;
