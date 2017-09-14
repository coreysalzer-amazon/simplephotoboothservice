import axios from 'axios';

class HTTPClient {
	constructor(){
		this.URL = "http://localhost:7890/api/v1/";
	}

	get(path){
		return axios.get(this.URL + path);
	}

	post(path, data, config){
		return axios.post(this.URL + path, data, config);
	}
}

// Photos API route handlers
class PhotosAPI extends HTTPClient {
	constructor(){
		super();
		this.getAllPhotos = this.getAllPhotos.bind(this);
		this.uploadPhoto = this.uploadPhoto.bind(this);
	}

	// GET - ["/photos"]
	getAllPhotos(){
		return this.get('');
	}

	// POST - ["/photos"]
	uploadPhoto(photo, contactInfo){
		var params = "?type=" + contactInfo.type + "&value=" + contactInfo.value;

		const config = {
        	headers: {
            	'content-type': 'multipart/form-data'
        	}, 
        	params: params
    	};
		return this.post("photos", photo, config);
	}
}

class API {
	constructor(){
		// Store instance of specific API classes
		this._photos = new PhotosAPI();
	}
	
	// Instance of Photo API route handlers
	get photos(){
		return this._photos;
	}
}

// Create instance here so that instance creation is not needed
// when it is imported
let api = new API();
export default api; 
