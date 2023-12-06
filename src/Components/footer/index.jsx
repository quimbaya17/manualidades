
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
   
    <footer id="footer" className="bg-gray-800 text-white w-full py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-semibold">Contáctenos</h4>
            <p>Sena Norte</p>
            <p>Avenida 9N # 70-12</p>
            <p>Popayán - Cauca</p>
            <p className="mt-4"><strong>WhatsApp:</strong> <span>3104563213</span></p>
            <p><strong>Email:</strong> <span>manualidad@gmail.com</span></p>
          </div>

          {/* Agrega los íconos de redes sociales en el lado derecho */}
          <div className="md:text-right mt-4 md:mt-0 flex justify-between">
            <a href="#" className="text-white mr-4"><FaTwitter className="text-2xl" /></a>
            <a href="https://www.facebook.com/Moonica016?mibextid=ZbWKwL" className="text-white mr-4" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl" /></a>
            <a href="https://instagram.com/koa.esports?igshid=MzRlODBiNWFlZA==" className="text-white mr-4" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl" /></a>
            <a href="#" className="text-white"><FaLinkedin className="text-2xl" /></a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-4">
        <p className="text-white">&copy; <span>Copyright</span> <strong className="px-1">Manualidad Moni</strong> <span>Todos los derechos reservados</span></p>
      </div>
    </footer>
    
  );
}

export default Footer;



