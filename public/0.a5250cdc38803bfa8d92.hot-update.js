webpackHotUpdate(0,{229:function(module,exports,__webpack_require__){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(8);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n\t\t_this.state = {\n\t\t\theight: window.innerHeight,\n\t\t\twidth: window.innerWidth,\n\t\t\tstream: null,\n\t\t\tcaptureState: 0\n\t\t};\n\n\t\t// Camera methods\n\t\t_this.enableWebcam = _this.enableWebcam.bind(_this);\n\t\t_this.disableWebcam = _this.disableWebcam.bind(_this);\n\t\t_this.handleTakePicture = _this.handleTakePicture.bind(_this);\n\t\t_this.registerCameraEvents = _this.registerCameraEvents.bind(_this);\n\t\t_this.takePicture = _this.takePicture.bind(_this);\n\t\t_this.uploadImage = _this.uploadImage.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(App, [{\n\t\tkey: "componentDidMount",\n\t\tvalue: function componentDidMount() {\n\t\t\tvar self = this;\n\t\t\tthis.registerCameraEvents();\n\t\t\tsetTimeout(function () {\n\t\t\t\t//self.enableWebcam();\t\n\t\t\t}, 1000);\n\t\t\twindow.addEventListener("resize", function (event) {\n\t\t\t\tself.state.height = window.innerHeight;\n\t\t\t\tself.state.width = window.innnerWidth;\n\t\t\t\tdocument.getElementById("video").style.height = window.innerHeight;\n\t\t\t\tdocument.getElementById("photo").style.height = window.innerHeight;\n\t\t\t\tdocument.getElementById("video").style.width = window.innerWidth;\n\t\t\t\tdocument.getElementById("photo").style.width = window.innerWidth;\n\t\t\t});\n\t\t\tdocument.getElementById("video").style.height = window.innerHeight;\n\t\t\tdocument.getElementById("photo").style.height = window.innerHeight;\n\t\t\tdocument.getElementById("video").style.width = window.innerWidth;\n\t\t\tdocument.getElementById("photo").style.width = window.innerWidth;\n\t\t}\n\n\t\t/**\n   * Enable Webcam\n   * @description: Enable the webcam\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "enableWebcam",\n\t\tvalue: function enableWebcam() {\n\t\t\tvar streaming = false;\n\t\t\tvar video = document.querySelector("#video");\n\t\t\tvar canvas = document.querySelector("#canvas");\n\n\t\t\tgncrcdudfectlncdelgieenfktcvtttiktebdj;\n\n\t\t\tnavigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;\n\n\t\t\tvar self = this;\n\t\t\t// Get the video stream from the webcam\n\t\t\tnavigator.getMedia({\n\t\t\t\tvideo: true,\n\t\t\t\taudio: false\n\t\t\t}, function (stream) {\n\t\t\t\t// Handle mozilla stream\n\t\t\t\tif (navigator.mozGetUserMedia) {\n\t\t\t\t\tvideo.mozSrcObject = stream;\n\t\t\t\t\tself.setState({ stream: stream });\n\t\t\t\t} else {\n\t\t\t\t\t// All other streams\n\t\t\t\t\tself.setState({ stream: stream });\n\t\t\t\t\tvar vendorURL = window.URL || window.webkitURL;\n\t\t\t\t\tvideo.src = vendorURL.createObjectURL(stream);\n\t\t\t\t}\n\t\t\t\tvideo.play();\n\t\t\t}, function (err) {\n\t\t\t\tconsole.log("Could not get the video stream from the webcam: " + err);\n\t\t\t});\n\n\t\t\t// Register video play event\n\t\t\tvideo.addEventListener(\'canplay\', function (ev) {\n\t\t\t\tif (!streaming) {\n\t\t\t\t\t//self.setState({height: video.videoHeight / (video.videoWidth / self.state.width)});\n\t\t\t\t\tvideo.setAttribute(\'width\', self.state.width);\n\t\t\t\t\tvideo.setAttribute(\'height\', self.state.height);\n\t\t\t\t\tcanvas.setAttribute(\'width\', self.state.width);\n\t\t\t\t\tcanvas.setAttribute(\'height\', self.state.height);\n\t\t\t\t\tstreaming = true;\n\t\t\t\t}\n\t\t\t}, false);\n\t\t}\n\t\t/**\n   * DisableWebcam\n   * @description: Disable the webcam\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "disableWebcam",\n\t\tvalue: function disableWebcam() {\n\t\t\tthis.state.stream.getTracks()[0].stop();\n\t\t}\n\n\t\t/**\n   * TakePicture\n   * @description: Take a still image from the webcam\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "takePicture",\n\t\tvalue: function takePicture() {\n\t\t\tvar photo = document.querySelector("#photo");\n\t\t\tvar video = document.querySelector("#video");\n\t\t\tvar capture = document.querySelector(\'#capture\');\n\t\t\tvar captureRemove = document.querySelector(\'#capture-remove\');\n\t\t\tvar captureUpload = document.querySelector(\'#capture-upload\');\n\t\t\tvar canvas = document.querySelector(\'#canvas\');\n\t\t\t// Display the photo div\n\t\t\tphoto.style.display = "inline-block";\n\t\t\t// Hide the video div\n\t\t\tvideo.style.display = "none";\n\t\t\tthis.setState({ captureState: 1 });\n\t\t\t// Hide the capture button\n\t\t\tcapture.style.display = "none";\n\t\t\t// Display the options for captured photos\n\t\t\tcaptureRemove.style.display = "inline-block";\n\t\t\tcaptureUpload.style.display = "inline-block";\n\t\t\t// Get still image from the video and write it to the canvas element\n\t\t\tcanvas.getContext(\'2d\').drawImage(video, 0, 0, this.state.width, this.state.height);\n\t\t\t// Play camera sound\n\t\t\tvar sound = document.getElementById("audio");\n\t\t\tsound.play();\n\t\t\t// Get image attached to the canvas\n\t\t\tvar data = canvas.toDataURL(\'image/png\');\n\t\t\t// Set the image to the photo div\n\t\t\tphoto.setAttribute(\'src\', data);\n\t\t\t// Hide the canvas\n\t\t\tcanvas.style.display = "none";\n\t\t}\n\n\t\t/**\n   * UploadImage\n   * @description: Upload the still image taken to the server\n   * @param: {none}\n   * @return: {promise} Upload image to server\n   */\n\n\t}, {\n\t\tkey: "uploadImage",\n\t\tvalue: function uploadImage() {\n\t\t\t// Get image from canvas element\n\t\t\tvar data = document.querySelector("#canvas").toDataURL(\'image/png\');\n\t\t\tdocument.querySelector("#photo").setAttribute(\'src\', data);\n\t\t\tdocument.querySelector("#canvas").style.display = "none";\n\n\t\t\t// Code below from stackoverflow\n\t\t\t// http://stackoverflow.com/a/12300351\n\t\t\tvar byteString = atob(data.split(\',\')[1]);\n\t\t\t// separate out the mime component\n\t\t\tvar mimeString = data.split(\',\')[0].split(\':\')[1].split(\';\')[0];\n\t\t\t// write the bytes of the string to an ArrayBuffer\n\t\t\tvar ab = new ArrayBuffer(byteString.length);\n\t\t\tvar ia = new Uint8Array(ab);\n\t\t\tfor (var i = 0; i < byteString.length; i++) {\n\t\t\t\tia[i] = byteString.charCodeAt(i);\n\t\t\t}\n\t\t\t// write the ArrayBuffer to a blob, and you\'re done\n\t\t\tvar blob = new Blob([ab], { type: mimeString });\n\n\t\t\t// Create Form Data instance and inject the image\n\t\t\tvar fd = new FormData();\n\t\t\tfd.append(\'file\', blob, Date.now() + \'.jpg\');\n\t\t\tconsole.log("UPLOAD");\n\t\t\tconsole.log(this.props);\n\t\t\treturn client.upload(fd, this.props.sidebar.chatFocused.uuid);\n\t\t}\n\n\t\t/**\n   * HandleTakePicture\n   * @description: Handle the visual state of taking a picture\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "handleTakePicture",\n\t\tvalue: function handleTakePicture(e) {\n\t\t\tvar chatCamera = document.querySelector(".chat-camera");\n\t\t\tvar chatTimeline = document.querySelector(".chat-timeline");\n\t\t\tvar captureRemove = document.querySelector("#capture-remove");\n\t\t\tvar captureUpload = document.querySelector("#capture-upload");\n\t\t\tvar photo = document.querySelector("#photo");\n\t\t\t// Hide the camera div\n\t\t\tif (hasClass(chatCamera, "active") && hasClass(chatTimeline, "camera-active")) {\n\t\t\t\tremoveClass(chatCamera, "active");\n\t\t\t\tremoveClass(chatTimeline, "camera-active");\n\t\t\t\t// Disable the webcam\n\t\t\t\tthis.disableWebcam();\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t// Show the camera div\n\t\t\taddClass(chatCamera, "active");\n\t\t\taddClass(chatTimeline, "camera-active");\n\t\t\t// Enable the webcam\n\t\t\tthis.enableWebcam();\n\t\t}\n\n\t\t/**\n   * RegisterCameraEvents\n   * @description: Register the camera button events\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "registerCameraEvents",\n\t\tvalue: function registerCameraEvents() {\n\t\t\tvar captureRemove = document.querySelector("#capture-remove");\n\t\t\tvar captureUpload = document.querySelector("#capture-upload");\n\t\t\tvar video = document.querySelector("#video");\n\t\t\tvar photo = document.querySelector("#photo");\n\t\t\tvar canvas = document.querySelector("#canvas");\n\t\t\tvar capture = document.querySelector(\'#capture\');\n\n\t\t\tvar self = this;\n\t\t\t// Handle click event for removing captured image\n\t\t\tcaptureRemove.addEventListener(\'click\', function (e) {\n\t\t\t\tself.setState({ captureState: 0 });\n\t\t\t\tcaptureRemove.style.display = "none";\n\t\t\t\tcaptureUpload.style.display = "none";\n\t\t\t\tphoto.style.display = "none";\n\t\t\t\tvideo.style.display = "inline-block";\n\t\t\t\tcanvas.style.display = "none";\n\t\t\t\tcapture.style.display = "inline-block";\n\t\t\t\te.preventDefault();\n\t\t\t}, false);\n\n\t\t\t// Handle click event for uploading captured image\n\t\t\tcaptureUpload.addEventListener(\'click\', function (e) {\n\t\t\t\tself.setState({ captureState: 0 });\n\t\t\t\tcaptureRemove.style.display = "none";\n\t\t\t\tcaptureUpload.style.display = "none";\n\t\t\t\tphoto.style.display = "none";\n\t\t\t\tvideo.style.display = "inline-block";\n\t\t\t\tcanvas.style.display = "none";\n\t\t\t\tcapture.style.display = "inline-block";\n\t\t\t\t// TODO:(mcervco) Figure out a visual way of saying the image upload failed\n\t\t\t\tself.uploadImage().then(function (res) {\n\t\t\t\t\tconsole.log(res.data);\n\t\t\t\t}).catch(function (err) {\n\t\t\t\t\tconsole.log(err.response);\n\t\t\t\t});\n\t\t\t\te.preventDefault();\n\t\t\t}, false);\n\n\t\t\t// Handle click event for taking a picture\n\t\t\tcapture.addEventListener(\'click\', function (e) {\n\t\t\t\tif (self.state.captureState == 0) {\n\t\t\t\t\tself.takePicture();\n\t\t\t\t} else {\n\t\t\t\t\tcaptureRemove.style.display = "none";\n\t\t\t\t\tcaptureUpload.style.display = "none";\n\t\t\t\t\tphoto.style.display = "none";\n\t\t\t\t\tvideo.style.display = "inline-block";\n\t\t\t\t\tcanvas.style.display = "none";\n\t\t\t\t\tself.setState({ captureState: 0 });\n\t\t\t\t}\n\t\t\t\te.preventDefault();\n\t\t\t}, false);\n\t\t}\n\t}, {\n\t\tkey: "render",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t"div",\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t"div",\n\t\t\t\t\t{ className: "chat-camera" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t"div",\n\t\t\t\t\t\t{ className: "chat-camera-container" },\n\t\t\t\t\t\t_react2.default.createElement("i", { className: "fa fa-close", id: "capture-remove", style: { display: "none" } }),\n\t\t\t\t\t\t_react2.default.createElement("i", { className: "fa fa-save", id: "capture-upload", style: { display: "none" } }),\n\t\t\t\t\t\t_react2.default.createElement("video", { id: "video" }),\n\t\t\t\t\t\t_react2.default.createElement("canvas", { id: "canvas", style: { display: "none" } }),\n\t\t\t\t\t\t_react2.default.createElement("img", { src: "", id: "photo", alt: "", style: { display: "none" } }),\n\t\t\t\t\t\t_react2.default.createElement("audio", { id: "audio", src: "https://www.soundjay.com/mechanical/camera-shutter-click-08.wav" }),\n\t\t\t\t\t\t_react2.default.createElement("i", { id: "capture", className: "fa fa-circle-o" })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hvbWUuanM/MGE4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0c3RyZWFtOiBudWxsLFxuXHRcdFx0Y2FwdHVyZVN0YXRlOiAwXG5cdFx0fTtcblxuXHRcdC8vIENhbWVyYSBtZXRob2RzXG5cdFx0dGhpcy5lbmFibGVXZWJjYW0gPSB0aGlzLmVuYWJsZVdlYmNhbS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGlzYWJsZVdlYmNhbSA9IHRoaXMuZGlzYWJsZVdlYmNhbS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlVGFrZVBpY3R1cmUgPSB0aGlzLmhhbmRsZVRha2VQaWN0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZWdpc3RlckNhbWVyYUV2ZW50cyA9IHRoaXMucmVnaXN0ZXJDYW1lcmFFdmVudHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRha2VQaWN0dXJlID0gdGhpcy50YWtlUGljdHVyZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudXBsb2FkSW1hZ2UgPSB0aGlzLnVwbG9hZEltYWdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLnJlZ2lzdGVyQ2FtZXJhRXZlbnRzKCk7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0Ly9zZWxmLmVuYWJsZVdlYmNhbSgpO1x0XG5cdFx0fSwgMTAwMCk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0c2VsZi5zdGF0ZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHRzZWxmLnN0YXRlLndpZHRoID0gd2luZG93Lmlubm5lcldpZHRoO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvXCIpLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIikuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG9cIikuc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvXCIpLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90b1wiKS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHR9XG5cblx0LyoqXG5cdCAqIEVuYWJsZSBXZWJjYW1cblx0ICogQGRlc2NyaXB0aW9uOiBFbmFibGUgdGhlIHdlYmNhbVxuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7bm9uZX1cblx0ICovXG5cdGVuYWJsZVdlYmNhbSgpe1xuXHRcdGxldCBzdHJlYW1pbmcgPSBmYWxzZTtcblx0XHRsZXQgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvXCIpO1xuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcblxuXHRcdGduY3JjZHVkZmVjdGxuY2RlbGdpZWVuZmt0Y3Z0dHRpa3RlYmRqXG5cblx0XHRuYXZpZ2F0b3IuZ2V0TWVkaWEgPSAoXG5cdFx0XHRuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8XG5cdFx0XHRuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8XG5cdFx0XHRuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8XG5cdFx0XHRuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWFcblx0XHQpO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdC8vIEdldCB0aGUgdmlkZW8gc3RyZWFtIGZyb20gdGhlIHdlYmNhbVxuXHRcdG5hdmlnYXRvci5nZXRNZWRpYSh7XG5cdFx0XHR2aWRlbzogdHJ1ZSxcblx0XHRcdGF1ZGlvOiBmYWxzZVxuXHRcdH0sIGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRcdFx0Ly8gSGFuZGxlIG1vemlsbGEgc3RyZWFtXG5cdFx0XHRpZihuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG5cdFx0XHRcdHZpZGVvLm1velNyY09iamVjdCA9IHN0cmVhbTtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7c3RyZWFtOiBzdHJlYW19KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEFsbCBvdGhlciBzdHJlYW1zXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe3N0cmVhbTogc3RyZWFtfSk7XG5cdFx0XHRcdHZhciB2ZW5kb3JVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG5cdFx0XHRcdHZpZGVvLnNyYyA9IHZlbmRvclVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcblx0XHRcdH1cblx0XHRcdHZpZGVvLnBsYXkoKTtcblx0XHR9LCBmdW5jdGlvbihlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGdldCB0aGUgdmlkZW8gc3RyZWFtIGZyb20gdGhlIHdlYmNhbTogXCIgKyBlcnIpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gUmVnaXN0ZXIgdmlkZW8gcGxheSBldmVudFxuXHRcdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBmdW5jdGlvbihldil7XG5cdFx0XHRpZighc3RyZWFtaW5nKXtcblx0XHRcdFx0Ly9zZWxmLnNldFN0YXRlKHtoZWlnaHQ6IHZpZGVvLnZpZGVvSGVpZ2h0IC8gKHZpZGVvLnZpZGVvV2lkdGggLyBzZWxmLnN0YXRlLndpZHRoKX0pO1xuXHRcdFx0XHR2aWRlby5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc2VsZi5zdGF0ZS53aWR0aCk7XG5cdFx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc2VsZi5zdGF0ZS5oZWlnaHQpO1xuXHRcdFx0XHRjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHNlbGYuc3RhdGUud2lkdGgpO1xuXHRcdFx0XHRjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzZWxmLnN0YXRlLmhlaWdodCk7XG5cdFx0XHRcdHN0cmVhbWluZyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UpO1xuXG5cdH1cblx0LyoqXG5cdCAqIERpc2FibGVXZWJjYW1cblx0ICogQGRlc2NyaXB0aW9uOiBEaXNhYmxlIHRoZSB3ZWJjYW1cblx0ICogQHBhcmFtOiB7bm9uZX1cblx0ICogQHJldHVybjoge25vbmV9XG5cdCAqL1xuXHRkaXNhYmxlV2ViY2FtKCl7XG5cdFx0dGhpcy5zdGF0ZS5zdHJlYW0uZ2V0VHJhY2tzKClbMF0uc3RvcCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRha2VQaWN0dXJlXG5cdCAqIEBkZXNjcmlwdGlvbjogVGFrZSBhIHN0aWxsIGltYWdlIGZyb20gdGhlIHdlYmNhbVxuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7bm9uZX1cblx0ICovXG5cdHRha2VQaWN0dXJlKCkge1xuXHRcdHZhciBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvdG9cIik7XG5cdFx0dmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb1wiKTtcblx0XHR2YXIgY2FwdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0dXJlJylcblx0XHR2YXIgY2FwdHVyZVJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0dXJlLXJlbW92ZScpO1xuXHRcdHZhciBjYXB0dXJlVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcHR1cmUtdXBsb2FkJyk7XG5cdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcblx0XHQvLyBEaXNwbGF5IHRoZSBwaG90byBkaXZcblx0XHRwaG90by5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHQvLyBIaWRlIHRoZSB2aWRlbyBkaXZcblx0XHR2aWRlby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y2FwdHVyZVN0YXRlOiAxfSk7XG5cdFx0Ly8gSGlkZSB0aGUgY2FwdHVyZSBidXR0b25cblx0XHRjYXB0dXJlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHQvLyBEaXNwbGF5IHRoZSBvcHRpb25zIGZvciBjYXB0dXJlZCBwaG90b3Ncblx0XHRjYXB0dXJlUmVtb3ZlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdGNhcHR1cmVVcGxvYWQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0Ly8gR2V0IHN0aWxsIGltYWdlIGZyb20gdGhlIHZpZGVvIGFuZCB3cml0ZSBpdCB0byB0aGUgY2FudmFzIGVsZW1lbnRcblx0XHRjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIHRoaXMuc3RhdGUud2lkdGgsIHRoaXMuc3RhdGUuaGVpZ2h0KTtcblx0XHQvLyBQbGF5IGNhbWVyYSBzb3VuZFxuXHRcdHZhciBzb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG5cdFx0c291bmQucGxheSgpXG5cdFx0Ly8gR2V0IGltYWdlIGF0dGFjaGVkIHRvIHRoZSBjYW52YXNcblx0XHR2YXIgZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuXHRcdC8vIFNldCB0aGUgaW1hZ2UgdG8gdGhlIHBob3RvIGRpdlxuXHRcdHBob3RvLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YSk7XG5cdFx0Ly8gSGlkZSB0aGUgY2FudmFzXG5cdFx0Y2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGxvYWRJbWFnZVxuXHQgKiBAZGVzY3JpcHRpb246IFVwbG9hZCB0aGUgc3RpbGwgaW1hZ2UgdGFrZW4gdG8gdGhlIHNlcnZlclxuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7cHJvbWlzZX0gVXBsb2FkIGltYWdlIHRvIHNlcnZlclxuXHQgKi9cblx0dXBsb2FkSW1hZ2UoKXtcblx0XHQvLyBHZXQgaW1hZ2UgZnJvbSBjYW52YXMgZWxlbWVudFxuXHRcdHZhciBkYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIikudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob3RvXCIpLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YSk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdFx0Ly8gQ29kZSBiZWxvdyBmcm9tIHN0YWNrb3ZlcmZsb3dcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMjMwMDM1MVxuXHRcdHZhciBieXRlU3RyaW5nID0gYXRvYihkYXRhLnNwbGl0KCcsJylbMV0pO1xuXHRcdC8vIHNlcGFyYXRlIG91dCB0aGUgbWltZSBjb21wb25lbnRcblx0XHR2YXIgbWltZVN0cmluZyA9IGRhdGEuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cblx0XHQvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlclxuXHRcdHZhciBhYiA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG5cdFx0dmFyIGlhID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKXtcblx0XHRcdGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdH1cblx0XHQvLyB3cml0ZSB0aGUgQXJyYXlCdWZmZXIgdG8gYSBibG9iLCBhbmQgeW91J3JlIGRvbmVcblx0XHR2YXIgYmxvYiA9IG5ldyBCbG9iKFthYl0sIHsgdHlwZTogbWltZVN0cmluZyB9KTtcblxuXHRcdC8vIENyZWF0ZSBGb3JtIERhdGEgaW5zdGFuY2UgYW5kIGluamVjdCB0aGUgaW1hZ2Vcblx0XHR2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmZC5hcHBlbmQoJ2ZpbGUnLCBibG9iLCBEYXRlLm5vdygpICsgJy5qcGcnKTtcblx0XHRjb25zb2xlLmxvZyhcIlVQTE9BRFwiKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblx0XHRyZXR1cm4gY2xpZW50LnVwbG9hZChmZCwgdGhpcy5wcm9wcy5zaWRlYmFyLmNoYXRGb2N1c2VkLnV1aWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZVRha2VQaWN0dXJlXG5cdCAqIEBkZXNjcmlwdGlvbjogSGFuZGxlIHRoZSB2aXN1YWwgc3RhdGUgb2YgdGFraW5nIGEgcGljdHVyZVxuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7bm9uZX1cblx0ICovXG5cdGhhbmRsZVRha2VQaWN0dXJlKGUpe1xuXHRcdHZhciBjaGF0Q2FtZXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGF0LWNhbWVyYVwiKTtcblx0XHR2YXIgY2hhdFRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGF0LXRpbWVsaW5lXCIpO1xuXHRcdHZhciBjYXB0dXJlUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXB0dXJlLXJlbW92ZVwiKTtcblx0XHR2YXIgY2FwdHVyZVVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FwdHVyZS11cGxvYWRcIik7XG5cdFx0dmFyIHBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG90b1wiKTtcblx0XHQvLyBIaWRlIHRoZSBjYW1lcmEgZGl2XG5cdFx0aWYoaGFzQ2xhc3MoY2hhdENhbWVyYSwgXCJhY3RpdmVcIikgJiYgaGFzQ2xhc3MoY2hhdFRpbWVsaW5lLCBcImNhbWVyYS1hY3RpdmVcIikpe1xuXHRcdFx0cmVtb3ZlQ2xhc3MoY2hhdENhbWVyYSwgXCJhY3RpdmVcIik7XG5cdFx0XHRyZW1vdmVDbGFzcyhjaGF0VGltZWxpbmUsIFwiY2FtZXJhLWFjdGl2ZVwiKTtcblx0XHRcdC8vIERpc2FibGUgdGhlIHdlYmNhbVxuXHRcdFx0dGhpcy5kaXNhYmxlV2ViY2FtKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIFNob3cgdGhlIGNhbWVyYSBkaXZcblx0XHRhZGRDbGFzcyhjaGF0Q2FtZXJhLCBcImFjdGl2ZVwiKTtcblx0XHRhZGRDbGFzcyhjaGF0VGltZWxpbmUsIFwiY2FtZXJhLWFjdGl2ZVwiKTtcblx0XHQvLyBFbmFibGUgdGhlIHdlYmNhbVxuXHRcdHRoaXMuZW5hYmxlV2ViY2FtKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJDYW1lcmFFdmVudHNcblx0ICogQGRlc2NyaXB0aW9uOiBSZWdpc3RlciB0aGUgY2FtZXJhIGJ1dHRvbiBldmVudHNcblx0ICogQHBhcmFtOiB7bm9uZX1cblx0ICogQHJldHVybjoge25vbmV9XG5cdCAqL1xuXHRyZWdpc3RlckNhbWVyYUV2ZW50cygpe1xuXHRcdHZhciBjYXB0dXJlUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXB0dXJlLXJlbW92ZVwiKTtcblx0XHR2YXIgY2FwdHVyZVVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FwdHVyZS11cGxvYWRcIik7XG5cdFx0dmFyIHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWRlb1wiKTtcblx0XHR2YXIgcGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob3RvXCIpO1xuXHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcblx0XHR2YXIgY2FwdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0dXJlJyk7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0Ly8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciByZW1vdmluZyBjYXB0dXJlZCBpbWFnZVxuXHRcdGNhcHR1cmVSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdHNlbGYuc2V0U3RhdGUoe2NhcHR1cmVTdGF0ZTogMH0pO1xuXHRcdFx0Y2FwdHVyZVJlbW92ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRjYXB0dXJlVXBsb2FkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHBob3RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0Y2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdGNhcHR1cmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciB1cGxvYWRpbmcgY2FwdHVyZWQgaW1hZ2Vcblx0XHRjYXB0dXJlVXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRzZWxmLnNldFN0YXRlKHtjYXB0dXJlU3RhdGU6IDB9KTtcblx0XHRcdGNhcHR1cmVSZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0Y2FwdHVyZVVwbG9hZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRwaG90by5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR2aWRlby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRjYXB0dXJlLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0Ly8gVE9ETzoobWNlcnZjbykgRmlndXJlIG91dCBhIHZpc3VhbCB3YXkgb2Ygc2F5aW5nIHRoZSBpbWFnZSB1cGxvYWQgZmFpbGVkXG5cdFx0XHRzZWxmLnVwbG9hZEltYWdlKCkudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cdFx0XHR9KS5jYXRjaChmdW5jdGlvbihlcnIpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSwgZmFsc2UpO1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciB0YWtpbmcgYSBwaWN0dXJlXG5cdFx0Y2FwdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYoc2VsZi5zdGF0ZS5jYXB0dXJlU3RhdGUgPT0gMCl7XG5cdFx0XHRcdHNlbGYudGFrZVBpY3R1cmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhcHR1cmVSZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRjYXB0dXJlVXBsb2FkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0cGhvdG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR2aWRlby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdFx0Y2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7Y2FwdHVyZVN0YXRlOiAwfSk7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSwgZmFsc2UpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1jYW1lcmFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYXQtY2FtZXJhLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2xvc2VcIiBpZD1cImNhcHR1cmUtcmVtb3ZlXCIgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PjwvaT5cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNhdmVcIiBpZD1cImNhcHR1cmUtdXBsb2FkXCIgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PjwvaT5cblx0XHRcdFx0XHRcdDx2aWRlbyBpZD1cInZpZGVvXCI+PC92aWRlbz5cblx0XHRcdFx0XHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0+PC9jYW52YXM+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIlwiIGlkPVwicGhvdG9cIiBhbHQ9XCJcIiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0vPlxuXHRcdFx0XHRcdFx0PGF1ZGlvIGlkPVwiYXVkaW9cIiBzcmM9XCJodHRwczovL3d3dy5zb3VuZGpheS5jb20vbWVjaGFuaWNhbC9jYW1lcmEtc2h1dHRlci1jbGljay0wOC53YXZcIj48L2F1ZGlvPlxuXHRcdFx0XHRcdFx0PGkgaWQ9XCJjYXB0dXJlXCIgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hvbWUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWdCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFEQTtBQWNBOzs7Ozs7QUFyUkEiLCJzb3VyY2VSb290IjoiIn0=')}});