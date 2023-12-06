import  { useContext } from "react";
import { CartContext } from "../../Context";

const Card = (props) => {
  const context = useContext(CartContext);

  // Función para mostrar los detalles del producto
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  // Función para agregar productos al carrito de compras
  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  // Función para renderizar el ícono de carrito
  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id); // Comprueba si el producto está en el carrito
    return (
      <div
        className={`absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 ${
          isInCart ? "bg-lime-500 text-black" : "bg-white"
        }`}
        onClick={(event) => addProductsToCart(event, props.data)}
      >
        {isInCart ? "x" : "+"}
      </div>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(props.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          ${props.data.precio.toFixed(2)}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={props.data.photo}
          alt=""
        />

        {renderIcon(props.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-base text-center">{props.data.nombre}</span>
      </p>
    </div>
  );
};

export default Card;
