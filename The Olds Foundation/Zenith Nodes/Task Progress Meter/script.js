/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

// JS updates <progress> element and .prog pie radius
var checkbox = document.getElementsByName('progress-tasks'),
	checkboxLen = checkbox.length,
	checkboxChecked = [],
	i,
	meter = document.getElementsByName('progress-tasks-percentage')[0],
	meterLabel = document.querySelector('.progress-tasks-completed'),
	meterCurrVal,
	progRadius = document.querySelector('.prog'),
	progRadiusPie,
	deg;

function updateProgressVal () {
  meterCurrVal = Math.floor((checkboxChecked.length / checkboxLen) * 100);	
  meter.setAttribute('value', meterCurrVal);
  meterLabel.getElementsByTagName('span')[0].innerHTML = meterCurrVal;

  progRadius.innerHTML = '<div class="percent"></div><div id="slice"' + (meterCurrVal > 50 ? ' class="gt50"' : '') + '><div class="pie"></div>' + (meterCurrVal > 50 ? '<div class="pie fill"></div>' : '') + '</div>';

  deg = (360 / 100) * meterCurrVal;
  progRadiusPie = document.querySelector('#slice .pie');
  progRadiusPie.style.mozTransform = 'rotate(' + deg + 'deg)';
  progRadiusPie.style.webkitTransform = 'rotate(' + deg + 'deg)';
  progRadiusPie.style.oTransform = 'rotate(' + deg + 'deg)';
  progRadiusPie.style.msTransform = 'rotate(' + deg + 'deg)';
  progRadiusPie.style.transform = 'rotate(' + deg + 'deg)';
}

for (i = 0; i < checkboxLen; i++) {
  if (checkbox[i].checked) {
     checkboxChecked.push(checkbox[i]);
  }

  checkbox[i].onchange = function () {
	(this.checked) ? checkboxChecked.push(this) : checkboxChecked.splice(checkboxChecked.indexOf(this), 1);	
	updateProgressVal();  
  }
}

updateProgressVal();