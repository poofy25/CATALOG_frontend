import{ useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://catalog-backend-l9qt.onrender.com/api/catalog/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            {product.imageBase64 && <img width='300px' src={product.imageBase64} alt={product.name} />}
            <p>{product.description}</p>
            <p>Price: {product.price} lei</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
