import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    comment: '', // Nuevo campo de comentario
  });
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.firstName.trim() === '' ||
      formData.email.trim() === '' ||
      formData.phone.trim() === '' ||
      formData.comment.trim() === '' // Comentario obligatorio
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    console.log(formData);

    setIsSubmitted(true);

    // Agrega una pausa antes de redirigir
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Ajusta el tiempo según sea necesario

    navigate('/');
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Solicitud De Pedido Especial</h1>
      {isSubmitted && (
        <div className="mb-4 text-green-600">
          ¡Su información fue enviada con éxito! Pronto te estaremos contactando.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Correo:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Celular:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        {/* Nuevo campo de comentario */}
        <div className="mb-4">
          <label className="block text-gray-600">Especificación del Pedido:</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
            minLength={20} // Actualiza la longitud mínima según sea necesario
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-600 text-white rounded px-4 py-2 hover:bg-cyan-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
