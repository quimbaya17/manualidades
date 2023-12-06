import  { useContext } from 'react';
import { CartContext } from "../../Context";
import './styles.css';
import Layout from '../Layout';

const ProductDetail = () => {
    const context = useContext(CartContext);

    // Función para cerrar el detalle del producto
    const closeProductDetail = () => {
        context.closeProductDetail();
    };

    // Verificar si context.productToShow está definido y precio es un número
    const precio = typeof context.productToShow?.precio === 'number' ? context.productToShow.precio.toFixed(2) : '';

    return (
        <Layout>
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div onClick={closeProductDetail} className="cursor-pointer">Cerrar</div>
            </div>
            <figure className='px-6'>
                <img className='w-300 h-300 object-cover rounded-lg'
                    src={context.productToShow.photo}
                    alt={context.productToShow.nombre}
                />
            </figure>
            <div className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${precio}</span>
                <span className='font-medium text-md'>{context.productToShow.nombre}</span>
                <span className='font-light text-sm'>{context.productToShow.descripcion}</span>
            </div>
        </aside>
        </Layout>
    );
};

export default ProductDetail;
