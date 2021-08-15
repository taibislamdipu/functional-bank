

document.getElementById("deposit-button").addEventListener("click", function() {
    
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;

    // get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;

    depositTotal.innerText = depositAmount;

    // clear deposit input fields
    depositInput.value = "";
})