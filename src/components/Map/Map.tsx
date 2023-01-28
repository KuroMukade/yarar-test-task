import React from 'react'

const Map = () => {
  return (
    <div className='map-container'>
      <h1>Где вы находитьесь или будете принимать волонтеров</h1>
      <input type="text" value='адрес' />
      <input type="text" value='ближайший город
      ' />
      <div id="map" className='map'></div>
      <button className='btn-outline-lightblue'>Дальше</button>
    </div>
  )
}

export default Map