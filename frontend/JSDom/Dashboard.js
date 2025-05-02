

let nombreProducto = document.getElementById("nombreProducto");
let imagenProducto = document.getElementById("imagenProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let btnDisminuirCantidad = document.getElementById("btnDisminuirCantidad");
let cantidadProducto = document.getElementById("cantidadProducto");
let btnAumentarCantidad = document.getElementById("btnAumentarCantidad");
let precioProducto = document.getElementById("precioProducto");

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

//logica para crear el producto 
let btnCrearProducto = document.getElementById("btnCrearProducto").addEventListener("click", function(event){

    let NameProduct = nombreProducto.value;
    let ImgProduct = imagenProducto.value;
    let DesProduct = descripcionProducto.value;
    let CantProduct = parseInt(cantidadProducto.value);
    let priceProdut =parseFloat(precioProducto.value);

    
    if(NameProduct == "" || ImgProduct == ""  || DesProduct == "" || isNaN(priceProdut)  || priceProdut <= 0 || CantProduct <= 0 || isNaN(CantProduct)){


        
        event.preventDefault();
        alert("ingrese todos los campos para poder continuar");
        
    }

    console.log(NameProduct,ImgProduct, DesProduct, priceProdut  );




});

