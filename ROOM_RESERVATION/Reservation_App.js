function addNewReservation() {
    const nameInput = document.getElementById('nameInput').value
    
    if (nameInput === '') {
        alert('Please fill the task!')
        return
    }


    const addItems = document.createElement(td)
    addItems.textContent = nameInput

    document.getElementById('taskList').appendChild(addItems)

}