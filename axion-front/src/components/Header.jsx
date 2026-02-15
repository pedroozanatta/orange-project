import "./Header.css";
import "../styles/globals.css";
import logo from "../assets/logo.png";

export default function Header({ setCollection , collection}){
    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="Logo" />
                </div>
                <nav className="nav-links">
                    <button
                        className={collection === "foods" ? "active" : ""} 
                        onClick={() => setCollection("foods")}>
                        Foods
                    </button>

                    <button
                        className={collection === "people" ? "active" : ""} 
                        onClick={() => setCollection("people")}>
                        People
                    </button>

                    <button
                        className={collection === "places" ? "active" : ""} 
                        onClick={() => setCollection("places")}>
                        Places
                    </button>
                </nav>
            </div>
        </header>
    );
}
