//Task 2
function addEmployeeCard(name, position) {
    //Employee container
    const employeeContainer = document.getElementById("employeeContainer");
    //Create employee card 
    const card = document.createElement("div");
    card.classList.add("employee-card");
    //Employee name heading
    const employeeName = document.createElement("h3");
    employeeName.textContent = name; // Set the employee's name
    //Employee position paragraph
    const employeePosition = document.createElement("p");
    employeePosition.textContent = position; 
    //Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Button text

    //Attach an event listener to remove the card when clicked
    removeButton.addEventListener("click", function () {
        employeeContainer.removeChild(card);
    });
    //Append the elements to the card
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(removeButton);
    //Append the card to the employee container
    employeeContainer.appendChild(card);
}
//Task 3
function highlightAllCards() {
    //Select all employee cards using querySelectorAll
    const employeeCards = document.querySelectorAll(".employee-card");
    //Convert the NodeList to an array 
    const employeeCardsArray = Array.from(employeeCards); 
    employeeCardsArray.forEach(card => {
        card.style.backgroundColor = "#ffeb3b"; //Change background color 
        card.style.border = "2px solid #f44336"; //Add red border
    });
}