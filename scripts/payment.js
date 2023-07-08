const cardNumberInput = document.getElementById("card_num");
let totalAmount = localStorage.getItem("Totalamount") || 0; 

console.log(totalAmount)
let total = document.getElementById("total");
total.textContent = `Total : ${parseFloat(totalAmount.replace(/[^\d.-]/g, "")).toLocaleString("en-US", {
  style: "currency",
  currency: "INR"
})} `;
cardNumberInput.addEventListener("input", function (e) {
  const input = e.target.value.replace(/\D/g, " ").substring(0, 16);
  const cardNumber = input.replace(/(\d{16})(?=\d)/g, " ");
  e.target.value = cardNumber.trim();
});

let cardForm = document.getElementById("card-form");
let personalForm = document.getElementById("personal-form");
let buyButton = document.getElementById("buy");
buyButton.addEventListener("click", function () {
  let cardNum = cardForm.c_num.value;
  let cardExpMonth = cardForm.expiry_month.value;
  let cardExpYear = cardForm.expiry_year.value;
  let cardCVV = cardForm.cvv.value;

  let fName = personalForm.f_name.value;
  let lName = personalForm.l_name.value;
  let city = personalForm.city.value;
  let zip = personalForm.zip.value;
  let email = personalForm.email.value;
  let phone = personalForm.phone.value;

  if (
    cardNum == "" ||
    cardExpMonth == "" ||
    cardExpYear == "" ||
    cardCVV == "" ||
    fName == "" ||
    lName == "" ||
    city == "" ||
    zip == "" ||
    email == "" ||
    phone == ""
  ) {
    alert("All fields required");
  }
  else if (cardNum.length < 16) {
    alert("Invalid Card Number")
  }
  else {
    window.location.href = "thank-you.html"
  }
  console.log(cardExpMonth);
});
