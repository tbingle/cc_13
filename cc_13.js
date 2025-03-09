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
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    //Create the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Button text

    //Attach an event listener to remove the card when clicked
    removeButton.addEventListener("click", function () {
        employeeContainer.removeChild(card);
        event.stopPropagation();
    });
    editButton.addEventListener("click", function () {
        //Replace name and position with input fields
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = employeeName.textContent;
        const positionInput = document.createElement("input");
        positionInput.type = "text";
        positionInput.value = employeePosition.textContent;
        //Replace the existing content with inputs
        employeeName.replaceWith(nameInput);
        employeePosition.replaceWith(positionInput);
        //Create a Save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        //Replace the Edit button with Save button
        editButton.replaceWith(saveButton);
        //When Save button is clicked update the card with new details
        saveButton.addEventListener("click", function () {
            //Update the name and position 
            employeeName.textContent = nameInput.value;
            employeePosition.textContent = positionInput.value;
            //Replace the input fields 
            nameInput.replaceWith(employeeName);
            positionInput.replaceWith(employeePosition);
            //Replace the Save button
            saveButton.replaceWith(editButton);
        });
    });
    //Append the elements to the card
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(removeButton);
    card.appendChild(editButton);
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