import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { showErrorMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";

const SignUp = () => {
	const [formData, setFormData] = useState({
		username: "joe",
		email: "joe@joe.com",
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
	const handleSubmit = (evt) => {
		evt.preventDefault();

		// client-side validation
		if (
			isEmpty(username) ||
			isEmpty(email) ||
			isEmpty(password) ||
			isEmpty(password2)
		) {
			setFormData({
				...formData,
				errorMsg: "All fields are required",
			});
		} else if (!isEmail(email)) {
			setFormData({
				...formData,
				errorMsg: "Invalid email",
			});
		} else if (!equals(password, password2)) {
			setFormData({
				...formData,
				errorMsg: "Passwords do not match",
			});
		} else {
			const { username, email, password } = formData;
			const data = { username, email, password };

			setFormData({ ...formData, loading: true });
			//console.log(formData);

			signup(data)
				.then((response) => {
					console.log("Axios signup success: ", response);
					setFormData({
						username: "",
						email: "",
						password: "",
						password2: "",
						loading: false,
						successMsg: response.data.successMessage,
					});
				})
				.catch((err) => {
					console.log("Axios signup error: ", err);
					setFormData({
						...formData,
						loading: false,
						errorMsg: err.response.data.errorMessage,
					});
				});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		//console.log(e);
		setFormData({
			...formData,
			[name]: value,
			successMsg: "",
			errorMsg: "",
		});
	};

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
			<div className="form-group input-group mb-2 flex-nowrap">
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
			<div className="form-group input-group mb-2 flex-nowrap">
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
			<div className="d-grid gap-2">
				{/* already have account */}
				<button type="submit" className="btn btn-success">
					Signup
				</button>
			</div>
			<p className="text-center text-white">
				Have an account? <Link to="/signin">Log In</Link>
			</p>
		</form>
	); // to render the output
	return (
		<div className="signup-container">
			<div className="row vh-100 p-3">
				<div className="col-md-5 mx-auto align-self-center">
					{successMsg && showErrorMsg(successMsg)}
					{errorMsg && showErrorMsg(errorMsg)}
					{loading && <div className="text-center">{showLoading()}</div>}
					{showSignupForm()}
				</div>
			</div>
		</div>
	);
};

export default SignUp;
