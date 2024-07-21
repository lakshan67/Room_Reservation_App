const reservations =  []


// Function of add each reservation
const addReservation = (event) => {
    event.preventDefault()

    const guestName = document.getElementById('guestName').value
    const roomNumber = document.getElementById('roomNumber').value
    const checkInDate = document.getElementById('checkInDate').value
    const checkOutDate = document.getElementById('checkOutDate').value

    const reservation = {
        guestName,
        roomNumber,
        checkInDate,
        checkOutDate
    }

    reservations.push(reservation)
    displayReservations()
    document.getElementById('reservationForm').reset()

}

// Function of display all reservation
const displayReservations = () => {
    const reservationList = document.getElementById('reservationList')
    reservationList.innerHTML = ''

    reservations.forEach((reservation, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${reservation.guestName}</td>
        <td>${reservation.roomNumber}</td>
        <td>${reservation.checkInDate}</td>
        <td>${reservation.checkOutDate}</td>
         <td class="btn btn-danger btn-sm" onclick="deleteReservation(${index})">Delete</td>  
        `
        

        reservationList.appendChild(row)
    })
}

const deleteReservation = (index) => {
    reservations.splice(index, 1)
    displayReservations()
}

document.getElementById('reservationForm').addEventListener('submit', addReservation)