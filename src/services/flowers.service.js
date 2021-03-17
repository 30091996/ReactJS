import axios from "axios";

/**
 * Koristeci `axios`(https://github.com/axios/axios) biblioteku
 * pravimo HTTP pozive ka odgovarajuim API endpointima.
 * `baseUrl` predstavlja osnovi resurs koji pozivamo.
 */

const baseUrl = "/flowers";

export const getAll = async () => {
	return (await axios.get(baseUrl)).data;
};

export const getById = async (id) => {
	return (await axios.get(`${baseUrl}/${id}`)).data;
};

export const save = async (data) => {
	return (await axios.post(baseUrl, data)).data;
};

export const update = async (data) => {
	return (await axios.put(`${baseUrl}/${data.id}`, data)).data;
};

export const deleteById = async (id) => {
	return (await axios.delete(`${baseUrl}/${id}`)).data;
};
