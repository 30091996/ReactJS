import {useEffect, useState} from "react";
import CartFlowerListItem from "../components/CartFlowerListItem";
import * as service from "../services/flowers.service";

function CartPage() {
	const [flowers, setFlowers] = useState([]);

	const getAll = () => service.getAll()
		.then(_flowers => setFlowers(_flowers.filter(flower => flower.purchased)));

	useEffect(() => {
		getAll();
	}, []);

	const handleRefund = (id) => {
		const flower = flowers.find(flower => flower.id === id);
		if (!flower) return;

		const purchasedFlower = {...flower, purchased: false};
		service.update(purchasedFlower)
			.then(getAll);
	};

	return <div className="container">
		<h2>Shopping cart</h2>
		<ul className="collection">
			{flowers.map(flower => <CartFlowerListItem onRefund={handleRefund} flower={flower}/>)}
		</ul>
		<h5>
			Total: {flowers.reduce((acc, curr) => acc += parseInt(curr.price), 0)}
		</h5>
	</div>;
}

export default CartPage;
