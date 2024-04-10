import Contact from '../models/contact.js';
import content from './content.js';
import axios from 'axios'
class GeolocController {

	async index(req, res) {
		const contact = await Contact.findAll({
			order: ['id'],
		});
		return res.json(
			content(contact)
		);
	}
	async getGeolocalization(req, res) {
		const {latitude, longitude} = req.query;
		const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: {
              lat: latitude,
              lon: longitude,
              format: 'json'
            }
          });
		  console.log(response)
		return res.json(response.data
		);
	}

}

export default new GeolocController();
