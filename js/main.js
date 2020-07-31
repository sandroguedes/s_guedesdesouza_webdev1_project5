	console.log("fired");

	let button = document.querySelector(".hamburger")
		burgerCon = document.querySelector(".hiddenmobnav")
		mainContent = document.querySelector(".contentbox");

	function hamburgerMenu()
		{
		burgerCon.classList.toggle("hiddenmobnavtoggled");
		mainContent.classList.toggle("contentboxtoggled");
		button.classList.toggle("expanded");
		}

	button.addEventListener("click", hamburgerMenu);