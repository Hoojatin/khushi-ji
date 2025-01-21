
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;

var btn1 = document.getElementById("heartTxt2");
btn1.style.opacity = 0;
var btnVal = 0;
var btnVal1 = 0;

document.getElementById("testingCode").style.opacity = 0;

function showImage(){
	//document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function play(){
	document.getElementById("heartTxt").style.opacity = 0;
	document.getElementById("testingCode").style.opacity = 1;
	document.getElementById("typeDiv").style.opacity = 0;

	// if(t == 0){
	// 	myImage.setAttribute("src", "");
	// 	myTxt.innerHTML = "";
	// 	imageIndex = 0;
	// 	clearInterval(showImageInterval);
	// }
	// flag = 1 - flag;
	// document.getElementById("typeDiv").style.opacity = flag;
	// // document.getElementById("imgTxt").style.opacity = 1 - flag;
	// if(t == 0){
	// 	//setTimeout(showImage, 1000);
	// 	setInterval(showImage, 2500);
	// }
	// t++;

	const yesButton = document.getElementById('yesButton');
	const noButton = document.getElementById('noButton');
	const imageDisplay = document.getElementById('imageDisplay');
	const valentineQuestion = document.getElementById('valentineQuestion');
	const responseButtons = document.getElementById('responseButtons');

	let noClickCount = 0;
	let buttonHeight = 48; // Starting height in pixels
	let buttonWidth = 80;
	let fontSize = 20; // Starting font size in pixels
	const imagePaths = [
		"image1.gif",
		"image2.gif",
		"image3.gif",
		"image4.gif",
		"image5.gif",
		"image6.gif",
		"image7.gif"
	];

	noButton.addEventListener('click', function () {
		if (noClickCount < 5) {
			noClickCount++;
			imageDisplay.src = imagePaths[noClickCount];

			// Update text for No button
			noButton.textContent = [
				"No",
				"Are you sure?",
				"Kissi please naa",
				"Don't do this to me :(",
				"You're breaking my heart Khushiii :(",
				"I'm gonna cry Kissi Bachaa ..."
			][noClickCount];

			// Increment font size and padding
			fontSize += 10;

			yesButton.style.fontSize = `${fontSize}px`;
			noButton.style.fontSize = `${fontSize}px`;

			yesButton.style.padding = `${fontSize / 2}px ${fontSize}px`;
			noButton.style.padding = `${fontSize / 2}px ${fontSize}px`;
		}
	});

	yesButton.addEventListener('click', () => {
		imageDisplay.src = 'image7.gif'; // Change to image7.gif
		valentineQuestion.textContent = "Yayyy!! :3"; // Change the question text
		responseButtons.style.display = 'none'; // Hide both buttons
		const heartTxt2 = document.getElementById("heartTxt2");
		heartTxt2.style.display = "block"; // Change display to block
		heartTxt2.style.opacity = 1; // Set opacity to fully visible

		confetti(); // Trigger confetti animation
	});
}

function play2(){
	document.getElementById("heartTxt2").style.opacity = 0;
	document.getElementById("heartTxt2").style.display = "none";

	document.getElementById("testingCode").style.opacity = 0;


	if(t == 0){
		myImage.setAttribute("src", "");
		myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		// setTimeout(showImage, 5000);
		setInterval(showImage, 5000);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}

	if(btnVal1 < 1){
		btnVal1 += 0.025;
		btn1.style.opacity = btnVal1;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 50);

	imgInterval = setInterval(function (){
		if(ok === 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 10);}, 50);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
