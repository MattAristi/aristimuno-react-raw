import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  
  const addQuantity = (quantity,stock) =>{
    if (quantity<=stock)
     console.log('Total',quantity);
    
  }
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting="Raw Bikes"/>
        <ItemCount stock={10} initial={0} onAdd={addQuantity}/>
      </header>
    </div>
  )
}

export default App;
