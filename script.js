const form = document.getElementById("myForm");
const table = document.getElementById("myTable");


function clearForm() {
    form.reset();
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;

    const food = [];
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    checkboxes.forEach(function (checkbox) {
        food.push(checkbox.value);
    });
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const newRow = table.insertRow(-1);
    const firstNameCell = newRow.insertCell(0);
    const lastNameCell = newRow.insertCell(1);
    const addressCell = newRow.insertCell(2);
    const pincodeCell = newRow.insertCell(3);
    const genderCell = newRow.insertCell(4);
    const foodCell = newRow.insertCell(5);
    const stateCell = newRow.insertCell(6);
    const countryCell = newRow.insertCell(7);

    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    addressCell.innerHTML = address;
    pincodeCell.innerHTML = pincode;
    genderCell.innerHTML = gender;
    foodCell.innerHTML = food.join(", ");
    stateCell.innerHTML = state;
    countryCell.innerHTML = country;


    form.reset();

});
