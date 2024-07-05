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
      <b>1. Nombre y apellidos</b>
      </label>
      <input onChange={(event)=>{setNombre(event.target.value)}} type="text" name="name" placeholder="Nombre y apellidos" 
      />
    
  </div>
  <br />


  <div className="form-groups">
    <label>
      <b>2. Numero de documento de identificacion</b>
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
      <b> 3. Sexo </b>
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
      <b>4. ¿A presentado Caidas en los ultimos 3 meses?</b>
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
      <b>5. ¿Que medicamentos toma?</b>
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
      <b>6. ¿Tiene algun deficit temporal?</b>
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
      <b>7. ¿Cual es su estado mental?</b>
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
      <b>8. Deambulacion</b>
    </p>
    <label>
      <input type="radio" name="deambulacion" />
      <b>Normal</b>
    </label>
    <label>
      <input type="radio" name="deambulacion" defaultValue={2} />
      <b>Segura con ayuda</b>
    </label>
    <label>
      <input type="radio" name="deambulacion" defaultValue={3} />
      <b>Insegura con ayuda / Sin ayuda</b>
    </label>
    <label>
      <input type="radio" name="deambulacion" defaultValue={4} />
      <b>Imposible</b>
    </label>
  </div>


  <div className="form-groups">
    <p>
      <b>9. Edad</b>
    </p>
    <label>
      <input type="radio" name="edad" defaultValue={1} />
      <b>Menor de 70</b>
    </label>
    <label>
      <input type="radio" name="edad" defaultValue={2} />
      <b>Mayor de 70</b>
    </label>
  </div>
    <br />
    <button onClick={mostrarDatos}>Listo</button>
  
</div>
  </>



  )


    {/*
    <div className='App'>
      <div className='forms-groups'>
      
        <h1>Escala de valoración de
    riesgo de Caída - (J.H.
    Downton)</h1>


      <label><p> 1. Nombre y Apellidos:</p> <input onChange={(event)=>{setNombre(event.target.value)}}type="text"/></label><br />

      <label><p> 2. Numero de identificacion: </p><input onChange={(event)=>{setNum_id(event.target.value)}} type="number"/></label><br />
      

      
      
        <p><b> 3. Sexo </b></p>
    
      <label>
        <input type="radio" name="sexo" />
        <b>Femenino</b>
      </label>
      <label>
        <input type="radio" name="sexo" />
        <b>Masculino</b>
      </label>
      <label>
        <input type="radio" name="sexo" />
        <b>Indefinido</b>
      </label>


      <p>
        <b>4. ¿A presentado Caídas en los últimos
        3 meses?</b></p>
      <br/>
      <label>
      <input onChange={(event)=>{setCaidas(event.target.value)}} type="radio" name="caidas"/><b>No</b><br/>
      <input type="radio" name="caidas" /><b>Si</b>
      </label><br/>

      <p>
        <b>5.¿Qué medicamentos toma?</b>
        </p><br />
      <label>
        <input onChange={(event)=>{setMedicamentos(event.target.value)}}type="checkbox"/><b>Ninguno</b><br />
        <input type="checkbox"/><b>Tranquilizantes/Sedantes</b><br />
        <input type="checkbox"/><b>Diuréticos</b><br/>
        <input type="checkbox"/><b>Hipotensores</b><br />
        <input type="checkbox"/><b>Antiparkinsonianos</b><br />
        <input type="checkbox"/><b>Antidepresivos</b><br />
        <input type="checkbox"/><b>Otros medicamentos</b><br />
      </label><br />
      
          <p>
            <b>6. ¿Tiene algún déficit sensorial?</b>
            </p>
          <br/>
          <label>
          <input onChange={(event)=>{setDeficit(event.target.value)}} type="checkbox"/><b>Ninguno</b><br/>
          <input type="checkbox" /><b>Alteraciones Visuales</b><br/>
          <input type="checkbox" /><b>Alteraciones Audiovisuales</b><br/>
          <input type="checkbox" /><b>Extremidades</b><br/>
          </label><br />
        

        
        <p>
          <b>7. ¿Cuál es su estado mental?</b>
          </p><br/>
        <label>
        <input onChange={(event)=>{setEstadomental(event.target.value)}} type="radio" name="estado"/><b>Orientado</b><br/>
        <input type="radio" name="estado" /><b>Confuso</b>
        </label><br />
        
        
        
        <p>
          <b>8. Deambulación</b>
          </p>
          <br/>
          <label>
        <input onChange={(event)=>{setDeambulacion(event.target.value)}} type="checkbox"/><b>Normal</b><br/>
        <input type="checkbox" /><b>Segura con ayuda</b><br/>
        <input type="checkbox" /><b>Insegura con ayuda/sin ayuda</b><br/>
        <input type="checkbox" /><b>Imposible</b><br/>
        </label><br />

        
      <p>
        <b>9. Edad</b>
      </p>
      <label>
        <input type="radio" name="edad" />
        <b>Menor de 70</b>
      </label>
      <label>
        <input type="radio" name="edad" />
        <b>Mayor de 70</b>
      </label>
    
        <button onClick={mostrarDatos}>Listo</button>
  
        </div>
  </div>

      

      
    </>
    
  )*/}
    
  }
export default App 
