
function SubFooter () {
  return (
    <div className='footer__subfooter'>
      <div className='subfooter__categorias'>
        <h6>Categorías Populares</h6>
        <p>Carros</p>
        <p>Propiedades</p>
        <p>Celulares</p>
      </div>
      <br />
      <div className='subfooter__integrantes'>
        <h6>Desarrollador</h6>
        <p>Jarrison Cano</p>

      </div>
      <br />
      <div className='subfooter__seguinos'>
        <h6>Seguinos</h6>
        <a href='https://twitter.com/JarrisonCano' target='_blank' rel='noreferrer'>
          <i className='fab fa-twitter' />
        </a>
        <a href='https://www.instagram.com/jarrisoncanom/' target='_blank' rel='noreferrer'>
          <i className='fab fa-instagram' />
        </a>
      </div>
    </div>
  )
}

export default SubFooter
