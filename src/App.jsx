import { useState, useEffect } from 'react';
import Formualrio from './components/Formualrio'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(()=>{
    const obtenerStorage = () =>{
      const obtenerPacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(obtenerPacientes)
    }
    obtenerStorage();
  },[])

  useEffect(()=>{
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente  = (id) => {
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizado)
  }

  return (
    <div className="container mx-auto mt-20">
     <Header/>
     <div className='md:flex'>
        <Formualrio
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          
        />
     </div>
    </div>
  )
}

export default App
