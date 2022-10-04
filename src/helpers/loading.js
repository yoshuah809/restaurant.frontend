import React, { Fragment } from "react";

export const showLoading = () => (
	<Fragment>
		<div className="spinner-grow text-primary" role="status">
			<span className="sr-only">Loading...</span>
		</div>

		<div className="spinner-grow text-dark" role="status">
			<span className="sr-only">Loading...</span>
		</div>
	</Fragment>
);
