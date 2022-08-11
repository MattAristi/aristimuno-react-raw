import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Mercadolibre from './components/Mercadolibre/Mercadolibre';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';
function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main className='main'>
        <ItemListContainer greeting={"Raw Bikes"}/>
        <ItemDetailContainer/>
        {/* <Mercadolibre/> */}
      </main>
    </div>
  )
}

export default App;
