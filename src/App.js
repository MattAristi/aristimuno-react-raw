import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Mercadolibre from './components/Mercadolibre/Mercadolibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar/>
        </BrowserRouter>
      </header>
      <main className='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Raw Bikes"}/>}/> 
            <Route path='/category/:catId' element={<ItemListContainer greeting={"Raw Bikes"}/>}/> 
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>         
          {/* <Mercadolibre/> */}
          </Routes>          
        </BrowserRouter>
        
      </main>
    </div>
  )
}

export default App;
