// Selección de elementos del DOM
const form = document.getElementById('product-form');
const nameInput = document.getElementById('name');
const categoryInput = document.getElementById('category');
const priceInput = document.getElementById('price');
const idInput = document.getElementById('product-id');
const tableBody = document.getElementById('product-table-body');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const category = categoryInput.value.trim();
    const price = parseFloat(priceInput.value).toFixed(2);

    if (!name || !category || isNaN(price)) return;

    const product = {
        id: idInput.value || Date.now().toString(),
        name,
        category,
        price
    };

    saveProduct(product);  // Función del archivo storage.js
    renderTable();
    form.reset();
    idInput.value = '';
});

// Cargar datos en formulario para edición
function editProduct(id) {
    const product = findProductById(id);  // Función del archivo storage.js
    if (!product) return;

    nameInput.value = product.name;
    categoryInput.value = product.category;
    priceInput.value = product.price;
    idInput.value = product.id;
}

// Renderizar tabla con productos
function renderTable() {
    const products = getProducts();  // Función del archivo storage.js
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${product.price}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editProduct('${product.id}')">Editar</button>
                <button class="delete-btn" onclick="handleDelete('${product.id}')">Eliminar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Confirmar y eliminar producto
function handleDelete(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        deleteProduct(id);  // Función del archivo storage.js
        renderTable();
    }
}

// Cargar productos al iniciar
renderTable();

