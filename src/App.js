import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}></Route>
		</Routes>
	);
}

export default App;
