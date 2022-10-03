import React from "react";

import { Link, Outlet } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						Logo
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link " aria-current="page">
									SignUp
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Signin
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<Outlet />
		</header>
	);
};

export default Header;
