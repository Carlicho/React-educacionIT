
//pagina web para generar fotos al azar, LoremPixum

const canciones = [
  {id:1, nombre:"nombre a", artista:"artista aa"},
  {id:2, nombre:"nombre b", artista:"artista bb"},
  {id:3, nombre:"nombre c", artista:"artista cc"},
  {id:4, nombre:"nombre d", artista:"artista dd"},
  {id:5, nombre:"nombre e", artista:"artista ee"}
]

const Biblioteca = () => {
  return (
    <div className="row">
      {
        canciones.map((cancion) =>(
          <div className="col-3">
            <div className="card w-100 h-100">
              <img className="card-img-top" src={"https://picsum.photos/300"+cancion.id} alt="" />

            <div className="card-body">
              <h4 className="card-title">{cancion.nombre}</h4>
              <p className="card-title">{cancion.artista}</p>
            </div>

          <div className="card-footer text-end">
            <button className="btn btn-primary">Escuchar</button>
          </div>
            </div>


          </div>
        ))

        
      }
    </div>
  )
}

export default Biblioteca