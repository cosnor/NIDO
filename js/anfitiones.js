let anfitriones = [];

let pensiones = [];

var pensionSeleccionada = 1;

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

function agregarAnfitrion(nombre, apellido, correo, telefono, cedula, contrasena, idanfitrion){
    anfitriones.push({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        cedula: cedula,
        contrasena: contrasena,
        idanfitrion: idanfitrion

    });

    // Llamado a la api fetch para agregar el anfitrion a la base de datos
}

agregarAnfitrion('Pepito', 'Perez', 'correo1', '1234567890', '1234567890', 'contrasena1', 1);
agregarAnfitrion('Anfitrion 2', 'Apellido 2', 'correo2', '1234567890', '1234567890', 'contrasena2', 2);
agregarAnfitrion('Anfitrion 3', 'Apellido 3', 'correo3', '1234567890', '1234567890', 'contrasena3', 3);

var anfitrionSeleccionado = 1;

mostrarAnfitrion(anfitrionSeleccionado)

function mostrarAnfitrion(idanfitrion){
    const anfitrionesContainer = document.getElementById('infoAnfitrion');

    anfitrionesContainer.innerHTML = '';
    anfitrionSeleccionado = anfitriones.find(anfitrion => anfitrion.idanfitrion === idanfitrion);
    let anfitrion = document.createElement('div');
    anfitrion.innerHTML = `
                            <h3 class="text-primary mb-3">${anfitrionSeleccionado.nombre} ${anfitrionSeleccionado.apellido}</h3>
                            <p><strong>Información del Anfitrión</strong> </p>
                            <p><strong>Correo:</strong> ${anfitrionSeleccionado.correo}</p>
                            <p><strong>Teléfono:</strong> ${anfitrionSeleccionado.telefono}</p> 
    `;
    anfitrionesContainer.appendChild(anfitrion);
}


document.getElementById('formAgregarPension').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita que el formulario se envíe 
    let nombrePension = document.getElementById('nombrePension').value; 
    let huespedesPension = document.getElementById('huespedesPension').value; 
    let precioPension = document.getElementById('precioPension').value;
    let descripcionPension = document.getElementById('descripcionPension').value; 
    let ciudad = document.getElementById('ciudad').value; 
    let serviciosSeleccionados = []; 
    let checkboxes = document.querySelectorAll('#checklistServicios .form-check-input'); 
    checkboxes.forEach(function(checkbox) { 
        if (checkbox.checked) { serviciosSeleccionados.push(checkbox.value); } 
    }); 
    let fotosPension = document.getElementById('fotosPension').files; 
    if (fotosPension.length> 0) {
        console.log(`Se subieron ${fotosPension.length} fotos`);
    } else {
        console.log('No se subieron fotos');
    }
    
    
    alert('Nombre de la Pensión: ' + nombrePension + '\nNúmero de Huéspedes: ' + huespedesPension + '\nPrecio: ' + precioPension + '\nDescripción Pensión: ' + descripcionPension + '\nCiudad: ' + ciudad + '\nServicios: ' + serviciosSeleccionados.join(', ') + '\nAnfitrión: ' + anfitrionSeleccionado.nombre + ' ' + anfitrionSeleccionado.apellido);
} );

function mostrarMisPensiones(idanfitrion){
    const pensionesContainer = document.getElementById('misPensiones');

    pensionesContainer.innerHTML = '';
    pensiones.forEach(pension => {
        var contador = 0;
        if (pension.idanfitrion == idanfitrion.idanfitrion){
            let nido = document.createElement('div');
            nido.classList.add('d-flex', 'align-items-center', 'text-decoration-none', 'bg-white', 'mb-3')
            let estadoEditar = '';
            if (pension.estado == 'Disponible'){
                estadoEditar = 'Cambiar a No Disponible';
            } else {
                estadoEditar = 'Cambiar a Disponible';
            }
            nido.innerHTML = `
                            <img class="img-fluid peque" src="img/destination-1.jpg" alt="">
                            <div class="pl-5">
                                <h6 class="m-0">${pension.nombrepension}</h6>
                                <small class="pl-1"> ${pension.ciudad}</small>
                                <div class="pl-1">
                                    <small>${pension.estado} </small>
                                </div>
                                <form class="formulario botones" id="${pension.idpension}" name="formulario">
                                    <button class="btn btn-primary btn-sm mt-2" type="submit">${estadoEditar}</button>
                                </form>
                            </div>
            `;
            pensionesContainer.appendChild(nido);
            contador++;
        };
} );
}

mostrarMisPensiones(anfitrionSeleccionado);

document.querySelectorAll('.botones').forEach(item => {
    item.addEventListener('submit', function(event) {
        event.preventDefault();
        let boton = event.target.querySelector('button');
        if (boton.textContent == 'Cambiar a No Disponible'){
            boton.textContent = 'Cambiar a Disponible';
            // Cambiar estado de la pension a No Disponible

            //Obtengo la id de la pension
            let idPension = event.target.id;
            //Obtengo la pension
            let pension = pensiones.find(pension => pension.idpension == idPension);
            pension.estado = 'No Disponible';

        } else {
            boton.textContent = 'Cambiar a No Disponible';
            // Cambiar estado de la pension a Disponible
            let idPension = event.target.id;
            let pension = pensiones.find(pension => pension.idpension == idPension);
            pension.estado = 'Disponible';

        }
        mostrarMisPensiones(anfitrionSeleccionado);
    });
    
});