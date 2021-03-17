import {useEffect, useState} from "react";
import FlowerListItem from "../components/FlowerListItem";
import * as service from "../services/flowers.service";

function FlowersPage() {
	const [flowers, setFlowers] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setFlowers);
	}, []);

	return <div className="container">
		<ul className="collection">
			{flowers.map(flower => <FlowerListItem flower={flower}/>)}
		</ul>
	</div>;
}

export default FlowersPage;
