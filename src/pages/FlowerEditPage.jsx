import M from "materialize-css/dist/js/materialize.min";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import * as service from "../services/flowers.service";

/**
 * Stranica za editovanje elemenata. Svako input polje ima bind-ovanu funkciju koja se poziva
 * kada se vrednost polja izmeni `handleInput`. U toj funkciji se uzima vrednost `name` atributa
 * i na osnovu njega azurira postojeci objekat koristeci ... operator. Pri prvom renderovanju
 * komponente(prvi useEffect) iz url parametara uzimamo potencijalni id objekta koji menjamo.
 * ako objekat sa tim id-om nije nadnjen podrazumevamo da je u pitanju kreiranje novog objekta.
 * `handleSubmit` funkcija proverava prvo da li postojeci objekat ima `id` od cega zavisi da
 * li ce se pozvati update ili save funkcija.
 */
function FlowersEditPage() {
	const {id} = useParams();
	const history = useHistory();
	const [flower, setFlower] = useState({});

	useEffect(() => {
		service.getById(id)
			.then(setFlower)
			.catch(() => {
				if (id !== "new"){
					history.replace("/flowers/new");
				}
				setFlower({})
			});
	}, []);

	useEffect(() => {
		M.updateTextFields();
	}, [flower]);

	const handleInput = ({currentTarget: input}) => {
		setFlower({...flower, [input.name]: input.value});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (flower.id) {
			service.update(flower)
				.then(_flower => {
					setFlower(_flower);
					alert("Updated");
				});
		} else {
			service.save(flower)
				.then(_flower => {
					setFlower(_flower);
					alert("Saved");
					history.replace("/flowers");
				});
		}
	};

	const handleDelete = () => {
		service.deleteById(flower.id)
			.then(()=> history.replace("/flowers"));
	}

	return <div className="container">
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<img style={{height: 200}} src={flower.image}/>
					<input value={flower.image}
					       onChange={handleInput}
					       name="image"
					       placeholder="image"
					       id="image"
					       type="text"/>
					<label htmlFor="image">Image</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={flower.name}
					       onChange={handleInput}
					       name="name"
					       placeholder="Name"
					       id="name"
					       type="text"/>
					<label htmlFor="name">Name</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m4 l2">
					<input value={flower.price}
					       onChange={handleInput}
					       name="price"
					       placeholder="Price"
					       id="price"
					       type="number"/>
					<label htmlFor="price">Price</label>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button className="btn">Save</button>
					<br/>
					<button className="btn red" type="button" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</form>
	</div>;
}

export default FlowersEditPage;
