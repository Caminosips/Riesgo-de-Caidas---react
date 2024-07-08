
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"riesgo_caidas"
})


app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.post("/create",(req,res)=>{
    const datos = req.body;
    console.log(datos)
});
    const nombre = req.body.nombre;
    const num_id = req.body.num_id;
    const sexo = req.body.sexo;
    const caidas = req.body.caidas;
    const medicamentos = req.body.medicamentos;
    const deficit = req.body.deficit;
    const estado = req.body.estado;
    const deambulacion = req.body.deambulacion;
    const edad = req.body.edad


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



app.listen(3001,function(){
    console.log("Corriendo en el puerto 3001 http://localhost:3001")

});

