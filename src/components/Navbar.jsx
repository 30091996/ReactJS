import {Link, NavLink} from "react-router-dom";

function Navbar() {
	return (<nav>
		<div className="nav-wrapper container">
			<Link to="/flowers" className="brand-logo">Flower Shop</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><NavLink exact to="/flowers/new" activeClassName={"active"}>New flower</NavLink></li>
				<li><NavLink exact to="/flowers" activeClassName={"active"}>Flowers</NavLink></li>
				<li><NavLink exact to="/purchase" activeClassName={"active"}>Purchase</NavLink></li>
				<li><NavLink exact to="/cart" activeClassName={"active"}>Cart</NavLink></li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;
