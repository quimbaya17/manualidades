
import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://kaoxdc.pythonanywhere.com/api/manualidad/')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <Layout>
        <h1 className="text-4xl font-bold text-cyan-900 mb-6">
          Manualidades a tu Gusto
        </h1>

        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {items?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <ProductDetail />
      </Layout>
    </>
  );
}

export default Home;

