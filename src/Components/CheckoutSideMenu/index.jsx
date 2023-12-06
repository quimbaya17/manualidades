import  { useContext } from 'react';
import { CartContext } from "../../Context";
import './styles.css';
import OrderCart from '../../Components/OrderCart';

const CheckoutSideMenu = () => {
    const context = useContext(CartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

    // Calcular el valor total
    const totalValue = context.cartProducts.reduce((total, product) => total + product.precio, 0);

    // Función para manejar el pago (abrir enlace de PSE)
    const handlePayment = () => {
        // Reemplaza 'https://www.pse.com.co/persona' con el enlace de PSE correcto
        const pseURL = 'https://www.pse.com.co/persona';

        // Abre el enlace en una nueva ventana o pestaña
        window.open(pseURL, '_blank');
    };

    // Función para cancelar la compra (cierra el menú lateral y borra los productos)
    const cancelPurchase = () => {
        context.setCartProducts([]); // Borra los productos del carrito
        context.setCount(0); // Reinicia el contador
        context.closeCheckoutSideMenu(); // Cierra el menú lateral
    };

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col right-0 border border-black rounded-lg fixed bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Carrito</h2>
                <div onClick={cancelPurchase}>x</div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCart
                            key={product.id}
                            id={product.id}
                            nombre={product.nombre}
                            photo={product.photo}
                            precio={product.precio}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            {/* Mostrar el valor total */}
            <div className='p-6 border-t border-gray-300'>
                <p className='font-semibold text-lg'>Total: ${totalValue.toFixed(2)}</p>
            </div>
            {/* Botones de Pagar y Cancelar Compra */}
            <div className='p-6 flex justify-between'>
                <button
                    onClick={handlePayment}
                    className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'
                >
                    Pagar
                </button>
                <button
                    onClick={cancelPurchase}
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
                >
                    Cancelar Compra
                </button>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;

