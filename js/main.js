var myHeading = document.querySelector('h1');
	myHeading.textContent = "Hello World！"

var myImage = document.querySelector('img');
myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/2.jpg') {
		myImage.setAttribute('src', 'images/3.jpg');
	} else {
		myImage.setAttribute('src', 'images/2.jpg');
	}
}