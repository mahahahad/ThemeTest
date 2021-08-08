//Theme Changing through Event Listeners

//Declaring public body 
			const body = document.querySelector("body");

//Samurai Theme
			const sam = document.querySelector(".samurai");
			sam.addEventListener('mouseover', _ => {
				
				body.style.setProperty("--bgColor", "#2B201E");
				body.style.setProperty("--txtColor", "#F39845");
				body.style.setProperty("--txtHover", "#E7CCA1");
				body.style.setProperty("--accent", "#E64F30");
				})
//Aurora Theme
			const aurora = document.querySelector(".aurora");
			aurora.addEventListener('mouseover', _=>{
				body.style.setProperty("--bgColor", "#D08770");
				body.style.setProperty("--txtColor", "#EBCB8B");
				body.style.setProperty("--txtHover", "#A3BE8C");
				body.style.setProperty("--accent", "#A3BE8C");
				})
//Nord Theme
			const nord = document.querySelector(".nord");
			nord.addEventListener('mouseover', _=>{
				body.style.setProperty("--bgColor", "#2E3440");
				body.style.setProperty("--txtColor", "#ECEFF4");
				body.style.setProperty("--txtHover", "#81A1C1");
				body.style.setProperty("--accent", "#434C5E");
				})

//Theme Changing through the button and a normal function

			function themeChange(){
				
				body.style.setProperty("--bgColor", "#F7F6F3");
				body.style.setProperty("--txtColor", "#262730");
				body.style.setProperty("--txtHover", "#D33F49");
				body.style.setProperty("--accent", "#D33F49");	
			}
//Default Theme
			const def = document.querySelector(".logoMain");
			def.addEventListener('click', _=> {
				body.style.setProperty("--bgColor", "#040710");
				body.style.setProperty("--txtColor", "#F7FFF7");
				body.style.setProperty("--txtHover", "#3E95A3");
				body.style.setProperty("--accent", " #B00B69");	
				})
			