const INITIAL_CONTACTS = [
	{ "pk": "1", "name": "Klaus Peterson", "email": null, "zipcode": 12345, "city": "Hummelshausen" },
	{ "pk": "2", "name": "Ursula Meier", "email": null, "zipcode": 20010, "city": "Hamburg" },
	{ "pk": "3", "name": "Michel Svenson", "email": null, "zipcode": 860, "city": "Lönneberga" },
	{ "pk": "4", "name": "Pierre Michel Lassoga", "email": null, "zipcode": 21887, "city": "Hamburg" }
];


class ContactsModel {
	constructor() {
		this._contacts = INITIAL_CONTACTS;
	}

	get contacts() {
		return this._contacts;
	}
}

const theModel = new ContactsModel();
export default theModel;
