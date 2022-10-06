import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />} />
				<Route exact path="/signin" element={<SignIn />} />
				<Route exact path="/signup" element={<SignUp />} />
				{/* protected user routes */}
				<Route element={<UserRoute />}>
					<Route exact path="/user/dashboard" element={<UserDashboard />} />
				</Route>

				{/* protected admin routes */}
				<Route element={<AdminRoute />}>
					<Route exact path="/admin/dashboard" element={<AdminDashboard />} />
					{/* <Route
							exact
							path='/admin/edit/product/:productId'
							element={<AdminEditProduct />}
						/> */}
				</Route>

				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
