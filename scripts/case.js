document.getElementById("btn-case-plus").addEventListener("click", function () {
  const updateNumber = getInputValueById(true, "case-input-field");
  casePriceTotalById(updateNumber);
  subTotalCalculate();
});
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const updateNumber = getInputValueById(false, "case-input-field");
    casePriceTotalById(updateNumber);
    subTotalCalculate();
  });
