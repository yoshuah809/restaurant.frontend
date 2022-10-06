import React, { useEffect, useState } from "react";
// components
import AdminHeader from "./AdminHeader";
import AdminActionBtns from "./AdminActionBtns";
import AdminCategoryModal from "./AdminCategoryModal";
// import AdminProductModal from './AdminProductModal';
// import AdminBody from './AdminBody';

const AdminDashboard = () => {
	return (
		<section>
			<AdminHeader />
			<AdminActionBtns />

			<AdminCategoryModal />
			{/*
			{adminActionBtns()}
			
			<AdminProductModal />
			<AdminBody /> */}
		</section>
	);
};

export default AdminDashboard;
