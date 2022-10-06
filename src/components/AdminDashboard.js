import React, { useEffect } from "react";
// components
import AdminHeader from "./AdminHeader";
import AdminActionBtns from "./AdminActionBtns";
import AdminCategoryModal from "./AdminCategoryModal";
// import AdminProductModal from './AdminProductModal';
// import AdminBody from './AdminBody';

const AdminDashboard = () => {
	const adminActionBtns = () => (
		<div className="bg-light my-2 ">
			<div className="container">
				<div className="row py-3">
					<div className="col-md-4 my-1">
						<button
							type="button"
							className="btn btn-outline-info btn-block"
							data-bs-toggle="modal"
							data-bs-target="#addCategoryModal"
						>
							<i className="fas fa-plus"> Add Category</i>
						</button>
					</div>

					<div className="col-md-4 my-1">
						<button
							className="btn btn-outline-warning btn-block"
							data-toggle="modal"
							data-target="#addFoodModal"
						>
							<i className="fas fa-plus"> Add Food</i>
						</button>
					</div>

					<div className="col-md-4 my-1">
						<button className="btn btn-outline-success btn-block">
							<i className="fas fa-money-check-alt"> View Orders</i>
						</button>
					</div>
					{/* Working modal down HEre until we create its own component */}
					<div
						id="addCategoryModal"
						className="modal fade"
						role="dialog"
						aria-labelledby="addCategoryModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered modal-lg">
							<div className="modal-content">
								<div className="modal-header bg-success text-white">
									<h5 className="modal-title">Add Category</h5>
									<button
										className="btn btn-subcess close"
										data-bs-dismiss="modal"
									>
										<span>
											<i className="fas fa-times"></i>
										</span>
									</button>
								</div>
								<div className="modal-body ">
									<form>
										<label className="text-secondary my-2">Category</label>
										<input
											type="text"
											className="form-control"
											name="category"
											// value={category}
											// onChange={handleCategoryChange}
										/>
									</form>
								</div>
								<div className="modal-footer">
									<button className="btn btn-secondary" data-bs-dismiss="modal">
										Close
									</button>
									<button type="submit" className="btn btn-success">
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<section>
			<AdminHeader />
			{adminActionBtns()}

			{/*
			<AdminActionBtns />
			<AdminCategoryModal />
			
			<AdminProductModal />
			<AdminBody /> */}
		</section>
	);
};

export default AdminDashboard;
