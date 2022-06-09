function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case 'addressDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'block';
      document.getElementById('profileDiv').style.display = 'none';
      document.getElementById('resultDiv').style.display = 'none';
      break;
    case 'profileDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'block';
      document.getElementById('resultDiv').style.display = 'none';

      break;
    case 'resultDiv':
      element.parentNode.style.display = 'none';
      document.getElementById('personalDiv').style.display = 'none';
      document.getElementById('addressDiv').style.display = 'none';
      document.getElementById('profileDiv').style.display = 'block';

      break;

    default:
      break;
  }
}

//page1
let personalDiv = document.querySelector("#personalDiv");

let addressDiv = document.querySelector("#addressDiv");

let profileDiv = document.querySelector("#profileDiv");

let resultDiv = document.querySelector("#resultDiv");

//next button for personalDiv
let nextBtn = document.querySelector("#personalDiv .registerbtn");
//next button for addressDiv
let nextBtn1 = document.querySelector("#addressBtn");
//next button for personalinfo
let nextBtn2 = document.querySelector("#profileBtn");

// input of page1
let firstName = document.querySelector("#personalDiv #fName");

let lastName = document.querySelector("#personalDiv #lName");
let birthDate = document.querySelector("#personalDiv #bDate");
let nationality = document.querySelector("#personalDiv select ");

//input of 2nd page
let address = document.querySelector("#address-input");
console.log(address)
let houseNumber = document.querySelector("#house-number");
console.log(houseNumber)
let zipCode= document.querySelector("#zip-code");
console.log(zipCode)

//input 3rd page
let userName = document.querySelector("#user-name");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#repeat-password");
let photo = document.querySelector("#photo");



 personalDiv.style.display = "none"
    addressDiv.style.display = "none" 
    profileDiv.style.display = "block" 

//check validatity
function form(){

  if(firstName.checkValidity() && lastName.checkValidity() &&birthDate.checkValidity() && nationality.checkValidity())
  {
    personalDiv.style.display = "none"
    addressDiv.style.display = "block"
  } else if(address.checkValidity() && houseNumber.checkValidity() && zipCode.checkValidity())
  {
        addressDiv.style.display = "none"
    profileDiv.style.display = "block"
  }else if(userName.checkValidity()&& password.checkValidity() && repeatPassword.checkValidity() &&photo.checkValidity() &&(password.value === repeatPassword.value)){
    profileDiv.style.display = "none"
    resultDiv.style.display = "block"
  }
 
}
nextBtn.addEventListener("click",form );
nextBtn1.addEventListener("click",form );
nextBtn2.addEventListener("click",form );

