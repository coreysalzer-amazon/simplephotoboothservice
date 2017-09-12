import React, { Component } from 'react';
import Modal from './Modal';
import Webcam from './Webcam';

class Home extends Component {
	constructor(){
		super();

		//Modal methods
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount(){
		var self = this;
		// Enable the webcam
		setTimeout(function(){
			self._webcam.enableWebcam()
		}, 1000);
	}

	openModal() {
		this.setState({showModal: true});
		this._webcam.disableWebcam();
	}

	closeModal(contactInfo) {
		this.setState({showModal: false});

		if (contactInfo != null) {
			console.log(contactInfo);
		}
	}

	render(){
		return (
			<div className="camera">
				<div className="camera-container">
					<i className="capture-button-options-close fa fa-close" id="capture-remove"></i>
					<i className="capture-button-options-save fa fa-save" id="capture-upload"></i>
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
				<div className="modal-container">
					<Modal></Modal>
		        </div>
			</div>
		);
	}
}

export default Home;
