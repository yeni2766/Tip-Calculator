//selecting all of the elements that will be used

const billInput = document.querySelector('#bill-input');
const customTip = document.querySelector('#customtip');
const noofPeople = document.querySelector('#people-input');
const tipamount = document.querySelector('#tip-amount-value');
const totalbill = document.querySelector('#total-bill-value');
const btnreset = document.querySelector('#reset-btn');
const btntips = document.querySelectorAll('.tip-btn')


//making the event for the reset button

btnreset.addEventListener("click",(e)=>{
    billInput.value = '0';
    customTip.value = "";
    noofPeople.value = '1';
    totalbill.innerHTML = "$0";
    tipamount.innerHTML = "$0"; 


    btntips.forEach((tipbtn) =>{
       tipbtn.removeAttribute('id');

    });
    btntips[2].setAttribute("id", "active");//so here every time it resets it goes back to 15%
});









//using forEach i should be able to call a function in the array of buttons i have and within this, i done another foreach loop it can listen to each click and change the colour

btntips.forEach((btn) =>{
    btn.addEventListener('click',(e)=>{
        btntips.forEach((tipbtn)=>{
            tipbtn.removeAttribute('id')
        });
        event.target.setAttribute("id", "active");
    })
})


//now its time to do the calculate the tip value
let tipPercentage = 0;
function calculateTip() {
    const billamount = parseFloat(billInput.value);
    const peopleNo = parseFloat(noofPeople.value);

    if (customTip.value) {
        tipPercentage = parseInt(customTip.value);
    } else {
        const activeTipBtn = document.querySelector('.tip-btn');
        tipPercentage = parseInt(activeTipBtn.dataset.tip.replace(/\D/g, ''));
    }

    const tipAmount = parseFloat((tipPercentage/100) * billamount / peopleNo);
    const totalbillAmount = parseFloat(billamount / peopleNo) + tipAmount;

    tipamount.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalbill.innerHTML = `$${totalbillAmount.toFixed(2)}`;
}

//here we need event listeners to so always monitor every number to press so it can calculate straight away

billInput.addEventListener('input',(event) =>{
calculateTip();
})








