import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Mercadolibre from './components/Mercadolibre/Mercadolibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Animation from './components/animation/Animation';
function App() {
  
  
  return (
    <div  className="app">
        {/* <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Raw Bikes"}/>}/> 
            <Route path='/category/:catId' element={<ItemListContainer greeting={"Raw Bikes"}/>}/> 
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>          */}
            {/* <Mercadolibre/> */}
          {/* </Routes>          
        </BrowserRouter> */}
        <Animation/>
      
    </div>
  )
}

export default App;
