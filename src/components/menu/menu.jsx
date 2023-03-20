import "./menu.scss";

export default function menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Trabajos</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#QuienSoy">¿Quién Soy?</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#techskills">Tech Skills</a>
                </li> 

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/trivia">Trivia</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contáctame & Descarga CV</a>
                </li>

            </ul>
            
        </div>
    )
}
