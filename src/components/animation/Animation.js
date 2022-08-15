import {useState, useEffect } from "react"
import './Animation.css'
const Animation = () => {
    const [background, setBackground]= useState('pink')
        useEffect(() => {
            const onScroll =() => {
                console.log('se hizo scroll');
                const div = document.getElementById('scroll-color')
                console.log(div.getBoundingClientRect());
                const {y}= div.getBoundingClientRect()
                const backgroundColor = y <= 0 ?  'red':'pink'
                setBackground(backgroundColor)
            }
            window.addEventListener('scroll', onScroll)

        return ()=>
        window.removeEventListener('scroll', onScroll)
        },[])

  return (  
    <div className="espacio">
        <div id="scroll-color" style={{background, height:'200vh'}}>
        <h1>Scrollea para cambiar el color de fondo</h1>
    </div>
        </div>
        
  )
}
 
export default Animation