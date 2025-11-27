/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

var seconds = document.getElementById("seconds");
		var minutes = document.getElementById("minutes");
		var hours = document.getElementById("hours");

		// now calculate the initian deg form current time

		var currentTime = new Date();

		
		var c_seconds = currentTime.getSeconds();
		var c_minutes = currentTime.getMinutes();
		var c_hours = currentTime.getHours();
		


		var s_deg = c_seconds * 6;
		var m_deg = (c_minutes + (c_seconds/60)) * 6 ;
		var h_deg = (c_hours + ((c_minutes + (c_seconds/60)) /60)) * 30;

		function timeUpdate(){

			s_deg = s_deg + 6;
			m_deg = m_deg + (6/60);
			h_deg = h_deg + (30/3600);
			seconds.style.transform = 'rotate('+s_deg+'deg)';
			minutes.style.transform = 'rotate('+m_deg+'deg)';
			hours.style.transform = 'rotate('+h_deg+'deg)';



		}
		setInterval(timeUpdate,1000);