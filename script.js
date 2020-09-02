

const btn  = document.querySelector('#button-mobile');
let menuOpen = false ;


btn.addEventListener("click", function(e){

    e.stopPropagation()
    e.preventDefault()

    if (!menuOpen) {
    document.body.classList.add('has-menu');
	btn.src = "images/icon-close.svg";
	menuOpen = true;
    } else {
    document.body.classList.remove('has-menu');
    btn.src = "images/icon-hamburger.svg";
    menuOpen = false
    }

});


document.body.addEventListener('click', function () {

	if (menuOpen) {
	document.body.classList.remove('has-menu');
	btn.src = "images/icon-hamburger.svg";
	
	}
	
});

