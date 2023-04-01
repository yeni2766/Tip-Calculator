//selecting all of the elements that will be used

const billInput = document.querySelector('#bill-input');
const customTip = document.querySelector('#customtip');
const noofPeople = document.querySelector('#people-input');
const tipamount = document.querySelector('#tip-amount-value');
const totalbill = document.querySelector('#total-bill-value');
const btnreset = document.querySelector('#reset-btn');

//making the event for the reset button

btnreset.addEventListener("click",(e)=>{
billInput.value = '0';
customTip.value = "";
noofPeople.value = '1';
totalbill.innerHTML = "$0";
tipamount.innerHTML = "$0"; 
});