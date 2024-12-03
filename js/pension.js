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

agregarPension('Pension 1', 1, 1, 'Descripcion de la pension 1', 2, 'Disponible', 'Barranquilla','Calle 1', 'Descripcion de la direccion 1', 1000000, ['img/pension1.jpg', 'img/pension2.jpg'], null, 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 4.5, 5);
agregarPension('Pension 2', 2, 2, 'Descripcion de la pension 2', 3, 'Disponible', 'Cali', 'Calle 2', 'Descripcion de la direccion 2', 2000000, ['img/pension3.jpg', 'img/pension4.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 4.0, 1);
agregarPension('Pension 3', 3, 3, 'Descripcion de la pension 3', 4, 'Disponible', 'Santa Marta', 'Calle 3', 'Descripcion de la direccion 3', 750000, ['img/pension5.jpg', 'img/pension6.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 4.8, 6);
agregarPension('Pension 4', 4, 4, 'Descripcion de la pension 4', 5, 'Disponible', 'Bogotá',  'Calle 4', 'Descripcion de la direccion 4', 480000, ['img/pension7.jpg', 'img/pension8.jpg'], 'Desayuno', 'Aseo', 'Lavado de ropa', 'Ruta de buses', null, 3.5, 5);

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

// Se muestra la información de la pensión seleccionada 

function mostrarPension(idpension){
    let pensionSeleccionada = pensiones.find(pension => pension.idpension == idpension);
    
    let pensionContainer = document.getElementById('pensionContent');
    pensionContainer.innerHTML = '';
    let nido = document.createElement('div');
    let servicios = '';
    if (pensionSeleccionada.alimentacion != null) {
        servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--tertiary); color: var(--secondary) ;"> <small> ${pensionSeleccionada.alimentacion} </small></a>`;
    }
    if (pensionSeleccionada.aseo != null) {
        servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--primary); color: var(--secondary) ;"> <small> ${pensionSeleccionada.aseo} </small></a>`;
    }
    if (pensionSeleccionada.lavadoropa != null) {
        servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--secondary); color: var(--primary) ;"> <small> ${pensionSeleccionada.lavadoropa} </small></a>`;
    }
    if (pensionSeleccionada.rutabuses != null) {
        servicios += `<a href="" class="btn btn-light m-1" style="background-color: var(--tertiary); color: var(--primary) ;"> <small> ${pensionSeleccionada.rutabuses} </small></a>`;
    }
    nido.innerHTML = `
                        <div class="blog-item">
                            <div class="position-relative">
                                <img class="img-fluid w-100" src="img/blog-1.jpg" alt="">
                                <div class="blog-date">
                                    <h3 class="font-weight-bold mb-n1">${pensionSeleccionada.puntuacion}</h6>
                                    <small class="text-white text-uppercase">(${pensionSeleccionada.numeroResenas})</small>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white mb-3" style="padding: 30px;">
                            <div class="d-flex mb-3">
                                <a class="text-primary text-uppercase text-decoration-none" href="">${pensionSeleccionada.ciudad}</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">${pensionSeleccionada.numhuespedes} Huéspedes</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">COP ${pensionSeleccionada.precio}</a>
                            </div>
                            <h2 class="mb-3">${pensionSeleccionada.nombrepension}</h2>
                            <p>${pensionSeleccionada.descripcion}</p>
                                <img class="img-fluid w-100 p-4" src="img/blog-1.jpg" alt="">
                                <img class="img-fluid w-100 p-4" src="img/blog-1.jpg" alt="">
                                <img class="img-fluid w-100 p-4" src="img/blog-1.jpg" alt="">
                                <img class="img-fluid w-100 p-4" src="img/blog-1.jpg" alt="">
                        </div>
    `;
    pensionContainer.appendChild(nido);
    let commentsContainer = document.getElementById('commentSection');
    commentsContainer.innerHTML = '';
    let comment = document.createElement('div');
    let commentNew = '';
    for (let i = 0; i < pensionSeleccionada.numeroResenas; i++) {
       
        commentNew += `
            <div class="media mb-4">
                            <img src="img/user.png" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
                            <div class="media-body">
                                <h6><a href="">Nombre de Usuario</a> <small><i>Puntuación</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                
                            </div>
                        </div>
        `
    }
                            
    comment.innerHTML = `
        <h4 class="text-uppercase mb-4" style="letter-spacing: 5px;">${pensionSeleccionada.numeroResenas} comentarios</h4>
        ${commentNew}

                        
    `;
    commentsContainer.appendChild(comment);
    let serviciosContainer = document.getElementById('serviciosPension');
    serviciosContainer.innerHTML = '';
    let serviciosPension = document.createElement('div');
    serviciosPension.innerHTML = `
        <div class="d-flex flex-wrap m-n1">
            ${servicios}
        </div>
    `;
    serviciosContainer.appendChild(serviciosPension);
    
                                                

}




document.addEventListener('DOMContentLoaded', function() {
    mostrarPension(pensionSeleccionada);
});


