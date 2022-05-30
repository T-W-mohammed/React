setTimeout(()=>{
	
	let Parent = document.querySelector(".homeLink");
	let ulmenu = document.querySelector("nav .right");
	let navBtn = document.querySelector(".navbtn");
	// Create links According To The Number OF Sections

	let sections = Array.from(Parent.children);

	let secNumber = sections.length;

	let link = sections[0].getAttribute("class");

	const links =document.querySelector("nav .right ul");
	links.innerHTML = "";

	for (let i = 2 ;i < secNumber - 4 ; i++){
		
		let li = document.createElement("li");

		let a = document.createElement("a");

		a.innerHTML = sections[i].getAttribute("class");

		a.setAttribute("href","#" +sections[i].getAttribute("class"));

		sections[i].setAttribute("id", sections[i].getAttribute("class"));

		li.appendChild(a);

		links.appendChild(li);

			
	}
	const linksa =document.querySelectorAll("nav .right ul a");
	linksa.forEach(a =>{
		a.onclick=()=>{

			ulmenu.classList.remove("active");
			navBtn.classList.remove("active");
		}

	});
	navBtn.onclick = ()=>{
		console.log("click")
		navBtn.classList.toggle("active");
		if(navBtn.classList.contains("active")){
			
			ulmenu.classList.add("active");
		}else{
		ulmenu.classList.remove("active");
		}
	
		}


	window.onresize = ()=>{
		let W_wdth = window.innerWidth;
		if(W_wdth > 768){
			ulmenu.classList.remove("active");
			navBtn.classList.remove("active");
		}
		}
	let btnSearch =document.querySelector("nav .right button");
	btnSearch.onclick = function(e){
		e.preventDefault();

	}
	 
	

},1000);
