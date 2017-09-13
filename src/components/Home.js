import React, { Component } from 'react';
import Modal from './Modal';
import Webcam from './Webcam';
import API from '../lib/APIClient';

class Home extends Component {
	componentDidMount(){
		var self = this;
		// Enable the webcam
		setTimeout(function(){
			//self._webcam.enableWebcam()
		}, 1000);

		// example of api call
		API.photos.getAllPhotos().then((res) => {
			console.log(res.data);	
		}).catch((err) => {
			console.log(err);	
		});
	}

	openModal(){
		this._webcam.disableWebcam();
		this._modal.openModal();
	}

	render(){
		return (
			<div className="camera">
				<div className="camera-container">
					<i className="capture-button-options-close fa fa-close" id="capture-remove"></i>
					<i className="capture-button-options-save fa fa-save" id="capture-upload" onClick={this.openModal.bind(this)}></i>
					<Webcam state={this.props} ref={(webcam) => { this._webcam = webcam}}/>
					<canvas id="canvas"></canvas>
					<img src="" id="photo" alt=""/>
					<audio id="audio" src="https://www.soundjay.com/mechanical/camera-shutter-click-08.wav"></audio>
					<div className="capture-button-container">
						<i id="capture" className="fa fa-circle-o"></i>
					</div>
					<div className="brand-logo">
						<img src="/img/aws.png" alt="aws"/>
					</div>
				</div>
				<Modal state={this.props} ref={(modal) => { this._modal = modal}}></Modal>
			</div>
		);
	}
}

export default Home;
