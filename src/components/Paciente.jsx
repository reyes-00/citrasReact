
const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {
  const{mascota, propietario, email, fecha, sintomas, id} = paciente
  
  const handleEliminar = ()=>{
    const respuesta = confirm("Deseas Eliminar este Paciente")
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <>
      <div className="bg-white m-3 px-5 shadow-md rounded-md py-10">
        <p className="font-bold uppercase text-gray-700">Nombre: <span className="font-normal normal-case">{mascota}</span></p>
    
        <p className="font-bold uppercase text-gray-700">Nombre Propietario: <span className="font-normal normal-case">{propietario}</span></p>
     
    
        <p className="font-bold uppercase text-gray-700">Email: <span className="font-normal normal-case">{email}</span></p>
     
    
        <p className="font-bold uppercase text-gray-700">Fecha: <span className="font-normal normal-case">{fecha}</span></p>
     
    
        <p className="font-bold uppercase text-gray-700">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

        <div className="md:flex md:justify-between mt-5 space-y-2 ">
          <button className="block w-full text-white uppercase text-sm font-bold py-2 rounded hover:bg-blue-700 bg-blue-500 md:w-auto md:px-4" type="button" onClick={()=>setPaciente(paciente)}>Editar</button>
          
          <button className="block w-full text-white uppercase text-sm font-bold py-2 rounded hover:bg-red-700 bg-red-500 md:w-auto md:px-4" type="button" onClick={handleEliminar}>Eliminar</button>
        </div>
      </div>
    </>
  )
}

export default Paciente