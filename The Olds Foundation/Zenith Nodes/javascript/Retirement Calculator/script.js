var ageSubmit = document.querySelector('.ageSubmit');
	var ageField = document.querySelector('.ageField');
	var response = document.querySelector('.response');

	var d = new Date();
	var t = d.getTime().toString();
	var year = d.getFullYear();
	var remain;
	var retyear;

//Traditionally, the full benefit age was 65, and early retirement benefits were first available at age 62, with a permanent reduction to 80 percent of the full benefit amount. Currently, the full benefit age is 66 for people born in 1943-1954, and it will gradually rise to 67 for those born in 1960 or later.






	
	function checkAge() {
		var userAge = Number(ageField.value);
		
		if(userAge === 67) {
			response.textContent = 'You can retire this year.';
			response.style.backgroundColor = 'green';

		}else if ( userAge > 67 ) {
			response.textContent = 'You could have retired already.';
			response.style.backgroundColor = 'green';
		} else if ( userAge < 67 ) {
			remain = 67 - userAge;
			retyear = year + remain;
			response.textContent = 'You have ' + remain + ' years left before you are 67 and can collect social security. You will retire in ' + retyear +'.';
			response.style.backgroundColor = '#ccc';
			
		}
		

	}

ageSubmit.addEventListener('click', checkAge);

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar