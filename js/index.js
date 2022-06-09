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


let personalDiv = document.querySelector("#personalDiv");

let addressDiv = document.querySelector("#addressDiv");
//next button
let nextBtn = document.querySelector(".registerbtn");
// input
let firstName = document.querySelector("#personalDiv #fName");

let lastName = document.querySelector("#personalDiv #lName");
let birthDate = document.querySelector("#personalDiv #bDate");
let nationality = document.querySelector("#personalDiv select ");


//check validatity
function page1Form(){

  if(firstName.checkValidity() && lastName.checkValidity() &&birthDate.checkValidity() && nationality.checkValidity())
  {
    personalDiv.style.display = "none"
    addressDiv.style.display = "block"
  } 
 
}
nextBtn.addEventListener("click",page1Form );
