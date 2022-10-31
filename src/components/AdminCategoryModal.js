import React, { Fragment, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
// // redux
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../app/actions/messageActions";
import { createCategory } from "../app/actions/categoryActions";

const AdminCategoryModal = () => {
	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	const { successMsg, errorMsg } = useSelector((state) => state.messages);
	const { loading } = useSelector((state) => state.loading);

	const dispatch = useDispatch();
	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [category, setCategory] = useState("");
	const [clientSideErrorMsg, setClientSideErrorMsg] = useState("");

	/****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleMessages = (e) => {
		dispatch(clearMessages());
	};

	const handleCategoryChange = (e) => {
		dispatch(clearMessages());
		setCategory(e.target.value);
	};

	const handleCategorySubmit = (e) => {
		e.preventDefault();

		if (isEmpty(category)) {
			setClientSideErrorMsg("Please enter a category");
		} else {
			const data = { category };
			dispatch(createCategory(data));
			setCategory("");
		}
	};

	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div
			id="addCategoryModal"
			className="modal fade"
			role="dialog"
			aria-labelledby="addCategoryModalLabel"
			aria-hidden="true"
			onClick={handleMessages}
		>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<form onSubmit={handleCategorySubmit}>
						<div className="modal-header bg-success text-white">
							<h5 className="modal-title">Add Category</h5>
							<button className="btn btn-subcess close" data-bs-dismiss="modal">
								<span>
									<i className="fas fa-times"></i>
								</span>
							</button>
						</div>
						<div className="modal-body">
							{clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
							{errorMsg && showErrorMsg(errorMsg)}
							{successMsg && showSuccessMsg(successMsg)}

							{loading ? (
								<div className="text-center">{showLoading()}</div>
							) : (
								<Fragment>
									<label className="text-secondary">Category</label>
									<input
										type="text"
										className="form-control"
										name="category"
										value={category}
										onChange={handleCategoryChange}
									/>
								</Fragment>
							)}
						</div>
						<div className="modal-footer">
							<button className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="submit" className="btn btn-success">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminCategoryModal;
