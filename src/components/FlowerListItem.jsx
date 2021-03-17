import {Link} from "react-router-dom";

function FlowerListItem({flower}) {
	return (
		<li className={"collection-item avatar white-text red lighten-2" + (flower.purchased ? " purchased" : "")}>
			<img src={flower.image} alt="Flower" className="circle"/>
			<p>
				Name: {flower.name} <br/>
				Price: {flower.price} <br/>
				{flower.purchased ? "Purchased" : ""}<br/>
			</p>
			{!flower.purchased ?
				<Link to={`/flowers/${flower.id}`} className="btn btn-flat right secondary-content white-text"><i
					className="material-icons">edit</i></Link>
				: ""}
		</li>);
}

export default FlowerListItem;
