/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

var goku_images = [
	"https://github.com/AshrafMorningstar",
	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar"
];

var vegeta_images = [
	"https://github.com/AshrafMorningstar",
	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar",

	"https://github.com/AshrafMorningstar"
];

let slider = document.getElementById("slider");
console.log("slider ", slider)
	slider.oninput = () => {
		let vegetaImageElement = document.getElementById("over-9000-img");
		let gokuImageElement = document.getElementById("goku-img");
		
		const step = slider.valueAsNumber;
		console.log(step)
		vegetaImageElement.src = vegeta_images[step];
		gokuImageElement.src = goku_images[step];
		
		let ki = document.getElementById("saiyan");
		if (step === 10) {
			ki.style.visibility = "visible"
		} else {
			ki.style.visibility = "hidden"
		}
	};