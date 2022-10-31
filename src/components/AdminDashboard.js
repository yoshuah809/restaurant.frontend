import React, { useEffect, useState } from "react";
// components
import AdminHeader from "./AdminHeader";
import AdminActionBtns from "./AdminActionBtns";
import AdminCategoryModal from "./AdminCategoryModal";
import AdminProductModal from "./AddProductModal";
import { useDispatch } from "react-redux";
import { getCategories } from "../app/actions/categoryActions";
import { getProducts } from "../app/actions/productActions";
import AdminBody from "./AdminBody";

// import AdminBody from './AdminBody';

const AdminDashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<section>
			<AdminHeader />
			<AdminActionBtns />
			<AdminCategoryModal />
			<AdminProductModal />
			<AdminBody />
		</section>
	);
};

export default AdminDashboard;
