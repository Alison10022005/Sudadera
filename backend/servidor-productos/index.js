document.getElementById("btnCrearProducto").addEventListener("click", function (event) {
  event.preventDefault();

  let NameProduct = nombreProducto.value.trim();
  let ImgFile = imagenProducto.files[0];
  let DesProduct = descripcionProducto.value.trim();
  let CantProduct = parseInt(cantidadProducto.value);
  let priceProdut = parseFloat(precioProducto.value);

  if (
    !NameProduct || !ImgFile || !DesProduct ||
    isNaN(priceProdut) || priceProdut <= 0 ||
    isNaN(CantProduct) || CantProduct <= 0
  ) {
    alert("Todos los campos deben estar completos y válidos.");
    return;
  }

  // Crea el FormData
  let formData = new FormData();
  formData.append("nombre", NameProduct);
  formData.append("descripcion", DesProduct);
  formData.append("precio", priceProdut);
  formData.append("cantidad", CantProduct);
  formData.append("imagen", ImgFile); // archivo real

  // Enviar al servidor
  fetch("http://localhost:3000/api/productos", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert("Producto creado exitosamente en el servidor.");
    })
    .catch((err) => {
      console.error("Error al enviar producto:", err);
      alert("Hubo un error al crear el producto.");
    });
});


 