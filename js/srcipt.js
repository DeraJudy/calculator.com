const bills = document.querySelector('.billing');
const amoPeople = document.querySelector('.people');
const customTip = document.querySelector('.custom');
const tipPerPes =document.querySelector('.tipamount');
const TotalPerPes = document.querySelector('.total');
const tips = document.querySelectorAll('.tip');
const resBtn = document.querySelector('.res');
const error = document.querySelector('.error');


bills.addEventListener("input", billsInp);
amoPeople.addEventListener("input", amoPeopleInp);
tips.forEach(function(val) {
	val.addEventListener('click', Clicking);
});
customTip.addEventListener("input", tipInp);
resBtn.addEventListener('click', reset);

// bills.value = "0.0";
// amoPeople.value = "1";
tipPerPes.innerHTML = '$' + (0.0).toFixed(2);
TotalPerPes.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let amoPeopleValue = 1;
let tipValue = 0.15;

function billsInp() {
	billValue = parseFloat(bills.value);
	calculateTip();
}

function amoPeopleInp() {
	amoPeopleValue = parseFloat(amoPeople.value);
	calculateTip();

	// if (amoPeopleValue < 1) {
	// 	error.style.display = 'flex';
	// 	amoPeopleInp.style.border = 'thick solid red';
	// }else{
	// 	error.style.display = 'none';
	// 	amoPeopleInp.style.border = 'none';
	// 	calculateTip();
	// }
}

function tipInp(){
	tipValue = parseFloat(customTip.value) / 100;

	tips.forEach(function(val){
		val.classList.remove('active-tip');
	});
	calculateTip();
}

function Clicking(event){
	tips.forEach(function(val){
		val.classList.remove('active-tip');
		if (event.target.innerHTML == val.innerHTML) {
			val.classList.add('active-tip');
			tipValue = parseFloat(val.innerHTML) / 100;
		}
	});
	calculateTip();
}

function calculateTip(){
	if(amoPeopleValue >=1){ 
		let tipAmount = (billValue * tipValue) / amoPeopleValue;
		let total = billValue * (tipValue + 1) / amoPeopleValue;
		tipPerPes.innerHTML = '$' + tipAmount.toFixed(2);
		TotalPerPes.innerHTML = "$" + total.toFixed(2);
	}
}

function reset(){
	bills.value = "";
	billsInp();
	amoPeople.value = "1";
	amoPeopleInp();
	tipPerPes.innerHTML = '$' + (0.0).toFixed(2);
	TotalPerPes.innerHTML = "$" + (0.0).toFixed(2);
	customTip.value = "";
}