import { useEffect, useState } from 'react';

const useProducts = () => {
    const [furnitures, setFurnitures] = useState([]);
    
    useEffect(()=>{
      fetch('http://localhost:5000/product/')
      .then(res => res.json())
      .then(data => setFurnitures(data));
    }, []);

    return [furnitures, setFurnitures];
};

export default useProducts;