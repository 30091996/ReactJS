import {Route, Switch} from "react-router";
import CartPage from "../pages/CartPage";
import FlowersEditPage from "../pages/FlowerEditPage";
import FlowersPage from "../pages/FlowersPage";
import RentPage from "../pages/PurchasePage";

/**
 * Objasnjenje:
 * U sustini komponenta koja na osnovu url-a u browseru prikazuje ili ne prikazuje komponente.
 * Pravila za prikazivanje su prosta: po default-u matchuje pocetak pathname-a url-a iz browsera
 * sa specificiranim `path` prop-om komponente `Route` ili samo ako je tacno takav url u slucaju da smo dodali
 * prop `exact`.
 * Ako je zadovoljen uslov prikazace se sve nested(children) komponente odgovarajuce `Route` komponente.
 */
function Routes() {
	return (
		<Switch>
			<Route path="/flowers/:id">
				<FlowersEditPage/>
			</Route>
			<Route exact path="/purchase">
				<RentPage/>
			</Route>
			<Route exact path="/flowers">
				<FlowersPage/>
			</Route>
			<Route exact path="/cart">
				<CartPage/>
			</Route>
			<Route>
				<FlowersPage/>
			</Route>
		</Switch>
	);
};

export default Routes;
