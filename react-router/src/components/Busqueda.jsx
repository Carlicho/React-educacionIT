import React from 'react'
import { useState } from 'react'

const Busqueda = (props) => {

    const [busqueda, setBusqueda] = useState('')

  return (
    <div>
      <input className='form-control' type="text" placeholder='Que deseas escuchar hoy'
      onChange={(e)=>{
        setBusqueda(e.target.value)
      }}
      />
      <button className='btn btn-outline-primary'>Buscar</button>
      

      <div>
        {(busqueda.length > 0) && <p className='text-center text-info'>usted quiere escuchar {busqueda}</p>
      }      </div>
        </div>


    
  )
}

export default Busqueda