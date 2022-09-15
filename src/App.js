import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {CartContainer, Checkout, ItemDetailContainer, ItemListContainer, Navbar} from './components/compontentsExported'

import {CContextProvider} from './Context/CartContext'
import {NotificationProvider} from './Notification/Notification'

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
            <Route path='/detail/:prodId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path="/orderdata" element={<Checkout/>}/>
          </Routes>          
        </BrowserRouter>
      </CContextProvider>
      </NotificationProvider>
      
    </div>
  )
}

export default App;
