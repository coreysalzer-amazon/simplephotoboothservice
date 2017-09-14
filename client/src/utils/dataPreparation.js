export function prepareImageUploadData(imageData) {
	// Code below from stackoverflow
	// http://stackoverflow.com/a/12300351
	var byteString = atob(imageData.split(',')[1]);
	// separate out the mime component
	var mimeString = imageData.split(',')[0].split(':')[1].split(';')[0]
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
	fd.append('file', blob, Date.now() + '.png');
	
	return fd;
}