import React, { Component } from 'react';
import Modal from './Modal';
import Camera from './Camera';
import LexAudio from '../utils/lex-audio';
//const AWS = require('aws-sdk');

require("aws-sdk/dist/aws-sdk");
const AWS = window.AWS;

class Home extends Component {
	componentDidMount(){
		var self = this;
		// Enable the webcam
		setTimeout(function(){
			self._camera.enableCamera()
		}, 1000);
		
		AWS.config.credentials = new AWS.Credentials("AKIAJHKKK7VH6KRPRMRA", "7zzlH08ZkQLKlxyCRINesq3gB/NqG0KXKdDOx+YE");
        AWS.config.update({region:'us-east-1'});

        config = {
            lexConfig: { botName: "SimplePhotoBoothSerice" }
        };

        conversation = new LexAudio.conversation(config, function (state) {
            if (state === 'Listening') {
                console.log(state);
            }
            if (state === 'Sending') {
                console.log(state);
            }
        }, function (data) {
            console.log('Transcript: ', data.inputTranscript, ", Response: ", data.message);
        }, function (error) {
            message.textContent = error;
        }, function (timeDomain, bufferLength) {
            //waveform.visualizeAudioBuffer(timeDomain, bufferLength);
        });
        conversation.advanceConversation();

		/* Trying out recording
		var audioControl = new LexAudio.audioControl();
		audioControl.supportsAudio(function(res){
			audioControl.startRecording();
		});
		setTimeout(function(){
			audioControl.exportWAV(function(blob){
			  audioControl.play(blob);
			});
		}, 5000);*/

	}

	openModal(){
		this._camera.disableCamera();
		this._modal.openModal();
	}

	render(){
		return (
			<div className="camera">
				<div className="camera-container">
					<i className="capture-button-options-close fa fa-close" id="capture-remove"></i>
					<i className="capture-button-options-save fa fa-save" id="capture-upload" onClick={this.openModal.bind(this)}></i>
					<Camera state={this.props} ref={(camera) => { this._camera = camera}}/>
					<canvas id="canvas"></canvas>
					<img src="" id="photo" alt=""/>
					<audio id="audio" src="https://www.soundjay.com/mechanical/camera-shutter-click-08.wav"></audio>
					<div className="capture-button-container">
						<i id="capture" className="fa fa-circle-o animated fadeInUp"></i>
					</div>
					<div className="brand-logo">
						<img id="projectLogo" src="/img/aws.png" className="animated fadeInLeft" alt="aws"/>
					</div>
				</div>
				<Modal state={this.props} ref={(modal) => { this._modal = modal}}></Modal>
			</div>
		);
	}
}

export default Home;
