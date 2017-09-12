import React, { Component } from 'react';

class Webcam extends Component {
	constructor(){
		super();
		// Camera methods
		this.enableWebcam = this.enableWebcam.bind(this);
		this.disableWebcam = this.disableWebcam.bind(this);
		this.registerCameraEvents = this.registerCameraEvents.bind(this);
		this.takePicture = this.takePicture.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
		this.getVideoDimensions = this.getVideoDimensions.bind(this);
		
		// State methods	
		this.storeStream = this.storeStream.bind(this);
		this.storeCaptureState = this.storeCaptureState.bind(this);
	}

	componentDidMount(){
		var self = this;
		// Handle visuals on camera events
		self.registerCameraEvents();
		window.onresize = function(event){
			// Store updated dimensions
			// Will trigger video element to update its dimensions
			self.props.state.storeHeight(window.innerHeight);
			self.props.state.storeWidth(window.innerWidth);
		};
	}
	
	/**
	 * StoreStream
	 * @description: Store the stream instance
	 * @param: {object} stream | Stream instance
	 * @return: {none}
	 */
	storeStream(stream){
		this.props.state.storeStream(stream);	
	}

	/**
	 * Get Video Dimensions
	 * @description: Get real dimensions of the video element
	 * @param: {none}
	 * @return: {int} | width - real width
	 *          {int} | height - real height
	 */
	getVideoDimensions(){
		// code from https://stackoverflow.com/a/39326690
		let video = document.getElementById("video");
  		// Ratio of the video's intrisic dimensions
		var videoRatio = video.videoWidth / video.videoHeight;
  		// The width and height of the video element
  		var width = video.offsetWidth, height = video.offsetHeight;
  		// The ratio of the element's width to its height
		var elementRatio = width/height;
  		// If the video element is short and wide
  		if(elementRatio > videoRatio) width = height * videoRatio;
  		// It must be tall and thin, or exactly equal to the original ratio
  		else height = width / videoRatio;
  		return {
    		width: width,
    		height: height
  		};
	}
	
	/**
	 * Enable Webcam
	 * @description: Enable the webcam
	 * @param: {none}
	 * @return: {none}
	 */
	enableWebcam(){
		let video = document.getElementById("video");
		let canvas = document.getElementById("canvas");
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
				self.storeStream(stream);
			} else {
				// All other streams
				video.srcObject = stream;
				self.storeStream(stream);
			}
			video.play();
		}, function(err) {
			console.log("Could not get the video stream from the webcam: " + err);
		});

		// Register video play event
		video.addEventListener('canplay', function(ev){
			video.setAttribute('width', self.props.state.webcam.width);
			video.setAttribute('height', self.props.state.webcam.height);
		}, false);
	}

	/**
	 * Disable Webcam
	 * @description: Disable the webcam
	 * @param: {none}
	 * @return: {none}
	 */
	disableWebcam(){
		this.props.state.webcam.stream.getTracks()[0].stop();
	}

	/**
	 * Store Capture State
	 * @description: Stores the current capture state
	 * @param: {none}
	 * @return: {none}
	 */
	storeCaptureState(state){
		this.props.state.storeCaptureState(state);
	}

	/**
	 * TakePicture
	 * @description: Take a still image from the webcam
	 * @param: {none}
	 * @return: {none}
	 */
	takePicture() {
		let video = document.getElementById("video");
		let canvas = document.getElementById("canvas");
		let photo = document.getElementById("photo");
		
		let capture = document.querySelector('#capture');
		let captureRemove = document.querySelector('#capture-remove');
		let captureUpload = document.querySelector('#capture-upload');
		
		// Display the photo div
		photo.style.display = "block";
		
		// Hide the video div
		let vidHeight = this.getVideoDimensions()["height"];
		let vidWidth = this.getVideoDimensions()["width"];
		video.style.display = "none";
		this.storeCaptureState(1);
		
		// Hide the capture button
		capture.style.display = "none";
		
		// Display the options for captured photos
		captureRemove.style.display = "inline-block";
		captureUpload.style.display = "inline-block";

		// Get still image from the video and write it to the canvas element
		canvas.setAttribute('width', vidWidth);
		canvas.setAttribute('height', vidHeight);
		let ctx = canvas.getContext('2d');
		ctx.drawImage(video, 0, 0, vidWidth, vidHeight);

		// Draw AWS logo on to photo
		var img = new Image();
		img.onload = function () {
    		ctx.drawImage(img, 0, 0, 150, 93);
		}
		img.src = "/img/aws.png";
		
		// Play camera sound
		var sound = document.getElementById("audio");
		sound.play()
		// Delay this to wait for image to load and be drawn to canvas
		setTimeout(function(){
			// Get image attached to the canvas
			var data = canvas.toDataURL('image/png');

			// Set the image to the photo element
			photo.setAttribute('src', data);
			photo.style.height = vidHeight;
			photo.style.width = vidWidth;

			// Hide the canvas
			canvas.style.display = "none";
		}, 200);
	}

	/**
	 * Upload Image
	 * @description: Upload the still image taken to the server
	 * @param: {none}
	 * @return: {promise} Upload image to server
	 */
	uploadImage(){
		// Get image from canvas element
		let data = document.querySelector("#canvas");
		data.toDataURL('image/png');
		let photo = document.querySelector("#photo");
		photo.setAttribute('src', data);
		let canvas = document.querySelector("#canvas");
		canvas.style.display = "none";

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
	}

	/**
	 * Register Camera Events
	 * @description: Register the camera button events
	 * @param: {none}
	 * @return: {none}
	 */
	registerCameraEvents(){
		var captureRemove = document.querySelector("#capture-remove");
		var captureUpload = document.querySelector("#capture-upload");
		var video = document.getElementById("video");
		var photo = document.getElementById("photo");
		var canvas = document.getElementById("canvas");
		var capture = document.querySelector('#capture');

		var self = this;
		// Handle click event for removing captured image
		captureRemove.addEventListener('click', function(e){
			self.storeCaptureState(0);
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
			self.storeCaptureState(0);
			captureRemove.style.display = "none";
			captureUpload.style.display = "none";
			photo.style.display = "none";
			video.style.display = "inline-block";
			canvas.style.display = "none";
			capture.style.display = "inline-block";
			//self.openModal();
			e.preventDefault();
		}, false);

		// Handle click event for taking a picture
		capture.addEventListener('click', function(e){
			if(self.props.state.webcam.captureState == 0){
				self.takePicture();
			} else {
				captureRemove.style.display = "none";
				captureUpload.style.display = "none";
				photo.style.display = "none";
				video.style.display = "inline-block";
				canvas.style.display = "none";
				self.storeCaptureState(0);
			}
			e.preventDefault();
		}, false);
	}

	render(){
		return (
			<video id="video"></video>
		);
	}
}

export default Webcam;

