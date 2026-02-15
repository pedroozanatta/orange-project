import "./Header.css";
import "../styles/globals.css";
import logo from "../assets/logo.png";

export default function Header({ setCollection , collection}){
    const menuItems = [
        { key: "foods", label: "Foods" },
        { key: "people", label: "People" },
        { key: "places", label: "Places" },
    ];

    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="Logo" />
                </div>
                <nav>
                    <ul className="nav-links">
                        {menuItems.map((item) => (
                            <li key={item.key}>
                                <button
                                    className={collection === item.key ? "active" : ""}
                                    onClick={() => setCollection(item.key)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}  
                    </ul>
                </nav>
            </div>
        </header>
    );
}
