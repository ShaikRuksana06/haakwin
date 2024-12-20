const bookingForm = document.getElementById('bookingForm');
const reservationList = document.getElementById('reservationList');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    const reservationItem = document.createElement('li');
    reservationItem.textContent = `${name} - ${source} to ${destination} on ${date} (${travelClass})`;
    reservationList.appendChild(reservationItem);

    alert('Ticket booked successfully!');
    bookingForm.reset();
});
