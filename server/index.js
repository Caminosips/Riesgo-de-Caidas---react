
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root@localhost",
    password:"your_password ",
    database:"riesgo_caidas"
})


app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const num_id = req.body.num_id;
    const sexo = req.body.sexo;
    const caidas = req.body.caidas;
    const medicamentos = req.body.medicamentos;
    const deficit = req.body.deficit;
    const estado = req.body.estado;
    const deambulacion = req.body.deambulacion;
    const edad = req.body.edad;


    db.query('INSERT INTO encuesta(nombre,num_id,sexo,caidas,medicamentos,deficit,estado,deambulacion,edad) VALUES(?,?,?,?,?,?,?,?,?)',
        [nombre,num_id,sexo,caidas,medicamentos,deficit,estado,
        deambulacion,edad],
        (err,result)=>{
            if(err){
                console.log(err);

            }else{
                res.send("Usuario registrado!")
            }
        }
    );
});


app.listen(3307,()=>{
    console.log("Corriendo en el puerto 3307")

})