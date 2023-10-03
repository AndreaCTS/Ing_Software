<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtén los datos del formulario
    $username = $_POST["uname"];
    $password = $_POST["psw"];

    // Realiza la lógica de autenticación y genera un token si las credenciales son válidas
    if ($username === "usuario_valido" && $password === "contrasena_valida") {
        // Genera un token (puede ser un token JWT u otro tipo de token)
        $token = "token_generado"; // Aquí deberías generar un token adecuado

        // Redirige al usuario a otra página con el token (por ejemplo, la página de inicio)
        header("Location: index.html?token=" . $token);
        exit;
    } else {
        // Las credenciales no son válidas, puedes mostrar un mensaje de error
        echo "Credenciales inválidas. Inténtalo de nuevo.";
    }
}
?>
