import React, { useEffect, useState } from "react";
// components
import AdminHeader from "./AdminHeader";
import AdminActionBtns from "./AdminActionBtns";
import AdminCategoryModal from "./AdminCategoryModal";
import AdminProductModal from "./AddProductModal";

// import AdminBody from './AdminBody';

const AdminDashboard = () => {
	return (
		<section>
			<AdminHeader />
			<AdminActionBtns />

			<AdminCategoryModal />
			<AdminProductModal />
			{/*
						<AdminBody /> */}
		</section>
	);
};

export default AdminDashboard;
