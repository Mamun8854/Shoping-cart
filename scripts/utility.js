// phone & case element increment and decrement function

function getInputValueById(isIncrase, idName) {
  const numberField = document.getElementById(idName);
  const numberString = numberField.value;
  const number = parseInt(numberString);
  let updateNumber;
  if (isIncrase === true) {
    updateNumber = number + 1;
  } else {
    updateNumber = number - 1;
  }
  numberField.value = updateNumber;
  return updateNumber;
}
// phn price function here
function phonePriceTotal(updateNumber) {
  const totalPrice = updateNumber * 1219;
  const phonePriceElement = document.getElementById("phone-total-price");

  phonePriceElement.innerText = totalPrice;
}

// case Price Function Here
function casePriceTotalById(updateNumber) {
  const casePriceTotal = document.getElementById("case-price-total");
  const casePriceTotalString = casePriceTotal.innerText;
  const casePrice = parseFloat(casePriceTotalString);

  const currentCasePriceTotal = updateNumber * 59;

  casePriceTotal.innerText = currentCasePriceTotal;
}

// SubTotal Function here

function getTotalAmountById(elementId) {
  const totalPriceAmount = document.getElementById(elementId);
  const totalPriceString = totalPriceAmount.innerText;

  const totalPrice = parseFloat(totalPriceString);
  return totalPrice;
}

// subTotal Calculate here

function getTextValueById(elementId, value) {
  const subTotal = document.getElementById(elementId);
  subTotal.innerText = value;
}

function subTotalCalculate() {
  const currentPhoneTotal = getTotalAmountById("phone-total-price");
  const currentCaseTotal = getTotalAmountById("case-price-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  getTextValueById("sub-total", currentSubTotal);

  // calculate tax
  const totalTaxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const totalTaxAmount = parseFloat(totalTaxAmountString);
  getTextValueById("tax-amount", totalTaxAmount);

  // final total amount

  const finalAmountTotal = currentSubTotal + totalTaxAmount;
  getTextValueById("final-total", finalAmountTotal);
}

// calculate tax
