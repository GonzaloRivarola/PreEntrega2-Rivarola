function simuladorDeCompras() {
    let cantidadDeProductos = parseInt(prompt("¿Cuántos productos desea comprar?"));
    while (isNaN(cantidadDeProductos) || cantidadDeProductos <= 0) {
        cantidadDeProductos = parseInt(prompt("Por favor, ingresa un número válido para la cantidad de productos:"));
    }

    let productos = [];

    for (let i = 0; i < cantidadDeProductos; i++) {
        let nombre = prompt(`Nombre del producto ${i + 1}:`);
        let precio = parseFloat(prompt(`Precio del producto ${i + 1}:`));
        let cantidad = parseInt(prompt(`Cantidad del producto ${i + 1}:`));
        productos.push({ nombre, precio, cantidad });
    }

    const calcularTotal = (productos) =>
        productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

    const aplicarDescuento = (total) => {
        if (total > 150) {
            return total * 0.9; 
        }
        return total; 
    };
    

    const buscarProducto = (nombre, productos) =>
        productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    const filtrarProductosPorPrecio = (precioMinimo, productos) =>
        productos.filter(producto => producto.precio > precioMinimo);

    const darResumenProductos = (productos) =>
        productos.map(producto => `${producto.nombre} - Cantidad: ${producto.cantidad}, Precio unitario: $${producto.precio.toFixed(2)}`).join("\n");

    let totalSinDescuento = calcularTotal(productos);
    let totalConDescuento = aplicarDescuento(totalSinDescuento);

    console.log("=== Resumen de tu compra ===");
    console.log(darResumenProductos(productos));
    console.log("=============================");
        
    console.log(`Total sin descuento: $${totalSinDescuento.toFixed(2)}`);
    console.log(`Total con descuento: $${totalConDescuento.toFixed(2)}`);
    alert(`¡Gracias por realizar la compra! Total a pagar: $${totalConDescuento.toFixed(2)}`);

    let productoBuscado = prompt("Ingresa el nombre del producto que deseas buscar:");
    let resultadoBusqueda = buscarProducto(productoBuscado, productos);
    if (resultadoBusqueda) {
        console.log(`Producto encontrado: ${resultadoBusqueda.nombre}, Precio: $${resultadoBusqueda.precio}, Cantidad: ${resultadoBusqueda.cantidad}`);
    } else {
        console.log("El producto no se encuentra en la lista.");
    }

    let precioMinimo = parseFloat(prompt("Ingresa un precio mínimo para filtrar productos:"));
    let productosFiltrados = filtrarProductosPorPrecio(precioMinimo, productos);
    console.log(`Productos con precio mayor a $${precioMinimo}:`);
    productosFiltrados.forEach(producto => console.log(`${producto.nombre} - Precio: $${producto.precio}`));
}

simuladorDeCompras();
