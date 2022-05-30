




setTimeout(()=>{
	let over = document.querySelector(".overload");
	let Textdiv = document.querySelector(".text");

	let t = " hello this mohammed badr";
	let y = 0,seconds
	


	function typing(){

		if(y < t.length){
			Textdiv.innerHTML += t.charAt(y);
			y++;
			seconds = parseInt(y + "000");
			setTimeout(typing,50); 
		}else{
			setTimeout(()=>{
				over.style.opacity = 0;
				setTimeout(()=>{
					over.style.display = "none";
				},2000);
			},4000);
		}
	} 

	typing();
	
	
},2000);