import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CContextProvider} from './Context/CartContext'
import {NotificationProvider} from './Notification/Notification'
import CartContainer from './components/CartContainer/CartContainer';

function App() {
 
  
  return (
    <div  className="app">
      <NotificationProvider>
      <CContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Catalogo"}/>}/> 
            <Route path='/category/:catId' element={<ItemListContainer/>}/> 
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path="/orderdata" element={'orden de compra'}/>
          </Routes>          
        </BrowserRouter>
      </CContextProvider>
      </NotificationProvider>
      
    </div>
  )
}

export default App;
