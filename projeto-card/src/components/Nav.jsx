import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

function Nav() {
    return(
        <>
            <nav>
                <div className="navtop">
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

                <div className="navbottom">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav