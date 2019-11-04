var express = require('express');
var router = express.Router();
var Register = require("../modules/Register")

/* GET home page. */
router.get('/register', function(request, response, next) {
 console.log(request);
 Register.find((error, registers)=>{
  if(error) return response.status(500).json({mensaje: "Error interno del sistema"});

  if(registers){
    response.status(200).json(registers);
  }else{
    response.status(404).json({mensaje: "No hay registros"});
  }
})
});

module.exports = router;
