// app.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Clave secreta para firmar el token (debe ser segura en un entorno real)
const secretKey = 'mi_clave_secreta';

// Endpoint para autenticar al usuario y generar un token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validar las credenciales del usuario (en una implementación real, esto debería verificar una base de datos)
  if (username === 'usuario' && password === 'contraseña') {
    // Crear un token de autenticación
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
