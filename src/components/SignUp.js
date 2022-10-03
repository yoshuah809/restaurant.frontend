import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const SignUp = () => {
	const [formData, setFormData] = useState({
		username: "johndoe",
		email: "jdoe@gmail.com",
		password: "abc123",
		password2: "abc123",
		successMsg: false,
		errorMsg: false,
		loading: false,
	});
	const {
		username,
		email,
		password,
		password2,
		successMsg,
		errorMsg,
		loading,
	} = formData;
	const handleSubmit = (e) => {};
	const handleChange = (e) => {};

	const showSignupForm = () => (
		<form className="signup-form" onSubmit={handleSubmit} noValidate>
			{/* username */}
			<div className="form-group input-group mb-2 flex-nowrap">
				<div className="input-group">
					<span className="input-group-text">
						<i className="fa fa-user"></i>
					</span>

					<input
						name="username"
						value={username}
						className="form-control"
						placeholder="Username"
						type="text"
						onChange={handleChange}
					/>
				</div>
			</div>
			{/* email */}
			<div className="form-group input-group mb-2 flex-nowrap">
				<div className="input-group">
					<span className="input-group-text">
						<i className="fa fa-envelope"></i>
					</span>
					<input
						name="email"
						value={email}
						className="form-control"
						placeholder="Email address"
						type="email"
						onChange={handleChange}
					/>
				</div>
			</div>
			{/* password */}
			<div className="form-group input-group mb-2">
				<div className="input-group">
					<span className="input-group-text">
						<i className="fa fa-lock"></i>
					</span>
					<input
						name="password"
						value={password}
						className="form-control"
						placeholder="Create password"
						type="password"
						onChange={handleChange}
					/>
				</div>
			</div>
			{/* password2 */}
			<div className="form-group input-group mb-2">
				<div className="input-group">
					<span className="input-group-text">
						<i className="fa fa-lock"></i>
					</span>
					<input
						name="password2"
						value={password2}
						className="form-control"
						placeholder="Confirm password"
						type="password"
						onChange={handleChange}
					/>
				</div>
			</div>
			{/* signup button */}
			<div className="form-group">
				<button type="submit" className="btn btn-success btn-block">
					Signup
				</button>
			</div>
			{/* already have account */}
			<p className="text-center text-white">
				Have an account? <Link to="/signin">Log In</Link>
			</p>
		</form>
	);
	// to render the output
	return (
		<div className="signup-container">
			<div className="row vh-100 p-3">
				<div className="col-md-5 mx-auto align-self-center">
					{showSignupForm()}
				</div>
			</div>
		</div>
	);
};

export default SignUp;
