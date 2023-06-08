import Image from 'next/image'
import "./page.css"
export default function Home() {  
  return (
    <div>
      <b>
      <h2 className="text-4xl">Welcome</h2>
      </b>
      <br></br>
      <h1>Asesora 1</h1>
      <br></br>
      <div className='
      grid grid-cols-2 gap-4
      '>
      <button className='fcc-btn'> 
      <a target="_blank" className="fcc-btn" >Coquimbo</a> 
      </button>
      <button className='fcc-btn'> 
      <a target="_blank" className="fcc-btn">Antofagasta</a> 
      </button>
    
      </div>
    </div>
  )
}
