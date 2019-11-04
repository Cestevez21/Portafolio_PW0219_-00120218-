var mongoose = require("mongoose");

let database = "RegistroAPI";
let port = "27017";
let host = "localhost";
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("La conexion a la bd fue exitosa"))
    .catch(() => console.log("Error al conectar la bd"));
    
};

module.exports = {
  connectDB
};
