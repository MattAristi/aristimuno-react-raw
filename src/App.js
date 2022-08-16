import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Mercadolibre from './components/Mercadolibre/Mercadolibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  
  return (
    <div  className="app">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Catalogo"}/>}/> 
            <Route path='/category/:catId' element={<ItemListContainer/>}/> 
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            {/* <Mercadolibre/> */}
          </Routes>          
        </BrowserRouter>
       
      
    </div>
  )
}

export default App;
