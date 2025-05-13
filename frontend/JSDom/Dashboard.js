

let nombreProducto = document.getElementById("nombreProducto");
let imagenProducto = document.getElementById("imagenProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let btnDisminuirCantidad = document.getElementById("btnDisminuirCantidad");
let cantidadProducto = document.getElementById("cantidadProducto");
let btnAumentarCantidad = document.getElementById("btnAumentarCantidad");
let precioProducto = document.getElementById("precioProducto");
let mensaje = document.getElementById("mensaje");



//previsualizar la imagen
const InputImagen = document.getElementById("imagenProducto");
const PreviewImg = document.getElementById("previewImagen");


InputImagen.addEventListener('change', function(){
    const archivoSelect = InputImagen.files[0];

    if(archivoSelect){
        const urlTemporal = URL.createObjectURL(archivoSelect);
        PreviewImg.src = urlTemporal;
        PreviewImg.style = display = "block";
    }else{
        PreviewImg.src = "";
        PreviewImg.style.display = "none";
    }
})
const btnQuitarImagen = document.getElementById("btnQuitarImagen");

btnQuitarImagen.addEventListener("click", function () {
    InputImagen.value = ""; // Limpia el input de tipo file
    PreviewImg.src = ""; // Borra la imagen del <img>
    PreviewImg.style.display = "none"; // Oculta el preview
});



//logica para disminuir las cantidad de productos 
btnDisminuirCantidad.addEventListener("click", function(){
    let CantProduct = parseInt(cantidadProducto.value) || 0;


    if(CantProduct > 1 ){
        CantProduct = CantProduct - 1;
        cantidadProducto.value = CantProduct

    }

    

})

//logica para aumentar las cantidad de productos 
btnAumentarCantidad.addEventListener("click", function(){
    let CantProduct = parseInt(cantidadProducto.value) || 0;
        CantProduct = CantProduct + 1;
        cantidadProducto.value = CantProduct;
    


})

//el precio debe ser numerico
//Evita que el usuario escriba letras (solo permite del 0 al 9)


precioProducto.addEventListener("input", function(event) {
    if (event.key < '0' || event.key > '9') {
      event.preventDefault(); // Bloquea la tecla si no es un número
    }

      let valor = precioProducto.value.trim(); // Quitamos espacios
      let precio = parseFloat(valor); // Convertimos a número

      if (isNaN(precio)) {
        mensaje.textContent = "Por favor ingresa un número válido.";
        mensaje.style.color = "red";
      } else {
        mensaje.textContent = `Precio registrado: $${precio}`;
        mensaje.style.color = "#00FF00";
      }
    
  });

  
  

//logica para crear el producto 
let btnCrearProducto = document.getElementById("btnCrearProducto").addEventListener("click", function(event){

   

    let NameProduct = nombreProducto.value;
    let ImgProduct = imagenProducto.value;
    let DesProduct = descripcionProducto.value;
    let CantProduct = parseInt(cantidadProducto.value);
    let priceProdut =parseFloat(precioProducto.value);

    
    if(NameProduct == "" || ImgProduct == ""  || DesProduct == "" || isNaN(priceProdut)  || priceProdut <= 0 || CantProduct <= 0 || isNaN(CantProduct)){

      event.preventDefault();
      alert("Todos los campos deben estar completos y válidos (precio y cantidad deben ser números positivos).");

    
        
    }

    //shorthand: Cuando la propiedad del objeto y la variable se llaman igual, puedes escribirlo más corto, así, pero si no lo pones  normal como un objeto pero largo 

    let ProductDate = { NameProduct,ImgProduct, DesProduct, priceProdut, CantProduct  };

    console.log(ProductDate );

});

