function ingreso() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("contraseña").value;

    // Validación de campos vacíos
    if (email.trim() === '' || password.trim() === '') {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // enviar al backend
    var datos = {
        email: email,
        password: password
    };


    alert("Usuario ingresado correctamente.")
};



function registro() {
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;
    var celular = document.getElementById("celular").value;

    // Validación de campos vacíos
    if (nombreCompleto.trim() === '' || correoElectronico.trim() === '' || contrasena.trim() === '' || confirmarContrasena.trim() === '' || celular.trim() === '') {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validación de coincidencia de contraseñas
    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // enviar al backend
    var datos = {
        nombreCompleto: nombreCompleto,
        correoElectronico: correoElectronico,
        contrasena: contrasena,
        celular: celular,
        verificado: document.getElementById("verificado").checked
    };

    alert("Usuario registrado correctamente.");
}