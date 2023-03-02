function sortTickets(ticketsInput, propertyToSortBy) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    ticketsInput.forEach(ticketInput => {
        let [destination, price, status] = ticketInput.split('|');

        tickets.push(new Ticket(destination, price, status));
    });

    if (propertyToSortBy == 'price') {
        tickets.sort((a, b) => a.price - b.price);
    } else {
        tickets.sort((a, b) => a[propertyToSortBy].localeCompare(b[propertyToSortBy]));
    }

    return tickets;
}