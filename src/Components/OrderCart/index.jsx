import Layout from "../Layout";

const OrderCart = (props) => {
  const { id, nombre, photo, precio, handleDelete } = props;

  return (
    <Layout>
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={photo}
            alt={nombre}
          />
        </figure>
        <p className="text-sm font-light">{nombre}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${precio.toFixed(2)}</p>
        <button
          onClick={() => handleDelete(id)}
          className="text-red-500 hover:text-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
    </Layout>
  );
};

export default OrderCart;
