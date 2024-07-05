import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [nombre, setNombre] = useState('');
  const [num_id, setNum_id] = useState('0');
  const [sexo, setSexo] = useState('');
  const [caidas, setCaidas] = useState('');
  const [medicamentos, setMedicamentos] = useState('');
  const [deficit, setDeficit] = useState('');
  const [estadomental, setEstadomental] = useState('');
  const [deambulacion, setDeambulacion] = useState('');
  const [edad, setEdad] = useState('');

  const mostrarDatos =() => {
    alert(nombre);
  }


  return (

  
  
    <> 
    
<div className='App'>
    
  <header className="header">
  <div className="container-header">
    <h1> Escala de valoración de riesgo de Caída - (J.H. Downton)</h1>
  </div>
</header>

  <div className="form-groups">
    <label>
       <h2>1. Nombre y apellidos</h2>
      </label>
      <input onChange={(event)=>{setNombre(event.target.value)}} type="text" name="name" placeholder="Nombre y apellidos" 
      />
    
  </div>
  <br />


  <div className="form-groups">
    <label>
      <h3>2. Número de documento de identificacion</h3>
    </label>
    <input
      type="number"
      name="id"
      placeholder="Numero de identificiacion"
      
    />
  </div>
  <br />


  <div className="form-groups" >
    <p>
      3. Sexo 
    </p>
    <label>
      <input type="radio" id="Femenino" name="sexo" value="1" />
      <b>Femenino</b>
    </label>
    <label>
      <input type="radio" id="Masculino" name="sexo" value="2"/>
      <b>Masculino</b>
    </label>
    <label>
      <input type="radio" id="Indefinido" name="sexo" value="3" />
      <b>Indefinido</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      4. ¿A presentado Caídas en los ultimos 3 meses?
    </p>
    <label>
      <input type="radio" id="No" name="opciones" value="1" />
      <b>No</b>
    </label>
    <label>
      <input type="radio" id="Si" name="opciones" value="2" />
      <b>Si</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      5. ¿Qué medicamentos toma?
    </p>
    <label>
      <input type="checkbox" name="medicamentos" id="Ninguno" />
      <b>Ninguno</b>
    </label>
    <label>
      <input type="checkbox" name="medicamentos" id="Tranquilizantes/Sedantes" />
      <b>Tranquilizantes/Sedantes</b>
    </label>
    <label>
      <input type="checkbox" name="medicamentos" id="Diuréticos" />
      <b>Diuréticos</b>
    </label>
    <label>
      <input type="checkbox" name="medicamentos" id="Hipotensores" />
      <b>Hipotensores</b>
    </label>
    <label>
      <input type="checkbox" name="medicamentos" id="Antiparkinsonianos" />
      <b>Antiparkinsonianos</b>
    </label>
    <label>
      <input type="checkbox" name="medicamentos" id="Antidepresivos" />
      <b>Antidepresivos</b>
    </label>
    <label>
      <input type="checkbox" name="medicamentos" id="Otros medicamentos" />
      <b>Otros medicamentos</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      6. ¿Tiene algún déficit temporal?
    </p>
    <label>
      <input type="checkbox" name="deficit" id="ninguno" />
      <b>Ninguno</b>
    </label>
    <label>
      <input type="checkbox" name="deficit" id="alteraciones_visuales" />
      <b>Alteraciones Visuales</b>
    </label>
    <label>
      <input type="checkbox" name="deficit" id="alteraciones_audiovisuales" />
      <b>Alteraciones Audiovisuales</b>
    </label>
    <label>
      <input type="checkbox" name="deficit" id="Extremidades" />
      <b>Extremidades</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      7. ¿Cuál es su estado mental?
    </p>
    <label>
      <input type="radio" name="estado" />
      <b>Orientado</b>
    </label>
    <label>
      <input type="radio" name="estado" />
      <b>Confuso</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      8. Deambulación
    </p>
    <label>
      <input type="radio" name="deambulacion" />
      <b>Normal</b>
    </label>
    <label>
      <input type="radio" name="deambulacion"  />
      <b>Segura con ayuda</b>
    </label>
    <label>
      <input type="radio" name="deambulacion"  />
      <b> Insegura con ayuda/ Sin ayuda</b>
      
    </label>
    <label>
      <input type="radio" name="deambulacion"  />
      <b>Imposible</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      9. Edad
    </p>
    <label>
      <input type="radio" name="edad"  />
      <b>Menor de 70</b>
    </label>
    <label>
      <input type="radio" name="edad"  />
      <b>Mayor de 70</b>
    </label>
  
    <br />
    <button onClick={mostrarDatos}>Listo</button>
    </div>
</div>
  </>


  )

    
}
export default App 
