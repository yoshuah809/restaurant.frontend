import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="user/dashboard" element={<UserDashboard />} />
				<Route path="admin/dashboard" element={<AdminDashboard />} />

				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
