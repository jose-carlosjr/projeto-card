import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Logo from '../assets/logo.png';

function Nav() {
    return(
        <>
            <nav>
                <div className="navtop-container">
                    <div className="navtop container">
                        <div className="navtop-social-media">
                            <a href="#">
                                <span><CiFacebook />Facebook</span>
                            </a>
                            <a href="#">
                                <span><FaInstagram />Instagram</span>
                            </a>
                        </div>
                        <div className="navtop-endereco">
                            <span><FaWhatsapp />(21) 3439-103</span>
                            <span><FaWhatsapp />(21) 99174-1946</span>
                            <a href="#"><FiMapPin />Endereço</a>
                        </div>
                    </div>
                </div>

                <div className="navbottom-container">
                    <div className="navbottom container">
                        <div className="logo">
                            <img src={Logo} alt="Logo do site" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Tratamentos</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav