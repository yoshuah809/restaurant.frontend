import React, { Fragment } from "react";
import {
	Link,
	Outlet,
	useNavigate,
	useLocation,
	useParams,
} from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";

function withRouter(Component) {
	// to repalce withRouter that does not exist in Router 6
	function ComponentWithRouterProps(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProps;
}

const Header = () => {
	const navigate = useNavigate();

	const handleLogout = (e) => {
		logout(() => {
			navigate("/signin");
		});
	};

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-success">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<i className="fas fa-home"></i> King's Warehouse
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
							{!isAuthenticated() && (
								<Fragment>
									<li className="nav-item">
										<Link to="signup" className="nav-link " aria-current="page">
											<i className="fas fa-user-edit"></i> SignUp
										</Link>
									</li>
									<li className="nav-item">
										<Link to="signin" className="nav-link">
											<i className="fas fa-sign-in-alt"></i> Signin
										</Link>
									</li>
								</Fragment>
							)}
							{isAuthenticated() && isAuthenticated().role === 0 && (
								<Fragment>
									<li className="nav-item">
										<Link
											to="user/dashboard"
											className="nav-link "
											aria-current="page"
										>
											<i className="fas fa-home"></i> Dashboard
										</Link>
									</li>
								</Fragment>
							)}
							{isAuthenticated() && isAuthenticated().role === 1 && (
								<Fragment>
									<li className="nav-item">
										<Link
											to="admin/dashboard"
											className="nav-link "
											aria-current="page"
										>
											<i className="fas fa-home"></i> Admin Dashboard
										</Link>
									</li>
								</Fragment>
							)}
							{isAuthenticated() && (
								<Fragment>
									<li className="nav-item">
										<button
											className="btn btn-link text-light text-decoration-none px-0"
											aria-current="page"
											onClick={handleLogout}
										>
											<i className="fas fa-sign-out-alt"></i> Logout
										</button>
									</li>
								</Fragment>
							)}
						</ul>
					</div>
				</div>
			</nav>

			<Outlet />
		</header>
	);
};

export default withRouter(Header);
