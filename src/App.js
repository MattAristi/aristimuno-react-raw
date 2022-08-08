import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main className='main'>
        <ItemListContainer greeting={"Raw Bikes"}/>
      </main>
    </div>
  )
}

export default App;
