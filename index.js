const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		// Toggle tha nav-active properties to the nav-links
		// nav-active transform
		nav.classList.toggle("nav-active");

		// nav-links animation
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease-out forwards ${index / 7 + 0.8}s `;
			}
		});

		burger.classList.toggle("toggle");
	});
};

navSlide();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-60px";
	}
	prevScrollpos = currentScrollPos;
};

//  var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
// //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
// //4d657373616765

// document.getElementById("demo1").innerHTML = encrypted;
// document.getElementById("demo2").innerHTML = decrypted;
// document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
