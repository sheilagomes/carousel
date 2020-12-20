let previous = document.getElementsByClassName("previous");
let next = document.getElementsByClassName("next");
let currentPosition = 0;

next[0].addEventListener("click", function(){
	let cardNext = document.getElementsByClassName("card");
	document.getElementsByClassName("previous")[0].style.opacity = "1";
	if (currentPosition > -880) {
		currentPosition -= 220;
	}
	for (let i = 0; i < cardNext.length-1; i++) {
		if (i == cardNext.length-2) {
				document.getElementsByClassName("next")[0].style.opacity = ".3";
			} else {
				document.getElementsByClassName("next")[0].style.opacity = "1";
			}
		if (cardNext[i].classList.contains("current")) {
			cardNext[i].classList.remove("current");
			cardNext[i+1].classList.add("current");
			document.querySelector(".gallery").style.transform = `translateX(${currentPosition}px)`;
			break;
		}
	}
});

previous[0].addEventListener("click", function(){
	let cardPrev = document.getElementsByClassName("card");
	document.getElementsByClassName("next")[0].style.opacity = "1";
	if (currentPosition < 0) {
		currentPosition += 220;
	}
	for (let j = cardPrev.length-1; j > 0; j--) {
		if (j == 1) {
				document.getElementsByClassName("previous")[0].style.opacity = ".3";
			} else {
				document.getElementsByClassName("previous")[0].style.opacity = "1";
			}
		if (cardPrev[j].classList.contains("current")) {
			cardPrev[j].classList.remove("current");
			cardPrev[j-1].classList.add("current");
			document.getElementsByClassName("gallery")[0].style.transform = `translateX(${currentPosition}px)`;
			break;
		}
	}
});