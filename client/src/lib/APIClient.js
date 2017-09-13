import axios from 'axios';

class HTTPClient {
	constructor(){
		this.URL = "http://google.com";
	}

	get(url){
		return axios.get(url);
	}
}

// Photos API route handlers
class PhotosAPI extends HTTPClient {
	constructor(){
		super();
		this.getAllPhotos = this.getAllPhotos.bind(this);
	}

	// GET - ["/photos"]
	getAllPhotos(){
		return this.get('http://localhost:3456/');
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
