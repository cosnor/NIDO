// Manejo de registro de anfitriones
    
document.getElementById('formRegistroAnfitrion').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita que el formulario se envíe 
    let nombre = document.getElementById('nombreAnfitrion').value; 
    let apellido = document.getElementById('apellidoAnfitrion').value; 
    let correo = document.getElementById('correoAnfitrion').value; 
    let telefono = document.getElementById('telefonoAnfitrion').value; 
    let cedula = document.getElementById('cedulaAnfitrion').value; 
    let contrasena = document.getElementById('contrasenaAnfitrion').value; 
    alert('Nombre: ' + nombre + '\nApellido: ' + apellido + '\nCorreo: ' + correo + '\nTeléfono: ' + telefono + '\nCédula: ' + cedula + '\nContraseña: ' + contrasena); });

// Manejo de registro de usuarios

document.getElementById('formRegistroUsuario').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita que el formulario se envíe 
    let username = document.getElementById('nombreuserUsuario').value; 
    let nombre = document.getElementById('nombreUsuario').value; 
    let apellido = document.getElementById('apellidoUsuario').value;
    let correo = document.getElementById('correoUsuario').value;
    let contrasena = document.getElementById('contrasenaUsuario').value;
    alert('Nombre: ' + nombre + '\nApellido: ' + apellido + '\nCorreo: ' + correo + '\nUsername: ' + username + '\nContraseña: ' + contrasena); 
} );

// Manejo de inicio sesión de anfitriones

document.getElementById('formIngresoAnfitrion').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita que el formulario se envíe 
    let correo = document.getElementById('correoIngresoAnfitrion').value;
    let contrasena = document.getElementById('contrasenaIngresoAnfitrion').value;
    alert('correo: ' + correo + '\ncontrasena: ' + contrasena); 
} );

// Manejo de inicio sesión de usuarios

document.getElementById('formIngresoUsuario').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita que el formulario se envíe 
    let correo = document.getElementById('correoIngresoUsuario').value;
    let contrasena = document.getElementById('contrasenaIngresoUsuario').value;
    alert('correo: ' + correo + '\ncontrasena: ' + contrasena); 
} );
