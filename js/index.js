// input of page1
let firstName = document.querySelector("#personalDiv #fName");

let lastName = document.querySelector("#personalDiv #lName");
let birthDate = document.querySelector("#personalDiv #bDate");
let nationality = document.querySelector("#personalDiv select ");

//input of 2nd page
let address = document.querySelector("#address-input");

let houseNumber = document.querySelector("#house-number");

let zipCode = document.querySelector("#zip-code");

//input 3rd page
let userName = document.querySelector("#user-name");
let password = document.querySelector("#password");
let repeatPassword = document.querySelector("#repeat-password");
let photo = document.querySelector("#photo");

//input for 4th page
let name = document.querySelector("#nameLabel");
let birthDatelabel = document.querySelector("#birthDateLabel");
let nationalitylabel = document.querySelector("#nationalityLabel");
let addresslabel = document.querySelector("#addressLabel");
let usernameLabel = document.querySelector("#usernameLabel");
let passwordLabel = document.querySelector("#passwordLabel");
let photoLabel = document.querySelector("#photoLabel");

//previous button
function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case "addressDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "block";
      document.getElementById("profileDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";
      break;
    case "profileDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "block";
      document.getElementById("resultDiv").style.display = "none";

      break;
    case "resultDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "block";

      break;

    default:
      break;
  }
}

//next button
function nextDiv(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case "personalDiv":
      if (
        firstName.checkValidity() &&
        lastName.checkValidity() &&
        birthDate.checkValidity() &&
        nationality.checkValidity()
      ) {
        element.parentNode.style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("addressDiv").style.display = "block";
        document.getElementById("resultDiv").style.display = "none";
        name.innerHTML = firstName.value + lastName.value;
        birthDatelabel.innerHTML = birthDate.value;
        nationalitylabel.innerHTML = nationality.value;
      }

      break;
    case "addressDiv":
      if (
        address.checkValidity() &&
        houseNumber.checkValidity() &&
        zipCode.checkValidity()
      ) {
        element.parentNode.style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("profileDiv").style.display = "block";
        document.getElementById("resultDiv").style.display = "none";
        addresslabel.innerHTML = address.value +  houseNumber.value  +  zipCode.value ;
        }

      break;
    case "profileDiv":
      if (
        userName.checkValidity() &&
        password.checkValidity() &&
        repeatPassword.checkValidity() &&
        photo.checkValidity() &&
        password.value === repeatPassword.value
      ) {
        element.parentNode.style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("addressDiv").style.display = "none";
        document.getElementById("resultDiv").style.display = "block";
        usernameLabel.innerHTML = userName.value;
        passwordLabel.innerHTML = password.value;
        photoLabel.append(photo.value);
      }

      break;

    default:
      break;
  }
}

//check validatity
/* function form(){

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
  name.innerHTML = firstName.value+lastName.value;
   birthDatelabel = 02/03/1972
  nationalitylabel.innerHTML ="indi"
  addresslabel.innerHTML="jsdjgh"
  usernameLabel.innerHTML="hdslgh"
  passwordLabel.innerHTML=""
  photoLabel.innerHTML 
}
nextBtn.addEventListener("click",form );
nextBtn1.addEventListener("click",form );
nextBtn2.addEventListener("click",form );

 */
