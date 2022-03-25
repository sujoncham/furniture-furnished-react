import { useEffect, useState } from 'react';
import './App.css';
import Furniture from './Funriture/Furniture';
import Header from './Header/Header';

function App() {

  const [furniture, setFurniture] = useState([]);
  useEffect(()=>{
    fetch('../public/furniture.json')
    .then(res => res.json())
    .then(data => setFurniture(data));
  }, [])

  return (
    <div className="App">
        <Header cart={furniture} title="Furniture Shop"></Header>
        {
          furniture.map(furniture => <Furniture key={furniture.id} furniture={furniture}></Furniture>)
        }
        
    </div>
  );
}

export default App;
