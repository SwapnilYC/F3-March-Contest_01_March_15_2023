// Global array to store all the employees
let arr = [];
document.getElementById('table').classList.add('hidden');

// if (arr.length === 0) {
//   document.getElementById('table').classList.add('hidden');
// }

//-----------------------------------------------------------------------------------------------------------------------------------------
// Storing all the necessary data into variables

// Input fields
let nameEl = document.getElementById("name");
let professionEl = document.getElementById("profession");
let ageEl = document.getElementById("age");
// Message Lebals
let errorMsgEl = document.getElementById("error");
let successMsgEl = document.getElementById("success");
let noOfEmployeeMsg = document.getElementById('two')  //line no 49 in Js
// Button
let addBtnEl = document.getElementById("addUserBtn");
//Table of elements
let tableBodyContent = document.getElementById('tableBody'); //storing the table body element. We have to add row in this table element.

//-----------------------------------------------------------------------------------------------------------------------------------------
// Event listeners
addBtnEl.addEventListener("click", addUserFunction);
// delete user event is added in HTML script directly which is added after each new employee is stored in an array

//-----------------------------------------------------------------------------------------------------------------------------------------
// Functions
// 01. Add User function
function addUserFunction() {
  let namee = nameEl.value.toUpperCase();
  // let profession = professionEl.value;
  // capitalizing first letter of profession
  let profession = professionEl.value.slice(0, 1)[0].toUpperCase() + professionEl.value.slice(1);
  console.log(profession);
  let age = ageEl.value;
  if (namee && profession && age) {
    // Add employee 
    successMsgEl.classList.remove("hidden");  // success msg displayed
    errorMsgEl.classList.add("hidden");
    noOfEmployeeMsg.classList.add('hidden');
    document.getElementById('table').classList.remove('hidden'); // remove hidden class from table element
    // create one object from namee, profession, age & push that obj in global array
    let objEl = {
      Name: namee,
      Profession: profession,
      Age: age,
    }
    // add new employee to global array 
    arr.push(objEl);
    //Display the all employees present in global array
    displayUpdatedTable();
  } else {
    // one of or all fields are empty
    successMsgEl.classList.add("hidden");
    errorMsgEl.classList.remove("hidden");  // Error msg Displayed
    noOfEmployeeMsg.classList.remove('hidden');
  }
  //Clear input fields
  updateInputFields();
}

// 02. Delete User Function
let removedUserr;
function deleteUserWithIndex(index) {
  // remove the user from global array using splice method
  removedUserr = arr.splice(index, 1);
  //Display the all employees present in global array
  displayUpdatedTable();
  if (arr.length === 0) {
    document.getElementById('table').classList.add('hidden');
    successMsgEl.classList.add("hidden");
    noOfEmployeeMsg.classList.remove('hidden')
  }
}

// 03. Display updated Employee table
function displayUpdatedTable() {
  // Initialising this table element's innerHTML with empty string so that in map function we can append it with table tag code
  tableBodyContent.innerHTML = '';
  // Now using map function here we basically storing each array element(i.e. one object) in one table row with delete btn and auto indexing  
  arr.map((element, index) => {
    tableBodyContent.innerHTML += `
    <tr>
    <td>Id: ${String(index + 1).padStart(2, '0')}.</td>
    <td>Name: ${element.Name}</td>
    <td>Prefession: ${element.Profession}</td>
    <td>Age: ${element.Age}</td>
    <td><button class="deleteButton" onclick="deleteUserWithIndex(${index})">Delete</button></td>
    </tr>`
  })
}

// 04. Update Name, Profession, Age fields
function updateInputFields() {
  nameEl.value = '';
  professionEl.value = '';
  ageEl.value = '';
}

