window.onload = ()=>{
	let section = document.querySelector(".Statis");
	let statistices = 
	document.querySelectorAll(".Statis .content .stats .num");
	let start = false; 
	function setNumber(element){
		let limited = element.parentNode.dataset.num;
		let counter = setInterval(()=>{
			element.textContent++;
			if(element.textContent == limited){
				clearInterval(counter);
			}

		}, 2000 / limited);
	}
	
	window.onscroll = ()=>{
	
		
		if(window.scrollY >= (section.offsetTop - 600) ){
			if(!start){
			statistices.forEach((s) =>{
						s.innerHTML = 0;
						setNumber(s);
					});
			
					
			}
			start = true;

		}
	} 
	}	
