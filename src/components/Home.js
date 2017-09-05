import React, { Component } from 'react';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			height: window.innerHeight,
			width: window.innerWidth,
			stream: null,
			captureState: 0
		};

		// Camera methods
		this.enableWebcam = this.enableWebcam.bind(this);
		this.disableWebcam = this.disableWebcam.bind(this);
		this.handleTakePicture = this.handleTakePicture.bind(this);
		this.registerCameraEvents = this.registerCameraEvents.bind(this);
		this.takePicture = this.takePicture.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
	}

	componentDidMount(){
		var self = this;
		this.registerCameraEvents();
		setTimeout(function(){
			self.enableWebcam();	
		}, 1000);
		window.addEventListener("resize", function(event){
			self.state.height = window.innerHeight;
			self.state.width = window.innnerWidth;
			document.getElementById("video").style.height = window.innerHeight;
			document.getElementById("photo").style.height = window.innerHeight;
			document.getElementById("video").style.width = window.innerWidth;
			document.getElementById("photo").style.width = window.innerWidth;
		});
		document.getElementById("video").style.height = window.innerHeight;
		document.getElementById("photo").style.height = window.innerHeight;
		document.getElementById("video").style.width = window.innerWidth;
		document.getElementById("photo").style.width = window.innerWidth;
	}

	/**
	 * Enable Webcam
	 * @description: Enable the webcam
	 * @param: {none}
	 * @return: {none}
	 */
	enableWebcam(){
		let streaming = false;
		let video = document.querySelector("#video");
		let canvas = document.querySelector("#canvas");

		navigator.getMedia = (
			navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia
		);

		var self = this;
		// Get the video stream from the webcam
		navigator.getMedia({
			video: true,
			audio: false
		}, function(stream) {
			// Handle mozilla stream
			if(navigator.mozGetUserMedia) {
				video.mozSrcObject = stream;
				self.setState({stream: stream});
			} else {
				// All other streams
				self.setState({stream: stream});
				var vendorURL = window.URL || window.webkitURL;
				video.src = vendorURL.createObjectURL(stream);
			}
			video.play();
		}, function(err) {
			console.log("Could not get the video stream from the webcam: " + err);
		});

		// Register video play event
		video.addEventListener('canplay', function(ev){
			if(!streaming){
				//self.setState({height: video.videoHeight / (video.videoWidth / self.state.width)});
				video.setAttribute('width', self.state.width);
				video.setAttribute('height', self.state.height);
				canvas.setAttribute('width', self.state.width);
				canvas.setAttribute('height', self.state.height);
				streaming = true;
			}
		}, false);

	}
	/**
	 * DisableWebcam
	 * @description: Disable the webcam
	 * @param: {none}
	 * @return: {none}
	 */
	disableWebcam(){
		this.state.stream.getTracks()[0].stop();
	}

	/**
	 * TakePicture
	 * @description: Take a still image from the webcam
	 * @param: {none}
	 * @return: {none}
	 */
	takePicture() {
		var photo = document.querySelector("#photo");
		var video = document.querySelector("#video");
		var capture = document.querySelector('#capture')
		var captureRemove = document.querySelector('#capture-remove');
		var captureUpload = document.querySelector('#capture-upload');
		var canvas = document.querySelector('#canvas');
		// Display the photo div
		photo.style.display = "inline-block";
		// Hide the video div
		video.style.display = "none";
		this.setState({captureState: 1});
		// Hide the capture button
		capture.style.display = "none";
		// Display the options for captured photos
		captureRemove.style.display = "inline-block";
		captureUpload.style.display = "inline-block";
		// Get still image from the video and write it to the canvas element
		canvas.getContext('2d').drawImage(video, 0, 0, this.state.width, this.state.height);
		// Play camera sound
		var sound = document.getElementById("audio");
		sound.play()
		// Get image attached to the canvas
		var data = canvas.toDataURL('image/png');
		// Set the image to the photo div
		photo.setAttribute('src', data);
		// Hide the canvas
		canvas.style.display = "none";
	}

	/**
	 * UploadImage
	 * @description: Upload the still image taken to the server
	 * @param: {none}
	 * @return: {promise} Upload image to server
	 */
	uploadImage(){
		// Get image from canvas element
		var data = document.querySelector("#canvas").toDataURL('image/png');
		document.querySelector("#photo").setAttribute('src', data);
		document.querySelector("#canvas").style.display = "none";

		// Code below from stackoverflow
		// http://stackoverflow.com/a/12300351
		var byteString = atob(data.split(',')[1]);
		// separate out the mime component
		var mimeString = data.split(',')[0].split(':')[1].split(';')[0]
		// write the bytes of the string to an ArrayBuffer
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for(var i = 0; i < byteString.length; i++){
			ia[i] = byteString.charCodeAt(i);
		}
		// write the ArrayBuffer to a blob, and you're done
		var blob = new Blob([ab], { type: mimeString });

		// Create Form Data instance and inject the image
		var fd = new FormData();
		fd.append('file', blob, Date.now() + '.jpg');
		console.log("UPLOAD");
		console.log(this.props);
		//return client.upload(fd, this.props.sidebar.chatFocused.uuid);
	}

	/**
	 * HandleTakePicture
	 * @description: Handle the visual state of taking a picture
	 * @param: {none}
	 * @return: {none}
	 */
	handleTakePicture(e){
		var chatCamera = document.querySelector(".chat-camera");
		var chatTimeline = document.querySelector(".chat-timeline");
		var captureRemove = document.querySelector("#capture-remove");
		var captureUpload = document.querySelector("#capture-upload");
		var photo = document.querySelector("#photo");
		// Hide the camera div
		if(hasClass(chatCamera, "active") && hasClass(chatTimeline, "camera-active")){
			removeClass(chatCamera, "active");
			removeClass(chatTimeline, "camera-active");
			// Disable the webcam
			this.disableWebcam();
			return;
		}
		// Show the camera div
		addClass(chatCamera, "active");
		addClass(chatTimeline, "camera-active");
		// Enable the webcam
		this.enableWebcam();
	}

	/**
	 * RegisterCameraEvents
	 * @description: Register the camera button events
	 * @param: {none}
	 * @return: {none}
	 */
	registerCameraEvents(){
		var captureRemove = document.querySelector("#capture-remove");
		var captureUpload = document.querySelector("#capture-upload");
		var video = document.querySelector("#video");
		var photo = document.querySelector("#photo");
		var canvas = document.querySelector("#canvas");
		var capture = document.querySelector('#capture');

		var self = this;
		// Handle click event for removing captured image
		captureRemove.addEventListener('click', function(e){
			self.setState({captureState: 0});
			captureRemove.style.display = "none";
			captureUpload.style.display = "none";
			photo.style.display = "none";
			video.style.display = "inline-block";
			canvas.style.display = "none";
			capture.style.display = "inline-block";
			e.preventDefault();
		}, false);

		// Handle click event for uploading captured image
		captureUpload.addEventListener('click', function(e){
			self.setState({captureState: 0});
			captureRemove.style.display = "none";
			captureUpload.style.display = "none";
			photo.style.display = "none";
			video.style.display = "inline-block";
			canvas.style.display = "none";
			capture.style.display = "inline-block";
			// TODO:(mcervco) Figure out a visual way of saying the image upload failed
			self.uploadImage().then(function(res){
				console.log(res.data);
			}).catch(function(err){
				console.log(err.response);
			});
			e.preventDefault();
		}, false);

		// Handle click event for taking a picture
		capture.addEventListener('click', function(e){
			if(self.state.captureState == 0){
				self.takePicture();
			} else {
				captureRemove.style.display = "none";
				captureUpload.style.display = "none";
				photo.style.display = "none";
				video.style.display = "inline-block";
				canvas.style.display = "none";
				self.setState({captureState: 0});
			}
			e.preventDefault();
		}, false);
	}

	render(){
		return (
			<div className="chat-camera">
				<div className="chat-camera-container">
					<i className="fa fa-close" id="capture-remove" style={{display: "none"}}></i>
					<i className="fa fa-save" id="capture-upload" style={{display: "none"}}></i>
					<video id="video"></video>
					<canvas id="canvas" style={{display: "none"}}></canvas>
					<img src="" id="photo" alt="" style={{display: "none"}}/>
					<audio id="audio" src="https://www.soundjay.com/mechanical/camera-shutter-click-08.wav"></audio>
					<div className="capture-button-container">
						<div className="capture-button-outer"></div>
						<div className="capture-button-inner"></div>
					</div>
					<i id="capture" className="fa fa-circle-o"></i>
				</div>
			</div>
		);
	}
}
