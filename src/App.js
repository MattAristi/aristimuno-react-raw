import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CContextProvider} from './Context/CartContext'



function App() {
 
  
  return (
    <div  className="app">
      <CContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Catalogo"}/>}/> 
            <Route path='/category/:catId' element={<ItemListContainer/>}/> 
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<h1>CART</h1>}/>
          </Routes>          
        </BrowserRouter>
      </CContextProvider>
      
    </div>
  )
}

export default App;
