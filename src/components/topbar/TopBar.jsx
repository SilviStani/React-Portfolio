import "./TopBar.scss";
import {Mail, GitHub, LinkedIn, WhatsApp} from "@material-ui/icons";


export default function TopBar({ menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">SS</a>
                    <div className="itemContainer">
                    <WhatsApp className="icon"/>
                    <a href="https://api.whatsapp.com/send/?phone=5491163632288&text&app_absent=0">+549-011-1563632288</a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <a href = "mailto:silvina@gmail.com?subject = Feedback&body = Message">silvina.stani@gmail.com</a>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                       <a href="https://github.com/SilviStani" className="icon">SilviStani</a>
                       </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/silvina-staniszewski-18493276/" className="icon">Silvina Staniszewski</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
