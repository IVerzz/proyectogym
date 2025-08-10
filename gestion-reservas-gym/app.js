document.addEventListener("DOMContentLoaded", () => {
    const storage = Storage.getInstance(); // ÚNICA instancia

    // 🔹 Prueba automática del Singleton
    const s1 = Storage.getInstance();
    const s2 = Storage.getInstance();
    console.log("¿Es la misma instancia del Singleton?", s1 === s2);

    const form = document.getElementById("product-form");
    const nameInput = document.getElementById("name");
    const categoryInput = document.getElementById("category");
    const priceInput = document.getElementById("price");
    const productList = document.getElementById("product-list");
    const cancelBtn = document.getElementById("cancel-edit");
    const formTitle = document.getElementById("form-title");

    let editingId = null;

    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.style.background = type === 'error' ? '#e74c3c' : '#27ae60';
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }

    function renderList() {
        productList.innerHTML = '';
        const reservas = storage.getReservas();
        reservas.forEach((r) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${r.name}</td>
                <td>${r.category}</td>
                <td>${formatDate(r.price)}</td>
                <td>
                    <button onclick="editReserva('${r.id}')">✏️</button>
                    <button onclick="deleteReservaAction('${r.id}')">🗑️</button>
                </td>
            `;
            productList.appendChild(tr);
        });
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString('es-CO', {
            dateStyle: 'short',
            timeStyle: 'short'
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const reserva = {
            id: editingId || Date.now().toString(),
            name: nameInput.value,
            category: categoryInput.value,
            price: priceInput.value
        };

        storage.saveReserva(reserva);

        if (editingId) {
            showToast("Reserva actualizada");
        } else {
            showToast("Reserva guardada con éxito");
        }

        editingId = null;
        cancelBtn.style.display = "none";
        formTitle.textContent = "Crear Reserva";
        form.reset();
        renderList();
    });

    cancelBtn.addEventListener("click", () => {
        editingId = null;
        form.reset();
        cancelBtn.style.display = "none";
        formTitle.textContent = "Crear Reserva";
    });

    window.editReserva = (id) => {
        const reserva = storage.findReservaById(id);
        if (reserva) {
            nameInput.value = reserva.name;
            categoryInput.value = reserva.category;
            priceInput.value = reserva.price;
            editingId = reserva.id;
            cancelBtn.style.display = "inline-block";
            formTitle.textContent = "Editar Reserva";
        }
    };

    window.deleteReservaAction = (id) => {
        storage.deleteReserva(id);
        showToast("Reserva eliminada", "error");
        renderList();
    };

    renderList();
});
