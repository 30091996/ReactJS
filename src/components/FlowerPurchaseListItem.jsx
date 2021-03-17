import {useState} from "react";
import * as service from "../services/flowers.service";

function FlowerPurchaseListItem(props) {
	const [flower, setFlower] = useState(props.flower);

	const handlePurchase = () => {
		props.onPurchase(flower.id);
	};

	/**
	 * U renderu ove komponente kondicionalno dodajemo stilizaciju u zvisnosti od
	 * toga da li je kuca izdata ili ne.
	 */
	return (
		<li className="collection-item avatar red lighten-2 white-text">
			<img src={flower.image} alt="Flower" className="circle"/>
			<p>
				Name: {flower.name} <br/>
				Price: {flower.price}
			</p>
			<button onClick={handlePurchase} className="btn secondary-content white black-text">
				<i className="material-icons">attach_money</i>
			</button>
		</li>);
}

export default FlowerPurchaseListItem;
