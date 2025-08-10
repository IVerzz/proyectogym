// Obtener productos desde localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

// Guardar productos en localStorage
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

// Guardar o actualizar un solo producto
function saveProduct(product) {
    let products = getProducts();
    const existingIndex = products.findIndex(p => p.id === product.id);

    if (existingIndex !== -1) {
        products[existingIndex] = product;
    } else {
        products.push(product);
    }

    saveProducts(products);
}

// Eliminar un producto por ID
function deleteProduct(id) {
    let products = getProducts();
    products = products.filter(product => product.id !== id);
    saveProducts(products);
}

// Buscar un producto por ID
function findProductById(id) {
    const products = getProducts();
    return products.find(p => p.id === id);
}

