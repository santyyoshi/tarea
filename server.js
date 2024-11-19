const express = require('express');
const path = require('path')

const app = express(); //Crear la instancia de la aplicacion express

const PORT = 4001; 

//Configurar express para que procese los datos del formulario en formato URL
app.use(express.urlencoded({extended: true})); //Middleware que permite a express entender los datos enviados

//Definir la ruta para servir el archivo html
app.get('/',(req,res) =>{
    //Envia el archivo formulario.html al cliente
    res.sendFile(path.join(__dirname, 'formulario_estudiantes.html'))
});

//Define la ruta para procesar el envio del formulario
app.post('/registro', (req,res)=>{
    //Accede a los datos enviados en el formulario
    const {nombre, edad, email, curso} = req.body;
    
    console.log("Datos recibidos:", { nombre, edad, email, curso });

    res.send(`<h1>Confirmación de Registro</h1>
        <p><strong>Nombre Completo:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Curso:</strong> ${curso}</p>
        <a href="/">Volver al formulario</a>`);
    
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
    
})