import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "../../Context";
import logos from "../../Logos/manualidad-logo.jpg"; // Asegúrate de proporcionar la ruta correcta a tu imagen de logo
import Layout from "../Layout";

const Navbar = () => {
    const context = useContext(CartContext);

    const activeStyle = 'underline underline-offset-4';

    return (
        <Layout>
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-cyan-950 text-white">
            <div className="flex items-center"> {/* Contenedor para el logo */}
                <img
                    src={logos}
                    alt="Logo"
                    className="w-12 h-12 mr-2" // Tamaño ajustado para el logo, puedes ajustar el valor según tus necesidades
                />
                <span className="text-lg font-semibold">Manualidades</span> {/* Texto del nombre */}
            </div>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg gap-3">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Catalogo
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/contacto' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/*' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Carrito
                    </NavLink>
                </li>
                <li>
                    { context.count }
                </li>
            </ul>
        </nav>
        </Layout>
    )
}

export default Navbar;
