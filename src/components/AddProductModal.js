import React, { Fragment, useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { getCategories } from "../api/category";
import { createProduct } from "../api/product";
// redux
// import { useSelector, useDispatch } from 'react-redux';
// import { clearMessages } from '../redux/actions/messageActions';
// import { createProduct } from '../redux/actions/productActions';

const AdminProductModal = () => {
	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	// const { loading } = useSelector(state => state.loading);
	// const { successMsg, errorMsg } = useSelector(state => state.messages);
	// const { categories } = useSelector(state => state.categories);

	// const dispatch = useDispatch();
	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [clientSideError, setClientSideError] = useState("");
	const [productData, setProductData] = useState({
		productImage: null,
		productName: "",
		productDesc: "",
		productPrice: "",
		productCategory: "",
		productQty: "",
	});
	const [successMsg, setSuccessMsg] = useState("");
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [categories, setCategories] = useState(null);
	const [category, setCategory] = useState("");

	useEffect(() => {
		loadCategories();
	}, [loading]);

	const loadCategories = async () => {
		const response = getCategories()
			.then((response) => {
				setCategories(response.data.categories);
			})
			.catch((e) => {
				console.log(e.response.data.error);
			});
	};
	const {
		productImage,
		productName,
		productDesc,
		productPrice,
		productCategory,
		productQty,
	} = productData;

	/****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleMessages = (e) => {
		//dispatch(clearMessages());
		setClientSideError("");
	};

	const handleProductChange = (e) => {
		console.log(e.target.value);
		setProductData({
			...productData,
			[e.target.name]: e.target.value,
		});
	};

	const handleProductImage = (e) => {
		//console.log(e.target.files[0]);
		setProductData({
			...productData,
			[e.target.name]: e.target.files[0],
		});
	};

	const handleProductSubmit = (e) => {
		e.preventDefault();

		if (productImage === null) {
			setClientSideError("Please select an image");
		} else if (
			isEmpty(productName) ||
			isEmpty(productDesc) ||
			isEmpty(productPrice)
		) {
			setClientSideError("Please enter all fields");
		} else if (isEmpty(productCategory)) {
			setClientSideError("Please select a category");
		} else if (isEmpty(productQty)) {
			setClientSideError("Please select a quantity");
		} else {
			let formData = new FormData();

			formData.append("productImage", productImage);
			formData.append("productName", productName);
			formData.append("productDesc", productDesc);
			formData.append("productPrice", productPrice);
			formData.append("productCategory", productCategory);
			formData.append("productQty", productQty);

			createProduct(formData)
				.then((response) => {
					console.log("Server Response", response);
				})
				.catch((e) => {
					console.log(e);
				});
			setProductData({
				productImage: null,
				productName: "",
				productDesc: "",
				productPrice: "",
				productCategory: "",
				productQty: "",
			});
			//dispatch(createProduct(formData));
			// setProductData({
			// 	productImage: null,
			// 	productName: '',
			// 	productDesc: '',
			// 	productPrice: '',
			// 	productCategory: '',
			// 	productQty: '',
			// });
		}
	};

	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div id="addProductModal" className="modal" onClick={handleMessages}>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<form onSubmit={handleProductSubmit}>
						<div className="modal-header bg-warning text-white">
							<h5 className="modal-title">Add Product</h5>
							<button className="close btn btn-warning" data-bs-dismiss="modal">
								<span>
									<i className="fas fa-times"></i>
								</span>
							</button>
						</div>
						<div className="modal-body my-2">
							{clientSideError && showErrorMsg(clientSideError)}
							{errorMsg && showErrorMsg(errorMsg)}
							{successMsg && showSuccessMsg(successMsg)}

							{loading ? (
								<div className="text-center">{showLoading()}</div>
							) : (
								<Fragment>
									<div className="input-group mb-2">
										{/*   */}
										<input
											type="file"
											className="form-control"
											name="productImage"
											onChange={handleProductImage}
											id="productImageFile"
										/>
									</div>

									<div className="form-group mb-2">
										<label className="text-secondary">Name</label>
										<input
											type="text"
											className="form-control"
											name="productName"
											value={productName}
											onChange={handleProductChange}
										/>
									</div>

									<div className="form-group mb-2">
										<label className="text-secondary">Description</label>
										<textarea
											className="form-control"
											rows="3"
											name="productDesc"
											value={productDesc}
											onChange={handleProductChange}
										></textarea>
									</div>

									<div className="form-group mb-4">
										<label className="text-secondary">Price</label>
										<input
											type="number"
											className="form-control"
											name="productPrice"
											value={productPrice}
											onChange={handleProductChange}
										/>
									</div>

									<div className="input-group mb-3">
										<div class="input-group-prepend">
											<label class="input-group-text" for="categorySelect">
												Category
											</label>
										</div>
										<select
											className="form-select form-select-sm me-3"
											name="productCategory"
											id="categorySelect"
											onChange={handleProductChange}
											// style={{ maxWidth: "295px" }}
										>
											<option className="form-control" value="">
												Choose one...
											</option>
											{categories &&
												categories.map((c) => (
													<option key={c._id} value={c._id}>
														{c.category}
													</option>
												))}
										</select>

										<label className="text-secondary mt-2 me-2">Quantity</label>
										<input
											type="number"
											className="form-control"
											min="0"
											max="1000"
											name="productQty"
											value={productQty}
											onChange={handleProductChange}
										/>
									</div>
								</Fragment>
							)}
						</div>
						<div className="modal-footer">
							<button className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="submit" className="btn btn-warning text-white">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminProductModal;
