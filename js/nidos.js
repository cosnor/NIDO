let pensiones = [];

function agregarPension(nombrepension, idpension, idanfitrion, descripcion, numhuespedes, estado, ciudad, direccion, descripciondireccion, precio, fotos, alimentacion, aseo, lavadoropa, rutabuses, otros, puntuacion, numres){
    pensiones.push({
        nombrepension: nombrepension,
        idanfitrion: idanfitrion,
        idpension: idpension,
        descripcion: descripcion,
        numhuespedes: numhuespedes,
        estado: estado,
        ciudad: ciudad,
        direccion: direccion,
        descripciondireccion: descripciondireccion,
        precio: precio,
        fotos: fotos,
        alimentacion: alimentacion,
        aseo: aseo,
        lavadoropa: lavadoropa,
        rutabuses: rutabuses,
        otros: otros,
        puntuacion: puntuacion,
        numeroResenas: numres
        
    });

    // Llamado a la api fetch para agregar la pension a la base de datos
} ;

agregarPension('Pension 1', 1, 1, 'Descripcion de la pension 1', 2, 'Disponible', 'Barranquilla','Calle 1', 'Descripcion de la direccion 1', 1000000, ['img/pension1.jpg', 'img/pension2.jpg'], null, 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 4.5, 250);
agregarPension('Pension 2', 2, 2, 'Descripcion de la pension 2', 3, 'Disponible', 'Cali', 'Calle 2', 'Descripcion de la direccion 2', 2000000, ['img/pension3.jpg', 'img/pension4.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 4.0, 16);
agregarPension('Pension 3', 3, 3, 'Descripcion de la pension 3', 4, 'Disponible', 'Santa Marta', 'Calle 3', 'Descripcion de la direccion 3', 750000, ['img/pension5.jpg', 'img/pension6.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 4.8, 100);
agregarPension('Pension 4', 4, 4, 'Descripcion de la pension 4', 5, 'Disponible', 'Bogotá',  'Calle 4', 'Descripcion de la direccion 4', 480000, ['img/pension7.jpg', 'img/pension8.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 3.5, 50);

function mostrarPensiones(){
    const pensionesContainer = document.getElementById('nidos');

    pensionesContainer.innerHTML = '';
    pensiones.forEach(pension => {
        let nido = document.createElement('div');
        nido.classList.add('col-md-6', 'mb-4', 'pb-2');
        // Determinar los servicios que ofrece la pensión
        let servicios = '';
        if (pension.alimentacion != null) {
            servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--tertiary); color: var(--secondary) ;"> <small> ${pension.alimentacion} </small></a>`;
        }
        if (pension.aseo != null) {
            servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--primary); color: var(--secondary) ;"> <small> ${pension.aseo} </small></a>`;
        }
        if (pension.lavadoropa != null) {
            servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--secondary); color: var(--primary) ;"> <small> ${pension.lavadoropa} </small></a>`;
        }
        if (pension.rutabuses != null) {
            servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--tertiary); color: var(--primary) ;"> <small> ${pension.rutabuses} </small></a>`;
        }

        nido.innerHTML = `
                            <div class="blog-item">
                                <div class="package-item bg-white mb-2">
                                    <img class="img-fluid" src="img/package-2.jpg" alt="">
                                    <div class="p-4">
                                        <div class="d-flex justify-content-between mb-3">
                                            <small class="m-0">${pension.estado}</small>
                                            <small class="m-0">${pension.numhuespedes} huéspedes</small>
                                        </div>
                                        <a class="h5 text-decoration-none" href="pension.html">${pension.nombrepension}</a>
                                        <div class="border-top mt-4 pt-4">
                                            <div class="d-flex justify-content-between">
                                                <h6 class="m-0">${pension.puntuacion}<small> (${pension.numeroResenas})</small></h6>
                                                <h5 class="m-0">COP ${pension.precio}</h5>
                                            </div>
                                            <div class="m-2">
                                                <div class="d-flex flex-wrap m-n1">
                                                    ${servicios}
                                                </div>
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

