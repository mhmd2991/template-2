// hamburger Menu
let menuButton = document.getElementById("menu");
let menu = document.querySelector(".nav-bar");

menuButton.addEventListener("click", function (e) {
    menu.classList.toggle("active");
    menuButton.classList.toggle("fa-times");
});

//disable menu when click outside
document.addEventListener("click", function (event) {
    if (event.target !== menuButton && event.target !== menu) {
        if (menu.classList.contains("active")) {
            menu.classList.toggle("active");
            menuButton.classList.toggle("fa-times");
        }
    }
});

//Image Slider
let imgsArray = ["img-1.png", "img-2.jpg", "img-3.jpg"];
let buttons = document.querySelectorAll(".btn");
let bgSlider = document.querySelector(".header");
let counter = 0;

bgSlider.style.backgroundImage = 'url("img/' + imgsArray[counter] + '")';

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (button.classList.contains('btn-left')) {
            counter--
            if (counter < 0) {
                counter = imgsArray.length - 1
            }
            bgSlider.style.backgroundImage = 'url("img/' + imgsArray[counter] + '")';
        }
        if (button.classList.contains('btn-right')) {
            counter++
            if (counter > imgsArray.length - 1) {
                counter = 0
            }
            bgSlider.style.backgroundImage = 'url("img/' + imgsArray[counter] + '")';

        }
    });
});



let testimonialContainer = document.querySelector(".testimonials-box");

//Clear the content inside the testimonial-box div
function clearResults() {
    testimonialContainer.innerHTML = '';
}


//create array object that contain all the testimonials
let testimonialsArray = [{
        quote: "Aenean iaculis, mauris sed aliquet semper, nulla nisl mattis elit, a volutpat nibh leo id enim. Aenean urna est, tincidunt egestas semper vitae, facilisis eu tellus.",
        writer: "Ashley Cady",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a lacus facilisis, placerat magna sit amet",
        writer: "Mohamad Salimi",
    },
    {
        quote: "Phasellus ullamcorper odio sit amet felis congue, id porta sapien tincidunt. Ut id sem malesuada, dapibus.",
        writer: "Ahmad Issa",
    },
];

//Function to Randomsize Testimonials
function randomizeTest() {
    // Get Random Number
    theBgInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * testimonialsArray.length);
        //Change quote and writer
        clearResults();
        testimonialContainer.innerHTML += `
            <p class="quote">${testimonialsArray[randomNumber].quote}</p>
            <p class="writer">${testimonialsArray[randomNumber].writer}</p>
            `;
    }, 3000)
}
randomizeTest();


let tabs = document.querySelectorAll(".project-nav li");
let projectSection = document.querySelectorAll(".project-section");

tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
        tabs.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        projectSection.forEach((section) => {
            section.classList.remove("active");
        });
        document.querySelector('.' + e.currentTarget.dataset.project).classList.add("active");
    });
});

//Form Validation
let form = document.getElementById('form');
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	let nameValue = userName.value.trim();
	let emailValue = email.value.trim();
	let phoneValue = phone.value.trim();
	let messageValue = message.value.trim();
	
	if(nameValue === '') {
		setErrorFor(userName, 'name cannot be blank');
	} else {
		setSuccessFor(userName);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
	} else {
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Scroll To Top Button
let upButton = document.querySelector(".up");

window.onscroll = function (){
    this.scrollY >= 1000 ? upButton.classList.add("show") : upButton.classList.remove("show");
};

upButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});