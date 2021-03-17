import {useEffect, useState} from "react";
import FlowerPurchaseListItem from "../components/FlowerPurchaseListItem";
import * as service from "../services/flowers.service";

function PurchasePage(props) {
	const [flowers, setFlowers] = useState([]);

	const getAll = () => service.getAll()
		.then(_flowers => setFlowers(()=>_flowers.filter(flower => !flower.purchased)));

	useEffect(() => {
		getAll();
	}, []);

	const handlePurchase = (id) => {
		const flower = flowers.find(flower => flower.id === id);
		if (!flower) return;

		const purchasedFlower = {...flower, purchased: true};
		service.update(purchasedFlower)
			.then(getAll);
	};

	return <div className="container">
		<ul className="collection">
			{flowers.map(flower => <FlowerPurchaseListItem onPurchase={handlePurchase} flower={flower}/>)}
		</ul>
	</div>;
}

export default PurchasePage;
