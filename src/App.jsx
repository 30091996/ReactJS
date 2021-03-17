import {HashRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";

/**
 * Osnovna React komponenta. Uglavnpm se u njoj vrsi rutiranje stranica.
 * `HashRouter` je nadkomponenta koja na osnovu pravila iz `Routes` komponente
 * prikazuje odgovarajuce stranice.
 */
function App() {
	return (
		<main>
			<HashRouter>
				<Navbar/>
				<Routes/>
			</HashRouter>
		</main>
	);
}

export default App;
