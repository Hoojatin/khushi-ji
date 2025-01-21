
let i = 0;
let text1 = "Hey! Miss Kissi Rao";
let text2 = "Its your birthday today my little champ ❤️"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;

		if (ok === 2) {
			setTimeout(function() {
				document.getElementById("heartTxt").style.opacity = 1; // Make button visible after 200ms delay
			}, 500); // 200ms delay
		}
	}
}

document.getElementById('txt1').style.fontSize = '35px'; // Change text size for txt1
document.getElementById('txt2').style.fontSize = '35px'; // Change text size for txt2

var typeInterval;

   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
