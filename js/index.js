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
let reqNationality = [];
let nationality = document.querySelectorAll("#personalDiv select option");
/* nationality.forEach(i => console.log(i)) */
/* for(let i = 0; i < nationality.length; i++){
  reqNationality.push(nationality[i]) 
}
console.log(reqNationality) */
/* let allInputs = document.querySelectorAll("#personalDiv input");
console.log(allInputs)
let input = allInputs.forEach(i => i);
console.log(input) */
//check validatity
function checkValidity(){

  if(!firstName.value == "" && !lastName.value == "" && !birthDate.value == 0 && nationality.forEach(i => !i.value == i[1])  ){
    personalDiv.style.display = "none"
    addressDiv.style.display = "block"
  } 
 
}
nextBtn.addEventListener("click",checkValidity );
