let pensiones = [];

function agregarPension(nombrepension, idanfitrion, descripcion, numhuespedes, estado, ciudad, latitud, longitud, direccion, descripciondireccion, precio, fotos, alimentacion, aseo, lavadoropa, rutabuses, otros){
    pensiones.push({
        nombrepension: nombrepension,
        idanfitrion: idanfitrion,
        descripcion: descripcion,
        numhuespedes: numhuespedes,
        estado: estado,
        ciudad: ciudad,
        latitud: latitud,
        longitud: longitud,
        direccion: direccion,
        descripciondireccion: descripciondireccion,
        precio: precio,
        fotos: fotos,
        alimentacion: alimentacion,
        aseo: aseo,
        lavadoropa: lavadoropa,
        rutabuses: rutabuses,
        otros: otros
    });

    // Llamado a la api fetch para agregar la pension a la base de datos
} ;

agregarPension('Pension 1', 1, 'Descripcion de la pension 1', 2, 'Nuevo Leon', 'Monterrey', 25.6667, -100.3167, 'Calle 1', 'Descripcion de la direccion 1', 1000, ['img/pension1.jpg', 'img/pension2.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', 'Otros');
agregarPension('Pension 2', 2, 'Descripcion de la pension 2', 3, 'Nuevo Leon', 'Monterrey', 25.6667, -100.3167, 'Calle 2', 'Descripcion de la direccion 2', 2000, ['img/pension3.jpg', 'img/pension4.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', 'Otros');
agregarPension('Pension 3', 3, 'Descripcion de la pension 3', 4, 'Nuevo Leon', 'Monterrey', 25.6667, -100.3167, 'Calle 3', 'Descripcion de la direccion 3', 3000, ['img/pension5.jpg', 'img/pension6.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', 'Otros');
agregarPension('Pension 4', 4, 'Descripcion de la pension 4', 5, 'Nuevo Leon', 'Monterrey', 25.6667, -100.3167, 'Calle 4', 'Descripcion de la direccion 4', 4000, ['img/pension7.jpg', 'img/pension8.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', 'Otros');

function mostrarPensiones(){
    const pensionesContainer = document.getElementById('nidos');

    pensionesContainer.innerHTML = '';
    pensiones.forEach(pension => {
        let nido = document.createElement('div');
        nido.classList.add('col-md-6', 'mb-4', 'pb-2');
        nido.innerHTML = `
                            <div class="blog-item">
                                <div class="package-item bg-white mb-2">
                                    <img class="img-fluid" src="img/package-2.jpg" alt="">
                                    <div class="p-4">
                                        <div class="d-flex justify-content-between mb-3">
                                            <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i></small>
                                            <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                            <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                                        </div>
                                        <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                                        <div class="border-top mt-4 pt-4">
                                            <div class="d-flex justify-content-between">
                                                <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                                <h5 class="m-0">$350</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
        pensionesContainer.appendChild(nido);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    mostrarPensiones();
    // Manejo de búsqueda por ciudad
    document.getElementById('buscar').addEventListener('click', function() {
        
        var selectElement = document.getElementById('ciudad'); 
        var ciudadSeleccionada = selectElement.options[selectElement.selectedIndex].value; 
        alert('Ciudad seleccionada: ' + ciudadSeleccionada);
    });

    // Manejo de búsqueda por palabra clave
    document.getElementById('iconoBuscar').addEventListener('click', function() { 
        var palabraClave = document.getElementById('palabraClave').value; 
        alert('Palabra clave: ' + palabraClave); });
    
});

