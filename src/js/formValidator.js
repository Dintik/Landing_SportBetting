// (start) show form flag
function showFlagValue() {
let inputFlag = document.getElementById("inputFlag");
let inputFlagHide = document.getElementById("inputFlagHide");
let flagVector = document.querySelector("#inputFlag");
let flagLogo = document.querySelector(".flag");

inputFlag.innerHTML = inputFlagHide.value;

inputFlagHide.addEventListener("change", () => {
	let flagCountry = inputFlagHide.options[inputFlagHide.selectedIndex].getAttribute('data');
	flagLogo.src = `img/flag/flag-${flagCountry}.png`;
	inputFlag.innerHTML = inputFlagHide.value;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    	flagVector.classList.toggle("input__flag--clicked");
	}
});
inputFlagHide.addEventListener("click", () => {
	flagVector.classList.toggle("input__flag--clicked");
});
}
showFlagValue();
// (end) show form flag



// (start) validation test phoneInput
let phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("keypress", e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});
// (end) validation test phoneInput

