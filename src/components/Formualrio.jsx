import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'

const Formualrio = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [mascota, setMascota] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)
  
  useEffect(() =>{
    if(Object.keys(paciente).length > 0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const handleSubmit = (e) => {
    e.preventDefault();
    if([mascota,propietario, email, fecha,sintomas].includes("")){
      setError(true);
      return
    }
    const generarId=()=>{
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36)

      return random + fecha
    }
    //creamos el objeto y cambiamos el valor de Error
    setError(false)

    const objetoPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id){
    //actualizar paciente
      objetoPaciente.id = paciente.id
      
      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacienteActualizado)
      setPaciente({})
    }else{
      //agregar paciente
      objetoPaciente.id = generarId();
      setPacientes([... pacientes, objetoPaciente ])
    }


    //reiniciar el formulario
    setMascota(""),
    setPropietario(""),
    setEmail(""),
    setFecha(""),
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl text-center font-bold mt-8">Seguimeinto pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10 font-bold">
        Añande Paciente {""}
        <span className="text-indigo-600 ">Administralos</span>
      </p>
   
      <form action="" className="shadow-xl bg-white rounded-lg py-10 px-5 space-y-5 mb-10" onSubmit={handleSubmit} >
        {error && <Mensaje>
                      <p>Todos los campos son requeridos</p>
                  </Mensaje>
        }
        <div>
          <label htmlFor="mascota" className="text-gray-700 font-bold uppercase block">Nombre Mascota</label>
          <input type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota" name="mascota" value={mascota} onChange={(e)=>{ setMascota(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="propietario" className="text-gray-700 font-bold uppercase block">Nombre Propietario</label>
          <input type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario" name="propietario" value={propietario} onChange={(e)=>{ setPropietario(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="Email" className="text-gray-700 font-bold uppercase block">Email del Propietario</label>
          <input type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Email" name="Email" value={email} onChange={(e)=>{ setEmail(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="alta" className="text-gray-700 font-bold uppercase block">Fecha</label>
          <input type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="alta" value={fecha} onChange={(e)=>{ setFecha(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="sintomas" className="text-gray-700 font-bold uppercase block">Sintomas</label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Sintomas de la Mascota" name="sintomas" value={sintomas} onChange={(e)=>{ setSintomas(e.target.value)}}
          ></textarea>
        </div>

        <input type="submit" className="bg-indigo-500 text-white block w-full uppercase text-sm font-bold cursor-pointer hover:bg-indigo-700 p-2 hover:text-white rounded" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}/>
      </form>
    </div>

  )
}

export default Formualrio