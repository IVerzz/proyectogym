class Storage {
    constructor() {
        if (Storage.instance) {
            return Storage.instance;
        }
        Storage.instance = this;
    }

    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    getReservas() {
        return JSON.parse(localStorage.getItem('reservas')) || [];
    }

    saveReserva(reserva) {
        const reservas = this.getReservas();
        const index = reservas.findIndex(r => r.id === reserva.id);
        if (index >= 0) {
            reservas[index] = reserva;
        } else {
            reservas.push(reserva);
        }
        localStorage.setItem('reservas', JSON.stringify(reservas));
    }

    deleteReserva(id) {
        let reservas = this.getReservas();
        reservas = reservas.filter(r => r.id !== id);
        localStorage.setItem('reservas', JSON.stringify(reservas));
    }

    findReservaById(id) {
        const reservas = this.getReservas();
        return reservas.find(r => r.id === id);
    }
}
