// TIP CALCULATOR 
    resultPlaceHolder = document.getElementById("answer");
    resultPlaceHolder.style.display = "none";  //Hide the tip amount on load 

function tipCalculator(){
    const billAmount = parseFloat(document.getElementById("total-bill-amount").value);
    const serviceQuality = parseFloat(document.getElementById("service-quality").value);
    const numOfPeople = parseInt(document.getElementById("number-of-people").value);

     // validate input 
     if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }

    // Check if the number of people value is empty or less than or equal to 1
    if (isNaN(numOfPeople) || numOfPeople < 1){
        alert("Please Check Number of People");
        return;
    }

   
// Calculation of Tip
    var totalTip = (billAmount*serviceQuality);
    totalTip = Math.round(totalTip*100) / 100;                    // round the value
    const totalBill = billAmount + totalTip;
    const tipPerPerson = totalTip/numOfPeople;
    document.getElementById("actual-bill").innerHTML = "&#163;" + billAmount;
    document.getElementById("total-bill").innerHTML = "&#163;" + totalBill;
    document.getElementById("tip-per-person").innerHTML = "&#163;" + tipPerPerson;
    document.getElementById("total-tip").innerHTML = "&#163;" + totalTip; // display the tip amount
    document.getElementById("answer").style.display = "block"; // display the answer place
}

// click to call the function
document.getElementById("calculate").onclick = function() {
    tipCalculator();
};

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar