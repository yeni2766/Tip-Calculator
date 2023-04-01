//selecting all of the elements that will be used

const billInput = document.querySelector('#bill-input');
const customTip = document.querySelector('#customtip');
const noofPeople = document.querySelector('#people-input');
const tipamount = document.querySelector('#tip-amount-value');
const totalbill = document.querySelector('#total-bill-value');
const btnreset = document.querySelector('#reset-btn');
const btntips = document.querySelectorAll('.tip-btn')
//using forEach i should be able to call a function in the array of buttons i have and within this, i done another foreach loop it can listen to each click and change the colour

btntips.forEach((btn) =>{
    btn.addEventListener('click',(e)=>{
        btntips.forEach((tipbtn)=>{
            tipbtn.removeAttribute('id')
        });
        event.target.setAttribute("id", "active");
    })
})

//this is to select every button










//making the event for the reset button

btnreset.addEventListener("click",(e)=>{
billInput.value = '0';
customTip.value = "";
noofPeople.value = '1';
totalbill.innerHTML = "$0";
tipamount.innerHTML = "$0"; 
});