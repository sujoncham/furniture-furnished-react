import './App.css';
import Furniture from './Funriture/Furniture';
import Header from './Header/Header';

function App() {

  return (
    <div className="App">
        <div className='container'>
        <Header title="Furniture Shop"></Header>

        <Furniture></Furniture>
        </div>
    </div>
  );
}

export default App;
