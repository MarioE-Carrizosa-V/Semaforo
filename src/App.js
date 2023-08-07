import { useState } from 'react';
import './App.css';

function App() {

const [rojo, setRojo] = useState(true);
const [amarillo, setAmarillo]=useState(false);
const [verde, setVerde] = useState(false)

const cambiarLuz = () => {

  if(rojo){
    setRojo(!rojo)
    setAmarillo(!amarillo)
  }
  if(amarillo){
    setAmarillo(!amarillo)
    setVerde (!verde)
  }
  if(verde){
    setVerde(!verde)
    setRojo(!rojo)
  }

  console.log('rojo', rojo);
  console.log('amar', amarillo);
  console.log('verde', verde);
}

  // useEffect(()=> {
  //   cambiarLuz()
  // }, [verde, amarillo, rojo])

  setTimeout(() => {
    cambiarLuz()
  }, 3000);



  return (
    <div className="App">
      <div className='semaforo'>
        {!rojo? <span className='off'></span>: <span className='rojo'></span> }
        {!amarillo? <span className='off'></span>: <span className='amarillo'></span> }
        {!verde? <span className='off'></span>: <span className='verde'></span> }
      </div>
    </div>
  );
}

export default App;
