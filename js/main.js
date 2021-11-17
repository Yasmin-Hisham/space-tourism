// Toggle Menu
let toggleBtn = document.querySelector("nav .toggle-menu");
let tLinks = document.querySelector("nav .links");

toggleBtn.onclick = function () {

	this.style.display = 'none';
	
    // Show Links
    tLinks.style.display = 'block';
};

let closeBtn = document.querySelector("nav .links .close-btn");

closeBtn.onclick = function () {

	tLinks.style.display = 'none';
	
    // Show Button
    toggleBtn.style.display = 'block';
};

// Switch Planets
let desLinks = document.querySelectorAll(".destination .planet-name li");
// Loop On All List Items
desLinks.forEach(li => {
	// Click On Every List Items
	li.addEventListener("click", (e) => {

		// Remove Active Class From All Children & Hide Planet
		e.target.parentElement.querySelectorAll(".active").forEach(element => {
			element.classList.remove("active");

		});
		
		document.querySelectorAll(".destination .planet-img, .destination .planet-info").forEach(ele => {
			ele.classList.remove("show");
		});
		
		// Add Active Class On Self & Show Planet
		e.target.classList.add("active");
		document.querySelector(e.target.dataset.class).classList.add("show");
		document.querySelector(e.target.dataset.class).nextElementSibling.classList.add("show");

	});
});

// Switch Members
let crewLinks = document.querySelectorAll(".crew .bullets li");
// Loop On All List Items
crewLinks.forEach(li => {
	// Click On Every List Items
	li.addEventListener("click", (e) => {

		// Remove Active Class From All Children & Hide Planet
		e.target.parentElement.querySelectorAll(".active").forEach(element => {
			element.classList.remove("active");

		});
		
		document.querySelectorAll(".crew .member-info, .crew .member-img").forEach(ele => {
			ele.classList.remove("show");
		});
		
		// Add Active Class On Self & Show Planet
		e.target.classList.add("active");
		document.querySelector(e.target.dataset.class).classList.add("show");
		document.querySelector(e.target.dataset.class).nextElementSibling.classList.add("show");

	});
});

// Switch Technologys
let techLinks = document.querySelectorAll(".technology .numbers li");
// Loop On All List Items
techLinks.forEach(li => {
	// Click On Every List Items
	li.addEventListener("click", (e) => {

		// Remove Active Class From All Children & Hide Planet
		e.target.parentElement.querySelectorAll(".active").forEach(element => {
			element.classList.remove("active");

		});
		
		document.querySelectorAll(".technology .tech-info, .technology .tech-img").forEach(ele => {
			ele.classList.remove("show");
		});
		
		// Add Active Class On Self & Show Planet
		e.target.classList.add("active");
		document.querySelector(e.target.dataset.class).classList.add("show");
		document.querySelector(e.target.dataset.class).nextElementSibling.classList.add("show");

	});
});
