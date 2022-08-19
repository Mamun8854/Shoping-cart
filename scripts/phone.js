document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const updatePhoneNumber = getInputValueById(true, "phone-input-field");
    phonePriceTotal(updatePhoneNumber);
    subTotalCalculate();
  });
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const updatePhoneNumber = getInputValueById(false, "phone-input-field");
    phonePriceTotal(updatePhoneNumber);
    subTotalCalculate();
  });
