webpackHotUpdate(0,{229:function(module,exports,__webpack_require__){eval('"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(8);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\tvar _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n\t\t_this.state = {\n\t\t\theight: 199,\n\t\t\twidth: 265,\n\t\t\tstream: null,\n\t\t\tcaptureState: 0\n\t\t};\n\n\t\t// Camera methods\n\t\t_this.enableWebcam = _this.enableWebcam.bind(_this);\n\t\t_this.disableWebcam = _this.disableWebcam.bind(_this);\n\t\t_this.handleTakePicture = _this.handleTakePicture.bind(_this);\n\t\t_this.registerCameraEvents = _this.registerCameraEvents.bind(_this);\n\t\t_this.takePicture = _this.takePicture.bind(_this);\n\t\t_this.uploadImage = _this.uploadImage.bind(_this);\n\t\treturn _this;\n\t}\n\n\t/**\n  * Enable Webcam\n  * @description: Enable the webcam\n  * @param: {none}\n  * @return: {none}\n  */\n\n\n\t_createClass(App, [{\n\t\tkey: "enableWebcam",\n\t\tvalue: function enableWebcam() {\n\t\t\tvar streaming = false;\n\t\t\tvar video = document.querySelector("#video");\n\t\t\tvar canvas = document.querySelector("#canvas");\n\n\t\t\t// Determine the vendor prefix\n\t\t\tnavigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;\n\n\t\t\tvar self = this;\n\t\t\t// Get the video stream from the webcam\n\t\t\tnavigator.getMedia({\n\t\t\t\tvideo: true,\n\t\t\t\taudio: false\n\t\t\t}, function (stream) {\n\t\t\t\t// Handle mozilla stream\n\t\t\t\tif (navigator.mozGetUserMedia) {\n\t\t\t\t\tvideo.mozSrcObject = stream;\n\t\t\t\t\tself.setState({ stream: stream });\n\t\t\t\t} else {\n\t\t\t\t\t// All other streams\n\t\t\t\t\tself.setState({ stream: stream });\n\t\t\t\t\tvar vendorURL = window.URL || window.webkitURL;\n\t\t\t\t\tvideo.src = vendorURL.createObjectURL(stream);\n\t\t\t\t}\n\t\t\t\tvideo.play();\n\t\t\t}, function (err) {\n\t\t\t\tconsole.log("Could not get the video stream from the webcam: " + err);\n\t\t\t});\n\n\t\t\t// Register video play event\n\t\t\tvideo.addEventListener(\'canplay\', function (ev) {\n\t\t\t\tif (!streaming) {\n\t\t\t\t\t//self.setState({height: video.videoHeight / (video.videoWidth / self.state.width)});\n\t\t\t\t\tvideo.setAttribute(\'width\', self.state.width);\n\t\t\t\t\tvideo.setAttribute(\'height\', self.state.height);\n\t\t\t\t\tcanvas.setAttribute(\'width\', self.state.width);\n\t\t\t\t\tcanvas.setAttribute(\'height\', self.state.height);\n\t\t\t\t\tstreaming = true;\n\t\t\t\t}\n\t\t\t}, false);\n\t\t}\n\t\t/**\n   * DisableWebcam\n   * @description: Disable the webcam\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "disableWebcam",\n\t\tvalue: function disableWebcam() {\n\t\t\tthis.state.stream.getTracks()[0].stop();\n\t\t}\n\n\t\t/**\n   * TakePicture\n   * @description: Take a still image from the webcam\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "takePicture",\n\t\tvalue: function takePicture() {\n\t\t\tvar photo = document.querySelector("#photo");\n\t\t\tvar video = document.querySelector("#video");\n\t\t\tvar capture = document.querySelector(\'#capture\');\n\t\t\tvar captureRemove = document.querySelector(\'#capture-remove\');\n\t\t\tvar captureUpload = document.querySelector(\'#capture-upload\');\n\t\t\tvar canvas = document.querySelector(\'#canvas\');\n\t\t\t// Display the photo div\n\t\t\tphoto.style.display = "inline-block";\n\t\t\t// Hide the video div\n\t\t\tvideo.style.display = "none";\n\t\t\tthis.setState({ captureState: 1 });\n\t\t\t// Hide the capture button\n\t\t\tcapture.style.display = "none";\n\t\t\t// Display the options for captured photos\n\t\t\tcaptureRemove.style.display = "inline-block";\n\t\t\tcaptureUpload.style.display = "inline-block";\n\t\t\t// Get still image from the video and write it to the canvas element\n\t\t\tcanvas.getContext(\'2d\').drawImage(video, 0, 0, this.state.width, this.state.height);\n\t\t\t// Play camera sound\n\t\t\tvar sound = document.getElementById("audio");\n\t\t\tsound.play();\n\t\t\t// Get image attached to the canvas\n\t\t\tvar data = canvas.toDataURL(\'image/png\');\n\t\t\t// Set the image to the photo div\n\t\t\tphoto.setAttribute(\'src\', data);\n\t\t\t// Hide the canvas\n\t\t\tcanvas.style.display = "none";\n\t\t}\n\n\t\t/**\n   * UploadImage\n   * @description: Upload the still image taken to the server\n   * @param: {none}\n   * @return: {promise} Upload image to server\n   */\n\n\t}, {\n\t\tkey: "uploadImage",\n\t\tvalue: function uploadImage() {\n\t\t\t// Get image from canvas element\n\t\t\tvar data = document.querySelector("#canvas").toDataURL(\'image/png\');\n\t\t\tdocument.querySelector("#photo").setAttribute(\'src\', data);\n\t\t\tdocument.querySelector("#canvas").style.display = "none";\n\n\t\t\t// Code below from stackoverflow\n\t\t\t// http://stackoverflow.com/a/12300351\n\t\t\tvar byteString = atob(data.split(\',\')[1]);\n\t\t\t// separate out the mime component\n\t\t\tvar mimeString = data.split(\',\')[0].split(\':\')[1].split(\';\')[0];\n\t\t\t// write the bytes of the string to an ArrayBuffer\n\t\t\tvar ab = new ArrayBuffer(byteString.length);\n\t\t\tvar ia = new Uint8Array(ab);\n\t\t\tfor (var i = 0; i < byteString.length; i++) {\n\t\t\t\tia[i] = byteString.charCodeAt(i);\n\t\t\t}\n\t\t\t// write the ArrayBuffer to a blob, and you\'re done\n\t\t\tvar blob = new Blob([ab], { type: mimeString });\n\n\t\t\t// Create Form Data instance and inject the image\n\t\t\tvar fd = new FormData();\n\t\t\tfd.append(\'file\', blob, Date.now() + \'.jpg\');\n\t\t\tconsole.log("UPLOAD");\n\t\t\tconsole.log(this.props);\n\t\t\treturn client.upload(fd, this.props.sidebar.chatFocused.uuid);\n\t\t}\n\n\t\t/**\n   * HandleTakePicture\n   * @description: Handle the visual state of taking a picture\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "handleTakePicture",\n\t\tvalue: function handleTakePicture(e) {\n\t\t\tvar chatCamera = document.querySelector(".chat-camera");\n\t\t\tvar chatTimeline = document.querySelector(".chat-timeline");\n\t\t\tvar captureRemove = document.querySelector("#capture-remove");\n\t\t\tvar captureUpload = document.querySelector("#capture-upload");\n\t\t\tvar photo = document.querySelector("#photo");\n\t\t\t// Hide the camera div\n\t\t\tif (hasClass(chatCamera, "active") && hasClass(chatTimeline, "camera-active")) {\n\t\t\t\tremoveClass(chatCamera, "active");\n\t\t\t\tremoveClass(chatTimeline, "camera-active");\n\t\t\t\t// Disable the webcam\n\t\t\t\tthis.disableWebcam();\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t// Show the camera div\n\t\t\taddClass(chatCamera, "active");\n\t\t\taddClass(chatTimeline, "camera-active");\n\t\t\t// Enable the webcam\n\t\t\tthis.enableWebcam();\n\t\t}\n\n\t\t/**\n   * RegisterCameraEvents\n   * @description: Register the camera button events\n   * @param: {none}\n   * @return: {none}\n   */\n\n\t}, {\n\t\tkey: "registerCameraEvents",\n\t\tvalue: function registerCameraEvents() {\n\t\t\tvar captureRemove = document.querySelector("#capture-remove");\n\t\t\tvar captureUpload = document.querySelector("#capture-upload");\n\t\t\tvar video = document.querySelector("#video");\n\t\t\tvar photo = document.querySelector("#photo");\n\t\t\tvar canvas = document.querySelector("#canvas");\n\t\t\tvar capture = document.querySelector(\'#capture\');\n\n\t\t\tvar self = this;\n\t\t\t// Handle click event for removing captured image\n\t\t\tcaptureRemove.addEventListener(\'click\', function (e) {\n\t\t\t\tself.setState({ captureState: 0 });\n\t\t\t\tcaptureRemove.style.display = "none";\n\t\t\t\tcaptureUpload.style.display = "none";\n\t\t\t\tphoto.style.display = "none";\n\t\t\t\tvideo.style.display = "inline-block";\n\t\t\t\tcanvas.style.display = "none";\n\t\t\t\tcapture.style.display = "inline-block";\n\t\t\t\te.preventDefault();\n\t\t\t}, false);\n\n\t\t\t// Handle click event for uploading captured image\n\t\t\tcaptureUpload.addEventListener(\'click\', function (e) {\n\t\t\t\tself.setState({ captureState: 0 });\n\t\t\t\tcaptureRemove.style.display = "none";\n\t\t\t\tcaptureUpload.style.display = "none";\n\t\t\t\tphoto.style.display = "none";\n\t\t\t\tvideo.style.display = "inline-block";\n\t\t\t\tcanvas.style.display = "none";\n\t\t\t\tcapture.style.display = "inline-block";\n\t\t\t\t// TODO:(mcervco) Figure out a visual way of saying the image upload failed\n\t\t\t\tself.uploadImage().then(function (res) {\n\t\t\t\t\tconsole.log(res.data);\n\t\t\t\t}).catch(function (err) {\n\t\t\t\t\tconsole.log(err.response);\n\t\t\t\t});\n\t\t\t\te.preventDefault();\n\t\t\t}, false);\n\n\t\t\t// Handle click event for taking a picture\n\t\t\tcapture.addEventListener(\'click\', function (e) {\n\t\t\t\tif (self.state.captureState == 0) {\n\t\t\t\t\tself.takePicture();\n\t\t\t\t} else {\n\t\t\t\t\tcaptureRemove.style.display = "none";\n\t\t\t\t\tcaptureUpload.style.display = "none";\n\t\t\t\t\tphoto.style.display = "none";\n\t\t\t\t\tvideo.style.display = "inline-block";\n\t\t\t\t\tcanvas.style.display = "none";\n\t\t\t\t\tself.setState({ captureState: 0 });\n\t\t\t\t}\n\t\t\t\te.preventDefault();\n\t\t\t}, false);\n\t\t}\n\t}, {\n\t\tkey: "render",\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t"div",\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t"div",\n\t\t\t\t\t{ className: "chat-camera" },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t"div",\n\t\t\t\t\t\t{ className: "chat-camera-container" },\n\t\t\t\t\t\t_react2.default.createElement("i", { className: "fa fa-close", id: "capture-remove" }),\n\t\t\t\t\t\t_react2.default.createElement("i", { className: "fa fa-save", id: "capture-upload" }),\n\t\t\t\t\t\t_react2.default.createElement("video", { id: "video" }),\n\t\t\t\t\t\t_react2.default.createElement("canvas", { id: "canvas", style: { display: "none" } }),\n\t\t\t\t\t\t_react2.default.createElement("img", { src: "", id: "photo", alt: "", style: { display: "none" } }),\n\t\t\t\t\t\t_react2.default.createElement("audio", { id: "audio", src: "https://www.soundjay.com/mechanical/camera-shutter-click-08.wav" }),\n\t\t\t\t\t\t_react2.default.createElement("i", { id: "capture", className: "fa fa-circle-o" })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hvbWUuanM/MGE4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhlaWdodDogMTk5LFxuXHRcdFx0d2lkdGg6IDI2NSxcblx0XHRcdHN0cmVhbTogbnVsbCxcblx0XHRcdGNhcHR1cmVTdGF0ZTogMFxuXHRcdH07XG5cblx0XHQvLyBDYW1lcmEgbWV0aG9kc1xuXHRcdHRoaXMuZW5hYmxlV2ViY2FtID0gdGhpcy5lbmFibGVXZWJjYW0uYmluZCh0aGlzKTtcblx0XHR0aGlzLmRpc2FibGVXZWJjYW0gPSB0aGlzLmRpc2FibGVXZWJjYW0uYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZVRha2VQaWN0dXJlID0gdGhpcy5oYW5kbGVUYWtlUGljdHVyZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVnaXN0ZXJDYW1lcmFFdmVudHMgPSB0aGlzLnJlZ2lzdGVyQ2FtZXJhRXZlbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50YWtlUGljdHVyZSA9IHRoaXMudGFrZVBpY3R1cmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwbG9hZEltYWdlID0gdGhpcy51cGxvYWRJbWFnZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEVuYWJsZSBXZWJjYW1cblx0ICogQGRlc2NyaXB0aW9uOiBFbmFibGUgdGhlIHdlYmNhbVxuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7bm9uZX1cblx0ICovXG5cdGVuYWJsZVdlYmNhbSgpe1xuXHRcdGxldCBzdHJlYW1pbmcgPSBmYWxzZTtcblx0XHRsZXQgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvXCIpO1xuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcblxuXHRcdC8vIERldGVybWluZSB0aGUgdmVuZG9yIHByZWZpeFxuXHRcdG5hdmlnYXRvci5nZXRNZWRpYSA9IChcblx0XHRcdG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHxcblx0XHRcdG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHxcblx0XHRcdG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHxcblx0XHRcdG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYVxuXHRcdCk7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0Ly8gR2V0IHRoZSB2aWRlbyBzdHJlYW0gZnJvbSB0aGUgd2ViY2FtXG5cdFx0bmF2aWdhdG9yLmdldE1lZGlhKHtcblx0XHRcdHZpZGVvOiB0cnVlLFxuXHRcdFx0YXVkaW86IGZhbHNlXG5cdFx0fSwgZnVuY3Rpb24oc3RyZWFtKSB7XG5cdFx0XHQvLyBIYW5kbGUgbW96aWxsYSBzdHJlYW1cblx0XHRcdGlmKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcblx0XHRcdFx0dmlkZW8ubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtzdHJlYW06IHN0cmVhbX0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQWxsIG90aGVyIHN0cmVhbXNcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7c3RyZWFtOiBzdHJlYW19KTtcblx0XHRcdFx0dmFyIHZlbmRvclVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcblx0XHRcdFx0dmlkZW8uc3JjID0gdmVuZG9yVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuXHRcdFx0fVxuXHRcdFx0dmlkZW8ucGxheSgpO1xuXHRcdH0sIGZ1bmN0aW9uKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJDb3VsZCBub3QgZ2V0IHRoZSB2aWRlbyBzdHJlYW0gZnJvbSB0aGUgd2ViY2FtOiBcIiArIGVycik7XG5cdFx0fSk7XG5cblx0XHQvLyBSZWdpc3RlciB2aWRlbyBwbGF5IGV2ZW50XG5cdFx0dmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uKGV2KXtcblx0XHRcdGlmKCFzdHJlYW1pbmcpe1xuXHRcdFx0XHQvL3NlbGYuc2V0U3RhdGUoe2hlaWdodDogdmlkZW8udmlkZW9IZWlnaHQgLyAodmlkZW8udmlkZW9XaWR0aCAvIHNlbGYuc3RhdGUud2lkdGgpfSk7XG5cdFx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBzZWxmLnN0YXRlLndpZHRoKTtcblx0XHRcdFx0dmlkZW8uc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzZWxmLnN0YXRlLmhlaWdodCk7XG5cdFx0XHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc2VsZi5zdGF0ZS53aWR0aCk7XG5cdFx0XHRcdGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHNlbGYuc3RhdGUuaGVpZ2h0KTtcblx0XHRcdFx0c3RyZWFtaW5nID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cblx0fVxuXHQvKipcblx0ICogRGlzYWJsZVdlYmNhbVxuXHQgKiBAZGVzY3JpcHRpb246IERpc2FibGUgdGhlIHdlYmNhbVxuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7bm9uZX1cblx0ICovXG5cdGRpc2FibGVXZWJjYW0oKXtcblx0XHR0aGlzLnN0YXRlLnN0cmVhbS5nZXRUcmFja3MoKVswXS5zdG9wKCk7XG5cdH1cblxuXHQvKipcblx0ICogVGFrZVBpY3R1cmVcblx0ICogQGRlc2NyaXB0aW9uOiBUYWtlIGEgc3RpbGwgaW1hZ2UgZnJvbSB0aGUgd2ViY2FtXG5cdCAqIEBwYXJhbToge25vbmV9XG5cdCAqIEByZXR1cm46IHtub25lfVxuXHQgKi9cblx0dGFrZVBpY3R1cmUoKSB7XG5cdFx0dmFyIHBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG90b1wiKTtcblx0XHR2YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvXCIpO1xuXHRcdHZhciBjYXB0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcHR1cmUnKVxuXHRcdHZhciBjYXB0dXJlUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcHR1cmUtcmVtb3ZlJyk7XG5cdFx0dmFyIGNhcHR1cmVVcGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FwdHVyZS11cGxvYWQnKTtcblx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuXHRcdC8vIERpc3BsYXkgdGhlIHBob3RvIGRpdlxuXHRcdHBob3RvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdC8vIEhpZGUgdGhlIHZpZGVvIGRpdlxuXHRcdHZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR0aGlzLnNldFN0YXRlKHtjYXB0dXJlU3RhdGU6IDF9KTtcblx0XHQvLyBIaWRlIHRoZSBjYXB0dXJlIGJ1dHRvblxuXHRcdGNhcHR1cmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdC8vIERpc3BsYXkgdGhlIG9wdGlvbnMgZm9yIGNhcHR1cmVkIHBob3Rvc1xuXHRcdGNhcHR1cmVSZW1vdmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0Y2FwdHVyZVVwbG9hZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHQvLyBHZXQgc3RpbGwgaW1hZ2UgZnJvbSB0aGUgdmlkZW8gYW5kIHdyaXRlIGl0IHRvIHRoZSBjYW52YXMgZWxlbWVudFxuXHRcdGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgdGhpcy5zdGF0ZS53aWR0aCwgdGhpcy5zdGF0ZS5oZWlnaHQpO1xuXHRcdC8vIFBsYXkgY2FtZXJhIHNvdW5kXG5cdFx0dmFyIHNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcblx0XHRzb3VuZC5wbGF5KClcblx0XHQvLyBHZXQgaW1hZ2UgYXR0YWNoZWQgdG8gdGhlIGNhbnZhc1xuXHRcdHZhciBkYXRhID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG5cdFx0Ly8gU2V0IHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gZGl2XG5cdFx0cGhvdG8uc2V0QXR0cmlidXRlKCdzcmMnLCBkYXRhKTtcblx0XHQvLyBIaWRlIHRoZSBjYW52YXNcblx0XHRjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwbG9hZEltYWdlXG5cdCAqIEBkZXNjcmlwdGlvbjogVXBsb2FkIHRoZSBzdGlsbCBpbWFnZSB0YWtlbiB0byB0aGUgc2VydmVyXG5cdCAqIEBwYXJhbToge25vbmV9XG5cdCAqIEByZXR1cm46IHtwcm9taXNlfSBVcGxvYWQgaW1hZ2UgdG8gc2VydmVyXG5cdCAqL1xuXHR1cGxvYWRJbWFnZSgpe1xuXHRcdC8vIEdldCBpbWFnZSBmcm9tIGNhbnZhcyBlbGVtZW50XG5cdFx0dmFyIGRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKS50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvdG9cIikuc2V0QXR0cmlidXRlKCdzcmMnLCBkYXRhKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0XHQvLyBDb2RlIGJlbG93IGZyb20gc3RhY2tvdmVyZmxvd1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEyMzAwMzUxXG5cdFx0dmFyIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGEuc3BsaXQoJywnKVsxXSk7XG5cdFx0Ly8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxuXHRcdHZhciBtaW1lU3RyaW5nID0gZGF0YS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuXHRcdC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyXG5cdFx0dmFyIGFiID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcblx0XHR2YXIgaWEgPSBuZXcgVWludDhBcnJheShhYik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspe1xuXHRcdFx0aWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0fVxuXHRcdC8vIHdyaXRlIHRoZSBBcnJheUJ1ZmZlciB0byBhIGJsb2IsIGFuZCB5b3UncmUgZG9uZVxuXHRcdHZhciBibG9iID0gbmV3IEJsb2IoW2FiXSwgeyB0eXBlOiBtaW1lU3RyaW5nIH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIEZvcm0gRGF0YSBpbnN0YW5jZSBhbmQgaW5qZWN0IHRoZSBpbWFnZVxuXHRcdHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZkLmFwcGVuZCgnZmlsZScsIGJsb2IsIERhdGUubm93KCkgKyAnLmpwZycpO1xuXHRcdGNvbnNvbGUubG9nKFwiVVBMT0FEXCIpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiBjbGllbnQudXBsb2FkKGZkLCB0aGlzLnByb3BzLnNpZGViYXIuY2hhdEZvY3VzZWQudXVpZCk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlVGFrZVBpY3R1cmVcblx0ICogQGRlc2NyaXB0aW9uOiBIYW5kbGUgdGhlIHZpc3VhbCBzdGF0ZSBvZiB0YWtpbmcgYSBwaWN0dXJlXG5cdCAqIEBwYXJhbToge25vbmV9XG5cdCAqIEByZXR1cm46IHtub25lfVxuXHQgKi9cblx0aGFuZGxlVGFrZVBpY3R1cmUoZSl7XG5cdFx0dmFyIGNoYXRDYW1lcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXQtY2FtZXJhXCIpO1xuXHRcdHZhciBjaGF0VGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXQtdGltZWxpbmVcIik7XG5cdFx0dmFyIGNhcHR1cmVSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcHR1cmUtcmVtb3ZlXCIpO1xuXHRcdHZhciBjYXB0dXJlVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXB0dXJlLXVwbG9hZFwiKTtcblx0XHR2YXIgcGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob3RvXCIpO1xuXHRcdC8vIEhpZGUgdGhlIGNhbWVyYSBkaXZcblx0XHRpZihoYXNDbGFzcyhjaGF0Q2FtZXJhLCBcImFjdGl2ZVwiKSAmJiBoYXNDbGFzcyhjaGF0VGltZWxpbmUsIFwiY2FtZXJhLWFjdGl2ZVwiKSl7XG5cdFx0XHRyZW1vdmVDbGFzcyhjaGF0Q2FtZXJhLCBcImFjdGl2ZVwiKTtcblx0XHRcdHJlbW92ZUNsYXNzKGNoYXRUaW1lbGluZSwgXCJjYW1lcmEtYWN0aXZlXCIpO1xuXHRcdFx0Ly8gRGlzYWJsZSB0aGUgd2ViY2FtXG5cdFx0XHR0aGlzLmRpc2FibGVXZWJjYW0oKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gU2hvdyB0aGUgY2FtZXJhIGRpdlxuXHRcdGFkZENsYXNzKGNoYXRDYW1lcmEsIFwiYWN0aXZlXCIpO1xuXHRcdGFkZENsYXNzKGNoYXRUaW1lbGluZSwgXCJjYW1lcmEtYWN0aXZlXCIpO1xuXHRcdC8vIEVuYWJsZSB0aGUgd2ViY2FtXG5cdFx0dGhpcy5lbmFibGVXZWJjYW0oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlckNhbWVyYUV2ZW50c1xuXHQgKiBAZGVzY3JpcHRpb246IFJlZ2lzdGVyIHRoZSBjYW1lcmEgYnV0dG9uIGV2ZW50c1xuXHQgKiBAcGFyYW06IHtub25lfVxuXHQgKiBAcmV0dXJuOiB7bm9uZX1cblx0ICovXG5cdHJlZ2lzdGVyQ2FtZXJhRXZlbnRzKCl7XG5cdFx0dmFyIGNhcHR1cmVSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcHR1cmUtcmVtb3ZlXCIpO1xuXHRcdHZhciBjYXB0dXJlVXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXB0dXJlLXVwbG9hZFwiKTtcblx0XHR2YXIgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvXCIpO1xuXHRcdHZhciBwaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvdG9cIik7XG5cdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuXHRcdHZhciBjYXB0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcHR1cmUnKTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHQvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIHJlbW92aW5nIGNhcHR1cmVkIGltYWdlXG5cdFx0Y2FwdHVyZVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7Y2FwdHVyZVN0YXRlOiAwfSk7XG5cdFx0XHRjYXB0dXJlUmVtb3ZlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdGNhcHR1cmVVcGxvYWQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0cGhvdG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0dmlkZW8uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHRjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0Y2FwdHVyZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LCBmYWxzZSk7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIHVwbG9hZGluZyBjYXB0dXJlZCBpbWFnZVxuXHRcdGNhcHR1cmVVcGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRcdHNlbGYuc2V0U3RhdGUoe2NhcHR1cmVTdGF0ZTogMH0pO1xuXHRcdFx0Y2FwdHVyZVJlbW92ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRjYXB0dXJlVXBsb2FkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHBob3RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0Y2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdGNhcHR1cmUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHQvLyBUT0RPOihtY2VydmNvKSBGaWd1cmUgb3V0IGEgdmlzdWFsIHdheSBvZiBzYXlpbmcgdGhlIGltYWdlIHVwbG9hZCBmYWlsZWRcblx0XHRcdHNlbGYudXBsb2FkSW1hZ2UoKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uKGVycil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LCBmYWxzZSk7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIHRha2luZyBhIHBpY3R1cmVcblx0XHRjYXB0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0XHRpZihzZWxmLnN0YXRlLmNhcHR1cmVTdGF0ZSA9PSAwKXtcblx0XHRcdFx0c2VsZi50YWtlUGljdHVyZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FwdHVyZVJlbW92ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdGNhcHR1cmVVcGxvYWQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRwaG90by5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdHZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0XHRjYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtjYXB0dXJlU3RhdGU6IDB9KTtcblx0XHRcdH1cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LCBmYWxzZSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LWNhbWVyYVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1jYW1lcmEtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9zZVwiIGlkPVwiY2FwdHVyZS1yZW1vdmVcIj48L2k+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zYXZlXCIgaWQ9XCJjYXB0dXJlLXVwbG9hZFwiPjwvaT5cblx0XHRcdFx0XHRcdDx2aWRlbyBpZD1cInZpZGVvXCI+PC92aWRlbz5cblx0XHRcdFx0XHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0+PC9jYW52YXM+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIlwiIGlkPVwicGhvdG9cIiBhbHQ9XCJcIiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0vPlxuXHRcdFx0XHRcdFx0PGF1ZGlvIGlkPVwiYXVkaW9cIiBzcmM9XCJodHRwczovL3d3dy5zb3VuZGpheS5jb20vbWVjaGFuaWNhbC9jYW1lcmEtc2h1dHRlci1jbGljay0wOC53YXZcIj48L2F1ZGlvPlxuXHRcdFx0XHRcdFx0PGkgaWQ9XCJjYXB0dXJlXCIgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlLW9cIj48L2k+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hvbWUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWdCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQURBO0FBY0E7Ozs7OztBQWhRQSIsInNvdXJjZVJvb3QiOiIifQ==')}});