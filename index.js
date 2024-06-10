require('dotenv').config();

const server = require('./src/server');

const db = require('./src/lib/db');

const PORT = process.env.PORT || 8080;

db.connect()
.then(() => {
    console.log("base de datos activa");
    server.listen(PORT, () => {
        console.log(`servidor corriendo en : ${PORT}`);
    });
})
.catch((error) => {
    console.log("Error en conexion:" , error);
});

