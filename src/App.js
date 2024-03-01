import logo from "./logo.svg";
import "./App.css";

const ENV = {
	production: false,
	api: "https://dummyapi.io/data/v1",
	apiHeader: "65e1efd371f5292521b8bbe9",
};

const userService = () => {
	const getUsers = () => {
		const headers = { "app-id": ENV.apiHeader };
		return fetch(`${ENV.api}/user?limit=10`, { headers })
			.then((response) => response.json())
			.catch((error) => console.error("Error fetching users:", error));
	};

	const getUserById = (id) => {
		const headers = { "app-id": ENV.apiHeader };
		return fetch(`${ENV.api}/user/${id}`, { headers })
			.then((response) => response.json())
			.catch((error) => console.error("Error fetching user by ID:", error));
	};

	return { getUsers, getUserById };
};

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
};

export default App;
