import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import { CartContext } from '../../Context';

function NotFound() {
  const context = useContext(CartContext);

  const handleCheckout = () => {
    // Implementa aquí la lógica para procesar el pago.
    // Esto podría implicar redirigir al usuario a una pasarela de pago o mostrar un formulario de pago.
    // Utiliza una solución de pago como Stripe o PayPal para gestionar los pagos reales.
  };
  // Función para manejar el pago (abrir enlace de PSE)
  const handlePayment = () => {
    // Reemplaza 'https://www.pse.com.co/persona' con el enlace de PSE correcto
    const pseURL = 'https://www.pse.com.co/persona';

    // Abre el enlace en una nueva ventana o pestaña
    window.open(pseURL, '_blank');
};

  const handleCancel = () => {
    // Implementa aquí la lógica para cancelar la compra y vaciar el carrito.
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Carrito de Compras</h1>
      <div className="cart-items grid grid-cols-2 gap-4">
        {context.cartProducts.map((product) => (
          <div key={product.id} className="cart-item border p-4">
            <img
              src={product.photo}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Precio: ${product.precio}</p>
              {/* Otros detalles del producto */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cancelar Compra
        </button>
        <button
          onClick={handleCheckout}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Pagar
        </button>
      </div>
    </Layout>
  );
}

export default NotFound;



  