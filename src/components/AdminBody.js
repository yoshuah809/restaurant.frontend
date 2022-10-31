import React from "react";
import Card from "./Card";
// redux
import { useSelector } from "react-redux";

const AdminBody = () => {
	const { products } = useSelector((state) => state.products);

	return (
		<div className="container">
			<div className="container-fluid d-flex justify-content-center">
				<div className="row">
					{products &&
						products.map((product) => (
							<Card key={product._id} product={product} adminPage={true} />
						))}
				</div>
			</div>
		</div>
	);
};

export default AdminBody;
